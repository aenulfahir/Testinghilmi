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
  Edit,
  Trash2,
  Plus,
  Search,
  Eye,
  XCircle,
  Upload,
  Tag,
  User,
  Clock,
} from "lucide-react";
import Link from "next/link";

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  featuredImage: string;
  published: boolean;
  featured: boolean;
  readTime: number;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
}

const categories = [
  "Pendidikan Islam",
  "Kepemimpinan",
  "Pengembangan Diri",
  "Teknologi",
  "Sosial",
  "Ekonomi Syariah",
  "Kesehatan Mental",
  "Opini",
  "Berita",
  "Tutorial",
];

const initialArticle: Article = {
  id: "",
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  author: "",
  category: "",
  tags: [],
  image: "",
  featuredImage: "",
  published: false,
  featured: false,
  readTime: 0,
  seoTitle: "",
  seoDescription: "",
  seoKeywords: "",
};

export default function AdminArtikelPage() {
  const [articles, setArticles] = useState<Article[]>([
    {
      id: "1",
      title:
        "Pentingnya Pendidikan Islam di Era Digital: Membangun Generasi Qurani dan Teknologis",
      slug: "pentingnya-pendidikan-islam-era-digital",
      excerpt:
        "Bagaimana pendidikan Islam dapat menjadi fondasi kuat dalam menghadapi tantangan era digital sambil mempertahankan nilai-nilai keislaman.",
      content: "Lorem ipsum dolor sit amet...",
      author: "Dr. Ahmad Hidayat",
      category: "Pendidikan Islam",
      tags: ["pendidikan", "islam", "digital", "teknologi", "generasi-muda"],
      image: "/api/placeholder/800/400",
      featuredImage: "/api/placeholder/1200/600",
      published: true,
      featured: true,
      readTime: 8,
      seoTitle: "Pentingnya Pendidikan Islam di Era Digital - HILMI",
      seoDescription:
        "Bagaimana pendidikan Islam menjadi fondasi kuat dalam menghadapi tantangan era digital",
      seoKeywords: "pendidikan islam, era digital, generasi qurani, teknologi",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showForm, setShowForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [formData, setFormData] = useState<Article>(initialArticle);

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || article.category === filterCategory;
    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "published" && article.published) ||
      (filterStatus === "draft" && !article.published);
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    if (editingArticle) {
      setArticles(
        articles.map((a) =>
          a.id === editingArticle.id
            ? { ...formData, id: editingArticle.id, slug }
            : a
        )
      );
    } else {
      setArticles([
        ...articles,
        {
          ...formData,
          id: Date.now().toString(),
          slug,
        },
      ]);
    }

    setShowForm(false);
    setEditingArticle(null);
    resetForm();
  };

  const resetForm = () => {
    setFormData(initialArticle);
  };

  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setFormData(article);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setArticles(articles.filter((a) => a.id !== id));
  };

  const getStatusColor = (published: boolean) => {
    return published ? "bg-green-500" : "bg-yellow-500";
  };

  const getStatusText = (published: boolean) => {
    return published ? "Diterbitkan" : "Draft";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Kelola Artikel
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Manajemen konten artikel HILMI dengan fitur lengkap
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
                  setEditingArticle(null);
                  resetForm();
                  setShowForm(true);
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <Plus className="mr-2 h-4 w-4" />
                Tulis Artikel Baru
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <Card className="mb-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Cari artikel..."
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
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Articles Grid */}
        <div className="grid gap-6">
          {filteredArticles.map((article) => (
            <Card
              key={article.id}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge
                        className={`${getStatusColor(article.published)} text-white`}
                      >
                        {getStatusText(article.published)}
                      </Badge>
                      {article.featured && (
                        <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                          <Eye className="mr-1 h-3 w-3" />
                          Unggulan
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {article.excerpt}
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(article)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600"
                      onClick={() => handleDelete(article.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-1" />
                    <span>{article.category}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{article.readTime} min read</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/artikel/${article.slug}`} target="_blank">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-1 h-3 w-3" />
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
                  {editingArticle ? "Edit Artikel" : "Tulis Artikel Baru"}
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="title">Judul Artikel *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                        required
                        placeholder="Contoh: Pentingnya Pendidikan Islam di Era Digital"
                        className="bg-white/50 dark:bg-slate-700/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="author">Penulis *</Label>
                      <Input
                        id="author"
                        value={formData.author}
                        onChange={(e) =>
                          setFormData({ ...formData, author: e.target.value })
                        }
                        required
                        placeholder="Nama penulis"
                        className="bg-white/50 dark:bg-slate-700/50"
                      />
                    </div>
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
                      title="Pilih kategori artikel"
                    >
                      <option value="">Pilih kategori</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="excerpt">Ringkasan *</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) =>
                        setFormData({ ...formData, excerpt: e.target.value })
                      }
                      required
                      placeholder="Ringkasan singkat artikel (maks 200 karakter)"
                      rows={3}
                      maxLength={200}
                      className="bg-white/50 dark:bg-slate-700/50"
                    />
                  </div>

                  <div>
                    <Label htmlFor="content">Konten Artikel *</Label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) =>
                        setFormData({ ...formData, content: e.target.value })
                      }
                      required
                      placeholder="Isi konten artikel..."
                      rows={10}
                      className="bg-white/50 dark:bg-slate-700/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="tags">Tags (pisahkan dengan koma)</Label>
                      <Input
                        id="tags"
                        value={formData.tags.join(", ")}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            tags: e.target.value
                              .split(",")
                              .map((tag) => tag.trim())
                              .filter((tag) => tag),
                          })
                        }
                        placeholder="pendidikan, islam, digital"
                        className="bg-white/50 dark:bg-slate-700/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="readTime">
                        Estimasi Waktu Baca (menit)
                      </Label>
                      <Input
                        id="readTime"
                        type="number"
                        value={formData.readTime}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            readTime: parseInt(e.target.value) || 0,
                          })
                        }
                        placeholder="5"
                        className="bg-white/50 dark:bg-slate-700/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="published"
                        checked={formData.published}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            published: e.target.checked,
                          })
                        }
                        className="rounded"
                        title="Terbitkan artikel"
                      />
                      <Label htmlFor="published">Terbitkan Artikel</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="featured"
                        checked={formData.featured}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            featured: e.target.checked,
                          })
                        }
                        className="rounded"
                        title="Jadikan artikel unggulan"
                      />
                      <Label htmlFor="featured">Jadikan Unggulan</Label>
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
                      {editingArticle ? "Update" : "Tambah"} Artikel
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
