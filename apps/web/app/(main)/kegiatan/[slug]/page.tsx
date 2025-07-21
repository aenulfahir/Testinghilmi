"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
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
  Clock,
  MapPin,
  Users,
  DollarSign,
  ArrowLeft,
  Share2,
  Heart,
  User,
  CheckCircle,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  date: string;
  time: string;
  endDate?: string;
  endTime?: string;
  location: string;
  venue: string;
  category: string;
  type: "online" | "offline" | "hybrid";
  price: number;
  maxAttendees: number;
  currentAttendees: number;
  status: "draft" | "published" | "cancelled" | "completed";
  isFeatured: boolean;
  isRegistrationOpen: boolean;
  registrationDeadline: string;
  image: string;
  tags: string[];
  speakers: Array<{
    id: string;
    name: string;
    title: string;
    bio: string;
  }>;
  requirements: string[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
}

// Mock data - in real app, this would come from API
const mockEvents: Event[] = [
  {
    id: "1",
    title: "Workshop Kepemimpinan Islam: Membangun Karakter Pemimpin Muda",
    slug: "workshop-kepemimpinan-islam-2025",
    description:
      "Workshop intensif 2 hari untuk membangun karakter pemimpin muda yang berintegritas, visioner, dan bertanggung jawab sesuai nilai-nilai Islam. Peserta akan belajar tentang prinsip-prinsip kepemimpinan dalam Islam, teknik komunikasi efektif, dan strategi membangun tim yang solid.\n\nWorkshop ini dirancang khusus untuk mahasiswa dan fresh graduate yang ingin mengembangkan kemampuan kepemimpinan mereka. Dengan pendekatan yang menggabungkan teori dan praktik, peserta akan mendapatkan pengalaman langsung dalam memimpin tim dan mengelola konflik.\n\nMateri yang akan dibahas meliputi:\n- Prinsip-prinsip kepemimpinan dalam Islam\n- Teknik komunikasi efektif\n- Manajemen tim dan konflik\n- Pengembangan visi dan misi\n- Studi kasus kepemimpinan sukses",
    shortDescription:
      "Workshop intensif untuk membangun karakter pemimpin muda sesuai nilai-nilai Islam.",
    date: "2025-02-15",
    time: "08:00",
    endDate: "2025-02-16",
    endTime: "17:00",
    location: "Jakarta Convention Center",
    venue: "Hall A, JCC",
    category: "Kepemimpinan",
    type: "offline",
    price: 750000,
    maxAttendees: 150,
    currentAttendees: 89,
    status: "published",
    isFeatured: true,
    isRegistrationOpen: true,
    registrationDeadline: "2025-02-10",
    image: "/api/placeholder/800/400",
    tags: ["kepemimpinan", "islam", "pemuda"],
    speakers: [
      {
        id: "1",
        name: "Dr. Ahmad Hidayat",
        title: "Direktur Pusat Kepemimpinan Islam",
        bio: "Pakar kepemimpinan Islam dengan 15 tahun pengalaman dalam mengembangkan program leadership untuk generasi muda. Beliau telah melatih ribuan pemimpin muda di seluruh Indonesia.",
      },
      {
        id: "2",
        name: "Ustadz Muhammad Farid, M.A.",
        title: "Konsultan Pengembangan SDM",
        bio: "Praktisi dan akademisi di bidang pengembangan sumber daya manusia dengan fokus pada nilai-nilai Islam. Memiliki pengalaman 10 tahun dalam training dan coaching.",
      },
    ],
    requirements: ["Laptop", "Notebook", "Alat tulis", "Pakaian formal"],
    seoTitle: "Workshop Kepemimpinan Islam 2025 - HILMI",
    seoDescription:
      "Workshop intensif untuk membangun karakter pemimpin muda sesuai nilai-nilai Islam. Daftar sekarang!",
    seoKeywords: "workshop kepemimpinan, islam, pemuda, leadership",
  },
];

export default function EventDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const slug = params.slug as string;
    const foundEvent = mockEvents.find((e) => e.slug === slug);
    
    setTimeout(() => {
      setEvent(foundEvent || null);
      setLoading(false);
    }, 500);
  }, [params.slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (timeString: string) => {
    return timeString.substring(0, 5);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-500";
      case "draft":
        return "bg-yellow-500";
      case "cancelled":
        return "bg-red-500";
      case "completed":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "online":
        return "bg-blue-500";
      case "offline":
        return "bg-green-500";
      case "hybrid":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Memuat detail kegiatan...</p>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Kegiatan Tidak Ditemukan
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Maaf, kegiatan yang Anda cari tidak dapat ditemukan.
          </p>
          <Link href="/kegiatan">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Daftar Kegiatan
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 dark:from-green-700 dark:via-emerald-700 dark:to-teal-700 py-8">
        <div className="container mx-auto px-4">
          <Link href="/kegiatan">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Daftar Kegiatan
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Event Header */}
            <Card className="mb-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50">
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className={`${getStatusColor(event.status)} text-white`}>
                    {event.status === "published" ? "Terbuka" : event.status}
                  </Badge>
                  <Badge className={`${getTypeColor(event.type)} text-white`}>
                    {event.type.toUpperCase()}
                  </Badge>
                  <Badge variant="outline">{event.category}</Badge>
                  {event.isFeatured && (
                    <Badge className="bg-yellow-500 text-white">Unggulan</Badge>
                  )}
                </div>
                <CardTitle className="text-2xl md:text-3xl text-slate-900 dark:text-slate-100">
                  {event.title}
                </CardTitle>
                <CardDescription className="text-lg text-slate-600 dark:text-slate-400">
                  {event.shortDescription}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Event Image */}
            <Card className="mb-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
              <div className="h-64 md:h-96 bg-gradient-to-br from-green-400 to-emerald-600 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-end">
                    <div className="text-white">
                      <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                      <p className="text-green-100">{formatDate(event.date)}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Event Description */}
            <Card className="mb-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                  Deskripsi Kegiatan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  {event.description.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Speakers */}
            {event.speakers.length > 0 && (
              <Card className="mb-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                    Pembicara
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    {event.speakers.map((speaker) => (
                      <div key={speaker.id} className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                          <User className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                            {speaker.name}
                          </h4>
                          <p className="text-green-600 dark:text-green-400 mb-2">
                            {speaker.title}
                          </p>
                          <p className="text-slate-600 dark:text-slate-400">
                            {speaker.bio}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Requirements */}
            {event.requirements.length > 0 && (
              <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                    Yang Perlu Dibawa
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {event.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-slate-700 dark:text-slate-300">
                          {requirement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Registration Card */}
            <Card className="mb-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 sticky top-4">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                  Informasi Pendaftaran
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Price */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                    {event.price === 0 ? "Gratis" : `Rp ${event.price.toLocaleString()}`}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">Biaya Pendaftaran</p>
                </div>

                {/* Event Details */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-slate-600 dark:text-slate-400">
                    <Calendar className="h-4 w-4 mr-3" />
                    <div>
                      <div>{formatDate(event.date)}</div>
                      {event.endDate && event.endDate !== event.date && (
                        <div>s/d {formatDate(event.endDate)}</div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-400">
                    <Clock className="h-4 w-4 mr-3" />
                    <span>
                      {formatTime(event.time)}
                      {event.endTime && ` - ${formatTime(event.endTime)}`} WIB
                    </span>
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-400">
                    <MapPin className="h-4 w-4 mr-3" />
                    <div>
                      <div>{event.location}</div>
                      <div className="text-xs">{event.venue}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-400">
                    <Users className="h-4 w-4 mr-3" />
                    <span>
                      {event.currentAttendees}/{event.maxAttendees} peserta
                    </span>
                  </div>
                </div>

                {/* Registration Status */}
                <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                  {event.isRegistrationOpen ? (
                    <div className="space-y-3">
                      <div className="flex items-center text-green-600 dark:text-green-400">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        <span className="text-sm">Pendaftaran Terbuka</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Batas pendaftaran: {formatDate(event.registrationDeadline)}
                      </p>
                      <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white">
                        Daftar Sekarang
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center text-red-600 dark:text-red-400">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        <span className="text-sm">Pendaftaran Ditutup</span>
                      </div>
                      <Button disabled className="w-full">
                        Pendaftaran Ditutup
                      </Button>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                    Tags:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {event.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Share Card */}
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900 dark:text-slate-100">
                  Bagikan Kegiatan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
