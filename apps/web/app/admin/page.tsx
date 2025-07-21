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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Activity,
  Users,
  Calendar,
  FileText,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3,
  PieChart,
  MoreVertical,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import Link from "next/link";

interface DashboardStats {
  totalEvents: number;
  activeEvents: number;
  totalArticles: number;
  publishedArticles: number;
  totalUsers: number;
  activeUsers: number;
  totalDonations: number;
  monthlyDonations: number;
}

interface RecentActivity {
  id: string;
  type: "event" | "article" | "user" | "donation";
  title: string;
  user: string;
  timestamp: string;
  status: "success" | "pending" | "failed";
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({
    totalEvents: 24,
    activeEvents: 8,
    totalArticles: 45,
    publishedArticles: 38,
    totalUsers: 156,
    activeUsers: 134,
    totalDonations: 125000000,
    monthlyDonations: 18500000,
  });

  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>([
    {
      id: "1",
      type: "event",
      title: "Workshop Kepemimpinan Islam",
      user: "Admin HILMI",
      timestamp: "2 jam yang lalu",
      status: "success",
    },
    {
      id: "2",
      type: "article",
      title: "Pentingnya Pendidikan Islam di Era Digital",
      user: "Editor Konten",
      timestamp: "5 jam yang lalu",
      status: "success",
    },
    {
      id: "3",
      type: "donation",
      title: "Donasi dari Ahmad Hidayat",
      user: "Sistem",
      timestamp: "1 hari yang lalu",
      status: "success",
    },
    {
      id: "4",
      type: "user",
      title: "Pendaftaran user baru: Siti Nurhaliza",
      user: "Sistem",
      timestamp: "2 hari yang lalu",
      status: "pending",
    },
  ]);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "event":
        return <Calendar className="h-4 w-4" />;
      case "article":
        return <FileText className="h-4 w-4" />;
      case "donation":
        return <DollarSign className="h-4 w-4" />;
      case "user":
        return <Users className="h-4 w-4" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "text-green-500";
      case "pending":
        return "text-yellow-500";
      case "failed":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            Dashboard
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Selamat datang di panel administrasi HILMI
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <BarChart3 className="mr-2 h-4 w-4" />
            Laporan
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Tambah Konten
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Total Kegiatan
            </CardTitle>
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {stats.totalEvents}
            </div>
            <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mt-1">
              <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-green-500">{stats.activeEvents}</span> aktif
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Total Artikel
            </CardTitle>
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <FileText className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {stats.totalArticles}
            </div>
            <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mt-1">
              <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-green-500">{stats.publishedArticles}</span> terbit
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Total Pengguna
            </CardTitle>
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <Users className="h-4 w-4 text-green-600 dark:text-green-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {stats.totalUsers}
            </div>
            <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mt-1">
              <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-green-500">{stats.activeUsers}</span> aktif
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Total Donasi
            </CardTitle>
            <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
              <DollarSign className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Rp {stats.totalDonations.toLocaleString()}
            </div>
            <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mt-1">
              <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-green-500">
                +Rp {stats.monthlyDonations.toLocaleString()}
              </span>{" "}
              bulan ini
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                Aksi Cepat
              </CardTitle>
              <CardDescription>
                Tambah konten baru dengan cepat
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/admin/kegiatan">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white h-12">
                    <Calendar className="mr-2 h-4 w-4" />
                    Tambah Kegiatan Baru
                  </Button>
                </Link>
                <Link href="/admin/artikel">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white h-12">
                    <FileText className="mr-2 h-4 w-4" />
                    Tulis Artikel Baru
                  </Button>
                </Link>
                <Link href="/admin/pengguna">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white h-12">
                    <Users className="mr-2 h-4 w-4" />
                    Kelola Pengguna
                  </Button>
                </Link>
                <Link href="/admin/pengaturan">
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white h-12">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Pengaturan Website
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                Aktivitas Terbaru
              </CardTitle>
              <CardDescription>Update terbaru dari sistem</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start space-x-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <div
                      className={`p-2 rounded-full ${
                        activity.status === "success"
                          ? "bg-green-100 dark:bg-green-900/30"
                          : "bg-yellow-100 dark:bg-yellow-900/30"
                      }`}
                    >
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                        {activity.title}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        oleh {activity.user} • {activity.timestamp}
                      </p>
                    </div>
                    <div className={`${getStatusColor(activity.status)}`}>
                      {activity.status === "success" ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <AlertCircle className="h-4 w-4" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Performance Overview */}
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-lg text-slate-900 dark:text-slate-100">
                Performa Bulan Ini
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Kunjungan Website
                    </span>
                    <span className="text-sm font-medium text-green-500">+23%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Registrasi Event
                    </span>
                    <span className="text-sm font-medium text-green-500">+45%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Donasi
                    </span>
                    <span className="text-sm font-medium text-green-500">+12%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-lg text-slate-900 dark:text-slate-100">
                Kegiatan Mendatang
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      Workshop Kepemimpinan
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      25 Jan 2025
                    </p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    45/60
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      Pesantren Kilat
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      1 Mar 2025
                    </p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    120/150
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
