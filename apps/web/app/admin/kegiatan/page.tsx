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
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  DollarSign,
  Edit,
  Trash2,
  Plus,
  Search,
  Eye,
  CheckCircle,
  XCircle,
  Upload,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  date: string;
  time: string;
  endDate: string;
  endTime: string;
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
  speakers: Speaker[];
  requirements: string[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
}

interface Speaker {
  id: string;
  name: string;
  title: string;
  bio: string;
}

const categories = [
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

const initialEvent: Event = {
  id: "",
  title: "",
  slug: "",
  description: "",
  shortDescription: "",
  date: "",
  time: "",
  endDate: "",
  endTime: "",
  location: "",
  venue: "",
  category: "",
  type: "offline",
  price: 0,
  maxAttendees: 0,
  currentAttendees: 0,
  status: "draft",
  isFeatured: false,
  isRegistrationOpen: true,
  registrationDeadline: "",
  image: "",
  tags: [],
  speakers: [],
  requirements: [],
  seoTitle: "",
  seoDescription: "",
  seoKeywords: "",
};

export default function AdminKegiatanPage() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      title: "Workshop Kepemimpinan Islam: Membangun Karakter Pemimpin Muda",
      slug: "workshop-kepemimpinan-islam-2025",
      description:
        "Workshop intensif 2 hari untuk membangun karakter pemimpin muda yang berintegritas, visioner, dan bertanggung jawab sesuai nilai-nilai Islam.",
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
      seoTitle: "Workshop Kepemimpinan Islam 2025",
      seoDescription:
        "Workshop intensif untuk membangun karakter pemimpin muda sesuai nilai-nilai Islam",
      seoKeywords: "workshop kepemimpinan, islam, pemuda",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState<Event>(initialEvent);

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || event.category === filterCategory;
    const matchesStatus =
      filterStatus === "all" || event.status === filterStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    if (editingEvent) {
      setEvents(
        events.map((e) =>
          e.id === editingEvent.id
            ? { ...formData, id: editingEvent.id, slug }
            : e
        )
      );
    } else {
      setEvents([
        ...events,
        {
          ...formData,
          id: Date.now().toString(),
          slug,
        },
      ]);
    }

    setShowForm(false);
    setEditingEvent(null);
    resetForm();
  };

  const resetForm = () => {
    setFormData(initialEvent);
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setFormData(event);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  const addSpeaker = () => {
    setFormData((prev) => ({
      ...prev,
      speakers: [
        ...prev.speakers,
        { id: Date.now().toString(), name: "", title: "", bio: "" },
      ],
    }));
  };

  const removeSpeaker = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      speakers: prev.speakers.filter((s) => s.id !== id),
    }));
  };

  const updateSpeaker = (id: string, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      speakers: prev.speakers.map((s) =>
        s.id === id ? { ...s, [field]: value } : s
      ),
    }));
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

  const getStatusText = (status: string) => {
    switch (status) {
      case "published":
        return "Diterbitkan";
      case "draft":
        return "Draft";
      case "cancelled":
        return "Dibatalkan";
      case "completed":
        return "Selesai";
      default:
        return status;
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Kelola Kegiatan
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Manajemen kegiatan dan event HILMI dengan fitur lengkap
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/admin">
                <Button
                  variant="outline"
                  className="border-slate-300 dark:border-slate-600"
                >
                  Kembali ke Dashboard
                </Button>
              </Link>
              <Button
                onClick={() => {
                  setEditingEvent(null);
                  resetForm();
                  setShowForm(true);
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <Plus className="mr-2 h-4 w-4" />
                Tambah Kegiatan Baru
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <Card className="mb-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Cari kegiatan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600"
                />
              </div>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-md bg-white/50 dark:bg-slate-700/50"
                title="Filter berdasarkan kategori"
              >
                <option value="all">Semua Kategori</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-md bg-white/50 dark:bg-slate-700/50"
                title="Filter berdasarkan status"
              >
                <option value="all">Semua Status</option>
                <option value="published">Diterbitkan</option>
                <option value="draft">Draft</option>
                <option value="cancelled">Dibatalkan</option>
                <option value="completed">Selesai</option>
              </select>
              <select
                value="all"
                className="px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-md bg-white/50 dark:bg-slate-700/50"
                title="Filter berdasarkan tipe"
              >
                <option value="all">Semua Tipe</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Events Grid */}
        <div className="grid gap-6">
          {filteredEvents.map((event) => (
            <Card
              key={event.id}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge
                        className={`${getStatusColor(event.status)} text-white`}
                      >
                        {getStatusText(event.status)}
                      </Badge>
                      <Badge
                        className={`${getTypeColor(event.type)} text-white`}
                      >
                        {event.type.toUpperCase()}
                      </Badge>
                      {event.isFeatured && (
                        <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                          <Eye className="mr-1 h-3 w-3" />
                          Unggulan
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {event.shortDescription}
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(event)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600"
                      onClick={() => handleDelete(event.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-slate-400" />
                    <span>
                      {new Date(event.date).toLocaleDateString("id-ID")} •{" "}
                      {event.time}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-slate-400" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-slate-400" />
                    <span>
                      {event.currentAttendees}/{event.maxAttendees} peserta
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline">{event.category}</Badge>
                    <span className="text-sm font-medium">
                      {event.price === 0
                        ? "Gratis"
                        : `Rp ${event.price.toLocaleString()}`}
                    </span>
                  </div>
                  <Link href={`/kegiatan/${event.slug}`} target="_blank">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Lihat
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {editingEvent ? "Edit Kegiatan" : "Tambah Kegiatan Baru"}
                </h2>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setShowForm(false);
                    resetForm();
                  }}
                  className="hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  <XCircle className="h-5 w-5" />
                </Button>
              </div>

              <form
                onSubmit={handleSubmit}
                className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]"
              >
                <div className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="title">Judul Kegiatan *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                        required
                        placeholder="Contoh: Workshop Kepemimpinan Islam 2025"
                        className="bg-white/50 dark:bg-slate-700/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Kategori *</Label>
                      <select
                        id="category"
                        value={formData.category}
                        onChange={(e) =>
                          setFormData({ ...formData, category: e.target.value })
                        }
                        required
                        className="w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-md bg-white/50 dark:bg-slate-700/50"
                        title="Pilih kategori kegiatan"
                      >
                        <option value="">Pilih kategori</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="shortDescription">
                      Deskripsi Singkat *
                    </Label>
                    <Textarea
                      id="shortDescription"
                      value={formData.shortDescription}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          shortDescription: e.target.value,
                        })
                      }
                      required
                      placeholder="Deskripsi singkat untuk preview"
                      rows={3}
                      maxLength={200}
                      className="bg-white/50 dark:bg-slate-700/50"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Deskripsi Lengkap *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      required
                      placeholder="Deskripsi lengkap kegiatan..."
                      rows={6}
                      className="bg-white/50 dark:bg-slate-700/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="date">Tanggal Mulai *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        required
                        className="bg-white/50 dark:bg-slate-700/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Waktu Mulai *</Label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                        required
                        className="bg-white/50 dark:bg-slate-700/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="endDate">Tanggal Selesai *</Label>
                      <Input
                        id="endDate"
                        type="date"
                        value={formData.endDate}
                        onChange={(e) =>
                          setFormData({ ...formData, endDate: e.target.value })
                        }
                        required
                        className="bg-white/50 dark:bg-slate-700/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="endTime">Waktu Selesai *</Label>
                      <Input
                        id="endTime"
                        type="time"
                        value={formData.endTime}
                        onChange={(e) =>
                          setFormData({ ...formData, endTime: e.target.value })
                        }
                        required
                        className="bg-white/50 dark:bg-slate-700/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="location">Lokasi *</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        required
                        placeholder="Contoh: Jakarta Convention Center"
                        className="bg-white/50 dark:bg-slate-700/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="venue">Venue Detail</Label>
                      <Input
                        id="venue"
                        value={formData.venue}
                        onChange={(e) =>
                          setFormData({ ...formData, venue: e.target.value })
                        }
                        placeholder="Contoh: Hall A, JCC"
                        className="bg-white/50 dark:bg-slate-700/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="type">Tipe Kegiatan *</Label>
                      <select
                        id="type"
                        value={formData.type}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            type: e.target.value as
                              | "online"
                              | "offline"
                              | "hybrid",
                          })
                        }
                        required
                        className="w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-md bg-white/50 dark:bg-slate-700/50"
                        title="Pilih tipe kegiatan"
                      >
                        <option value="offline">Offline</option>
                        <option value="online">Online</option>
                        <option value="hybrid">Hybrid</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="price">Harga Tiket *</Label>
                      <Input
                        id="price"
                        type="number"
                        value={formData.price}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            price: parseInt(e.target.value) || 0,
                          })
                        }
                        required
                        placeholder="0 untuk gratis"
                        className="bg-white/50 dark:bg-slate-700/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="maxAttendees">Maksimal Peserta *</Label>
                      <Input
                        id="maxAttendees"
                        type="number"
                        value={formData.maxAttendees}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            maxAttendees: parseInt(e.target.value) || 0,
                          })
                        }
                        required
                        className="bg-white/50 dark:bg-slate-700/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="registrationDeadline">
                        Batas Pendaftaran *
                      </Label>
                      <Input
                        id="registrationDeadline"
                        type="date"
                        value={formData.registrationDeadline}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            registrationDeadline: e.target.value,
                          })
                        }
                        required
                        className="bg-white/50 dark:bg-slate-700/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="isFeatured"
                        checked={formData.isFeatured}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            isFeatured: e.target.checked,
                          })
                        }
                        className="rounded"
                        title="Jadikan kegiatan unggulan"
                      />
                      <Label htmlFor="isFeatured">Jadikan Unggulan</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="isRegistrationOpen"
                        checked={formData.isRegistrationOpen}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            isRegistrationOpen: e.target.checked,
                          })
                        }
                        className="rounded"
                        title="Buka pendaftaran"
                      />
                      <Label htmlFor="isRegistrationOpen">
                        Buka Pendaftaran
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="published"
                        checked={formData.status === "published"}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            status: e.target.checked ? "published" : "draft",
                          })
                        }
                        className="rounded"
                        title="Terbitkan kegiatan"
                      />
                      <Label htmlFor="published">Terbitkan</Label>
                    </div>
                  </div>

                  <div>
                    <Label>Upload Gambar</Label>
                    <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-8 text-center hover:border-slate-400 dark:hover:border-slate-500 transition-colors">
                      <Upload className="mx-auto h-12 w-12 text-slate-400" />
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                        Drag & drop atau klik untuk upload gambar
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-500">
                        Maks. 5MB, format JPG/PNG
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="seoTitle">SEO Title</Label>
                      <Input
                        id="seoTitle"
                        value={formData.seoTitle}
                        onChange={(e) =>
                          setFormData({ ...formData, seoTitle: e.target.value })
                        }
                        placeholder="Judul untuk SEO"
                        className="bg-white/50 dark:bg-slate-700/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="seoKeywords">SEO Keywords</Label>
                      <Input
                        id="seoKeywords"
                        value={formData.seoKeywords}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            seoKeywords: e.target.value,
                          })
                        }
                        placeholder="keyword1, keyword2, keyword3"
                        className="bg-white/50 dark:bg-slate-700/50"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="seoDescription">SEO Description</Label>
                      <Textarea
                        id="seoDescription"
                        value={formData.seoDescription}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            seoDescription: e.target.value,
                          })
                        }
                        placeholder="Deskripsi untuk SEO"
                        rows={3}
                        className="bg-white/50 dark:bg-slate-700/50"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4 pt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setShowForm(false);
                        resetForm();
                      }}
                    >
                      Batal
                    </Button>
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      {editingEvent ? "Update" : "Tambah"} Kegiatan
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
