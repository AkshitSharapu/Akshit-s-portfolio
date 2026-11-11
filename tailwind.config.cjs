module.exports = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            bgDark: '#0a0a0a',
            cardDark: '#1a1a1a',
            textMain: '#ffffffe6',
            primaryCta: '#e6e6e6',
            primaryCtaText: '#0a0a0a',
            secondaryCta: '#1a1a1a',
            accent: '#737373',
            bgAccent: '#737373',
          },
          fontFamily: {
            sans: ['"Inter"', 'system-ui', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          },
          boxShadow: {
            'glow-cta': '0 0 30px -5px rgba(230, 230, 230, 0.35)',
            'glow-card': '0 10px 40px -10px rgba(0,0,0,0.8), 0 0 20px -2px rgba(115,115,115,0.1)',
            '3d': '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 30px rgba(230, 230, 230, 0.08)',
          }
        }
      }
    }