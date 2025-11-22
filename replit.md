# Developer Portfolio

## Overview

A modern, premium dark-themed developer portfolio website built with React, TypeScript, and Express. The application showcases a full-stack developer's skills, projects, experience, and education with a sophisticated design inspired by premium dark aesthetics featuring deep blacks with warm brown/orange gradients.

The portfolio is a single-page application with smooth scrolling between sections, featuring a hero section, about section, skills showcase, projects gallery, experience timeline, education section, and contact form.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

**November 22, 2025** - Final Optimization & Render Deployment Ready
- Removed send message form from ContactSection - now displays contact methods only (Email, GitHub, LinkedIn)
- Added "Home" link to Navbar (both desktop and mobile views)
- Optimized build with code splitting (vendor, ui, main chunks)
- Disabled Replit dev plugins to prevent cartographer errors
- Created render.yaml for static site deployment configuration
- Implemented proper cache headers for assets and HTML
- Updated package.json with correct deployment metadata and Node.js version requirements
- Created comprehensive README.md with deployment instructions
- Enhanced .gitignore with deployment-related ignore patterns
- Build optimizations: sourcemap disabled, minification enabled, gzip compression ~120KB

**November 19, 2025** - Portfolio Customization & Static Site Conversion
- Added professional carousel with autoplay in hero section using embla-carousel-autoplay
- Integrated user's professional photos (2 images rotating with 3-second interval)
- Added bottom shadow effect below hero carousel
- Replaced "Contact Me" button with "Download Resume" button with proper download functionality
- Converted from full-stack Express app to static Vite-only React website
- Removed all backend infrastructure (server, shared folders, Express dependencies)
- Cleaned up package.json from 480 to 337 packages (removed 143 backend dependencies)
- Updated vite.config.ts and tsconfig.json for static-only configuration
- Deployment configured for static hosting with dist folder
- TypeScript type checking passes cleanly
- Build process optimized for static deployment

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR (Hot Module Replacement)
- **Wouter** for client-side routing (lightweight React Router alternative)
- **TanStack Query** for server state management and data fetching

**UI Framework & Styling**
- **Shadcn/ui** component library with Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom theme configuration
- **CSS Variables** for dynamic theming (dark mode by default)
- Custom animations using CSS keyframes for scroll-triggered fade-in and scale effects

**Design System**
- Premium dark theme with deep blacks (#0a0a0a, #111111, #1a1a1a)
- Warm accent colors (orange/amber gradients) for CTAs and highlights
- Typography: Inter/Poppins for headings, Inter/Work Sans for body, JetBrains Mono for code elements
- Consistent spacing system using Tailwind units (4, 6, 8, 12, 16, 20, 24)
- Responsive layout with mobile-first approach

**Component Structure**
- Section-based components (HeroSection, AboutSection, SkillsSection, etc.)
- Reusable UI components from Shadcn library
- Custom hooks for scroll animations (`useScrollAnimation`)
- All content data passed as props for easy customization

### Backend Architecture

**Server Framework**
- **Express.js** server with TypeScript
- Minimal API surface - currently serves static React application
- Middleware for JSON parsing and request logging
- Custom logging middleware tracking API response times

**Development Setup**
- Vite middleware integration for HMR in development
- Separate production build process bundling server with esbuild
- Hot reload support via tsx in development mode

**Storage Layer**
- In-memory storage implementation (`MemStorage`) as default
- Interface-based design (`IStorage`) allowing easy swap to database
- User management schema defined but not actively used
- Prepared for PostgreSQL via Drizzle ORM (configured but not connected)

### Data Storage Solutions

**Planned Database**
- **PostgreSQL** via Neon serverless driver
- **Drizzle ORM** for type-safe database operations
- Schema defined in `shared/schema.ts` with user model
- Migration support configured via `drizzle-kit`
- Currently using in-memory storage; database integration ready for future features

**Session Management**
- `connect-pg-simple` package included for PostgreSQL-backed sessions
- Not currently implemented but infrastructure ready

### External Dependencies

**UI Component Libraries**
- **Radix UI** - Complete set of accessible, unstyled UI primitives (accordion, dialog, dropdown, popover, tabs, toast, etc.)
- **Lucide React** - Icon library for consistent iconography
- **React Icons** - Additional icons, particularly for technology logos (SiJavascript, SiMongodb, etc.)
- **Embla Carousel** - Touch-friendly carousel for potential future features

**Form Handling**
- **React Hook Form** with **Zod** validation via @hookform/resolvers
- Type-safe form schemas using `drizzle-zod`

**Utilities**
- **clsx** and **tailwind-merge** for conditional className composition
- **cmdk** for command palette functionality (included but not actively used)
- **class-variance-authority** for variant-based component styling
- **date-fns** for date formatting and manipulation

**Development Tools**
- **Replit plugins** - Runtime error modal, cartographer, dev banner (development only)
- **esbuild** for production server bundling
- **tsx** for running TypeScript in development

**Third-Party Services**
- Assets stored in `attached_assets/generated_images/` directory
- No external API integrations currently active
- Contact form is client-side only (displays alert, no actual email sending)

**Asset Management**
- Custom Vite alias `@assets` pointing to `attached_assets` directory
- Generated images for hero section and project showcases
- Fonts loaded from Google Fonts CDN (Inter, JetBrains Mono, Poppins)