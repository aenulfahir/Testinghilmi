# 🔧 Troubleshooting Guide

## ❌ **Masalah yang Ditemui:**

### **1. Middleware Clerk Error**
```
TypeError: (0 , _clerk_nextjs__WEBPACK_IMPORTED_MODULE_0__.authMiddleware) is not a function
```

### **2. PowerShell Command Error**
```
The token '&&' is not a valid statement separator in this version.
```

### **3. ngrok Tidak Berfungsi**
- Tidak menampilkan output
- Web interface tidak bisa diakses
- ERR_CONNECTION_REFUSED

### **4. Clerk CLI Tidak Dikenali**
```
clerk : The term 'clerk' is not recognized
```

## ✅ **Solusi Lengkap:**

### **🔧 Fix 1: Middleware Clerk**

**File:** `apps/web/middleware.ts`

**Sebelum (Error):**
```typescript
import { authMiddleware } from "@clerk/nextjs"
```

**Sesudah (Fixed):**
```typescript
import { clerkMiddleware } from "@clerk/nextjs/server"

export default clerkMiddleware()

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
}
```

### **🔧 Fix 2: PowerShell Commands**

**Gunakan perintah terpisah:**
```powershell
# ❌ Salah
cd apps/web && npm run dev

# ✅ Benar
cd apps/web
npm run dev
```

### **🔧 Fix 3: Install Clerk CLI**

```powershell
npm install -g @clerk/clerk-sdk-node
```

**Verifikasi instalasi:**
```powershell
clerk --version
```

### **🔧 Fix 4: Setup Environment Variables**

**File:** `apps/web/.env.local`
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_key_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
NEXT_PUBLIC_API_URL=http://localhost:3001
```

**File:** `apps/api/.env`
```env
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/hilmi_db"
CLERK_WEBHOOK_SECRET="whsec_your_webhook_secret_here"
```

## 🚀 **Langkah Setup Lengkap:**

### **1. Setup Database**
```powershell
cd apps/api
npx prisma db push
npx prisma generate
```

### **2. Jalankan Backend**
```powershell
cd apps/api
npm run start:dev
```

### **3. Jalankan Frontend**
```powershell
cd apps/web
npm run dev
```

### **4. Setup Webhook Forward**
```powershell
clerk webhook forward --endpoint http://localhost:3001/api/webhooks/clerk
```

## 🎯 **Testing Checklist:**

### **✅ Backend Test:**
- [ ] Database terhubung
- [ ] API berjalan di port 3001
- [ ] Prisma Studio bisa diakses (http://localhost:5555)
- [ ] Webhook endpoint tersedia

### **✅ Frontend Test:**
- [ ] Next.js berjalan di port 3003
- [ ] Clerk sign-in/sign-up pages bisa diakses
- [ ] Middleware tidak error
- [ ] Dashboard page bisa diakses

### **✅ Webhook Test:**
- [ ] Clerk CLI terinstall
- [ ] Webhook forward berjalan
- [ ] Test sign-up user baru
- [ ] User tersimpan di database

## 🛠️ **Alternative Solutions:**

### **Jika Webhook Bermasalah:**

#### **Option 1: Manual User Setup**
```powershell
cd apps/api
npx prisma studio
```

1. Buka http://localhost:5555
2. Tambahkan user manual
3. Test login

#### **Option 2: Disable Webhook Temporarily**
```typescript
// apps/api/src/webhooks/webhooks.service.ts
async verifyWebhookSignature(payload: string, signature: string): Promise<boolean> {
  // Temporarily return true for testing
  return true;
}
```

## 📝 **Common Commands:**

### **PowerShell Commands:**
```powershell
# Navigate
cd apps/web
cd apps/api

# Install dependencies
npm install

# Run development
npm run dev
npm run start:dev

# Database
npx prisma db push
npx prisma generate
npx prisma studio

# Clerk
clerk webhook forward --endpoint http://localhost:3001/api/webhooks/clerk
```

### **Check Status:**
```powershell
# Check if processes are running
netstat -ano | findstr :3001
netstat -ano | findstr :3003
netstat -ano | findstr :5555
```

## ⚠️ **Important Notes:**

1. **PowerShell tidak mendukung `&&`** - Gunakan perintah terpisah
2. **Clerk CLI harus terinstall global** - `npm install -g @clerk/clerk-sdk-node`
3. **Environment variables harus diset** - Cek file `.env` dan `.env.local`
4. **Database harus running** - PostgreSQL harus aktif
5. **Port tidak boleh konflik** - Pastikan port 3001, 3003, 5555 tersedia

## 🔄 **Reset & Clean:**

```powershell
# Clean Next.js cache
cd apps/web
npm run clean

# Clean Prisma
cd apps/api
npx prisma generate

# Restart all services
# 1. Stop all terminals
# 2. Restart database
# 3. Restart backend
# 4. Restart frontend
# 5. Restart webhook forward
```

## 📞 **Jika Masih Bermasalah:**

1. **Cek logs** di terminal masing-masing
2. **Restart services** satu per satu
3. **Verifikasi environment variables**
4. **Test database connection**
5. **Cek Clerk dashboard** untuk webhook status 