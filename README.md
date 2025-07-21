# HILMI Website

Website organisasi HILMI dengan standar visual dan performa tertinggi untuk tahun 2025.

## Tech Stack

- **Frontend**: Next.js 15+ (App Router), TypeScript, Tailwind CSS, Framer Motion
- **Backend**: NestJS, TypeScript, Prisma
- **Database**: PostgreSQL
- **Monorepo**: Turborepo

## Struktur Proyek

```
hilmi-website/
├── apps/
│   ├── web/          # Next.js Frontend
│   └── api/          # NestJS Backend
├── packages/
│   ├── ui/           # Shared UI Components
│   └── config/       # Shared Configuration
└── packages/
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Setup environment variables:
```bash
cp apps/web/.env.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env.local
```

3. Run development server:
```bash
npm run dev
```

## Scripts

- `npm run dev` - Start development servers
- `npm run build` - Build all applications
- `npm run lint` - Run linting
- `npm run clean` - Clean build outputs 