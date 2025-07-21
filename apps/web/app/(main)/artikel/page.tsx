"use client";

import { useState, useEffect } from "react";
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
  User,
  Eye,
  Tag,
  Search,
  Filter,
  TrendingUp,
  BookOpen,
  Share2,
  Bookmark,
  Heart,
  MessageCircle,
  ArrowRight,
  Star,
  ExternalLink,
  ChevronRight,
  XCircle,
  Clock3,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  views: number;
  likes: number;
  comments: number;
  isFeatured: boolean;
  difficulty: "Pemula" | "Menengah" | "Lanjutan";
  lastUpdated: string;
}

const articles: Article[] = [
  {
    id: "1",
    title: "Memahami Al-Quran: Panduan Praktis untuk Pemula",
    excerpt:
      "Panduan lengkap untuk memulai perjalanan memahami Al-Quran dengan metode yang efektif dan menyenangkan.",
    content: "Lorem ipsum dolor sit amet...",
    author: "Ustadz Ahmad Fauzan",
    authorImage: "/api/placeholder/50/50",
    date: "15 Januari 2025",
    lastUpdated: "20 Januari 2025",
    readTime: "8 min baca",
    category: "Al-Quran",
    image: "/api/placeholder/600/400",
    tags: ["Al-Quran", "Pemula", "Tadabbur", "Tajwid"],
    views: 1250,
    likes: 89,
    comments: 23,
    isFeatured: true,
    difficulty: "Pemula",
  },
  {
    id: "2",
    title: "Generasi Muda dan Tantangan Era Digital",
    excerpt:
      "Bagaimana generasi muda muslim bisa tetap istiqomah di tengah tantangan digital yang semakin kompleks.",
    content: "Lorem ipsum dolor sit amet...",
    author: "Dr. Siti Nurhaliza",
    authorImage: "/api/placeholder/50/50",
    date: "12 Januari 2025",
    lastUpdated: "18 Januari 2025",
    readTime: "6 min baca",
    category: "Generasi Muda",
    image: "/api/placeholder/600/400",
    tags: ["Generasi Muda", "Digital", "Tantangan", "Solusi"],
    views: 890,
    likes: 67,
    comments: 15,
    isFeatured: true,
    difficulty: "Menengah",
  },
  {
    id: "3",
    title: "Kiat Sukses Menjadi Pemimpin Islam yang Berintegritas",
    excerpt:
      "Panduan menjadi pemimpin yang berintegritas tinggi dengan nilai-nilai Islam sebagai fondasi utama.",
    content: "Lorem ipsum dolor sit amet...",
    author: "Prof. Muhammad Rizal",
    authorImage: "/api/placeholder/50/50",
    date: "10 Januari 2025",
    lastUpdated: "15 Januari 2025",
    readTime: "10 min baca",
    category: "Kepemimpinan",
    image: "/api/placeholder/600/400",
    tags: ["Kepemimpinan", "Integritas", "Islam", "Karakter"],
    views: 567,
    likes: 45,
    comments: 12,
    isFeatured: false,
    difficulty: "Lanjutan",
  },
  {
    id: "4",
    title: "Membangun Karakter Islami di Era Modern",
    excerpt:
      "Strategi membangun karakter yang kuat berdasarkan nilai-nilai Islam dalam konteks kehidupan modern.",
    content: "Lorem ipsum dolor sit amet...",
    author: "Ustadzah Fatimah Az-Zahra",
    authorImage: "/api/placeholder/50/50",
    date: "8 Januari 2025",
    lastUpdated: "12 Januari 2025",
    readTime: "7 min baca",
    category: "Karakter",
    image: "/api/placeholder/600/400",
    tags: ["Karakter", "Islam", "Modern", "Pendidikan"],
    views: 432,
    likes: 34,
    comments: 8,
    isFeatured: false,
    difficulty: "Menengah",
  },
  {
    id: "5",
    title: "Pentingnya Pendidikan Islam untuk Generasi Muda",
    excerpt:
      "Mengapa pendidikan Islam sangat penting untuk membentuk generasi muda yang berkualitas.",
    content: "Lorem ipsum dolor sit amet...",
    author: "Dr. Abdullah Al-Mansyur",
    authorImage: "/api/placeholder/50/50",
    date: "5 Januari 2025",
    lastUpdated: "10 Januari 2025",
    readTime: "9 min baca",
    category: "Pendidikan",
    image: "/api/placeholder/600/400",
    tags: ["Pendidikan", "Islam", "Generasi Muda", "Masa Depan"],
    views: 789,
    likes: 56,
    comments: 19,
    isFeatured: true,
    difficulty: "Pemula",
  },
  {
    id: "6",
    title: "Tips Menjaga Iman di Tengah Kesibukan",
    excerpt:
      "Cara praktis menjaga keimanan dan ketakwaan di tengah kesibukan sekolah dan aktivitas.",
    content: "Lorem ipsum dolor sit amet...",
    author: "Ustadz Ibrahim Al-Jawi",
    authorImage: "/api/placeholder/50/50",
    date: "3 Januari 2025",
    lastUpdated: "8 Januari 2025",
    readTime: "5 min baca",
    category: "Spiritual",
    image: "/api/placeholder/600/400",
    tags: ["Iman", "Spiritual", "Kesibukan", "Tips"],
    views: 654,
    likes: 78,
    comments: 25,
    isFeatured: false,
    difficulty: "Pemula",
  },
];

const categories = [
  "Semua",
  "Al-Quran",
  "Generasi Muda",
  "Kepemimpinan",
  "Karakter",
  "Pendidikan",
  "Spiritual",
];
const difficultyLevels = ["Semua", "Pemula", "Menengah", "Lanjutan"];
const sortOptions = ["Terbaru", "Populer", "Paling Banyak Dibaca", "Terlama"];

export default function ArtikelPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Semua");
  const [selectedSort, setSelectedSort] = useState("Terbaru");
  const [searchQuery, setSearchQuery] = useState("");
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Pemula":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Menengah":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Lanjutan":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  };

  const filteredArticles = articles
    .filter((article) => {
      const matchesCategory =
        selectedCategory === "Semua" || article.category === selectedCategory;
      const matchesDifficulty =
        selectedDifficulty === "Semua" ||
        article.difficulty === selectedDifficulty;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesFeatured = !featuredOnly || article.isFeatured;
      return (
        matchesCategory && matchesDifficulty && matchesSearch && matchesFeatured
      );
    })
    .sort((a, b) => {
      switch (selectedSort) {
        case "Populer":
          return b.likes - a.likes;
        case "Paling Banyak Dibaca":
          return b.views - a.views;
        case "Terlama":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-700 dark:via-indigo-700 dark:to-purple-700">
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pusat Ilmu
          </h1>
          <p className="text-xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto">
            Kumpulan artikel, panduan, dan wawasan Islam untuk memperkaya
            pengetahuan dan spiritualitas Anda
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm -mt-10 mx-4 rounded-2xl shadow-xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {articles.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Artikel
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {articles.reduce((sum, a) => sum + a.views, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Total Views
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {articles.reduce((sum, a) => sum + a.likes, 0)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Likes
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {articles.reduce((sum, a) => sum + a.comments, 0)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Komentar
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari artikel berdasarkan judul, isi, atau tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  aria-label="Clear search"
                  title="Clear search"
                >
                  <XCircle className="h-5 w-5" />
                </button>
              )}
            </div>

            <div className="flex flex-col gap-4 w-full lg:w-auto">
              {/* Category Filter */}
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Kategori
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      type="button"
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                        selectedCategory === category
                          ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:shadow-md"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty Filter */}
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Level Kesulitan
                </h3>
                <div className="flex flex-wrap gap-2">
                  {difficultyLevels.map((level) => (
                    <button
                      type="button"
                      key={level}
                      onClick={() => setSelectedDifficulty(level)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                        selectedDifficulty === level
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900 hover:shadow-md"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                {/* Sort */}
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  aria-label="Urutkan artikel"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                {/* Featured Toggle */}
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={featuredOnly}
                    onChange={(e) => setFeaturedOnly(e.target.checked)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 transition-all"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors">
                    Tampilkan Unggulan
                  </span>
                </label>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("Semua");
                    setSelectedDifficulty("Semua");
                    setSelectedSort("Terbaru");
                    setFeaturedOnly(false);
                    setSearchQuery("");
                  }}
                  className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  Reset Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredOnly &&
        filteredArticles.filter((a) => a.isFeatured).length > 0 && (
          <section className="py-8">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-yellow-500" />
                Artikel Unggulan
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredArticles
                  .filter((a) => a.isFeatured)
                  .slice(0, 2)
                  .map((article) => (
                    <Card
                      key={article.id}
                      className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-xl bg-white dark:bg-gray-800 overflow-hidden"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 dark:from-blue-500 dark:via-indigo-600 dark:to-purple-700"></div>
                        <div className="absolute inset-0 bg-black/20 dark:bg-black/40 group-hover:bg-black/10 transition-colors"></div>
                        <Badge className="absolute top-4 left-4 bg-yellow-400 text-gray-900">
                          <Star className="w-3 h-3 mr-1" />
                          Unggulan
                        </Badge>
                        <Badge
                          className={`absolute top-4 right-4 ${getDifficultyColor(article.difficulty)}`}
                        >
                          {article.difficulty}
                        </Badge>
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                            {article.category}
                          </Badge>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {article.readTime}
                          </span>
                        </div>
                        <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                          {article.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {article.author}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {article.date}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                            <span className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {article.views}
                            </span>
                            <span className="flex items-center">
                              <Heart className="w-4 h-4 mr-1" />
                              {article.likes}
                            </span>
                            <span className="flex items-center">
                              <MessageCircle className="w-4 h-4 mr-1" />
                              {article.comments}
                            </span>
                          </div>
                          <Link href={`/artikel/${article.id}`}>
                            <Button
                              size="sm"
                              className="bg-blue-500 hover:bg-blue-600"
                            >
                              Baca Selengkapnya
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </section>
        )}

      {/* Articles Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {selectedCategory === "Semua"
                ? "Semua Artikel"
                : selectedCategory}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {filteredArticles.length} artikel ditemukan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Card
                key={article.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-xl bg-white dark:bg-gray-800 overflow-hidden"
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 dark:from-blue-500 dark:via-indigo-600 dark:to-purple-700"></div>
                  <div className="absolute inset-0 bg-black/20 dark:bg-black/40 group-hover:bg-black/10 transition-colors"></div>

                  {/* Category and Difficulty */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <Badge className="bg-white/90 text-gray-900 backdrop-blur-sm">
                      {article.category}
                    </Badge>
                    <Badge
                      className={`${getDifficultyColor(article.difficulty)}`}
                    >
                      {article.difficulty}
                    </Badge>
                  </div>

                  {/* Read time */}
                  <Badge className="absolute top-4 right-4 bg-black/50 text-white">
                    {article.readTime}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Author and date */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {article.author}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {article.date}
                      </span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {article.views}
                      </span>
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {article.likes}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {article.comments}
                      </span>
                    </div>
                    <Link href={`/artikel/${article.id}`}>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-blue-500 hover:text-blue-600"
                      >
                        Baca
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>

                  {/* Last updated */}
                  <div className="mt-3 text-xs text-gray-500 dark:text-gray-400 flex items-center">
                    <Clock3 className="w-3 h-3 mr-1" />
                    Diperbarui: {article.lastUpdated}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Tidak ada artikel ditemukan
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Coba ubah filter atau kata kunci pencarian Anda
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Reading Tips Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Tips Membaca Artikel
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Panduan untuk membaca dan memahami artikel dengan lebih efektif
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Pilih Level Kesulitan
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sesuaikan artikel dengan level pemahaman Anda
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Waktu Baca Optimal
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Gunakan waktu baca sebagai panduan
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Bagikan Pengetahuan
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Bagikan artikel yang bermanfaat kepada orang lain
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-700 dark:via-indigo-700 dark:to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tetap Terupdate dengan Artikel Terbaru
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
            Dapatkan notifikasi artikel baru langsung ke email Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 dark:text-gray-100 bg-white/90 dark:bg-gray-800/90 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-100 dark:text-blue-400 dark:hover:bg-gray-700">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
