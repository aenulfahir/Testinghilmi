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
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  DollarSign,
  Search,
  Filter,
  ArrowRight,
  Star,
  Heart,
  Share2,
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
}

const categories = [
  "Semua",
  "Pendidikan Islam",
  "Kepemimpinan",
  "Pengembangan Diri",
  "Teknologi",
  "Sosial",
  "Ekonomi Syariah",
  "Kesehatan Mental",
  "Kajian Kitab",
  "Workshop Skill",
  "Webinar",
];

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Workshop Kepemimpinan Islam: Membangun Karakter Pemimpin Muda",
    slug: "workshop-kepemimpinan-islam-2025",
    description:
      "Workshop intensif 2 hari untuk membangun karakter pemimpin muda yang berintegritas, visioner, dan bertanggung jawab sesuai nilai-nilai Islam. Peserta akan belajar tentang prinsip-prinsip kepemimpinan dalam Islam, teknik komunikasi efektif, dan strategi membangun tim yang solid.",
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
        bio: "Pakar kepemimpinan Islam dengan 15 tahun pengalaman",
      },
    ],
    requirements: ["Laptop", "Notebook", "Alat tulis"],
  },
  {
    id: "2",
    title: "Webinar Teknologi dan Islam: Inovasi untuk Kebaikan",
    slug: "webinar-teknologi-islam-2025",
    description:
      "Webinar online yang membahas bagaimana teknologi dapat digunakan untuk kebaikan umat dan sesuai dengan nilai-nilai Islam. Diskusi tentang etika teknologi, AI dalam perspektif Islam, dan peluang karir di bidang teknologi.",
    shortDescription:
      "Webinar tentang pemanfaatan teknologi sesuai nilai-nilai Islam.",
    date: "2025-02-20",
    time: "19:00",
    endDate: "2025-02-20",
    endTime: "21:00",
    location: "Online via Zoom",
    venue: "Platform Zoom",
    category: "Teknologi",
    type: "online",
    price: 0,
    maxAttendees: 500,
    currentAttendees: 234,
    status: "published",
    isFeatured: false,
    isRegistrationOpen: true,
    registrationDeadline: "2025-02-19",
    image: "/api/placeholder/800/400",
    tags: ["teknologi", "islam", "webinar"],
    speakers: [
      {
        id: "2",
        name: "Ir. Fatimah Zahra, M.T.",
        title: "Tech Lead di Startup Islami",
        bio: "Engineer berpengalaman dalam pengembangan aplikasi Islami",
      },
    ],
    requirements: ["Koneksi internet stabil", "Aplikasi Zoom"],
  },
  {
    id: "3",
    title: "Kajian Kitab: Tafsir Al-Quran Surah Al-Baqarah",
    slug: "kajian-kitab-al-baqarah-2025",
    description:
      "Kajian mendalam tentang Surah Al-Baqarah dengan pendekatan kontemporer. Membahas ayat-ayat pilihan yang relevan dengan kehidupan sehari-hari dan tantangan zaman modern.",
    shortDescription:
      "Kajian mendalam Surah Al-Baqarah dengan pendekatan kontemporer.",
    date: "2025-02-25",
    time: "13:00",
    endDate: "2025-02-25",
    endTime: "15:00",
    location: "Masjid Al-Hikmah",
    venue: "Aula Utama",
    category: "Kajian Kitab",
    type: "offline",
    price: 0,
    maxAttendees: 100,
    currentAttendees: 67,
    status: "published",
    isFeatured: true,
    isRegistrationOpen: true,
    registrationDeadline: "2025-02-23",
    image: "/api/placeholder/800/400",
    tags: ["kajian", "quran", "tafsir"],
    speakers: [
      {
        id: "3",
        name: "Ustadz Dr. Muhammad Amin",
        title: "Ahli Tafsir Al-Quran",
        bio: "Doktor Tafsir dari Universitas Al-Azhar dengan 20 tahun pengalaman",
      },
    ],
    requirements: ["Al-Quran", "Notebook"],
  },
];

export default function KegiatanPage() {
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(mockEvents);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    let filtered = events;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    // Filter by category
    if (selectedCategory !== "Semua") {
      filtered = filtered.filter((event) => event.category === selectedCategory);
    }

    // Filter by type
    if (selectedType !== "all") {
      filtered = filtered.filter((event) => event.type === selectedType);
    }

    setFilteredEvents(filtered);
  }, [events, searchQuery, selectedCategory, selectedType]);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 dark:from-green-700 dark:via-emerald-700 dark:to-teal-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Kegiatan HILMI
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
            Bergabunglah dalam berbagai kegiatan pengembangan diri, kajian Islam, dan pemberdayaan umat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Lihat Semua Kegiatan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <Card className="mb-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Cari kegiatan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 rounded-md border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-100"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 rounded-md border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-100"
              >
                <option value="all">Semua Tipe</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="hybrid">Hybrid</option>
              </select>

              {/* Results Count */}
              <div className="flex items-center text-slate-600 dark:text-slate-400">
                <Filter className="h-4 w-4 mr-2" />
                <span>{filteredEvents.length} kegiatan ditemukan</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Events Grid */}
        <div className="grid gap-8">
          {filteredEvents.map((event) => (
            <Card
              key={event.id}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="md:flex">
                {/* Event Image */}
                <div className="md:w-1/3">
                  <div className="h-64 md:h-full bg-gradient-to-br from-green-400 to-emerald-600 relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={`${getStatusColor(event.status)} text-white`}>
                        {event.status === "published" ? "Terbuka" : event.status}
                      </Badge>
                      <Badge className={`${getTypeColor(event.type)} text-white`}>
                        {event.type.toUpperCase()}
                      </Badge>
                      {event.isFeatured && (
                        <Badge className="bg-yellow-500 text-white">
                          <Star className="mr-1 h-3 w-3" />
                          Unggulan
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Event Content */}
                <div className="md:w-2/3 p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="mb-2">
                        {event.category}
                      </Badge>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-xl md:text-2xl text-slate-900 dark:text-slate-100 mb-2">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400">
                      {event.shortDescription}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0">
                    {/* Event Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center text-slate-600 dark:text-slate-400">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center text-slate-600 dark:text-slate-400">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>
                          {formatTime(event.time)}
                          {event.endTime && ` - ${formatTime(event.endTime)}`}
                        </span>
                      </div>
                      <div className="flex items-center text-slate-600 dark:text-slate-400">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-slate-600 dark:text-slate-400">
                        <Users className="h-4 w-4 mr-2" />
                        <span>
                          {event.currentAttendees}/{event.maxAttendees} peserta
                        </span>
                      </div>
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1 text-slate-400" />
                          <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                            {event.price === 0
                              ? "Gratis"
                              : `Rp ${event.price.toLocaleString()}`}
                            </span>
                        </div>
                        <div className="flex gap-1">
                          {event.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Link href={`/kegiatan/${event.slug}`}>
                          <Button variant="outline">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Detail
                          </Button>
                        </Link>
                        {event.isRegistrationOpen && (
                          <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white">
                            Daftar Sekarang
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Tidak ada kegiatan ditemukan
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Coba ubah filter pencarian atau kata kunci Anda
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Semua");
                setSelectedType("all");
              }}
              variant="outline"
            >
              Reset Filter
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
