# Setup Clerk Authentication untuk Website HILMI

## 1. Konfigurasi Clerk

### Langkah-langkah Setup:

1. **Daftar di Clerk Dashboard**
   - Kunjungi https://clerk.com
   - Buat akun baru atau login
   - Buat aplikasi baru

2. **Konfigurasi Environment Variables**
   
   Buat file `.env.local` di folder `apps/web/` dengan isi:
   ```env
   # Clerk Configuration
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
   CLERK_SECRET_KEY=sk_test_your_secret_key_here

   # Clerk URLs
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

   # Backend API URL
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

3. **Konfigurasi Webhook di Clerk Dashboard**
   - Buka Clerk Dashboard
   - Pilih aplikasi Anda
   - Buka menu "Webhooks"
   - Tambahkan endpoint: `http://localhost:3001/api/webhooks/clerk`
   - Pilih events: `user.created`, `user.updated`, `user.deleted`
   - Copy webhook secret dan tambahkan ke `.env` di backend

## 2. Setup Database

### Langkah-langkah:

1. **Install PostgreSQL** (jika belum)
2. **Buat database**
   ```sql
   CREATE DATABASE hilmi_db;
   ```

3. **Setup Prisma**
   ```bash
   cd apps/api
   npx prisma generate
   npx prisma db push
   ```

4. **Environment Variables untuk Backend**
   
   Buat file `.env` di folder `apps/api/` dengan isi:
   ```env
   DATABASE_URL="postgresql://postgres:password@localhost:5432/hilmi_db"
   CLERK_WEBHOOK_SECRET="whsec_your_webhook_secret_here"
   ```

## 3. Fitur yang Sudah Diimplementasi

### Frontend (Next.js):
✅ **Halaman Sign-in/Sign-up** - `/sign-in` dan `/sign-up`
✅ **Middleware Authentication** - Proteksi route
✅ **Navbar Integration** - Tombol login/logout dinamis
✅ **Dashboard dengan Role-based Access** - `/dashboard`
✅ **User Profile** - Informasi user dari Clerk
✅ **Dark Mode Support** - Semua komponen Clerk mendukung dark mode

### Backend (NestJS):
✅ **Webhook Endpoint** - `/api/webhooks/clerk`
✅ **Prisma Schema** - Model User dengan Role enum
✅ **Database Integration** - PostgreSQL dengan Prisma
✅ **User Management** - Create, update, delete user

### Role System:
✅ **USER Role** - Akses dashboard user
✅ **ADMIN Role** - Akses dashboard admin
✅ **Role-based UI** - Konten berbeda berdasarkan role

## 4. Cara Menjalankan

### Frontend:
```bash
cd apps/web
npm run dev
# Buka http://localhost:3002
```

### Backend:
```bash
cd apps/api
npm run start:dev
# API berjalan di http://localhost:3001
```

## 5. Testing

1. **Test Sign-up**: Buka `/sign-up` dan daftar user baru
2. **Test Sign-in**: Login dengan user yang sudah dibuat
3. **Test Dashboard**: Akses `/dashboard` setelah login
4. **Test Webhook**: Cek log backend saat user baru mendaftar

## 6. Next Steps

- [ ] Implementasi proper webhook signature verification
- [ ] API endpoint untuk fetch user data
- [ ] Role management di admin dashboard
- [ ] User profile management
- [ ] Password reset functionality
- [ ] Email verification
- [ ] Social login (Google, Facebook, etc.)

## 7. Troubleshooting

### Error "Cannot find module '@clerk/nextjs'"
```bash
cd apps/web
npm install @clerk/nextjs
```

### Error Database Connection
- Pastikan PostgreSQL berjalan
- Cek DATABASE_URL di `.env`
- Jalankan `npx prisma db push`

### Error Webhook
- Cek CLERK_WEBHOOK_SECRET
- Pastikan endpoint URL benar
- Cek log backend untuk error details 