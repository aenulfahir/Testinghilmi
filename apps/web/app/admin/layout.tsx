"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  Users,
  Settings,
  BarChart3,
  DollarSign,
  Bell,
  Search,
  Menu,
  X,
  LogOut,
  User,
  Home,
  BookOpen,
  MessageSquare,
  Image,
  Database,
  Shield,
  HelpCircle,
  Plus,
  Upload,
  TrendingUp,
  Activity,
  Eye,
  Heart,
  Star,
  Zap,
  Target,
  Award,
  Lightbulb,
  Rocket,
  Sparkles,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import { useUser, SignOutButton } from "@clerk/nextjs";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useUser();

  const navigation = [
    { 
      name: "Dashboard", 
      href: "/admin", 
      icon: LayoutDashboard,
      description: "Overview & Analytics",
      badge: null,
      color: "from-blue-500 to-indigo-600"
    },
    { 
      name: "Artikel", 
      href: "/admin/artikel", 
      icon: BookOpen,
      description: "Kelola Konten Artikel",
      badge: "45",
      color: "from-green-500 to-emerald-600"
    },
    { 
      name: "Kegiatan", 
      href: "/admin/kegiatan", 
      icon: Calendar,
      description: "Manajemen Event",
      badge: "24",
      color: "from-purple-500 to-violet-600"
    },
    { 
      name: "Pengguna", 
      href: "/admin/pengguna", 
      icon: Users,
      description: "User Management",
      badge: "156",
      color: "from-orange-500 to-red-600"
    },
    { 
      name: "Media", 
      href: "/admin/media", 
      icon: Image,
      description: "File & Media Storage",
      badge: null,
      color: "from-pink-500 to-rose-600"
    },
    { 
      name: "Analytics", 
      href: "/admin/analytics", 
      icon: BarChart3,
      description: "Data & Reports",
      badge: null,
      color: "from-cyan-500 to-blue-600"
    },
    { 
      name: "Pengaturan", 
      href: "/admin/pengaturan", 
      icon: Settings,
      description: "System Settings",
      badge: null,
      color: "from-slate-500 to-gray-600"
    },
  ];

  const quickActions = [
    { name: "Artikel Baru", href: "/admin/artikel/new", icon: Plus, color: "bg-blue-500 hover:bg-blue-600" },
    { name: "Event Baru", href: "/admin/kegiatan/new", icon: Calendar, color: "bg-green-500 hover:bg-green-600" },
    { name: "Upload Media", href: "/admin/media/upload", icon: Upload, color: "bg-purple-500 hover:bg-purple-600" },
    { name: "Analytics", href: "/admin/analytics", icon: TrendingUp, color: "bg-orange-500 hover:bg-orange-600" },
  ];

  const stats = [
    { name: "Total Users", value: "2,543", change: "+12%", icon: Users, color: "text-blue-600" },
    { name: "Active Events", value: "24", change: "+8%", icon: Calendar, color: "text-green-600" },
    { name: "Articles", value: "156", change: "+23%", icon: BookOpen, color: "text-purple-600" },
    { name: "Media Files", value: "1.2k", change: "+5%", icon: Image, color: "text-orange-600" },
  ];

  const isActive = (href: string) => {
    if (href === "/admin") {
      return pathname === "/admin";
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden" 
          onClick={() => setSidebarOpen(false)} 
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="flex h-full flex-col bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 shadow-2xl">
          {/* Header */}
          <div className="flex h-20 items-center justify-between px-6 border-b border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  HILMI Admin
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Management Panel</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="px-6 py-4 border-b border-slate-200/50 dark:border-slate-700/50">
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.name} className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3">
                    <div className="flex items-center justify-between">
                      <Icon className={`h-5 w-5 ${stat.color}`} />
                      <span className="text-xs font-medium text-green-600 dark:text-green-400">
                        {stat.change}
                      </span>
                    </div>
                    <div className="mt-2">
                      <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{stat.value}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{stat.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 px-2">
              Main Navigation
            </p>
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                    active
                      ? `bg-gradient-to-r ${item.color} text-white shadow-lg transform scale-105`
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100 hover:scale-105"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      {item.badge && (
                        <Badge 
                          variant={active ? "secondary" : "outline"} 
                          className={`text-xs ${active ? 'bg-white/20 text-white border-white/30' : ''}`}
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    <div className={`text-xs mt-1 ${active ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'}`}>
                      {item.description}
                    </div>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Quick Actions */}
          <div className="px-4 py-6 border-t border-slate-200/50 dark:border-slate-700/50">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 px-2">
              Quick Actions
            </p>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={action.name}
                    href={action.href}
                    className="flex flex-col items-center p-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 transition-all duration-200 hover:scale-105"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <div className={`w-10 h-10 ${action.color} rounded-xl flex items-center justify-center mb-2 shadow-lg transition-colors duration-200`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300 text-center">
                      {action.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-80">
        {/* Top navigation */}
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              >
                <Menu className="h-5 w-5" />
              </Button>
              
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>

              {/* User menu */}
              <div className="flex items-center space-x-3">
                <div className="hidden md:block text-right">
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                    {user?.firstName} {user?.lastName}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Administrator</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <SignOutButton>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400"
                  >
                    <LogOut className="h-4 w-4" />
                  </Button>
                </SignOutButton>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
