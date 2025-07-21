"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Users,
  BookOpen,
  Target,
  CheckCircle,
  ArrowRight,
  Shield,
  Eye,
  TrendingUp,
  Gift,
  HandHeart,
  Sparkles,
  Award,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Globe,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  MessageCircle,
  Star,
  ThumbsUp,
  Share2,
  Download,
  FileText,
  BarChart3,
  PieChart,
  TrendingDown,
  AlertCircle,
  Check,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export default function DonasiPage() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    jumlah: "",
    pesan: "",
    anonim: false,
    program: "",
  });

  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement donation submission
    console.log("Donation form submitted:", formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const quickAmounts = [50000, 100000, 250000, 500000, 1000000];

  const programs = [
    {
      id: "quran-literacy",
      title: "Pemberantasan Buta Huruf Al-Quran",
      description:
        "Program pemberantasan buta huruf Al-Quran untuk pelajar SMA di 300+ sekolah",
      icon: BookOpen,
      target: 100000000,
      collected: 75000000,
      color: "from-green-500 to-emerald-600",
      impact: "1500+ pelajar telah lulus program",
    },
    {
      id: "hilmi-care",
      title: "Hilmi Peduli",
      description:
        "Program sosial untuk silaturahim sosial dan santunan kemanusiaan",
      icon: HandHeart,
      target: 50000000,
      collected: 30000000,
      color: "from-blue-500 to-indigo-600",
      impact: "500+ keluarga terbantu",
    },
    {
      id: "youth-education",
      title: "Tarbiyah Islamiyah Remaja",
      description:
        "Pendidikan Islam untuk remaja termasuk pesantren Ramadhan dan training kepemimpinan",
      icon: Users,
      target: 80000000,
      collected: 50000000,
      color: "from-purple-500 to-pink-600",
      impact: "800+ remaja telah mengikuti program",
    },
    {
      id: "scholarship",
      title: "Beasiswa Pelajar Berprestasi",
      description:
        "Beasiswa untuk pelajar muslim berprestasi dari keluarga kurang mampu",
      icon: Award,
      target: 120000000,
      collected: 45000000,
      color: "from-orange-500 to-red-600",
      impact: "120+ pelajar mendapat beasiswa",
    },
  ];

  const testimonials = [
    {
      name: "Aisyah Putri",
      role: "Donatur Rutin",
      message:
        "Alhamdulillah bisa berkontribusi untuk pendidikan Islam. Program HILMI sangat bermanfaat untuk generasi muda.",
      amount: "Rp 2.500.000",
      avatar: "/api/placeholder/50/50",
    },
    {
      name: "Muhammad Rizki",
      role: "Alumni Donatur",
      message:
        "Dulu saya pernah menjadi penerima beasiswa HILMI, sekarang saya ingin membayar kebaikan dengan menjadi donatur.",
      amount: "Rp 1.000.000",
      avatar: "/api/placeholder/50/50",
    },
    {
      name: "Siti Nurhaliza",
      role: "Orang Tua Murid",
      message:
        "Anak saya berkembang pesat setelah mengikuti program HILMI. Terima kasih atas semua bantuannya.",
      amount: "Rp 500.000",
      avatar: "/api/placeholder/50/50",
    },
  ];

  const paymentMethods = [
    {
      name: "Transfer Bank",
      icon: "🏦",
      description: "BCA, Mandiri, BRI, BNI",
      recommended: true,
    },
    {
      name: "E-Wallet",
      icon: "📱",
      description: "GoPay, OVO, DANA, ShopeePay",
    },
    {
      name: "QRIS",
      icon: "💳",
      description: "Semua e-wallet & bank",
    },
    {
      name: "Virtual Account",
      icon: "🔢",
      description: "Semua bank di Indonesia",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-600/20 via-transparent to-red-800/20"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge
              variant="secondary"
              className="mb-6 bg-white/20 text-white border-0"
            >
              <Heart className="w-4 h-4 mr-2" />
              Program Donasi & Infaq
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Donasi untuk{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                HILMI
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 leading-relaxed">
              Bantu kami mengembangkan program dan kegiatan untuk pelajar muslim
              di seluruh Indonesia
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">Rp 500M+</div>
                <div className="text-sm text-red-200">Total Donasi</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">10K+</div>
                <div className="text-sm text-red-200">Donatur Aktif</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm text-red-200">Transparan</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-sm text-red-200">Pelajar Terbantu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50 dark:from-gray-900 dark:to-red-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Dampak Donasi Anda
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Setiap rupiah yang Anda berikan akan membawa perubahan nyata untuk
              generasi muda Islam
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">1500+</CardTitle>
                <CardDescription>Pelajar Lulus Program Qur'an</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">500+</CardTitle>
                <CardDescription>Keluarga Terbantu</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">120+</CardTitle>
                <CardDescription>Beasiswa Diberikan</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">800+</CardTitle>
                <CardDescription>Remaja Terlatih</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Donasi Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Program Donasi
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pilih program yang sesuai dengan niat baik Anda untuk membantu
              sesama
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <Card
                key={program.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-xl"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${program.color} rounded-t-xl`}
                ></div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-full flex items-center justify-center mb-4`}
                      >
                        <program.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl mb-2">
                        {program.title}
                      </CardTitle>
                      <CardDescription>{program.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">
                          Progress
                        </span>
                        <span className="text-sm font-semibold">
                          {Math.round(
                            (program.collected / program.target) * 100
                          )}
                          %
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`bg-gradient-to-r ${program.color} h-3 rounded-full transition-all duration-500`}
                          style={{
                            width: `${(program.collected / program.target) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-muted-foreground">
                          Terkumpul
                        </div>
                        <div className="font-bold text-lg">
                          Rp {program.collected.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          Target
                        </div>
                        <div className="font-semibold">
                          Rp {program.target.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
                        {program.impact}
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
                      <Heart className="mr-2 h-4 w-4" />
                      Donasi Sekarang
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Donation Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-800 dark:to-orange-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Donasi Cepat
              </h2>
              <p className="text-xl text-muted-foreground">
                Pilih nominal donasi atau masukkan jumlah custom
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {quickAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount.toString())}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedAmount === amount.toString()
                      ? "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-600"
                      : "border-gray-200 hover:border-red-300 hover:bg-red-50/50"
                  }`}
                >
                  <div className="text-lg font-bold">
                    Rp {amount.toLocaleString()}
                  </div>
                </button>
              ))}
            </div>

            <div className="text-center mb-8">
              <div className="text-lg text-muted-foreground mb-4">
                Atau masukkan jumlah custom
              </div>
              <div className="max-w-sm mx-auto">
                <Input
                  type="number"
                  placeholder="Masukkan jumlah donasi"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount("");
                  }}
                  className="text-center text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Donasi Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Form Donasi</CardTitle>
                  <CardDescription>
                    Isi form di bawah ini untuk melakukan donasi. Semua data
                    akan dijaga kerahasiaannya.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nama">Nama Lengkap *</Label>
                        <Input
                          id="nama"
                          name="nama"
                          value={formData.nama}
                          onChange={handleInputChange}
                          required
                          placeholder="Masukkan nama lengkap"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="contoh@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="telepon">Nomor Telepon</Label>
                        <Input
                          id="telepon"
                          name="telepon"
                          value={formData.telepon}
                          onChange={handleInputChange}
                          placeholder="081234567890"
                        />
                      </div>
                      <div>
                        <Label htmlFor="program">Pilih Program</Label>
                        <select
                          id="program"
                          name="program"
                          value={formData.program}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              program: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          aria-label="Pilih program donasi"
                        >
                          <option value="">Pilih program donasi</option>
                          {programs.map((program) => (
                            <option key={program.id} value={program.id}>
                              {program.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="jumlah">Jumlah Donasi (Rp) *</Label>
                      <Input
                        id="jumlah"
                        name="jumlah"
                        type="number"
                        value={
                          selectedAmount || customAmount || formData.jumlah
                        }
                        onChange={handleInputChange}
                        required
                        placeholder="100000"
                        min="10000"
                        className="text-lg"
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        Minimal donasi Rp 10.000
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="pesan">Pesan atau Doa (Opsional)</Label>
                      <Textarea
                        id="pesan"
                        name="pesan"
                        value={formData.pesan}
                        onChange={handleInputChange}
                        placeholder="Tulis pesan atau doa Anda untuk para penerima manfaat..."
                        rows={4}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="anonim"
                        name="anonim"
                        checked={formData.anonim}
                        onChange={handleInputChange}
                        className="rounded"
                      />
                      <Label htmlFor="anonim">
                        Saya ingin donasi sebagai anonim
                      </Label>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Heart className="mr-2 h-4 w-4" />
                      Kirim Donasi Sekarang
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              {/* Transparansi */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-green-600" />
                    Transparansi Donasi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">
                        Laporan keuangan publik setiap bulan
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">Audit independen tahunan</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">
                        Update real-time penggunaan dana
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">
                        Sertifikat donasi untuk setiap donatur
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card>
                <CardHeader>
                  <CardTitle>Metode Pembayaran</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.name}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{method.icon}</span>
                          <div>
                            <div className="font-medium">{method.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {method.description}
                            </div>
                          </div>
                        </div>
                        {method.recommended && (
                          <Badge variant="secondary">Rekomendasi</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Hubungi Kami</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">+62 821-2345-6789</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">donasi@hilmi.or.id</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        Jl. Sultan Alauddin No. 123, Makassar
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Apa Kata Mereka
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kisah inspiratif dari para donatur dan penerima manfaat
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.message}"
                  </p>
                  <div className="flex items-center text-sm">
                    <Gift className="h-4 w-4 mr-2 text-red-500" />
                    <span className="font-semibold">{testimonial.amount}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="text-xl text-muted-foreground">
                Temukan jawaban atas pertanyaan umum seputar donasi
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Bagaimana cara melakukan donasi?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Anda dapat melakukan donasi melalui transfer bank, e-wallet,
                    QRIS, atau virtual account. Pilih program yang ingin Anda
                    dukung, isi form donasi, dan ikuti instruksi pembayaran.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Apakah donasi saya bisa dikurangkan dari pajak?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ya, HILMI memiliki NPWP dan surat keterangan resmi dari
                    Kementerian Keuangan. Anda akan menerima bukti transfer yang
                    dapat digunakan untuk pengurangan pajak.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Bagaimana saya tahu donasi saya digunakan?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Kami menyediakan laporan penggunaan dana secara transparan
                    setiap bulan melalui website, email, dan media sosial. Anda
                    juga akan menerima update langsung via email.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mari Berbagi Kebaikan Bersama
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Setiap donasi Anda akan membantu mengembangkan program dan kegiatan
            untuk pelajar muslim di seluruh Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100"
            >
              <Heart className="mr-2 h-4 w-4" />
              Donasi Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Phone className="mr-2 h-4 w-4" />
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
