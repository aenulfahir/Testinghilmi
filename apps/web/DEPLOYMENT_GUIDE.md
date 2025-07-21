# Vercel Deployment Guide for HILMI Website

## 🚀 Deployment Overview

### Frontend (Next.js) - Vercel
- **Platform**: Vercel (perfect for Next.js)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

### Backend (NestJS) - Vercel
- **Platform**: Vercel (with serverless functions)
- **Build Command**: `npm run build`
- **Output**: Serverless functions

## 📋 Prerequisites

1. **Vercel Account**: Sign up at https://vercel.com
2. **Git Repository**: Push your code to GitHub/GitLab
3. **Database**: PostgreSQL database (Neon, Supabase, or Railway)

## 🎯 Step-by-Step Deployment

### Step 1: Setup Production Database

#### Option A: Neon Database (Recommended)
1. Go to https://neon.tech
2. Create new project
3. Get connection string:
```bash
DATABASE_URL=postgresql://username:password@host.neon.tech/database?sslmode=require
```

#### Option B: Supabase
1. Go to https://supabase.com
2. Create new project
3. Get connection string from Settings > Database

#### Option C: Railway
1. Go to https://railway.app
2. Create new PostgreSQL database
3. Get connection string

### Step 2: Deploy Frontend (Next.js)

#### Method 1: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# From apps/web directory
cd apps/web

# Deploy
vercel --prod
```

#### Method 2: GitHub Integration
1. Push code to GitHub
2. Go to https://vercel.com/dashboard
3. Import GitHub repository
4. Configure:
   - **Root Directory**: `apps/web`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Environment Variables**: Add from .env.production

### Step 3: Deploy Backend (NestJS)

#### Backend Configuration for Vercel
1. **Update main.ts** for Vercel:
```typescript
// apps/api/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'https://your-frontend.vercel.app',
    credentials: true,
  });
  
  app.useGlobalPipes(new ValidationPipe());
  
  return app;
}

// For Vercel serverless
export default async function handler(req, res) {
  const app = await bootstrap();
  await app.init();
  return app.getHttpAdapter().getInstance()(req, res);
}
```

2. **Create vercel.json**:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "src/main.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/main.ts"
    }
  ],
  "env": {
    "DATABASE_URL": "@database-url",
    "CLERK_SECRET_KEY": "@clerk-secret-key"
  }
}
```

### Step 4: Environment Variables

#### Frontend (.env.production)
```env
NEXT_PUBLIC_API_URL=https://your-backend.vercel.app
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
```

#### Backend (Vercel Environment)
```env
DATABASE_URL=your-postgresql-connection-string
CLERK_SECRET_KEY=your-clerk-secret-key
CLERK_WEBHOOK_SECRET=your-webhook-secret
FRONTEND_URL=https://your-frontend.vercel.app
```

### Step 5: Deploy Commands

#### Frontend Deployment
```bash
# From apps/web
npm run build
vercel --prod
```

#### Backend Deployment
```bash
# From apps/api
npm run build
vercel --prod
```

## 🗂️ Project Structure for Vercel

### Frontend (apps/web)
```
apps/web/
├── .env.production
├── vercel.json
├── package.json
└── ... (Next.js files)
```

### Backend (apps/api)
```
apps/api/
├── vercel.json
├── package.json
├── src/
│   └── main.ts (updated for Vercel)
└── ... (NestJS files)
```

## 🔧 Post-Deployment Setup

1. **Update Frontend API URL**:
   - Change `NEXT_PUBLIC_API_URL` to your deployed backend URL

2. **Update Backend CORS**:
   - Add your frontend URL to CORS origins

3. **Database Migration**:
   ```bash
   npx prisma db push
   npx prisma db seed
   ```

## 📊 Deployment URLs

After deployment:
- **Frontend**: `https://your-project.vercel.app`
- **Backend**: `https://your-backend.vercel.app`
- **API Documentation**: `https://your-backend.vercel.app/api`

## 🚨 Important Notes

1. **Database**: Use PostgreSQL for production (Neon, Supabase, or Railway)
2. **Environment Variables**: Set all required variables in Vercel dashboard
3. **CORS**: Configure CORS for production domains
4. **Build**: Ensure both frontend and backend build successfully

## 🎯 Quick Start Commands

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy frontend
cd apps/web
vercel --prod

# 3. Deploy backend
cd ../api
vercel --prod
```

## 📞 Support
If you encounter issues, check:
- Vercel documentation: https://vercel.com/docs
- Next.js deployment guide: https://nextjs.org/docs/deployment
- NestJS deployment guide: https://docs.nestjs.com/deployment/vercel