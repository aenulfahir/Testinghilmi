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
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Users,
  User,
  Mail,
  Phone,
  Calendar,
  Shield,
  Eye,
  MoreVertical,
} from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "admin" | "moderator" | "user" | "guest";
  status: "active" | "inactive" | "suspended";
  avatar: string;
  joinDate: string;
  lastLogin: string;
  totalEvents: number;
  totalDonations: number;
}

const initialUser: User = {
  id: "",
  name: "",
  email: "",
  phone: "",
  role: "user",
  status: "active",
  avatar: "",
  joinDate: "",
  lastLogin: "",
  totalEvents: 0,
  totalDonations: 0,
};

export default function AdminPenggunaPage() {
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "Ahmad Hidayat",
      email: "ahmad@hilmi.org",
      phone: "+62 812-3456-7890",
      role: "admin",
      status: "active",
      avatar: "/api/placeholder/100/100",
      joinDate: "2024-01-15",
      lastLogin: "2025-01-20",
      totalEvents: 12,
      totalDonations: 2500000,
    },
    {
      id: "2",
      name: "Siti Nurhaliza",
      email: "siti@hilmi.org",
      phone: "+62 813-9876-5432",
      role: "moderator",
      status: "active",
      avatar: "/api/placeholder/100/100",
      joinDate: "2024-03-10",
      lastLogin: "2025-01-19",
      totalEvents: 8,
      totalDonations: 1500000,
    },
    {
      id: "3",
      name: "Muhammad Ali",
      email: "muhammad@hilmi.org",
      phone: "+62 814-5678-9012",
      role: "user",
      status: "active",
      avatar: "/api/placeholder/100/100",
      joinDate: "2024-06-20",
      lastLogin: "2025-01-18",
      totalEvents: 5,
      totalDonations: 500000,
    },
    {
      id: "4",
      name: "Fatimah Azzahra",
      email: "fatimah@hilmi.org",
      phone: "+62 815-1234-5678",
      role: "user",
      status: "inactive",
      avatar: "/api/placeholder/100/100",
      joinDate: "2024-08-05",
      lastLogin: "2024-12-15",
      totalEvents: 2,
      totalDonations: 200000,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = filterRole === "all" || user.role === filterRole;
    const matchesStatus = filterStatus === "all" || user.status === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-500";
      case "moderator":
        return "bg-blue-500";
      case "user":
        return "bg-green-500";
      case "guest":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  const getRoleText = (role: string) => {
    switch (role) {
      case "admin":
        return "Admin";
      case "moderator":
        return "Moderator";
      case "user":
        return "Pengguna";
      case "guest":
        return "Tamu";
      default:
        return role;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "inactive":
        return "bg-yellow-500";
      case "suspended":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Aktif";
      case "inactive":
        return "Tidak Aktif";
      case "suspended":
        return "Ditangguhkan";
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            Kelola Pengguna
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Manajemen pengguna dan akses HILMI
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
            <Plus className="mr-2 h-4 w-4" />
            Tambah Pengguna
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Total Pengguna
            </CardTitle>
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {users.length}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              <span className="text-green-500">
                {users.filter((u) => u.status === "active").length}
              </span>{" "}
              aktif
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Admin & Moderator
            </CardTitle>
            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
              <Shield className="h-4 w-4 text-red-600 dark:text-red-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {users.filter((u) => u.role === "admin" || u.role === "moderator").length}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Akses penuh
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Pengguna Baru
            </CardTitle>
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <User className="h-4 w-4 text-green-600 dark:text-green-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {users.filter((u) => {
                const joinDate = new Date(u.joinDate);
                const thirtyDaysAgo = new Date();
                thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
                return joinDate > thirtyDaysAgo;
              }).length}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              30 hari terakhir
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Tidak Aktif
            </CardTitle>
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
              <Calendar className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {users.filter((u) => u.status === "inactive").length}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Perlu perhatian
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Cari pengguna..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600"
              />
            </div>
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-md bg-white/50 dark:bg-slate-700/50"
              title="Filter berdasarkan peran"
            >
              <option value="all">Semua Peran</option>
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
              <option value="user">Pengguna</option>
              <option value="guest">Tamu</option>
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-md bg-white/50 dark:bg-slate-700/50"
              title="Filter berdasarkan status"
            >
              <option value="all">Semua Status</option>
              <option value="active">Aktif</option>
              <option value="inactive">Tidak Aktif</option>
              <option value="suspended">Ditangguhkan</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Users Grid */}
      <div className="grid gap-6">
        {filteredUsers.map((user) => (
          <Card
            key={user.id}
            className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {user.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <CardTitle className="text-lg text-slate-900 dark:text-slate-100">
                      {user.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {user.email}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge
                    className={`${getRoleColor(user.role)} text-white`}
                  >
                    {getRoleText(user.role)}
                  </Badge>
                  <Badge
                    className={`${getStatusColor(user.status)} text-white`}
                  >
                    {getStatusText(user.status)}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-slate-400" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-slate-400" />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-slate-400" />
                  <span>
                    Bergabung: {new Date(user.joinDate).toLocaleDateString("id-ID")}
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-slate-400" />
                  <span>{user.totalEvents} kegiatan</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Login terakhir: {new Date(user.lastLogin).toLocaleDateString("id-ID")}
                  </span>
                  <span className="text-sm font-medium">
                    Total donasi: Rp {user.totalDonations.toLocaleString()}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
