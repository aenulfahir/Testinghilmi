"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
  Globe,
  Send,
  Clock,
  Shield,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand - Enhanced */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <span className="text-2xl font-bold">HILMI</span>
                <p className="text-xs text-gray-400">Organisasi Islam Modern</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Himpunan Pelajar Muslim Indonesia - Wadah pengembangan diri
              pelajar muslim yang berorientasi pada keislaman, keilmuan, dan
              kemasyarakatan untuk membangun generasi Islam yang unggul.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links - Enhanced */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-400" />
              Menu Utama
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors group"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors group"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Tentang HILMI
                </Link>
              </li>
              <li>
                <Link
                  href="/kegiatan"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors group"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Program & Kegiatan
                </Link>
              </li>
              <li>
                <Link
                  href="/artikel"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors group"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Pusat Ilmu
                </Link>
              </li>
              <li>
                <Link
                  href="/donasi"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors group"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Donasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Program - Enhanced */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center">
              <Shield className="w-5 h-5 mr-2 text-green-400" />
              Program Unggulan
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors group"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Halaqah Qur'aniyyah
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors group"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Pesantren Kilat Ramadhan
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors group"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Workshop Kepemimpinan
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors group"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Kajian Rutin
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors group"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Pengabdian Masyarakat
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter - Enhanced */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center">
              <Send className="w-5 h-5 mr-2 text-blue-400" />
              Hubungi Kami
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-300 text-sm">
                  Makassar, Sulawesi Selatan
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300 text-sm">+62 411 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300 text-sm">info@hilmi.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-green-400" />
                <span className="text-gray-300 text-sm">
                  Senin - Jumat: 08:00 - 17:00
                </span>
              </div>
            </div>

            {/* Newsletter signup */}
            <div className="space-y-3">
              <p className="text-sm text-gray-300">Dapatkan update terbaru</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-green-500"
                />
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom - Enhanced */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} HILMI. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <p className="text-gray-400 text-sm flex items-center">
                <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" />
                Made with love for Ummah
              </p>
              <p className="text-gray-400 text-sm flex items-center">
                <Globe className="h-4 w-4 mr-1" />
                hilmi.or.id
              </p>
            </div>
          </div>

          {/* Additional links */}
          <div className="flex flex-wrap justify-center space-x-6 mt-4 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              Syarat & Ketentuan
            </Link>
            <Link
              href="/faq"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
