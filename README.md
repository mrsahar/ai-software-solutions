# Everlogic - AI Software Solutions

> Organizing the Future with AI

Official website for **Everlogic**, a cutting-edge software development company specializing in AI-powered enterprise solutions. Built with modern web technologies to deliver a fast, responsive, and engaging user experience.

## 🌟 Features

- **Modern SPA Architecture** - Single Page Application with client-side routing
- **Responsive Design** - Mobile-first approach with seamless desktop experience
- **AI-Focused Services** - Showcase of AI integration, web development, mobile apps, and SaaS solutions
- **Dynamic Portfolio** - Project showcase with detailed case studies
- **Career Portal** - Job listings with application management
- **Blog System** - Technical articles and company updates
- **Contact Forms** - Multiple contact points with form validation
- **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- **IIS Deployment Ready** - Configured for Windows Server/IIS hosting

## 🚀 Tech Stack

### Core Framework
- **React 18+** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling
- **React Router** - Client-side routing

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components built on Radix UI
- **Lucide Icons** - Beautiful & consistent iconography
- **CVA** - Class variance authority for component variants

### State & Data Management
- **TanStack Query** - Server state management
- **React Hook Form** - Form state & validation
- **Zod** - Schema validation

### Utilities
- **clsx** - Conditional className utility
- **date-fns** - Modern date utility library
- **Embla Carousel** - Lightweight carousel library

## 📋 Prerequisites

- **Node.js** 18+ (recommended 20+)
- **npm** or **bun** package manager
- For production: IIS with URL Rewrite module installed

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-software-solutions
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or using bun
   bun install
   ```

## 💻 Development

### Run development server
```bash
npm run dev
```
Starts the development server at `http://localhost:8080`

### Build for production
```bash
npm run build
```
Creates optimized production build in `/dist` folder

### Preview production build
```bash
npm run preview
```
Locally preview the production build

### Lint code
```bash
npm run lint
```
Run ESLint to check code quality

## 📁 Project Structure

```
ai-software-solutions/
├── public/                      # Static assets
│   ├── assets/
│   │   └── images/             # Static images
│   ├── robots.txt              # SEO crawler instructions
│   └── web.config              # IIS rewrite rules
├── src/
│   ├── components/             # React components
│   │   ├── ui/                # shadcn/ui components
│   │   ├── Navbar.tsx         # Navigation component
│   │   ├── Footer.tsx         # Footer component
│   │   ├── HeroSection.tsx    # Hero section
│   │   └── ...                # Other sections
│   ├── pages/                 # Route pages
│   │   ├── Index.tsx          # Homepage
│   │   ├── AboutUs.tsx        # About page
│   │   ├── Contact.tsx        # Contact page
│   │   ├── ServiceDetail.tsx  # Service details
│   │   ├── ProjectDetail.tsx  # Project case study
│   │   ├── Blog.tsx           # Blog listing
│   │   ├── BlogPost.tsx       # Individual blog post
│   │   ├── Careers.tsx        # Job listings
│   │   ├── JobApply.tsx       # Job application
│   │   └── ...                # Other pages
│   ├── data/                  # Static data
│   │   ├── services.ts        # Services data
│   │   ├── projects.ts        # Portfolio projects
│   │   ├── jobs.ts           # Job listings
│   │   └── blogPosts.ts      # Blog posts
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utilities
│   │   └── utils.ts          # Helper functions
│   ├── assets/               # Bundled assets
│   │   └── images/           # Images imported in components
│   ├── App.tsx               # Root component & routing
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies & scripts

```

## 🎨 Adding UI Components

This project uses shadcn/ui components. To add new components:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add button
npx shadcn@latest add form
```

Components are added to `src/components/ui/`

## 🌐 Deployment

### IIS Deployment (Windows Server)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your IIS web root

3. **Ensure URL Rewrite module is installed** on IIS

4. **The `web.config` file** is automatically included in the build and handles:
   - SPA routing (redirects all routes to index.html)
   - MIME types for modern assets
   - Compression
   - Security headers
   - Cache control
   - Custom 404 handling

### Environment Configuration

The site is configured to work on:
- **Development**: `http://localhost:8080`
- **Production**: Configure in `index.html` canonical URL

### Routing Fix

The project uses React Router for client-side navigation. The `web.config` file ensures that:
- Direct URL access works (e.g., `/about`, `/contact`)
- Page refreshes don't result in 404 errors
- All routes are handled by the React application

## 🔧 Configuration Files

- **vite.config.ts** - Vite build configuration, dev server settings, path aliases
- **tailwind.config.ts** - Tailwind CSS theme, colors, plugins
- **tsconfig.json** - TypeScript compiler options
- **components.json** - shadcn/ui configuration
- **public/web.config** - IIS rewrite rules and server configuration

## 📝 Content Management

### Adding Services
Edit `src/data/services.ts` to add/modify services

### Adding Projects
Edit `src/data/projects.ts` to add portfolio projects

### Adding Blog Posts
Edit `src/data/blogPosts.ts` to add new articles

### Adding Jobs
Edit `src/data/jobs.ts` to add job openings

## 🎯 Available Routes

- `/` - Homepage
- `/about` - About Us
- `/services/:slug` - Service details
- `/work` - Portfolio/Projects
- `/work/:slug` - Project details
- `/blog` - Blog listing
- `/blog/:slug` - Blog post
- `/careers` - Job listings
- `/careers/apply/:id` - Job application
- `/contact` - Contact page
- `/start-project` - Start project form
- `/privacy-policy` - Privacy Policy
- `/terms-conditions` - Terms & Conditions
- `/cookie-policy` - Cookie Policy

## 🤝 Contributing

This is a proprietary project maintained by the Everlogic team.

## 👨‍💻 Author

Created and maintained by **Sahar** for **Everlogic Labs**

## 📄 License

All rights reserved © 2025 Everlogic

---

**Website:** [everlogiclabs.com](http://everlogiclabs.com)  
**Version:** v1 (2026)