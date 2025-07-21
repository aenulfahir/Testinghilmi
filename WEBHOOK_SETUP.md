# Setup Webhook Clerk dengan ngrok

## 🔧 **Masalah Webhook Localhost**

Clerk tidak bisa mengirim webhook ke `localhost` karena:
- `localhost` hanya bisa diakses dari komputer Anda
- Clerk server berada di internet dan tidak bisa mencapai `localhost`
- Error: "Invalid URL" di Clerk Dashboard

## 🚀 **Solusi: Gunakan ngrok**

### **Langkah 1: Install ngrok**

**Download dari website:**
1. Kunjungi https://ngrok.com/download
2. Download untuk Windows
3. Extract dan tambahkan ke PATH

**Atau install via npm:**
```bash
npm install -g ngrok
```

### **Langkah 2: Jalankan Backend**

```bash
cd apps/api
npm run start:dev
# Backend berjalan di http://localhost:3001
```

### **Langkah 3: Buat Tunnel dengan ngrok**

**Buka terminal baru dan jalankan:**
```bash
ngrok http 3001
```

**Output akan seperti ini:**
```
Session Status                online
Account                       your-email@example.com
Version                       3.5.0
Region                        United States (us)
Latency                       51ms
Web Interface                 http://127.0.0.1:4040
Forwarding                    https://abc123.ngrok.io -> http://localhost:3001
```

**Copy URL: `https://abc123.ngrok.io`**

### **Langkah 4: Update Webhook di Clerk Dashboard**

1. **Buka Clerk Dashboard**
2. **Pilih aplikasi Anda**
3. **Buka menu "Webhooks"**
4. **Edit endpoint yang sudah dibuat**
5. **Ganti URL:**
   - **Dari:** `http://localhost:3001/api/webhooks/clerk`
   - **Ke:** `https://abc123.ngrok.io/api/webhooks/clerk`
6. **Klik "Save"**

### **Langkah 5: Test Webhook**

1. **Buka ngrok web interface:** http://127.0.0.1:4040
2. **Buka tab "Webhooks"**
3. **Test webhook dari Clerk Dashboard**
4. **Lihat request di ngrok interface**

## 🔄 **Alternatif: Clerk CLI**

### **Install Clerk CLI:**
```bash
npm install -g @clerk/clerk-sdk-node
```

### **Forward Webhook Events:**
```bash
clerk webhook forward --endpoint http://localhost:3001/api/webhooks/clerk
```

## 🛠️ **Troubleshooting**

### **Error "Invalid URL"**
- Pastikan menggunakan URL ngrok yang benar
- URL harus dimulai dengan `https://`
- Pastikan ngrok tunnel aktif

### **Webhook tidak terkirim**
- Cek apakah backend berjalan di port 3001
- Cek ngrok tunnel status
- Cek log backend untuk error

### **ngrok tidak berjalan**
- Pastikan ngrok terinstall dengan benar
- Coba restart ngrok
- Cek apakah port 3001 sudah digunakan

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

## 🎯 **Testing**

1. **Test Sign-up:** Buka `/sign-up` dan daftar user baru
2. **Test Webhook:** Cek log backend saat user baru mendaftar
3. **Test Database:** Cek apakah user tersimpan di database
4. **Test Dashboard:** Login dan akses `/dashboard`

## ⚠️ **Important Notes**

- **ngrok URL berubah setiap restart** - Update webhook URL di Clerk
- **ngrok free tier terbatas** - Untuk production gunakan domain sendiri
- **Backup ngrok URL** - Simpan URL untuk development
- **Monitor ngrok logs** - Cek webhook delivery status 