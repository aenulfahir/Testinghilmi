'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Heart, 
  Users, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail,
  ArrowRight,
  Award,
  BookOpen,
  Globe,
  GraduationCap,
  Building,
  Star,
  CheckCircle,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

export default function TentangPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-green-600 bg-white">
              Tentang Kami
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Tentang HILMI
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-green-100 max-w-3xl mx-auto leading-relaxed">
              Himpunan Pelajar Muslim Indonesia - Wadah pengembangan diri pelajar muslim 
              yang berorientasi pada keislaman, keilmuan, dan kemasyarakatan
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">22+</div>
                <div className="text-green-200 text-sm">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">300+</div>
                <div className="text-green-200 text-sm">Sekolah Mitra</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
                <div className="text-green-200 text-sm">Pelajar Terlatih</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">6</div>
                <div className="text-green-200 text-sm">Provinsi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sejarah Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4 text-green-600 border-green-600 dark:text-green-400 dark:border-green-400">
                Sejarah Kami
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
                Perjalanan Panjang HILMI
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  HILMI berawal dari <strong>Forum Komunikasi Kajian Pelajar Islam (FK2PI)</strong> 
                  yang didirikan pada <strong>14 Oktober 2002</strong> oleh alumni kelompok 
                  remaja masjid di Makassar.
                </p>
                <p>
                  Pada <strong>21 Oktober 2016</strong>, setelah mengikuti acara 
                  <strong> TUNAS (Temu Nasional) Rohis</strong>, organisasi ini 
                  berubah nama menjadi <strong>Himpunan Pelajar Muslim Indonesia (HILMI)</strong>.
                </p>
                <p>
                  HILMI telah berkolaborasi dengan berbagai elemen masyarakat, pemerintah, 
                  dan sekolah untuk mengembangkan program-program unggulan dalam bidang 
                  keislaman dan pendidikan.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-3">22+</div>
                    <div className="text-sm text-green-800 dark:text-green-300 font-medium">Tahun Pengalaman</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-3">300+</div>
                    <div className="text-sm text-blue-800 dark:text-blue-300 font-medium">Sekolah Mitra</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-3">1000+</div>
                    <div className="text-sm text-purple-800 dark:text-purple-300 font-medium">Pelajar Terlatih</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-3">6</div>
                    <div className="text-sm text-orange-800 dark:text-orange-300 font-medium">Provinsi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50 dark:from-gray-900 dark:to-green-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 text-green-600 border-green-600 dark:text-green-400 dark:border-green-400">
              Fondasi Kami
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Visi & Misi
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Fondasi yang menjadi pedoman dalam setiap program dan kegiatan HILMI
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl">Visi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg leading-relaxed">
                  Menjadi lembaga dakwah sekolah yang eksis di Indonesia pada tahun 1443 H/2022 M.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl">Misi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm font-bold">1</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Menanamkan dan menyebarkan aqidah Islamiyah yang shahih kepada ummat, khususnya pelajar SMA, berdasarkan Al-Qur'an dan As-Sunnah sesuai pemahaman Salafus Shaleh.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm font-bold">2</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Menyebarkan pemahaman keislaman yang benar melalui tarbiyah dan kegiatan-kegiatan keislaman.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm font-bold">3</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Mengembangkan dakwah sekolah hingga menyebar ke sekolah-sekolah negeri maupun swasta yang strategis.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm font-bold">4</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Membangun persatuan pelajar Islam dan ukhuwah Islamiyah yang dilandasi semangat ta'awun dan tanashuh.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm font-bold">5</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Membentuk generasi muda Islami yang rabbani dan menjadi pelopor dalam berbagai bidang kehidupan.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tupoksi Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 text-green-600 border-green-600 dark:text-green-400 dark:border-green-400">
              Tugas & Fungsi
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Tugas Pokok dan Fungsi
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tupoksi HILMI dalam melaksanakan program dan kegiatan
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center">Pemberantasan Buta Huruf Al-Quran</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  Membantu pemerintah dan orang tua dalam melakukan pembinaan dan pemberantasan buta huruf Al-Qur'an, khususnya pada pelajar SMA.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center">Pembinaan Kerohanian Islam</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  Membantu pemerintah dan masyarakat dalam melakukan pembinaan kerohanian islam di tingkat remaja.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center">Pengelolaan Lembaga Dakwah Sekolah</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  Membantu birokrasi sekolah dalam pengelolaan dan pembinaan lembaga dakwah sekolah yang dikenal dengan remaja masjid/kerohanian islam.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center">Penyiaran Syariat Islam</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  Menyiarkan syariat islam secara massif, baik di tengah-tengah masyarakat secara umum maupun di kalangan pelajar SMA secara khusus, melalui berbagai media cetak maupun elektronik.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Kerja Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50 dark:from-gray-900 dark:to-green-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 text-green-600 border-green-600 dark:text-green-400 dark:border-green-400">
              Program Kerja
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Program Kerja
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Program-program HILMI yang terstruktur dalam berbagai bidang
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-green-50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center">Bidang Dakwah</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>Dakwah 'Ammah</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>Dakwah di bidang media cetak</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>Dakwah di bidang sosial media</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>Dakwah Fardhiyah</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-blue-50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center">Bidang Sosial</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                    <span>Hilmi Peduli</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                    <span>Silaturahim Sosial</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                    <span>Santunan Kemanusiaan</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-yellow-50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center">Bidang Ekonomi</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 flex-shrink-0" />
                    <span>Unit Usaha Mandiri</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 flex-shrink-0" />
                    <span>Pemberdayaan Kewirausahaan</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-purple-50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center">Bidang Pendidikan</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                    <span>Pesantren Ramadhan</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                    <span>Tarbiyah Islamiyah Remaja</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                    <span>Seminar Kepemudaan</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                    <span>Training Kepemimpinan</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                    <span>Latihan Soft Skill</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pencapaian Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 text-green-600 border-green-600 dark:text-green-400 dark:border-green-400">
              Pencapaian
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Pencapaian HILMI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Prestasi dan pencapaian HILMI dalam mengembangkan dakwah sekolah
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="h-4 w-4 text-green-600" />
                  </div>
                  <p>
                    Dalam beberapa tahun terakhir, HILMI telah berkolaborasi dengan sekitar <strong>300 sekolah</strong> 
                    di berbagai kota dan kabupaten di Sulawesi Selatan, Sulawesi Tenggara, Sulawesi Tengah, dan Gorontalo.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <GraduationCap className="h-4 w-4 text-blue-600" />
                  </div>
                  <p>
                    HILMI telah melatih lebih dari <strong>1000 pelajar SMA</strong> dalam kajian Al-Quran, 
                    bahasa Arab, Tarbiyah Islamiyah Remaja, dan mata pelajaran terkait lainnya.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="h-4 w-4 text-purple-600" />
                  </div>
                  <p>
                    Di luar wilayah tersebut, beberapa kabupaten dan kota lain juga telah melakukan 
                    kegiatan kerjasama terkait syiar Islam, termasuk Pangkep, Maros, Pinrang, Manado, Palu, dan Mamuju.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-4 w-4 text-orange-600" />
                  </div>
                  <p>
                    Banyak alumni HILMI yang melanjutkan pendidikan tinggi di universitas luar negeri, 
                    terutama di Timur Tengah seperti Universitas Islam Madinah KSA, Universitas Qassim KSA, 
                    dan Islamic International University of Africa (Sudan).
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-3">300+</div>
                    <div className="text-sm text-green-800 font-medium">Sekolah Mitra</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-3">1000+</div>
                    <div className="text-sm text-blue-800 font-medium">Pelajar Terlatih</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-3">6</div>
                    <div className="text-sm text-purple-800 font-medium">Provinsi</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600 mb-3">50+</div>
                    <div className="text-sm text-orange-800 font-medium">Alumni Luar Negeri</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50 dark:from-gray-900 dark:to-green-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 text-green-600 border-green-600 dark:text-green-400 dark:border-green-400">
              Organisasi
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Struktur Organisasi
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Kepengurusan HILMI periode 2024-2025
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle>Ketua Umum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Ketua Umum PP HILMI</p>
                <p className="text-sm text-muted-foreground">Pimpinan Pusat</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <CardTitle>Sekretaris Jenderal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Sekretaris Jenderal</p>
                <p className="text-sm text-muted-foreground">Pimpinan Pusat</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <CardTitle>Bendahara Umum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Bendahara Umum</p>
                <p className="text-sm text-muted-foreground">Pimpinan Pusat</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Calendar className="h-10 w-10 text-white" />
                </div>
                <CardTitle>Wakil Ketua Umum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Wakil Ketua Umum</p>
                <p className="text-sm text-muted-foreground">Pimpinan Pusat</p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-center mb-12">Departemen</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-sm">Dept. Dakwah & Kaderisasi</CardTitle>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-sm">Dept. Penelitian & Pengembangan</CardTitle>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-sm">Dept. Urusan Daerah</CardTitle>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-sm">Dept. Informasi & Komunikasi</CardTitle>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-sm">Dept. Pengembangan Usaha</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cabang & Kontak Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 text-green-600 border-green-600 dark:text-green-400 dark:border-green-400">
              Cabang & Kontak
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Cabang & Kontak Daerah
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              HILMI hadir di berbagai kota untuk melayani pelajar muslim di seluruh Indonesia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-600" />
                  Sulawesi Selatan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>+62 411 1234 5678</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>sulsel@hilmi.org</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Makassar, Pangkep, Maros</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-600" />
                  Sulawesi Tenggara
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>+62 401 1234 5678</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>sultra@hilmi.org</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Kendari & Sekitarnya</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-600" />
                  Sulawesi Tengah
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>+62 451 1234 5678</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>sulteng@hilmi.org</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Palu & Sekitarnya</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-600" />
                  Gorontalo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>+62 435 1234 5678</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>gorontalo@hilmi.org</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Gorontalo & Sekitarnya</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-600" />
                  Sulawesi Utara
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>+62 431 1234 5678</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>sulut@hilmi.org</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Manado & Sekitarnya</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-600" />
                  Sulawesi Barat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>+62 426 1234 5678</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>sulbar@hilmi.org</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Mamuju & Sekitarnya</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bergabunglah dengan HILMI
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
            Mari bersama-sama membangun generasi pelajar muslim yang berkualitas, 
            berakhlak mulia, dan berkontribusi positif bagi kemajuan bangsa dan umat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kegiatan">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Lihat Kegiatan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/donasi">
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold">
                Dukung Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 