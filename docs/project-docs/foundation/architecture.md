# Description
Technical stack and architecture rules for mathic.id portfolio website.

# Important
- Pure HTML + CSS + Vanilla JS. No frameworks like React or Vue.
- Design tokens must be strictly followed to maintain the theme.

# Table of Contents
- [Scope](#scope)
- [Goals](#goals)
- [Non Goals](#non-goals)
- [Stack](#stack)
- [Design Tokens](#design-tokens)
- [Privacy Rules](#privacy-rules)

# Scope
Frontend architecture and design system for the mathic.id website.

# Goals
- Fast, responsive, and accessible static website.
- Maintain a consistent "Modern Blue and White" theme.

# Non Goals
- Complex state management.
- Backend architecture.

# Stack
- **Platform:** Pure HTML5, CSS3, Vanilla JavaScript.
- **Fonts:** Google Fonts — "Plus Jakarta Sans".
- **Icons:** Lucide Icons (via CDN).
- **Hosting:** TBD (GitHub Pages, Vercel, or Netlify).

# Design Tokens
- **Theme:** Vibrant Youthful Glassmorphism
- **Primary:** #4F46E5 (Indigo-600)
- **Secondary Gradient:** Linear Gradient from #4F46E5 (Indigo) to #06B6D4 (Cyan)
- **Background:** #F8FAFC (Slate-50) with Glassmorphism accents
- **Accent:** #06B6D4 (Cyan-500)
- **Text:** #0F172A (Slate-900)
- **White:** rgba(255, 255, 255, 0.8) for glass effects
- **Border-radius:** 24px (cards), 99px (buttons - pill shape)
- **Animations:** Bouncy hover, gradient text shifts, floating blobs, glassmorphism blur.

# Privacy Rules
- **Tutor Photos:** DO NOT display real photos. Use abstract SVG illustrations.
- **Pricing:** DO NOT display pricing. Use CTA "Tanya Harga via WA".
- **Testimonials:** DO NOT display testimonials. Replace with "Keunggulan Kami" section featuring stats and icons.
