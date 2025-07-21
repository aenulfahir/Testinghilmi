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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Settings,
  Globe,
  Mail,
  Shield,
  Database,
  Palette,
  Save,
  RefreshCw,
  Upload,
  Trash2,
  Eye,
  EyeOff,
} from "lucide-react";

interface WebsiteSettings {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
    youtube: string;
  };
  seoSettings: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
  };
  emailSettings: {
    smtpHost: string;
    smtpPort: string;
    smtpUser: string;
    smtpPassword: string;
    fromEmail: string;
    fromName: string;
  };
  securitySettings: {
    enableTwoFactor: boolean;
    sessionTimeout: number;
    maxLoginAttempts: number;
    passwordMinLength: number;
  };
}

export default function AdminPengaturanPage() {
  const [settings, setSettings] = useState<WebsiteSettings>({
    siteName: "HILMI - Himpunan Lembaga Dakwah Mahasiswa Islam",
    siteDescription: "Organisasi dakwah mahasiswa Islam yang berkomitmen membangun generasi muda yang berakhlak mulia",
    siteUrl: "https://hilmi.org",
    contactEmail: "info@hilmi.org",
    contactPhone: "+62 21 1234 5678",
    address: "Jl. Sudirman No. 123, Jakarta Pusat, DKI Jakarta",
    socialMedia: {
      facebook: "https://facebook.com/hilmi",
      instagram: "https://instagram.com/hilmi",
      twitter: "https://twitter.com/hilmi",
      youtube: "https://youtube.com/hilmi",
    },
    seoSettings: {
      metaTitle: "HILMI - Himpunan Lembaga Dakwah Mahasiswa Islam",
      metaDescription: "Organisasi dakwah mahasiswa Islam yang berkomitmen membangun generasi muda yang berakhlak mulia",
      metaKeywords: "dakwah, mahasiswa, islam, pendidikan, organisasi",
    },
    emailSettings: {
      smtpHost: "smtp.gmail.com",
      smtpPort: "587",
      smtpUser: "noreply@hilmi.org",
      smtpPassword: "********",
      fromEmail: "noreply@hilmi.org",
      fromName: "HILMI",
    },
    securitySettings: {
      enableTwoFactor: true,
      sessionTimeout: 30,
      maxLoginAttempts: 5,
      passwordMinLength: 8,
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSave = () => {
    // Simulate saving settings
    console.log("Saving settings:", settings);
    // Here you would typically make an API call to save the settings
  };

  const handleReset = () => {
    // Reset to default settings
    console.log("Resetting settings");
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            Pengaturan Website
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Konfigurasi pengaturan website HILMI
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleReset}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Reset
          </Button>
          <Button onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Simpan Pengaturan
          </Button>
        </div>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general" className="flex items-center space-x-2">
            <Globe className="h-4 w-4" />
            <span>Umum</span>
          </TabsTrigger>
          <TabsTrigger value="contact" className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>Kontak</span>
          </TabsTrigger>
          <TabsTrigger value="seo" className="flex items-center space-x-2">
            <Settings className="h-4 w-4" />
            <span>SEO</span>
          </TabsTrigger>
          <TabsTrigger value="email" className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>Email</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center space-x-2">
            <Shield className="h-4 w-4" />
            <span>Keamanan</span>
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                Pengaturan Umum
              </CardTitle>
              <CardDescription>
                Konfigurasi dasar website
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="siteName">Nama Website *</Label>
                  <Input
                    id="siteName"
                    value={settings.siteName}
                    onChange={(e) =>
                      setSettings({ ...settings, siteName: e.target.value })
                    }
                    placeholder="Nama website"
                  />
                </div>
                <div>
                  <Label htmlFor="siteUrl">URL Website *</Label>
                  <Input
                    id="siteUrl"
                    value={settings.siteUrl}
                    onChange={(e) =>
                      setSettings({ ...settings, siteUrl: e.target.value })
                    }
                    placeholder="https://example.com"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="siteDescription">Deskripsi Website</Label>
                <Textarea
                  id="siteDescription"
                  value={settings.siteDescription}
                  onChange={(e) =>
                    setSettings({ ...settings, siteDescription: e.target.value })
                  }
                  placeholder="Deskripsi singkat website"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                Media Sosial
              </CardTitle>
              <CardDescription>
                Link media sosial HILMI
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="facebook">Facebook</Label>
                  <Input
                    id="facebook"
                    value={settings.socialMedia.facebook}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        socialMedia: {
                          ...settings.socialMedia,
                          facebook: e.target.value,
                        },
                      })
                    }
                    placeholder="https://facebook.com/hilmi"
                  />
                </div>
                <div>
                  <Label htmlFor="instagram">Instagram</Label>
                  <Input
                    id="instagram"
                    value={settings.socialMedia.instagram}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        socialMedia: {
                          ...settings.socialMedia,
                          instagram: e.target.value,
                        },
                      })
                    }
                    placeholder="https://instagram.com/hilmi"
                  />
                </div>
                <div>
                  <Label htmlFor="twitter">Twitter</Label>
                  <Input
                    id="twitter"
                    value={settings.socialMedia.twitter}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        socialMedia: {
                          ...settings.socialMedia,
                          twitter: e.target.value,
                        },
                      })
                    }
                    placeholder="https://twitter.com/hilmi"
                  />
                </div>
                <div>
                  <Label htmlFor="youtube">YouTube</Label>
                  <Input
                    id="youtube"
                    value={settings.socialMedia.youtube}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        socialMedia: {
                          ...settings.socialMedia,
                          youtube: e.target.value,
                        },
                      })
                    }
                    placeholder="https://youtube.com/hilmi"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contact Settings */}
        <TabsContent value="contact" className="space-y-6">
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                Informasi Kontak
              </CardTitle>
              <CardDescription>
                Informasi kontak HILMI
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="contactEmail">Email Kontak *</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={settings.contactEmail}
                    onChange={(e) =>
                      setSettings({ ...settings, contactEmail: e.target.value })
                    }
                    placeholder="info@hilmi.org"
                  />
                </div>
                <div>
                  <Label htmlFor="contactPhone">Nomor Telepon</Label>
                  <Input
                    id="contactPhone"
                    value={settings.contactPhone}
                    onChange={(e) =>
                      setSettings({ ...settings, contactPhone: e.target.value })
                    }
                    placeholder="+62 21 1234 5678"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="address">Alamat</Label>
                <Textarea
                  id="address"
                  value={settings.address}
                  onChange={(e) =>
                    setSettings({ ...settings, address: e.target.value })
                  }
                  placeholder="Alamat lengkap HILMI"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SEO Settings */}
        <TabsContent value="seo" className="space-y-6">
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                Pengaturan SEO
              </CardTitle>
              <CardDescription>
                Optimasi mesin pencari
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input
                  id="metaTitle"
                  value={settings.seoSettings.metaTitle}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      seoSettings: {
                        ...settings.seoSettings,
                        metaTitle: e.target.value,
                      },
                    })
                  }
                  placeholder="Judul untuk SEO"
                />
              </div>
              <div>
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  value={settings.seoSettings.metaDescription}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      seoSettings: {
                        ...settings.seoSettings,
                        metaDescription: e.target.value,
                      },
                    })
                  }
                  placeholder="Deskripsi untuk SEO"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="metaKeywords">Meta Keywords</Label>
                <Input
                  id="metaKeywords"
                  value={settings.seoSettings.metaKeywords}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      seoSettings: {
                        ...settings.seoSettings,
                        metaKeywords: e.target.value,
                      },
                    })
                  }
                  placeholder="keyword1, keyword2, keyword3"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Settings */}
        <TabsContent value="email" className="space-y-6">
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                Konfigurasi Email
              </CardTitle>
              <CardDescription>
                Pengaturan SMTP untuk pengiriman email
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="smtpHost">SMTP Host *</Label>
                  <Input
                    id="smtpHost"
                    value={settings.emailSettings.smtpHost}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        emailSettings: {
                          ...settings.emailSettings,
                          smtpHost: e.target.value,
                        },
                      })
                    }
                    placeholder="smtp.gmail.com"
                  />
                </div>
                <div>
                  <Label htmlFor="smtpPort">SMTP Port *</Label>
                  <Input
                    id="smtpPort"
                    value={settings.emailSettings.smtpPort}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        emailSettings: {
                          ...settings.emailSettings,
                          smtpPort: e.target.value,
                        },
                      })
                    }
                    placeholder="587"
                  />
                </div>
                <div>
                  <Label htmlFor="smtpUser">SMTP Username *</Label>
                  <Input
                    id="smtpUser"
                    value={settings.emailSettings.smtpUser}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        emailSettings: {
                          ...settings.emailSettings,
                          smtpUser: e.target.value,
                        },
                      })
                    }
                    placeholder="noreply@hilmi.org"
                  />
                </div>
                <div>
                  <Label htmlFor="smtpPassword">SMTP Password *</Label>
                  <div className="relative">
                    <Input
                      id="smtpPassword"
                      type={showPassword ? "text" : "password"}
                      value={settings.emailSettings.smtpPassword}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          emailSettings: {
                            ...settings.emailSettings,
                            smtpPassword: e.target.value,
                          },
                        })
                      }
                      placeholder="Password SMTP"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fromEmail">From Email *</Label>
                  <Input
                    id="fromEmail"
                    type="email"
                    value={settings.emailSettings.fromEmail}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        emailSettings: {
                          ...settings.emailSettings,
                          fromEmail: e.target.value,
                        },
                      })
                    }
                    placeholder="noreply@hilmi.org"
                  />
                </div>
                <div>
                  <Label htmlFor="fromName">From Name *</Label>
                  <Input
                    id="fromName"
                    value={settings.emailSettings.fromName}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        emailSettings: {
                          ...settings.emailSettings,
                          fromName: e.target.value,
                        },
                      })
                    }
                    placeholder="HILMI"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                Pengaturan Keamanan
              </CardTitle>
              <CardDescription>
                Konfigurasi keamanan sistem
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="twoFactor">Two-Factor Authentication</Label>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Aktifkan autentikasi dua faktor untuk admin
                  </p>
                </div>
                                 <input
                   type="checkbox"
                   id="twoFactor"
                   checked={settings.securitySettings.enableTwoFactor}
                   onChange={(e) =>
                     setSettings({
                       ...settings,
                       securitySettings: {
                         ...settings.securitySettings,
                         enableTwoFactor: e.target.checked,
                       },
                     })
                   }
                   className="rounded"
                   title="Aktifkan two-factor authentication"
                 />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="sessionTimeout">Session Timeout (menit)</Label>
                  <Input
                    id="sessionTimeout"
                    type="number"
                    value={settings.securitySettings.sessionTimeout}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        securitySettings: {
                          ...settings.securitySettings,
                          sessionTimeout: parseInt(e.target.value) || 30,
                        },
                      })
                    }
                    min="5"
                    max="1440"
                  />
                </div>
                <div>
                  <Label htmlFor="maxLoginAttempts">Maksimal Login Attempts</Label>
                  <Input
                    id="maxLoginAttempts"
                    type="number"
                    value={settings.securitySettings.maxLoginAttempts}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        securitySettings: {
                          ...settings.securitySettings,
                          maxLoginAttempts: parseInt(e.target.value) || 5,
                        },
                      })
                    }
                    min="3"
                    max="10"
                  />
                </div>
                <div>
                  <Label htmlFor="passwordMinLength">Minimal Password Length</Label>
                  <Input
                    id="passwordMinLength"
                    type="number"
                    value={settings.securitySettings.passwordMinLength}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        securitySettings: {
                          ...settings.securitySettings,
                          passwordMinLength: parseInt(e.target.value) || 8,
                        },
                      })
                    }
                    min="6"
                    max="20"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
