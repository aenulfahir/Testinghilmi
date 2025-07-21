# 🔧 Setup Webhook Manual (Tanpa ngrok)

## ❌ **Masalah ngrok:**
- ngrok tidak menampilkan output
- Web interface tidak bisa diakses
- ERR_CONNECTION_REFUSED

## ✅ **Solusi: Clerk CLI Webhook Forward**

### **Langkah 1: Install Clerk CLI**
```bash
npm install -g @clerk/clerk-sdk-node
```

### **Langkah 2: Forward Webhook Events**
```bash
clerk webhook forward --endpoint http://localhost:3001/api/webhooks/clerk
```

**Output akan seperti ini:**
```
Forwarding webhook events to http://localhost:3001/api/webhooks/clerk
Listening for webhook events...
```

### **Langkah 3: Test Webhook**

1. **Buka terminal baru** dan jalankan Clerk CLI
2. **Buka Clerk Dashboard** → Webhooks
3. **Test webhook** dari dashboard
4. **Lihat output** di terminal Clerk CLI

## 🔄 **Alternatif: Setup Manual User**

Jika webhook masih bermasalah, bisa setup user manual:

### **Langkah 1: Buka Prisma Studio**
```bash
cd apps/api
npx prisma studio
```

### **Langkah 2: Tambahkan User Manual**
1. **Buka browser** → http://localhost:5555
2. **Klik "User" table**
3. **Klik "Add record"**
4. **Isi data:**
   - `clerkId`: ID dari Clerk user (dapat dari Clerk Dashboard)
   - `email`: Email user
   - `name`: Nama user
   - `role`: `USER` atau `ADMIN`
   - `imageUrl`: URL foto (opsional)

### **Langkah 3: Test Login**
1. **Buka frontend** → http://localhost:3003
2. **Login dengan user yang sudah dibuat**
3. **Akses dashboard**

## 🎯 **Testing Checklist**

### **Dengan Clerk CLI:**
- [ ] Clerk CLI terinstall
- [ ] Webhook forward berjalan
- [ ] Backend berjalan di port 3001
- [ ] Test sign-up user baru
- [ ] Cek webhook delivery di terminal
- [ ] Cek user tersimpan di database

### **Dengan Manual Setup:**
- [ ] Prisma Studio berjalan
- [ ] User ditambahkan manual
- [ ] Frontend berjalan di port 3003
- [ ] Test login dengan user manual
- [ ] Akses dashboard

## 🛠️ **Troubleshooting**

### **Clerk CLI tidak berjalan:**
```bash
# Restart Clerk CLI
clerk webhook forward --endpoint http://localhost:3001/api/webhooks/clerk
```

### **Backend tidak berjalan:**
```bash
cd apps/api
npm run start:dev
```

### **Prisma Studio tidak berjalan:**
```bash
cd apps/api
npx prisma studio
```

### **Database error:**
```bash
cd apps/api
npx prisma db push
npx prisma generate
```

## 📝 **Environment Variables**

**File `.env` di `apps/api/`:**
```env
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/hilmi_db"
CLERK_WEBHOOK_SECRET="whsec_your_webhook_secret_here"
```

**File `.env.local` di `apps/web/`:**
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_key_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 🎉 **Keuntungan Setup Manual:**

✅ **Tidak perlu ngrok** - Langsung forward ke localhost
✅ **Lebih sederhana** - Tidak perlu setup tunnel
✅ **Real-time logs** - Lihat webhook events langsung di terminal
✅ **Fallback option** - Manual user setup jika webhook bermasalah

## ⚠️ **Important Notes:**

- **Clerk CLI harus berjalan** saat testing webhook
- **Backend harus berjalan** di port 3001
- **Database harus terhubung** dengan Prisma
- **Environment variables** harus diset dengan benar 