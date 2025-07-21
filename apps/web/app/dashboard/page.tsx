'use client';

import { useEffect, useState } from 'react';
import { useUser, useAuth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, FileText, Settings, Plus, Heart } from 'lucide-react';
import Link from 'next/link';

interface User {
  id: string;
  clerkId: string;
  email: string;
  name: string;
  imageUrl: string;
  role: 'USER' | 'ADMIN';
  createdAt: string;
  updatedAt: string;
}

export default function DashboardPage() {
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isLoaded && user) {
      fetchUserData();
    }
  }, [isLoaded, user]);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      
      // Fallback jika API URL tidak tersedia
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
      
      // Coba endpoint test terlebih dahulu
      const response = await fetch(`${apiUrl}/users/test`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        return;
      }

      // Jika endpoint test gagal, gunakan data dari Clerk sebagai fallback
      console.warn('API not available, using Clerk data as fallback');
      if (user) {
        setUserData({
          id: user.id,
          clerkId: user.id,
          email: user.emailAddresses[0]?.emailAddress || '',
          name: user.fullName || user.firstName || 'User',
          imageUrl: user.imageUrl,
          role: 'USER', // Default role
          createdAt: user.createdAt?.toISOString() || new Date().toISOString(),
          updatedAt: user.updatedAt?.toISOString() || new Date().toISOString(),
        });
      }
    } catch (err) {
      console.warn('Error fetching user data:', err);
      // Fallback ke data Clerk jika API gagal
      if (user) {
        setUserData({
          id: user.id,
          clerkId: user.id,
          email: user.emailAddresses[0]?.emailAddress || '',
          name: user.fullName || user.firstName || 'User',
          imageUrl: user.imageUrl,
          role: 'USER', // Default role
          createdAt: user.createdAt?.toISOString() || new Date().toISOString(),
          updatedAt: user.updatedAt?.toISOString() || new Date().toISOString(),
        });
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isLoaded || loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-muted-foreground">Please sign in to access the dashboard.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error</h1>
          <p className="text-destructive">{error}</p>
          <Button onClick={fetchUserData} className="mt-4">
            Retry
          </Button>
        </div>
      </div>
    );
  }

  const isAdmin = userData?.role === 'ADMIN';

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Selamat datang, {userData?.name || user.firstName || 'User'}!
        </p>
        {userData && (
          <Badge variant={isAdmin ? 'default' : 'secondary'} className="mt-2">
            {isAdmin ? 'Administrator' : 'User'}
          </Badge>
        )}
      </div>

      {/* User Info Card */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Informasi Pengguna</CardTitle>
          <CardDescription>Data profil Anda</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            {userData?.imageUrl && (
              <img
                src={userData.imageUrl}
                alt={userData.name || 'User'}
                className="w-16 h-16 rounded-full"
              />
            )}
            <div>
              <h3 className="font-semibold">{userData?.name || user.fullName}</h3>
              <p className="text-sm text-muted-foreground">{userData?.email || user.emailAddresses[0]?.emailAddress}</p>
              <p className="text-xs text-muted-foreground">
                Bergabung sejak: {userData?.createdAt ? new Date(userData.createdAt).toLocaleDateString('id-ID') : 'N/A'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Link href="/kegiatan">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Calendar className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Kegiatan</h3>
                  <p className="text-sm text-muted-foreground">Lihat kegiatan</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/artikel">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-semibold">Artikel</h3>
                  <p className="text-sm text-muted-foreground">Baca artikel</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/tentang">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 text-purple-600" />
                <div>
                  <h3 className="font-semibold">Tentang</h3>
                  <p className="text-sm text-muted-foreground">Tentang HILMI</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/donasi">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Heart className="h-8 w-8 text-red-600" />
                <div>
                  <h3 className="font-semibold">Donasi</h3>
                  <p className="text-sm text-muted-foreground">Program donasi</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Admin Section */}
      {isAdmin && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>Panel Administrator</span>
            </CardTitle>
            <CardDescription>
              Fitur khusus untuk administrator
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Tambah Kegiatan
              </Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Tambah Artikel
              </Button>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                <Users className="h-4 w-4 mr-2" />
                Kelola Pengguna
              </Button>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                <Settings className="h-4 w-4 mr-2" />
                Pengaturan Sistem
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* User Section */}
      {!isAdmin && (
        <Card>
          <CardHeader>
            <CardTitle>Fitur Pengguna</CardTitle>
            <CardDescription>
              Fitur yang tersedia untuk pengguna
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                <Calendar className="h-4 w-4 mr-2" />
                Lihat Kegiatan
              </Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <FileText className="h-4 w-4 mr-2" />
                Baca Artikel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 