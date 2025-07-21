import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./dark-mode-fixes.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/contexts/theme-context";
import MainLayout from "@/components/layout/main-layout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "HILMI - Himpunan Pelajar Muslim Indonesia",
    template: "%s | HILMI",
  },
  description:
    "Website resmi organisasi HILMI dengan visi membangun generasi Islam yang berkualitas dan berdaya saing global. Program pendidikan Islam modern untuk pelajar.",
  keywords: [
    "HILMI",
    "organisasi islam",
    "pelajar muslim",
    "pendidikan islam",
    "halaqah quraniyyah",
    "pesantren kilat",
    "generasi muda islam",
    "Makassar",
    "Sulawesi Selatan",
  ],
  authors: [{ name: "HILMI Team", url: "https://hilmi.or.id" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://hilmi.or.id",
    title: "HILMI - Himpunan Pelajar Muslim Indonesia",
    description:
      "Wadah pengembangan diri pelajar muslim yang berorientasi pada keislaman, keilmuan, dan kemasyarakatan",
    siteName: "HILMI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HILMI - Organisasi Islam Modern",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HILMI - Himpunan Pelajar Muslim Indonesia",
    description:
      "Membangun generasi pelajar muslim yang unggul dan berdaya saing global",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={poppins.variable} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          <ClerkProvider>
            {children}
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
