# 3D Developer Portfolio

A modern 3D developer portfolio built with React, Vite, Tailwind CSS, and Three.js. It showcases interactive 3D scenes, sections for experience, projects, and contact.

## Quick Start

Prerequisites: Node.js 18+ and npm

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Tech Stack
- React (components in `src/components`)
- Vite (bundler)
- Tailwind CSS (styles in `src/index.css` and `tailwind.config.cjs`)
- Three.js / React Three Fiber (3D canvases under `src/components/canvas`)
- Framer Motion (animations in `src/utils/motion.js`)

## Project Structure
Key files and folders:
- `index.html` — App entry HTML
- `src/main.jsx` — React entry point
- `src/App.jsx` — Main app layout
- `src/components/` — UI sections and 3D canvas components
- `public/` — Static assets (textures, models)

## Deployment
You can host the built `dist/` folder on any static host (e.g., GitHub Pages, Netlify, Vercel). For GitHub Pages with Vite:
- Build with `npm run build`, then publish `dist/`.

## License
Assets in `public/desktop_pc` and `public/planet` include their own licenses. Review `license.txt` files inside those folders.
