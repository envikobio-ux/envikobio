# Alvokor Biotechnology Official Website

A Next.js 16 + shadcn/ui full-stack application for Shanghai Alvokor Biotechnology Co., Ltd.

## Quick Start

### Development Server

```bash
pnpm dev
```

Open [http://localhost:5000](http://localhost:5000) in your browser.

The development server supports hot reload - pages will automatically refresh when you modify code.

### Build for Production

```bash
pnpm build
```

### Start Production Server

```bash
pnpm start
```

## Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles (shadcn theme variables)
│   └── [route]/             # Other route pages
├── components/              # React components
│   ├── layout/              # Layout components (Header, Footer)
│   └── ui/                  # shadcn/ui base components
├── data/                    # Data configuration files
├── lib/                     # Utility functions
│   └── utils.ts            # cn() and other utilities
└── hooks/                   # Custom React Hooks

public/
├── logo.jpg                 # Brand logo
└── hero-lab.jpeg           # Hero section image
```

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Core**: React 19
- **UI Components**: shadcn/ui (Radix UI based)
- **Styling**: Tailwind CSS v4
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Package Manager**: pnpm 9+
- **TypeScript**: 5.x

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage - Hero, Products, Factory, Trust |
| `/products` | Product Catalog - 90+ raw materials |
| `/products/[slug]` | Product Detail Page |
| `/tech` | Technical Articles - 100+ articles |
| `/tech/[slug]` | Article Detail Page |
| `/factory` | Factory Strength Page |
| `/resources` | Document Download Page |
| `/contact` | Contact Us Page |

## Key Features

### 1. Product Catalog System
- 90+ products with search and filter
- Category-based classification
- Standardized product detail pages

### 2. Technical Articles System
- 100+ SEO-optimized articles
- GEO (Generative Engine Optimization) ready
- Schema.org structured data

### 3. Conversion Optimization
- WhatsApp floating button
- Exit intent popup
- Multiple CTA placements

### 4. E-E-A-T Trust Signals
- Author attribution
- Company certifications
- Quality standards references

## Development Guidelines

### Component Development

Always use shadcn/ui components first:

```tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
```

### Package Management

**Must use pnpm:**

```bash
pnpm install        # Install dependencies
pnpm add package    # Add dependency
pnpm add -D package # Add dev dependency
```

### Styling

Use Tailwind CSS v4 with shadcn theme variables:

```tsx
<div className="flex items-center gap-4 p-4 rounded-lg bg-background">
  <Button className="bg-primary text-primary-foreground">
    Primary Button
  </Button>
</div>
```

## Deployment

### Vercel (Recommended)

1. Connect GitHub repository to Vercel
2. Automatic deployment on push
3. Custom domain configuration

### Manual Build

```bash
pnpm build
pnpm start
```

## Brand Information

- **Company**: Shanghai Alvokor Biotechnology Co., Ltd.
- **Website**: www.alvokorbiosolution.com
- **Email**: info@alvokorbio.com

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com)

## License

Private - Shanghai Alvokor Biotechnology Co., Ltd.