"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  Menu,
  X,
  Home,
  Users,
  Calendar,
  BookOpen,
  Heart,
  User,
  LogOut,
  Sparkles,
  Star,
  Moon,
  Sun,
} from "lucide-react";
import { useUser, SignOutButton } from "@clerk/nextjs";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { user, isSignedIn } = useUser();

  const navigation = [
    { name: "Beranda", href: "/", icon: Home },
    { name: "Tentang", href: "/tentang", icon: Users },
    { name: "Kegiatan", href: "/kegiatan", icon: Calendar },
    { name: "Pusat Ilmu", href: "/artikel", icon: BookOpen },
    { name: "Donasi", href: "/donasi", icon: Heart },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-800`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Enhanced for dark mode */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 dark:from-green-400 dark:to-emerald-500 rounded-xl flex items-center justify-center shadow-lg dark:shadow-green-400/25 transition-all duration-300 transform group-hover:scale-110">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
                HILMI
              </span>
              <p className="text-xs text-gray-600 dark:text-gray-400 -mt-1">
                Organisasi Islam Modern
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - Enhanced for dark mode */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 shadow-sm"
                      : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 transition-transform duration-300 ${isActive(item.href) ? "scale-110" : "group-hover:scale-110"}`}
                  />
                  <span>{item.name}</span>
                  {isActive(item.href) && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-500 dark:bg-green-400 rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Auth Buttons & Theme Toggle - Enhanced for dark mode */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle */}
            <ThemeToggle />

            {isSignedIn ? (
              <div className="flex items-center space-x-3">
                <Link href="/dashboard">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <SignOutButton>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Keluar
                  </Button>
                </SignOutButton>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link href="/sign-in">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
                  >
                    Masuk
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-400 dark:to-emerald-500 hover:from-green-600 hover:to-emerald-700 dark:hover:from-green-500 dark:hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Daftar
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button - Enhanced for dark mode */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle for Mobile */}
            <ThemeToggle />

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced for dark mode */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-xl">
            <div className="px-4 py-4 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30"
                        : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                    {isActive(item.href) && (
                      <Star className="h-4 w-4 ml-auto text-green-500 dark:text-green-400" />
                    )}
                  </Link>
                );
              })}

              {/* Mobile Auth - Enhanced for dark mode */}
              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-800">
                {isSignedIn ? (
                  <div className="space-y-2">
                    <Link href="/dashboard">
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left dark:border-gray-700 dark:text-gray-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <User className="h-4 w-4 mr-2" />
                        Dashboard
                      </Button>
                    </Link>
                    <SignOutButton>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Keluar
                      </Button>
                    </SignOutButton>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link href="/sign-in">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left dark:text-gray-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Masuk
                      </Button>
                    </Link>
                    <Link href="/sign-up">
                      <Button
                        className="w-full justify-start text-left bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-400 dark:to-emerald-500 hover:from-green-600 hover:to-emerald-700 dark:hover:from-green-500 dark:hover:to-emerald-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Sparkles className="h-4 w-4 mr-2" />
                        Daftar Sekarang
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
