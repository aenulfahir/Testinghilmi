# 🚀 Deploy Sekarang ke Vercel

## 📋 Langkah Deployment Langsung

### 1. Setup Database Production
Pilih salah satu database cloud:

#### **Opsi A: Neon Database (Gratis)**
1. Buka https://neon.tech
2. Sign up dan create new project
3. Copy connection string:
```
postgresql://username:password@host.neon.tech/database?sslmode=require
```

#### **Opsi B: Supabase (Gratis)**
1. Buka https://supabase.com
2. Create new project
3. Copy connection string dari Settings > Database

### 2. Deploy Frontend (Next.js)

#### **Langkah 1: Setup Environment**
```bash
# Update environment variables
cd apps/web
cp .env.production .env.local
# Edit .env.local dengan kredensial yang benar
```

#### **Langkah 2: Deploy**
```bash
# Deploy langsung
cd apps/web
vercel --prod
```

#### **Atau GitHub Integration**
1. Push code ke GitHub
2. Buka https://vercel.com/dashboard
3. Import repository
4. Configure:
   - Root Directory: `apps/web`
   - Build Command: `npm run build`
   - Output Directory: `.next`

### 3. Deploy Backend (NestJS)

#### **Langkah 1: Setup Environment**
```bash
# Update environment variables
cd apps/api
cp .env.production .env.local
# Edit .env.local dengan kredensial yang benar
```

#### **Langkah 2: Deploy**
```bash
# Deploy langsung
cd apps/api
vercel --prod
```

### 4. Setup Environment Variables di Vercel

**Frontend Vercel:**
- `NEXT_PUBLIC_API_URL`: URL backend yang sudah di-deploy
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk publishable key

**Backend Vercel:**
- `DATABASE_URL`: PostgreSQL connection string
- `CLERK_SECRET_KEY`: Clerk secret key
- `CLERK_WEBHOOK_SECRET`: Clerk webhook secret
- `FRONTEND_URL`: URL frontend yang sudah di-deploy

### 5. Database Migration

Setelah deploy backend:
```bash
# Jalankan migration
npx prisma db push
npx prisma db seed
```

## 🎯 Quick Deploy Commands

### Frontend:
```bash
cd apps/web
vercel --prod
```

### Backend:
```bash
cd apps/api
vercel --prod
```

## 📊 Status Deployment

✅ **Frontend Ready**:
- Next.js configuration ✅
- Vercel settings ✅
- Environment variables ✅

✅ **Backend Ready**:
- NestJS configuration ✅
- Vercel serverless setup ✅
- Database connection ✅

## 🚀 Langkah Cepat

1. **Setup PostgreSQL** (Neon/Supabase)
2. **Update .env files** dengan kredensial
3. **Deploy frontend**: `cd apps/web && vercel --prod`
4. **Deploy backend**: `cd apps/api && vercel --prod`
5. **Update environment variables** di Vercel dashboard

## 📞 Support

Jika ada masalah:
1. Check `apps/web/DEPLOYMENT_GUIDE.md`
2. Check `apps/api/DEPLOYMENT_GUIDE.md`
3. Hubungi Vercel support atau gunakan GitHub integration

## 🎯 Sekarang Siap Deploy!

Semua konfigurasi sudah siap. Anda tinggal:
1. Setup PostgreSQL production
2. Update environment variables
3. Jalankan perintah deployment di atas