# 🚀 Quick Start - HILMI Website

## ⚡ Cara Cepat Menjalankan Proyek

### Windows
```bash
# Double click file ini atau jalankan di terminal:
start-dev.bat
```

### Linux/Mac
```bash
# Jalankan script:
chmod +x start-dev.sh
./start-dev.sh
```

### Manual Setup
```bash
# 1. Install dependencies
npm install

# 2. Install frontend dependencies
cd apps/web && npm install && cd ../..

# 3. Install backend dependencies  
cd apps/api && npm install && cd ../..

# 4. Start development servers
npm run dev
```

## 🌐 Akses Aplikasi

Setelah berhasil menjalankan, akses:

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:3001  
- **API Docs**: http://localhost:3001/api

## 📁 Struktur File Penting

```
hilmi-website/
├── apps/
│   ├── web/                    # Frontend Next.js
│   │   ├── app/page.tsx       # Halaman utama
│   │   ├── components/        # Komponen React
│   │   │   ├── layout/glass-navbar.tsx    # Navbar glassmorphism
│   │   │   ├── shared/animated-section.tsx # Wrapper animasi
│   │   │   └── ui/button.tsx  # Button component
│   │   ├── tailwind.config.ts # Konfigurasi Tailwind
│   │   └── globals.css        # CSS global
│   └── api/                    # Backend NestJS
│       ├── src/main.ts        # Entry point
│       ├── src/app.module.ts  # Module utama
│       └── src/app.controller.ts # Controller
├── package.json               # Root dependencies
├── turbo.json                 # Turborepo config
└── README.md                  # Dokumentasi utama
```

## 🎨 Komponen Utama

### 1. GlassmorphismNavbar
- Navbar transparan yang berubah glassmorphism saat scroll
- Responsive mobile menu
- Animasi smooth dengan Framer Motion

### 2. AnimatedSection  
- Wrapper untuk animasi fade-in dan slide-up
- Configurable delay dan direction
- Optimized performance

### 3. PrimaryButton
- Button dengan warna HILMI (#9EB83B)
- Micro-interactions (scale + shadow)
- Multiple variants dan sizes

## 🎯 Fitur yang Sudah Siap

### Frontend ✅
- Next.js 15 dengan App Router
- TypeScript configuration
- Tailwind CSS dengan custom palette
- Framer Motion animations
- Responsive design
- Modern UI components

### Backend ✅
- NestJS framework
- PostgreSQL dengan TypeORM
- Swagger API documentation
- CORS configuration
- Environment setup

## 🔧 Customization

### Warna HILMI
```css
Primary: #9EB83B (Hijau Zaitun)
Secondary: #6D6D6D (Abu-abu)
Background: #FFFFFF (Putih)
Text Main: #1C1C1C (Hitam)
Text Muted: #6D6D6D (Abu-abu)
```

### Font
- Poppins (Google Fonts)
- Weights: 300, 400, 500, 600, 700

## 🚨 Troubleshooting

### Port sudah digunakan
```bash
# Cek port yang digunakan
netstat -ano | findstr :3000
netstat -ano | findstr :3001

# Kill process
taskkill /PID <process_id> /F
```

### Dependencies error
```bash
# Clear cache dan reinstall
rm -rf node_modules
rm -rf apps/*/node_modules
npm install
```

### Database connection
- Pastikan PostgreSQL running
- Check environment variables
- Verify database credentials

## 📚 Dokumentasi Lengkap

- [Setup Guide](SETUP.md) - Panduan setup lengkap
- [Features](FEATURES.md) - Dokumentasi fitur
- [README](README.md) - Overview proyek

## 🆘 Support

Jika mengalami masalah:
1. Cek dokumentasi di atas
2. Pastikan semua prerequisites terinstall
3. Restart development server
4. Clear cache dan reinstall dependencies

---

**HILMI Website** - Membangun Generasi Islam Berkualitas 🚀 