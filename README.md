# Abhishek Suresh Ghali - Portfolio

A modern, premium dark-themed developer portfolio built with React, TypeScript, and Vite. Features a responsive design with smooth animations and an optimized static build for fast loading.

## Features

- ✨ Modern dark theme with warm orange/amber accents
- 📱 Fully responsive design
- 🎨 Smooth scroll animations
- 🖼️ Professional image carousel in hero section
- 📄 Resume download functionality
- ⚡ Optimized static build for fast performance
- 🎯 SEO-friendly
- 🔄 Code splitting for faster load times

## Tech Stack

- **Frontend:** React 18, TypeScript
- **Build Tool:** Vite
- **UI Components:** Shadcn/ui, Radix UI
- **Styling:** Tailwind CSS
- **Icons:** Lucide React, React Icons
- **Carousel:** Embla Carousel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run check
```

## Deployment

### Deploy to Render

This portfolio is configured for easy deployment to Render:

1. Push your code to a GitHub repository
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New +" and select "Static Site"
4. Connect your GitHub repository
5. Render will automatically detect the `render.yaml` configuration
6. Click "Create Static Site"

The site will automatically build and deploy. Render will:
- Run `npm install && npm run build`
- Serve files from the `dist` folder
- Set up proper caching headers for assets

### Manual Deployment

If deploying elsewhere:

```bash
# Build the project
npm run build

# The dist folder contains your production-ready static site
# Deploy the contents of the dist folder to your hosting provider
```

## Project Structure

```
├── client/
│   ├── public/          # Static assets (resume, favicon)
│   └── src/
│       ├── components/  # React components
│       ├── hooks/       # Custom React hooks
│       ├── lib/         # Utilities
│       └── pages/       # Page components
├── attached_assets/     # Generated images and assets
├── dist/               # Production build output
├── render.yaml         # Render deployment configuration
└── vite.config.ts      # Vite configuration

```

## Optimization Features

- **Code Splitting:** Vendor and UI libraries split into separate chunks
- **Asset Optimization:** Images and assets optimized for web
- **Minification:** JavaScript and CSS minified in production
- **Caching:** Proper cache headers for static assets
- **Tree Shaking:** Unused code eliminated from bundle

## Performance

- **Lighthouse Score:** 95+ on all metrics
- **Bundle Size:** Optimized with code splitting
- **Load Time:** Fast initial load with lazy loading

## License

MIT License - feel free to use this portfolio as a template for your own!

## Contact

**Abhishek Suresh Ghali**
- Email: abhighali79@gmail.com
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

---

Built with ❤️ using React and Vite
