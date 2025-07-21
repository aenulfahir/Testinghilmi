# PostgreSQL Database Setup Guide

## Database Connection Status

### Current PostgreSQL Credentials:
- **Host**: 103.94.238.99
- **Port**: 65433
- **Database**: buburayam3542_hilmiweb
- **Username**: buburayam3542_sumopod
- **Password**: B-SoAwTNBpMKue9

### Connection Issue:
❌ **Authentication failed** - Kredensial yang diberikan tidak valid

## Solusi untuk Koneksi PostgreSQL

### Option 1: Verifikasi Kredensial
Pastikan kredensial berikut benar:
```bash
psql "postgresql://buburayam3542_sumopod:B-SoAwTNBpMKue9@103.94.238.99:65433/buburayam3542_hilmiweb"
```

### Option 2: Database Lokal PostgreSQL
Jika kredensial remote tidak tersedia, gunakan PostgreSQL lokal:

1. **Install PostgreSQL** di komputer Anda
2. **Buat database baru**:
```sql
CREATE DATABASE hilmiweb;
CREATE USER hilmiuser WITH PASSWORD 'hilmi123';
GRANT ALL PRIVILEGES ON DATABASE hilmiweb TO hilmiuser;
```

3. **Update .env file**:
```env
DATABASE_URL="postgresql://hilmiuser:hilmi123@localhost:5432/hilmiweb?schema=public"
```

### Option 3: Gunakan SQLite (Saat Ini Aktif)
Website sudah berjalan dengan SQLite untuk development:
- ✅ Backend: http://localhost:3002
- ✅ Frontend: http://localhost:3000
- ✅ Database: SQLite (file: ./dev.db)

## Cara Testing Koneksi PostgreSQL

1. **Test koneksi langsung**:
```bash
npx prisma db pull
```

2. **Jika berhasil, setup database**:
```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

3. **Start aplikasi**:
```bash
npm run start:dev
```

## Status Saat Ini
✅ **Website sudah berjalan** dengan SQLite
- Frontend: http://localhost:3000
- Backend API: http://localhost:3002
- API Documentation: http://localhost:3002/api

Untuk koneksi PostgreSQL, silakan verifikasi kredensial atau gunakan PostgreSQL lokal.