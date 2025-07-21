const http = require('http');

// Cek ngrok status
const checkNgrok = () => {
  const options = {
    hostname: '127.0.0.1',
    port: 4040,
    path: '/api/tunnels',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      try {
        const tunnels = JSON.parse(data);
        if (tunnels.tunnels && tunnels.tunnels.length > 0) {
          console.log('🚀 ngrok Tunnel Aktif:');
          tunnels.tunnels.forEach((tunnel, index) => {
            console.log(`\nTunnel ${index + 1}:`);
            console.log(`  Public URL: ${tunnel.public_url}`);
            console.log(`  Local URL: ${tunnel.config.addr}`);
            console.log(`  Protocol: ${tunnel.proto}`);
            console.log(`  Status: ${tunnel.status}`);
          });
          
          console.log('\n📋 Langkah Selanjutnya:');
          console.log('1. Copy Public URL di atas');
          console.log('2. Buka Clerk Dashboard');
          console.log('3. Update webhook URL dengan Public URL + /api/webhooks/clerk');
          console.log('4. Test webhook dari Clerk Dashboard');
          
        } else {
          console.log('❌ Tidak ada tunnel ngrok yang aktif');
          console.log('Jalankan: ngrok http 3001');
        }
      } catch (error) {
        console.log('❌ Error membaca ngrok status:', error.message);
        console.log('Pastikan ngrok berjalan di port 4040');
      }
    });
  });

  req.on('error', (error) => {
    console.log('❌ ngrok tidak berjalan atau tidak bisa diakses');
    console.log('Jalankan: ngrok http 3001');
  });

  req.end();
};

console.log('🔍 Mengecek status ngrok...');
checkNgrok(); 