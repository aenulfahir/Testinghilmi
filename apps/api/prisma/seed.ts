import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create sample users
  const user1 = await prisma.user.upsert({
    where: { email: 'admin@hilmi.org' },
    update: {},
    create: {
      clerkId: 'clerk_admin_sample',
      email: 'admin@hilmi.org',
      name: 'Administrator HILMI',
      imageUrl: 'https://via.placeholder.com/150',
      role: 'ADMIN',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'user@hilmi.org' },
    update: {},
    create: {
      clerkId: 'clerk_user_sample',
      email: 'user@hilmi.org',
      name: 'User HILMI',
      imageUrl: 'https://via.placeholder.com/150',
      role: 'USER',
    },
  });

  // Create sample events
  const event1 = await prisma.event.upsert({
    where: { id: 'event_1' },
    update: {},
    create: {
      id: 'event_1',
      title: 'Kajian Islam & Teknologi',
      description: 'Menggali hubungan antara perkembangan teknologi dan nilai-nilai Islam',
      content: 'Kajian mendalam tentang bagaimana teknologi dapat digunakan untuk dakwah dan pengembangan umat Islam.',
      imageUrl: 'https://via.placeholder.com/400x200',
      startDate: new Date('2025-01-25T19:00:00Z'),
      endDate: new Date('2025-01-25T21:00:00Z'),
      location: 'Aula Kampus',
      isPublished: true,
      authorId: user1.id,
    },
  });

  const event2 = await prisma.event.upsert({
    where: { id: 'event_2' },
    update: {},
    create: {
      id: 'event_2',
      title: 'Leadership Training',
      description: 'Program pengembangan kepemimpinan untuk mahasiswa muslim',
      content: 'Program intensif untuk mengembangkan skill kepemimpinan dengan nilai-nilai Islam.',
      imageUrl: 'https://via.placeholder.com/400x200',
      startDate: new Date('2025-01-26T08:00:00Z'),
      endDate: new Date('2025-01-26T17:00:00Z'),
      location: 'Ruang Seminar',
      isPublished: true,
      authorId: user1.id,
    },
  });

  // Create sample articles
  const article1 = await prisma.article.upsert({
    where: { slug: 'peran-mahasiswa-dakwah-digital' },
    update: {},
    create: {
      title: 'Peran Mahasiswa dalam Dakwah Digital',
      slug: 'peran-mahasiswa-dakwah-digital',
      excerpt: 'Bagaimana mahasiswa muslim dapat memanfaatkan teknologi untuk dakwah',
      content: 'Artikel lengkap tentang strategi dakwah digital untuk mahasiswa muslim di era modern.',
      imageUrl: 'https://via.placeholder.com/400x200',
      isPublished: true,
      publishedAt: new Date(),
      authorId: user1.id,
    },
  });

  const article2 = await prisma.article.upsert({
    where: { slug: 'membangun-karakter-islami-era-modern' },
    update: {},
    create: {
      title: 'Membangun Karakter Islami di Era Modern',
      slug: 'membangun-karakter-islami-era-modern',
      excerpt: 'Tips dan panduan untuk tetap istiqomah dalam berislam di zaman sekarang',
      content: 'Panduan praktis untuk membangun karakter Islami di tengah tantangan era modern.',
      imageUrl: 'https://via.placeholder.com/400x200',
      isPublished: true,
      publishedAt: new Date(),
      authorId: user2.id,
    },
  });

  console.log('✅ Database seeded successfully!');
  console.log('📊 Created:');
  console.log(`   - ${user1.name} (${user1.role})`);
  console.log(`   - ${user2.name} (${user2.role})`);
  console.log(`   - ${event1.title}`);
  console.log(`   - ${event2.title}`);
  console.log(`   - ${article1.title}`);
  console.log(`   - ${article2.title}`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 