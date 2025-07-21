# 🔑 Setup Clerk API Keys

## ❌ **Masalah:**
Pop-up "Missing environment keys" muncul karena Clerk berjalan dalam "keyless mode"

## ✅ **Solusi:**

### **Langkah 1: Buka Clerk Dashboard**

1. **Buka browser** → https://dashboard.clerk.com
2. **Login** ke akun Clerk Anda
3. **Pilih aplikasi** HILMI atau buat aplikasi baru

### **Langkah 2: Dapatkan API Keys**

1. **Klik "API Keys"** di sidebar kiri
2. **Copy kedua keys:**
   - **Publishable Key** (dimulai dengan `pk_test_`)
   - **Secret Key** (dimulai dengan `sk_test_`)

### **Langkah 3: Setup Environment Variables**

**Buat file `apps/web/.env.local`:**

```env
# Clerk Environment Variables
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key
CLERK_SECRET_KEY=sk_test_your_actual_secret_key

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# API URL
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### **Langkah 4: Setup Webhook Secret (Opsional)**

1. **Klik "Webhooks"** di sidebar
2. **Buat webhook baru:**
   - **Endpoint URL:** `http://localhost:3001/api/webhooks/clerk`
   - **Events:** `user.created`, `user.updated`, `user.deleted`
3. **Copy Webhook Secret** (dimulai dengan `whsec_`)
4. **Tambahkan ke `.env.local`:**
   ```env
   CLERK_WEBHOOK_SECRET=whsec_your_webhook_secret
   ```

### **Langkah 5: Restart Development Server**

```powershell
# Stop server (Ctrl+C)
# Kemudian jalankan ulang:
cd apps/web
npm run dev
```

## 🎯 **Verifikasi Setup:**

### **✅ Checklist:**
- [ ] File `.env.local` dibuat di `apps/web/`
- [ ] Publishable Key diset (dimulai dengan `pk_test_`)
- [ ] Secret Key diset (dimulai dengan `sk_test_`)
- [ ] Development server di-restart
- [ ] Pop-up "Missing environment keys" hilang
- [ ] Sign-in/sign-up pages berfungsi

### **✅ Test:**
1. **Buka** http://localhost:3001
2. **Klik "Sign In"** atau "Sign Up"
3. **Pastikan tidak ada pop-up error**
4. **Test sign-up user baru**

## 🛠️ **Troubleshooting:**

### **Jika masih muncul pop-up:**

1. **Cek file `.env.local`:**
   ```powershell
   cd apps/web
   type .env.local
   ```

2. **Pastikan format benar:**
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   ```

3. **Restart server:**
   ```powershell
   # Stop (Ctrl+C)
   npm run dev
   ```

4. **Clear cache:**
   ```powershell
   npm run clean
   npm run dev
   ```

### **Jika API keys tidak valid:**

1. **Cek Clerk Dashboard** → API Keys
2. **Pastikan keys aktif** (tidak expired)
3. **Generate keys baru** jika perlu
4. **Update `.env.local`** dengan keys baru

## 📝 **Important Notes:**

- **Jangan commit `.env.local`** ke git (sudah di .gitignore)
- **Gunakan test keys** untuk development
- **Production keys** berbeda dengan test keys
- **Restart server** setiap kali update environment variables

## 🔄 **Quick Setup:**

```powershell
# 1. Copy env.example
cd apps/web
copy env.example .env.local

# 2. Edit .env.local dengan API keys dari Clerk Dashboard
notepad .env.local

# 3. Restart server
npm run dev
```

## 🎉 **Setelah Setup:**

- ✅ Pop-up "Missing environment keys" hilang
- ✅ Sign-in/sign-up pages berfungsi
- ✅ Authentication flow bekerja
- ✅ Dashboard bisa diakses setelah login 