(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  document.addEventListener('visibilitychange', () => {
    document.documentElement.classList.toggle('page-idle', document.hidden);
  });
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const animate = (el, from, to = {}) => {
    if (window.gsap && !motion.matches) gsap.fromTo(el, from, {duration: .55, ease: 'power2.out', overwrite: 'auto', ...to});
  };
  // All content and controls remain usable if the optional animation script fails.
  if (window.gsap) gsap.defaults({overwrite: 'auto'});
  const cursor = $('#custom-cursor');
  const pointer = matchMedia('(hover: hover) and (pointer: fine)');
  let cursorActive = false;
  const syncCursor = () => {
    cursorActive = pointer.matches && !motion.matches && !!window.gsap;
    document.documentElement.classList.toggle('has-custom-cursor', cursorActive);
    cursor.style.opacity='0';
    if (motion.matches && window.gsap) gsap.globalTimeline.getChildren().forEach(t => t.progress(1).kill());
  };
  pointer.addEventListener('change',syncCursor);
  motion.addEventListener('change',syncCursor);
  syncCursor();
  if(window.gsap) {
    gsap.set(cursor,{xPercent:-50,yPercent:-50});
    const moveX=gsap.quickTo(cursor,'x',{duration:.065,ease:'power2.out'});
    const moveY=gsap.quickTo(cursor,'y',{duration:.065,ease:'power2.out'});
    let shown=false;
    document.addEventListener('pointermove',e => {
      if(!cursorActive || e.pointerType==='touch') return;
      if(!shown) { gsap.set(cursor,{x:e.clientX,y:e.clientY}); shown=true; }
      moveX(e.clientX); moveY(e.clientY); cursor.style.opacity='1';
    },{passive:true});
    const hide=()=>{cursor.style.opacity='0';shown=false;};
    document.addEventListener('pointerleave',hide); window.addEventListener('blur',hide);
    document.addEventListener('keydown',e=>{if(e.key==='Tab') hide();});
    let overLink=false;
    document.addEventListener('pointerover',e=>{
      const next=!!e.target.closest('a,button');
      if(cursorActive && next!==overLink) {
        overLink=next; gsap.to(cursor,{scale:next?1.65:1,duration:.16,ease:'power2.out'});
      }
    });
  }

  // A visible, staggered entrance; animate only transforms and opacity.
  if(window.gsap && !motion.matches) {
    const intro=gsap.timeline({defaults:{ease:'power3.out',duration:.65,clearProps:'transform,opacity'}});
    intro.from('#navbar',{y:-12,opacity:0,duration:.4})
      .from('#hero h1',{y:28,opacity:0})
      
      .from('#hero-text-block > div',{y:18,opacity:0,stagger:.06},'-.7')
      .from('#hero-photo-card',{y:45,opacity:0,scale:.96},'-.9');
  }

  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        $$('#navbar .nav-link').forEach(link => {
          if (link.getAttribute('href') === '#' + entry.target.id) link.setAttribute('aria-current','location');
          else link.removeAttribute('aria-current');
        });
      });
    }, {rootMargin:'-20% 0px -55% 0px',threshold:0});
    $$('main section').forEach(section => navObserver.observe(section));
  }

  let revealObserver;
  if('IntersectionObserver' in window) {
    const observer=revealObserver=new IntersectionObserver(entries=>{
      const visible=entries.filter(entry=>entry.isIntersecting);
      visible.forEach(entry=>{
        animate(entry.target,{y:20,opacity:0},{duration:.5,clearProps:'transform,opacity'});
        observer.unobserve(entry.target);
      });
    },{threshold:.08,rootMargin:'0px 0px -35px 0px'});
    $$('section:not(#hero) h2, section:not(#hero) .tilt-card').forEach(el=>observer.observe(el));
  }
  $$('.counter').forEach(el=>{
    const finish=()=>{el.textContent=Number(el.dataset.target).toFixed(Number(el.dataset.decimals||0))+(el.dataset.suffix||'');};
    finish();
    if(!window.gsap || motion.matches || !('IntersectionObserver' in window)) return;
    const watch=new IntersectionObserver(entries=>{
      if(!entries.some(e=>e.isIntersecting)) return;
      watch.disconnect();
      const value={n:0};
      gsap.to(value,{n:Number(el.dataset.target),duration:1.5,ease:'power2.out',onUpdate:()=>{
        el.textContent=value.n.toFixed(Number(el.dataset.decimals||0))+(el.dataset.suffix||'');
      },onComplete:finish});
    },{threshold:.5});
    watch.observe(el);
  });
  // Role changes are deliberate and readable, and stop outside the hero.
  const role=$('#scramble-role');
  const roles=['Full-Stack & Generative AI Engineer','SAP ABAP Cloud Developer','Java & React Developer'];
  let roleIndex=0,roleTimer,heroVisible=true;
  const scheduleRole=()=>{
    roleTimer?.kill();
    if(!window.gsap || motion.matches || document.hidden || !heroVisible) return;
    roleTimer=gsap.delayedCall(4,()=>{
      gsap.to(role,{y:-10,opacity:0,duration:.25,onComplete:()=>{
        role.textContent=roles[++roleIndex%roles.length];
        gsap.fromTo(role,{y:12,opacity:0},{y:0,opacity:1,duration:.5,ease:'power2.out',onComplete:scheduleRole});
      }});
    });
  };
  if('IntersectionObserver' in window) new IntersectionObserver(entries=>{heroVisible=entries[0].isIntersecting;scheduleRole();}).observe($('#hero'));
  document.addEventListener('visibilitychange',scheduleRole);
  motion.addEventListener('change',scheduleRole);
  scheduleRole();
  const filters = $$('.filter-btn'), cards = $$('.project-card');
  filters.forEach(btn => {
    btn.setAttribute('aria-pressed', String(btn.classList.contains('active')));
    btn.addEventListener('click', () => {
      filters.forEach(b => {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-pressed', String(b === btn));
        b.classList.remove('bg-[#e6e6e6]', 'text-[#0a0a0a]', 'font-bold');
      });
      cards.forEach(card => {
        revealObserver?.unobserve(card);
        if(window.gsap) gsap.killTweensOf(card);
        card.style.transform=''; card.style.opacity='';
        card.hidden = btn.dataset.filter !== 'all' && btn.dataset.filter !== card.dataset.category;
        if (!card.hidden) animate(card, {opacity:0,y:8}, {duration:.25,clearProps:'all'});
      });
    });
  });
  let toastTimer;
  const showToast = text => {
    const toast = $('#toast');
    $('#toast-message').textContent = text;
    toast.style.transform = 'translateY(0)'; toast.style.opacity = '1';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.style.opacity='0'; toast.style.transform='translateY(100px)'; }, 2800);
  };
  $$('.copy-btn').forEach(btn => btn.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(btn.dataset.copy); showToast('Copied to clipboard'); }
    catch { showToast(`Copy manually: ${btn.dataset.copy}`); }
  }));
  $('#contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const body = `${$('#form-message').value}\n\nFrom: ${$('#form-name').value}\nEmail: ${$('#form-email').value}`;
    location.href = `mailto:akshitsharapu@gmail.com?subject=${encodeURIComponent($('#form-subject').value)}&body=${encodeURIComponent(body)}`;
    $('#form-feedback').classList.remove('hidden');
  });
  const menu = $('#mobile-menu'), menuBtn = $('#mobile-menu-btn');
  menuBtn.setAttribute('aria-controls','mobile-menu');
  menuBtn.setAttribute('aria-expanded','false');
  const closeMenu = () => {menu.classList.add('hidden'); menuBtn.setAttribute('aria-expanded','false');};
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden'); menuBtn.setAttribute('aria-expanded', String(!menu.classList.contains('hidden')));
  });
  $$('a[href^="#"], #back-to-top').forEach(link => link.addEventListener('click', e => {
    const id = link.getAttribute('href') || '#hero';
    if (id === '#') return;
    const target = document.getElementById(id.slice(1));
    if (!target) return;
    e.preventDefault(); closeMenu();
    target.scrollIntoView({behavior:motion.matches ? 'instant':'smooth',block:'start'});
  }));

  const projectsData = {
        ecosync: {
          title: "Eco Sync – Carbon Footprint Tracking Platform",
          badge: "Full-Stack & Geolocation",
          duration: "Feb 2026 – Jun 2026",
          desc: "A synchronization platform integrating high-precision geolocation telemetry with carbon emissions factor datasets. Engineered using agile development sprints to enable users to monitor transport, diet, and utility footprints with automated lifestyle recommendations.",
          impact: "Full-Stack Agile Delivery • Integrated Geolocation Telemetry • Real-time Emission Sync",
          tech: ["React", "Node.js", "Express", "Geolocation API", "MongoDB", "Tailwind CSS", "Agile Sprints"]
        },
        documentanalyzer: {
          title: "Document Analyzer – AI-Powered NLP Parsing Tool",
          badge: "Generative AI & NLP Engine",
          duration: "Dec 2025 – Jan 2026",
          desc: "Engineered to overcome manual extraction bottlenecks over large-scale datasets. Utilizes optimized transformer models and semantic parsing pipelines to extract key clauses, metrics, and structured summaries with high precision.",
          impact: "~40% Processing Time Reduction • Verified NLP Parsing Latency Benchmark • Automated Summarization",
          tech: ["Python", "HuggingFace Transformers", "NLP Models", "Node.js API", "React", "Tailwind CSS"]
        },
        styleai: {
          title: "Style AI – Generative AI Fashion Recommendation Platform",
          badge: "Generative AI Fashion",
          duration: "Jan 2026 – Feb 2026",
          desc: "Created a personalized style curation platform tailored strictly to unique shopper preferences. Integrates aesthetic prompt models and visual alignment to generate dynamic outfit pairings based on occasion, skin undertones, and seasonal trends.",
          impact: "Contextual AI Recommendations • Luxury Editorial UX • High-Fidelity Outfit Composition",
          tech: ["React", "Generative AI APIs", "Node.js", "Computer Vision Aesthetics", "Tailwind CSS"]
        },
        portfolio: {
          title: "Personal Portfolio – Developer Showcase Platform",
          badge: "Developer Portfolio",
          duration: "Mar 2026 – Apr 2026",
          desc: "Engineered as a centralized hub to demonstrate technical expertise and detailed project case studies. Uses selective GSAP entrance animations, responsive layouts, and accessible keyboard interactions.",
          impact: "Deployed on Vercel • Selective GSAP Animation • Responsive Layout",
          tech: ["React / HTML5", "GSAP 3.15", "Tailwind CSS", "Vercel"]
        }
      }
  const modal = $('#project-modal');
  let previousFocus;
  const closeModal = () => {
    if (modal.classList.contains('hidden')) return;
    modal.classList.add('hidden'); document.body.style.overflow=''; previousFocus?.focus();
  };
  $$('.open-modal-btn').forEach(btn => btn.addEventListener('click', () => {
    const p = projectsData[btn.dataset.project]; if (!p) return;
    for (const key of ['title','badge','duration','desc','impact']) $(`#modal-${key}`).textContent = p[key];
    $('#modal-tech').replaceChildren(...p.tech.map(text => {
      const span=document.createElement('span'); span.className='px-2.5 py-1 rounded bg-[#0a0a0a] text-zinc-300 text-xs font-mono border border-[#737373]/30'; span.textContent=text; return span;
    }));
    previousFocus=btn; modal.classList.remove('hidden'); document.body.style.overflow='hidden';
    animate($('#modal-card'), {y:12,opacity:0}, {duration:.25,clearProps:'all'});
    $('#close-modal-btn').focus();
  }));
  $('#close-modal-btn').addEventListener('click',closeModal);
  modal.addEventListener('click',e => {if(e.target===modal) closeModal();});
  document.addEventListener('keydown',e => {
    if(e.key==='Escape') {closeModal();closeMenu();}
    if(e.key==='Tab' && !modal.classList.contains('hidden')) {
      const items=$$('button, a[href], input, [tabindex="0"]',modal).filter(el => el.getClientRects().length);
      const first=items[0], last=items.at(-1);
      if(e.shiftKey && document.activeElement===first) {e.preventDefault();last.focus();}
      else if(!e.shiftKey && document.activeElement===last) {e.preventDefault();first.focus();}
    }
  });
})();
