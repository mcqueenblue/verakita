# 🎯 Verakita - Next.js Project

**Trust Through Transparency** - A modern review platform built with Next.js, GSAP, and Framer Motion.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Features](#features)
- [Animation Examples](#animation-examples)
- [Configuration](#configuration)
- [Development](#development)
- [Deployment](#deployment)

---

## 🌟 Overview

Verakita is a cutting-edge review platform that combines blockchain technology with modern web development to deliver authentic, transparent reviews.

### Two Main Sections:

1. **Landing Page** (`verakita.com`) - Marketing site with GSAP animations and Lenis smooth scrolling
2. **Dashboard** (`app.verakita.com`) - Application dashboard with Framer Motion transitions

---

## 🛠️ Tech Stack

### Core Framework

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 19** - Latest React features

### Styling

- **TailwindCSS** - Utility-first CSS framework
- **Shadcn UI** - Accessible component library
- **CSS Variables** - Dynamic theming

### Animations

- **GSAP** - Professional-grade animations
- **ScrollTrigger** - Scroll-based animations
- **Lenis** - Smooth scrolling
- **Framer Motion** - React animation library
- **@gsap/react** - GSAP React integration

### Forms & Validation

- **React Hook Form** - Performant forms
- **Zod** - Schema validation

### Utilities

- **clsx** - Conditional classnames
- **tailwind-merge** - Merge Tailwind classes

---

## 📁 Project Structure

```
verakita/
├── src/
│   ├── app/
│   │   ├── (landing)/              # Landing page (verakita.com)
│   │   │   ├── page.tsx           # Main landing page
│   │   │   ├── layout.tsx         # Landing layout with Lenis
│   │   │   ├── components/        # Landing-specific components
│   │   │   └── sections/
│   │   │       └── Hero.tsx       # Hero section with GSAP
│   │   │
│   │   ├── (dashboard)/            # Dashboard (app.verakita.com)
│   │   │   ├── layout.tsx         # Dashboard layout with sidebar
│   │   │   ├── page.tsx           # Dashboard home
│   │   │   ├── reviews/           # Reviews management
│   │   │   │   └── page.tsx
│   │   │   ├── integrations/      # Third-party integrations
│   │   │   │   └── page.tsx
│   │   │   └── api/               # API routes
│   │   │
│   │   ├── layout.tsx             # Root layout
│   │   └── globals.css            # Global styles
│   │
│   ├── components/
│   │   ├── ui/                    # Shadcn UI components
│   │   ├── animations/            # Animation components
│   │   │   ├── FadeUp.tsx         # GSAP animation examples
│   │   │   └── FramerComponents.tsx # Framer Motion examples
│   │   └── providers/
│   │       └── LenisProvider.tsx  # Smooth scroll provider
│   │
│   ├── lib/
│   │   ├── utils.ts               # Utility functions
│   │   └── animations.ts          # Animation configs
│   │
│   └── styles/
│       └── animations.css         # Custom animations
│
├── public/                         # Static assets
├── tailwind.config.ts             # Tailwind configuration
├── tsconfig.json                  # TypeScript config
├── next.config.ts                 # Next.js config
├── package.json                   # Dependencies
└── INSTALLATION.md                # Setup guide
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ or **Bun** (recommended)
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd verakita
   ```

2. **Install dependencies**

   ```bash
   bun install
   # or
   npm install
   ```

3. **Follow the complete setup guide**
   See [INSTALLATION.md](./INSTALLATION.md) for detailed instructions

4. **Run development server**

   ```bash
   bun dev
   # or
   npm run dev
   ```

5. **Open in browser**
   - Landing: http://localhost:3000
   - Dashboard: http://localhost:3000/dashboard

---

## ✨ Features

### Landing Page

- ✅ GSAP scroll-triggered animations
- ✅ Lenis smooth scrolling
- ✅ Parallax effects
- ✅ Fade-up animations
- ✅ Gradient text effects
- ✅ Responsive design
- ✅ Brand color system

### Dashboard

- ✅ Collapsible sidebar navigation
- ✅ Framer Motion page transitions
- ✅ Animated statistics cards
- ✅ Review management
- ✅ Integration management
- ✅ Responsive layout
- ✅ Real-time notifications

### Reusable Components

- ✅ `FadeUp` - GSAP fade-up animation
- ✅ `StaggerFadeUp` - Staggered animations
- ✅ `ParallaxSection` - Parallax scrolling
- ✅ `ScaleOnScroll` - Scale animations
- ✅ `AnimatedCard` - Hover animations
- ✅ `FloatingCard` - Floating effect
- ✅ `PulseButton` - Pulse CTA button

---

## 🎨 Animation Examples

### GSAP Examples

#### Basic Fade Up

```tsx
import { FadeUp } from "@/components/animations/FadeUp";

<FadeUp delay={0.2}>
  <h2>This fades up on scroll</h2>
</FadeUp>;
```

#### Stagger Animation

```tsx
import { StaggerFadeUp } from "@/components/animations/FadeUp";

<StaggerFadeUp stagger={0.15}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</StaggerFadeUp>;
```

#### Parallax Section

```tsx
import { ParallaxSection } from "@/components/animations/FadeUp";

<ParallaxSection speed={0.5}>
  <img src="/hero.jpg" alt="Hero" />
</ParallaxSection>;
```

### Framer Motion Examples

#### Animated Card

```tsx
import { AnimatedCard } from "@/components/animations/FramerComponents";

<AnimatedCard delay={0.1}>
  <h3>Card Title</h3>
  <p>Content here</p>
</AnimatedCard>;
```

#### Stagger Container

```tsx
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/FramerComponents";

<StaggerContainer>
  <StaggerItem>
    <Card />
  </StaggerItem>
  <StaggerItem>
    <Card />
  </StaggerItem>
  <StaggerItem>
    <Card />
  </StaggerItem>
</StaggerContainer>;
```

#### Pulse Button

```tsx
import { PulseButton } from "@/components/animations/FramerComponents";

<PulseButton onClick={() => console.log("clicked")}>Click Me!</PulseButton>;
```

---

## ⚙️ Configuration

### Brand Colors

The project uses a custom color system defined in `tailwind.config.ts`:

```typescript
colors: {
  brandBlue: {
    DEFAULT: "#2563eb",  // Primary blue
    dark: "#1d4ed8",
    light: "#3b82f6",
  },
  brandOrange: {
    DEFAULT: "#f97316",  // Accent orange
    dark: "#ea580c",
    light: "#fb923c",
  },
}
```

### Using Brand Colors

```tsx
// In JSX
<div className="bg-brandBlue text-white">
<div className="border-brandOrange">
<div className="text-brandBlue-dark">

// In Tailwind config
bg-brandBlue hover:bg-brandBlue-dark
```

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_APP_URL=https://verakita.com
NEXT_PUBLIC_DASHBOARD_URL=https://app.verakita.com
```

---

## 👨‍💻 Development

### Code Structure

- Use **TypeScript** for all files
- Use **"use client"** directive for client components
- Use **Tailwind CSS** for styling
- Use **Shadcn UI** for base components
- Use **GSAP** for landing page animations
- Use **Framer Motion** for dashboard animations

### Animation Guidelines

**GSAP (Landing Page)**

- Complex scroll animations
- Timeline sequences
- Parallax effects
- ScrollTrigger interactions

**Framer Motion (Dashboard)**

- Page transitions
- Hover interactions
- Layout animations
- Micro-interactions

### Adding New Pages

1. Create page file in appropriate directory
2. Use existing layout or create new one
3. Import animation components as needed
4. Follow brand color system

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Build Command

```bash
bun run build
# or
npm run build
```

### Preview Production Build

```bash
bun run start
# or
npm run start
```

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [GSAP Documentation](https://gsap.com/docs/v3/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/)

---

## 📄 License

MIT License - See LICENSE file for details

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

---

**Built with ❤️ by the Verakita Team**
