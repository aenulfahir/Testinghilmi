# Setup Proyek HILMI Website

## Prerequisites

Sebelum memulai, pastikan Anda telah menginstall:

- Node.js (versi 18 atau lebih baru)
- npm atau yarn
- PostgreSQL (untuk database)

## Instalasi

### 1. Clone dan Install Dependencies

```bash
# Install dependencies root
npm install

# Install dependencies frontend
cd apps/web
npm install

# Install dependencies backend
cd ../api
npm install
```

### 2. Setup Database

1. Buat database PostgreSQL dengan nama `hilmi_db`
2. Update konfigurasi database di `apps/api/.env`

### 3. Setup Environment Variables

#### Frontend (apps/web/.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_NAME=HILMI Website
```

#### Backend (apps/api/.env)
```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_NAME=hilmi_db

# Application Configuration
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d
```

### 4. Menjalankan Aplikasi

#### Development Mode
```bash
# Dari root directory
npm run dev
```

Ini akan menjalankan:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001
- API Documentation: http://localhost:3001/api

#### Production Build
```bash
# Build semua aplikasi
npm run build

# Start production
npm run start
```

## Struktur Proyek

```
hilmi-website/
├── apps/
│   ├── web/                    # Next.js Frontend
│   │   ├── app/               # App Router
│   │   ├── components/        # React Components
│   │   │   ├── ui/           # Shadcn/UI Components
│   │   │   ├── layout/       # Layout Components
│   │   │   └── shared/       # Shared Components
│   │   ├── lib/              # Utilities
│   │   └── public/           # Static Assets
│   └── api/                   # NestJS Backend
│       ├── src/
│       │   ├── controllers/  # API Controllers
│       │   ├── services/     # Business Logic
│       │   ├── entities/     # Database Entities
│       │   └── dto/          # Data Transfer Objects
│       └── test/             # Tests
├── packages/                  # Shared Packages
└── docs/                     # Documentation
```

## Fitur yang Sudah Diimplementasi

### Frontend
- ✅ Next.js 15 dengan App Router
- ✅ TypeScript configuration
- ✅ Tailwind CSS dengan custom color palette
- ✅ Framer Motion untuk animasi
- ✅ Glassmorphism Navbar
- ✅ AnimatedSection component
- ✅ Responsive design
- ✅ Modern UI dengan shadcn/ui
- ✅ Custom color scheme (#9EB83B - Hijau Zaitun)

### Backend
- ✅ NestJS framework
- ✅ TypeScript configuration
- ✅ PostgreSQL dengan TypeORM
- ✅ Swagger API documentation
- ✅ CORS configuration
- ✅ Environment configuration
- ✅ Basic health check endpoints

## Komponen Utama

### GlassmorphismNavbar
- Navbar transparan yang berubah menjadi glassmorphism saat di-scroll
- Responsive mobile menu
- Smooth animations dengan Framer Motion

### AnimatedSection
- Wrapper component untuk animasi fade-in dan slide-up
- Configurable delay dan direction
- Optimized dengan viewport detection

### PrimaryButton
- Button dengan warna primary HILMI (#9EB83B)
- Micro-interactions (scale dan shadow effects)
- Multiple variants (default, outline, secondary, etc.)

## Customization

### Colors
Palet warna utama HILMI:
- Primary: #9EB83B (Hijau Zaitun/Lime)
- Secondary: #6D6D6D (Abu-abu Gelap)
- Background: #FFFFFF (Putih Bersih)
- Text Main: #1C1C1C (Teks utama)
- Text Muted: #6D6D6D (Teks pendukung)

### Fonts
- Primary: Poppins (Google Fonts)
- Fallback: System sans-serif

## Development Workflow

1. **Frontend Development**
   ```bash
   cd apps/web
   npm run dev
   ```

2. **Backend Development**
   ```bash
   cd apps/api
   npm run start:dev
   ```

3. **Database Migrations**
   ```bash
   cd apps/api
   npm run migration:generate
   npm run migration:run
   ```

## Deployment

### Frontend (Vercel)
1. Connect repository ke Vercel
2. Set environment variables
3. Deploy otomatis

### Backend (Railway/Heroku)
1. Connect repository
2. Set environment variables
3. Setup PostgreSQL database
4. Deploy

## Troubleshooting

### Common Issues

1. **Port already in use**
   - Change port di environment variables
   - Kill process yang menggunakan port

2. **Database connection failed**
   - Check PostgreSQL service running
   - Verify database credentials
   - Check firewall settings

3. **Build errors**
   - Clear node_modules dan reinstall
   - Check TypeScript errors
   - Verify all dependencies installed

## Support

Untuk bantuan lebih lanjut, silakan hubungi tim development HILMI. 