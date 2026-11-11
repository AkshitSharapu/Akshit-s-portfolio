# Refined portfolio

Extract the ZIP, then open `Style-AI/index.html` in Chrome or use VS Code Live Server. No installation is needed to view the portfolio.

Deploy the root `index.html`, `portfolio.html`, `assets/` folder and `Sharapu_Akshit_Resume.pdf` together. The existing `frontend/` and `backend/` folders are the separate Style AI application and were left unchanged.

## Improvements
- Requested grayscale palette: #0a0a0a background, #1a1a1a cards, #e6e6e6 primary CTA and #737373 accents; Inter typography.
- 8px GSAP quickTo cursor on fine-pointer devices, with smooth following and hover expansion.
- One local GSAP library instead of 23 CDN animation scripts.
- Staggered hero entrance, section/card reveals, animated counters and rotating role text. Motion respects reduced-motion preferences; role cycling pauses outside the hero and while the page is hidden.
- Removed the continuous particle network and mouse-driven 3D card tilting.
- Compiled Tailwind CSS, so no browser-side CSS generation is needed.
- Reduced-motion support, modal focus containment and keyboard close.
- Fixed invalid JavaScript template syntax. Contact form opens an email draft instead of claiming to send a message without a backend.

## Editing
Edit `index.html`, then run `python generate_portfolio.py` to sync `portfolio.html`. JavaScript is in `assets/portfolio.js`. If adding utility classes, rebuild CSS from the project root:

```sh
npx --yes tailwindcss@3.4.17 -c tailwind.config.cjs -i assets/input.css -o assets/site.css --content './*.html,./assets/portfolio.js' --minify
```

## Verification
JavaScript syntax and CSS build passed. Desktop browser checked visually; project filtering (two AI cards), case study open/close, anchor scrolling verified. No application console errors observed. Mobile hardware frame rates and Lighthouse scores were not measured. Google Fonts is optional and falls back to system fonts.

Removed testimonials, numbered section labels, Grade O badges/text, developer manifesto and shipped-applications metric. Verified desktop grayscale layout, role text changing and AI project filter. Device frame rates were not measured.

## Latest performance pass
FAQ and all FAQ links removed. Cursor follow duration reduced from 180ms to 65ms. Removed cursor backdrop blending, photo filters, decorative blur, card hover movement and global smooth scrolling. Kept smooth anchor navigation, GSAP entrances, rotating role text, counters and project transitions. Reveal animations relinquish project cards when filtering starts, preventing competing tweens. Desktop project filters checked (2 AI cards / 4 total); no app errors observed. These changes address code-level contributors; no device FPS claim is made.

## Scrolling name and card effects
Three faint white SHARAPU AKSHIT rows scroll left/right/left behind the content with a top-to-bottom opacity mask. CSS-only card lift, border highlight, soft sheen and project-title nudge complement the existing GSAP entrance animations. Hover uses the separate CSS translate property to avoid competing with GSAP transforms. Name tracks pause when the tab is hidden; reduced-motion disables their animation. JavaScript syntax and markup checks passed. Live browser verification confirmed all three name tracks running in alternating directions. Increased desktop opacity to 8.5% (mobile 6%) and shortened cycles to 40/48/44 seconds so movement is easier to see while preserving the vertical fade. Chat screenshots are static and cannot display animation.

## Hero and navigation refinement
Removed duplicate hero metrics and academic badge. Replaced photo dashboard card with arched portrait and outline. Added SVG monogram/favicon, navbar entrance, hover underline, active-section indicator and mobile menu entrance. Role arrow uses fixed-width SVG aligned to text line height. Desktop preview visually verified; JS syntax passed.

## Visual toolkit
Replaced skills matrix with four responsive expandable skill blocks. CSS hover effects respect reduced motion; native details controls support keyboard and touch. Markup checks passed; live verification was blocked by browser security policy.
