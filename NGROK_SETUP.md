# 🚀 ngrok Setup untuk Webhook Clerk

## ✅ **Status: ngrok Berjalan**

ngrok sudah berhasil dijalankan dan membuat tunnel untuk backend NestJS.

## 📋 **Langkah Selanjutnya:**

### **1. Dapatkan URL ngrok**

Buka terminal baru dan jalankan:
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

### **2. Update Webhook di Clerk Dashboard**

1. **Buka Clerk Dashboard**
2. **Pilih aplikasi Anda**
3. **Buka menu "Webhooks"**
4. **Edit endpoint yang sudah dibuat**
5. **Ganti URL:**
   - **Dari:** `http://localhost:3001/api/webhooks/clerk`
   - **Ke:** `https://abc123.ngrok.io/api/webhooks/clerk`
6. **Klik "Save"**

### **3. Test Webhook**

1. **Buka ngrok web interface:** http://127.0.0.1:4040
2. **Buka tab "Webhooks"**
3. **Test webhook dari Clerk Dashboard**
4. **Lihat request di ngrok interface**

### **4. Test Frontend**

Jalankan frontend di terminal baru:
```bash
cd apps/web
npm run dev
```

## 🔍 **Monitoring ngrok**

### **Web Interface:**
- **URL:** http://127.0.0.1:4040
- **Fitur:** Monitor requests, inspect webhooks, view logs

### **Terminal Output:**
- **Status:** online/offline
- **Requests:** Real-time request logs
- **Errors:** Connection issues

## ⚠️ **Important Notes**

### **ngrok URL:**
- **Berubah setiap restart** - Update webhook URL di Clerk
- **Free tier terbatas** - Untuk production gunakan domain sendiri
- **Simpan URL** - Backup untuk development

### **Backend Status:**
- **Port 3001** - NestJS API
- **Webhook endpoint** - `/api/webhooks/clerk`
- **Database** - PostgreSQL dengan Prisma

### **Frontend Status:**
- **Port 3003** - Next.js (karena port lain terpakai)
- **Clerk integration** - Sign-in/Sign-up pages
- **Dashboard** - Role-based access

## 🎯 **Testing Checklist**

- [ ] ngrok tunnel aktif
- [ ] Backend berjalan di port 3001
- [ ] Webhook URL diupdate di Clerk
- [ ] Frontend berjalan di port 3003
- [ ] Test sign-up user baru
- [ ] Cek webhook delivery di ngrok
- [ ] Cek user tersimpan di database
- [ ] Test login dan akses dashboard

## 🛠️ **Troubleshooting**

### **ngrok tidak berjalan:**
```bash
# Restart ngrok
ngrok http 3001
```

### **Backend tidak berjalan:**
```bash
cd apps/api
npm run start:dev
```

### **Frontend error:**
```bash
cd apps/web
npm run dev
```

### **Webhook tidak terkirim:**
- Cek ngrok tunnel status
- Cek webhook URL di Clerk
- Cek backend logs
- Cek ngrok web interface

## 📞 **Support**

Jika ada masalah:
1. Cek ngrok web interface: http://127.0.0.1:4040
2. Cek terminal output
3. Cek backend logs
4. Cek Clerk Dashboard webhook logs 