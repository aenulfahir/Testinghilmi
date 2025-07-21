# Fitur HILMI Website

## 🎨 Design System

### Color Palette
- **Primary**: #9EB83B (Hijau Zaitun/Lime) - Warna utama brand HILMI
- **Secondary**: #6D6D6D (Abu-abu Gelap) - Warna pendukung
- **Background**: #FFFFFF (Putih Bersih) - Background utama
- **Text Main**: #1C1C1C (Teks utama) - Untuk heading dan teks penting
- **Text Muted**: #6D6D6D (Teks pendukung) - Untuk deskripsi dan teks sekunder

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Optimized untuk semua ukuran layar

## 🚀 Frontend Features

### 1. GlassmorphismNavbar
**Lokasi**: `apps/web/components/layout/glass-navbar.tsx`

**Fitur**:
- ✅ Navbar transparan saat di atas halaman
- ✅ Efek glassmorphism (backdrop-blur) saat di-scroll
- ✅ Responsive mobile menu dengan hamburger
- ✅ Smooth animations dengan Framer Motion
- ✅ Logo HILMI dengan animasi hover
- ✅ Navigation links dengan hover effects
- ✅ CTA button "Bergabung"

**Animasi**:
- Slide down dari atas saat load
- Fade in untuk menu items
- Scale effect untuk logo
- Smooth transitions untuk background

### 2. AnimatedSection
**Lokasi**: `apps/web/components/shared/animated-section.tsx`

**Fitur**:
- ✅ Wrapper component untuk animasi
- ✅ Fade-in dan slide-up effects
- ✅ Configurable delay dan direction
- ✅ Viewport detection (hanya animate saat visible)
- ✅ Smooth easing functions
- ✅ Performance optimized

**Props**:
- `delay`: Delay sebelum animasi (default: 0)
- `direction`: "up", "down", "left", "right" (default: "up")
- `duration`: Durasi animasi (default: 0.6s)
- `className`: Custom CSS classes

### 3. PrimaryButton
**Lokasi**: `apps/web/components/ui/button.tsx`

**Fitur**:
- ✅ Menggunakan warna primary HILMI (#9EB83B)
- ✅ Micro-interactions (scale + shadow pada hover)
- ✅ Multiple variants (default, outline, secondary, ghost, link)
- ✅ Multiple sizes (sm, default, lg, icon)
- ✅ Accessibility features
- ✅ TypeScript support

**Variants**:
- `default`: Background primary dengan hover effects
- `outline`: Border dengan hover background
- `secondary`: Background secondary
- `ghost`: Transparan dengan hover background
- `link`: Text link style

### 4. Homepage Layout
**Lokasi**: `apps/web/app/page.tsx`

**Sections**:
1. **Hero Section**
   - Background gradient dengan floating elements
   - Asymmetric layout (2 columns)
   - Statistics cards dengan glassmorphism
   - CTA buttons

2. **About Section**
   - 3-column grid layout
   - Visi, Misi, Nilai cards
   - Hover effects dan shadows

3. **Programs Section**
   - Asymmetric layout
   - Program cards dengan gradient borders
   - CTA section dengan glassmorphism

4. **Articles Section**
   - 3-column grid
   - Article cards dengan hover effects
   - Placeholder content

5. **Contact Section**
   - Centered layout
   - Contact form placeholder
   - Glassmorphism background

## 🔧 Backend Features

### 1. NestJS Framework
**Lokasi**: `apps/api/`

**Fitur**:
- ✅ TypeScript configuration
- ✅ Modular architecture
- ✅ Dependency injection
- ✅ Decorators dan metadata

### 2. Database Integration
- ✅ PostgreSQL dengan TypeORM
- ✅ Environment-based configuration
- ✅ Entity definitions ready
- ✅ Migration system

### 3. API Documentation
- ✅ Swagger/OpenAPI integration
- ✅ Auto-generated documentation
- ✅ Available at `/api` endpoint

### 4. Security Features
- ✅ CORS configuration
- ✅ Validation pipes
- ✅ Environment variables
- ✅ JWT ready (structure)

## 🎯 Animations & Interactions

### 1. Framer Motion Integration
- ✅ Smooth page transitions
- ✅ Scroll-triggered animations
- ✅ Hover effects
- ✅ Loading states

### 2. Custom CSS Animations
- ✅ Floating elements
- ✅ Gradient backgrounds
- ✅ Smooth scrolling
- ✅ Custom scrollbar

### 3. Micro-interactions
- ✅ Button hover effects
- ✅ Card hover shadows
- ✅ Navbar scroll effects
- ✅ Menu transitions

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Features
- ✅ Mobile-first approach
- ✅ Flexible grid system
- ✅ Responsive typography
- ✅ Touch-friendly interactions
- ✅ Optimized images

## 🚀 Performance Features

### 1. Next.js Optimizations
- ✅ App Router (Next.js 15)
- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ Font optimization

### 2. Tailwind Optimizations
- ✅ PurgeCSS integration
- ✅ Custom utilities
- ✅ Optimized bundle size

### 3. Animation Performance
- ✅ Hardware acceleration
- ✅ Reduced motion support
- ✅ Optimized re-renders

## 🔧 Development Features

### 1. TypeScript
- ✅ Strict type checking
- ✅ Interface definitions
- ✅ Type safety

### 2. Monorepo Structure
- ✅ Turborepo configuration
- ✅ Shared dependencies
- ✅ Parallel builds

### 3. Development Tools
- ✅ Hot reload
- ✅ Error boundaries
- ✅ Development scripts
- ✅ Build optimization

## 📋 Todo & Future Features

### Frontend
- [ ] Dark mode support
- [ ] Internationalization (i18n)
- [ ] PWA features
- [ ] Advanced form handling
- [ ] Image gallery
- [ ] Blog system
- [ ] Search functionality

### Backend
- [ ] User authentication
- [ ] File upload system
- [ ] Email notifications
- [ ] Payment integration
- [ ] Analytics tracking
- [ ] Caching system
- [ ] Rate limiting

### Database
- [ ] User management
- [ ] Content management
- [ ] Event management
- [ ] Donation system
- [ ] Newsletter subscription

## 🎨 Design Principles

### 1. Modern & Clean
- Minimalist design approach
- Generous white space
- Clear typography hierarchy
- Consistent spacing

### 2. Accessible
- WCAG 2.1 compliance
- Keyboard navigation
- Screen reader support
- High contrast ratios

### 3. Performance-First
- Fast loading times
- Optimized assets
- Efficient animations
- Mobile optimization

### 4. Brand Consistency
- HILMI color palette
- Consistent component design
- Unified interaction patterns
- Professional appearance 