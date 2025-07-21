"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Users,
  BookOpen,
  Heart,
  ArrowRight,
  Play,
  Star,
  Award,
  Target,
  Globe,
  Lightbulb,
  Shield,
  ChevronRight,
  TrendingUp,
  MessageCircle,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      title: "Membangun Generasi Muslim Berkualitas",
      subtitle: "Himpunan Pelajar Muslim Indonesia",
      description:
        "Wadah pengembangan diri pelajar muslim yang berorientasi pada keislaman, keilmuan, dan kemasyarakatan",
      cta: "Bergabung Sekarang",
      ctaLink: "/sign-up",
      bgGradient: "from-emerald-600 via-green-600 to-teal-600",
    },
    {
      title: "Pendidikan Islam Modern",
      subtitle: "Kajian & Workshop Berkualitas",
      description:
        "Ikuti berbagai program kajian Islam, workshop kepemimpinan, dan pengembangan diri yang dirancang khusus untuk generasi muda",
      cta: "Lihat Program",
      ctaLink: "/kegiatan",
      bgGradient: "from-blue-600 via-indigo-600 to-purple-600",
    },
    {
      title: "Jaringan Alumni Global",
      subtitle: "Komunitas Tanpa Batas",
      description:
        "Bergabung dengan ribuan alumni HILMI yang tersebar di seluruh dunia dan membangun masa depan yang lebih baik",
      cta: "Tentang Kami",
      ctaLink: "/tentang",
      bgGradient: "from-orange-600 via-red-600 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${heroSlides[currentSlide].bgGradient} transition-all duration-1000`}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-20 left-20 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 bg-white/5 rounded-full animate-float-delayed"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <div
            className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Logo/Brand */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                <span className="text-3xl font-bold text-white">H</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              {heroSlides[currentSlide].title}
              <span className="block text-3xl lg:text-5xl font-medium text-white/90 mt-4">
                {heroSlides[currentSlide].subtitle}
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              {heroSlides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href={heroSlides[currentSlide].ctaLink}>
                <Button
                  size="lg"
                  className="btn-primary-improved bg-white text-gray-900 hover:bg-white/90 text-lg px-8 py-4 h-auto font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  {heroSlides[currentSlide].cta}
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>

              <Button
                size="lg"
                variant="ghost"
                className="text-white border-2 border-white/30 hover:bg-white/10 text-lg px-8 py-4 h-auto backdrop-blur-sm"
              >
                <Play className="mr-3 h-5 w-5" />
                Tonton Video
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-3 mt-12">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll untuk melihat lebih</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                500+
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                Anggota Aktif
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                50+
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                Kegiatan Tahunan
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                10+
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                Tahun Pengalaman
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                1000+
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                Peserta Program
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Program Unggulan Kami
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Berbagai program yang dirancang khusus untuk mengembangkan potensi
              pelajar muslim
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-slate-900 dark:text-slate-100">
                  Halaqah Quraniyyah
                </CardTitle>
                <CardDescription>
                  Program pembelajaran Al-Qur'an yang sistematis dan terstruktur
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Mengajarkan cara membaca, menghafal, dan memahami Al-Qur'an
                  dengan metode yang modern dan efektif.
                </p>
                <Link href="/kegiatan">
                  <Button variant="outline" size="sm">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-slate-900 dark:text-slate-100">
                  Pesantren Kilat
                </CardTitle>
                <CardDescription>
                  Program intensif selama liburan sekolah
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Mengisi liburan dengan kegiatan yang bermanfaat sambil
                  memperdalam ilmu agama dan mengembangkan soft skills.
                </p>
                <Link href="/kegiatan">
                  <Button variant="outline" size="sm">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-slate-900 dark:text-slate-100">
                  Kepemimpinan Islam
                </CardTitle>
                <CardDescription>
                  Program pengembangan kepemimpinan berbasis nilai Islam
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Membentuk pemimpin muda yang berakhlak mulia, visioner, dan
                  siap berkontribusi untuk masyarakat.
                </p>
                <Link href="/kegiatan">
                  <Button variant="outline" size="sm">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap kegiatan kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Keislaman
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Berpegang teguh pada nilai-nilai Islam dalam setiap aspek
                kehidupan
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Keilmuan
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Mengembangkan pengetahuan dan keterampilan secara berkelanjutan
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Kemasyarakatan
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Berkontribusi positif untuk kemajuan masyarakat dan bangsa
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Integritas
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Menjunjung tinggi kejujuran, tanggung jawab, dan akhlak mulia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Bergabunglah dengan Kami
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Mari bersama-sama membangun generasi pelajar muslim yang unggul dan
            berdaya saing global
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-slate-100"
              >
                Daftar Sekarang
              </Button>
            </Link>
            <Link href="/donasi">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Heart className="mr-2 h-4 w-4" />
                Berikan Donasi
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
