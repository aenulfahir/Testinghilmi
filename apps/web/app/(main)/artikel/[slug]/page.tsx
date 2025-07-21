"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
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
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Eye,
  Heart,
  Share2,
  BookOpen,
  MessageCircle,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
} from "lucide-react";

interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    bio: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  views: number;
  likes: number;
  comments: number;
  featuredImage: string;
  seoTitle: string;
  seoDescription: string;
}

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

// Mock data
const mockArticle: Article = {
  id: "1",
  title: "Membangun Karakter Pemimpin Muslim di Era Digital",
  slug: "membangun-karakter-pemimpin-muslim-era-digital",
  content: `
    <h2 id="pendahuluan">Pendahuluan</h2>
    <p>Di era digital yang berkembang pesat ini, tantangan kepemimpinan semakin kompleks. Seorang pemimpin Muslim tidak hanya dituntut untuk memahami teknologi, tetapi juga harus mampu mempertahankan nilai-nilai Islam dalam setiap keputusan yang diambil.</p>
    
    <p>Kepemimpinan dalam Islam memiliki fondasi yang kuat berdasarkan Al-Quran dan Hadits. Rasulullah SAW telah memberikan contoh sempurna bagaimana menjadi pemimpin yang adil, bijaksana, dan bertanggung jawab.</p>

    <h2 id="prinsip-kepemimpinan">Prinsip-Prinsip Kepemimpinan Islam</h2>
    <p>Beberapa prinsip fundamental dalam kepemimpinan Islam yang harus dipahami oleh setiap pemimpin Muslim:</p>
    
    <h3 id="amanah">1. Amanah (Kepercayaan)</h3>
    <p>Seorang pemimpin adalah pemegang amanah dari Allah SWT dan dari orang-orang yang dipimpinnya. Amanah ini harus dijaga dengan sebaik-baiknya dan akan dimintai pertanggungjawaban di akhirat.</p>
    
    <blockquote>
      <p>"Setiap kalian adalah pemimpin dan setiap kalian akan dimintai pertanggungjawaban atas kepemimpinannya." (HR. Bukhari dan Muslim)</p>
    </blockquote>

    <h3 id="adil">2. Keadilan</h3>
    <p>Keadilan adalah pilar utama dalam kepemimpinan Islam. Seorang pemimpin harus berlaku adil kepada semua pihak tanpa memandang suku, ras, atau status sosial.</p>

    <h3 id="syura">3. Syura (Musyawarah)</h3>
    <p>Islam mengajarkan pentingnya musyawarah dalam pengambilan keputusan. Seorang pemimpin yang baik akan selalu melibatkan orang-orang yang kompeten dalam proses pengambilan keputusan.</p>

    <h2 id="tantangan-era-digital">Tantangan Kepemimpinan di Era Digital</h2>
    <p>Era digital membawa tantangan baru bagi para pemimpin Muslim:</p>
    
    <ul>
      <li><strong>Kecepatan Informasi:</strong> Informasi menyebar dengan sangat cepat, sehingga pemimpin harus lebih hati-hati dalam berkomunikasi.</li>
      <li><strong>Transparansi:</strong> Masyarakat menuntut transparansi yang lebih tinggi dari para pemimpinnya.</li>
      <li><strong>Globalisasi:</strong> Pemimpin harus mampu berpikir global namun tetap mempertahankan nilai-nilai lokal.</li>
      <li><strong>Teknologi:</strong> Pemahaman teknologi menjadi keharusan untuk dapat memimpin secara efektif.</li>
    </ul>

    <h2 id="strategi-pengembangan">Strategi Pengembangan Kepemimpinan</h2>
    <p>Untuk mengembangkan kepemimpinan yang efektif di era digital, beberapa strategi yang dapat diterapkan:</p>

    <h3 id="pendidikan-berkelanjutan">1. Pendidikan Berkelanjutan</h3>
    <p>Seorang pemimpin harus terus belajar dan mengembangkan diri. Ini termasuk mempelajari teknologi baru, tren global, dan tetap memperdalam pemahaman agama.</p>

    <h3 id="networking">2. Membangun Jaringan</h3>
    <p>Membangun jaringan dengan sesama pemimpin Muslim di berbagai bidang dapat memberikan perspektif yang lebih luas dan solusi yang lebih kreatif.</p>

    <h3 id="mentoring">3. Mentoring dan Coaching</h3>
    <p>Baik menjadi mentor maupun mendapatkan mentor adalah hal yang penting dalam pengembangan kepemimpinan.</p>

    <h2 id="kesimpulan">Kesimpulan</h2>
    <p>Membangun karakter pemimpin Muslim di era digital memerlukan keseimbangan antara pemahaman teknologi modern dan keteguhan dalam memegang nilai-nilai Islam. Dengan fondasi yang kuat dari Al-Quran dan Sunnah, serta kemampuan adaptasi terhadap perkembangan zaman, seorang pemimpin Muslim dapat memberikan kontribusi positif bagi masyarakat dan umat.</p>
    
    <p>Kepemimpinan bukanlah tentang kekuasaan, tetapi tentang pelayanan dan tanggung jawab. Semoga artikel ini dapat memberikan inspirasi bagi para calon pemimpin Muslim untuk terus mengembangkan diri dan memberikan yang terbaik bagi umat.</p>
  `,
  excerpt: "Panduan lengkap untuk mengembangkan karakter kepemimpinan Muslim yang efektif di era digital dengan tetap berpegang pada nilai-nilai Islam.",
  author: {
    id: "1",
    name: "Dr. Ahmad Hidayat",
    avatar: "/api/placeholder/100/100",
    bio: "Pakar kepemimpinan Islam dan dosen di Universitas Islam Negeri. Memiliki pengalaman 15 tahun dalam pengembangan leadership Islami.",
  },
  category: "Kepemimpinan",
  tags: ["kepemimpinan", "islam", "digital", "karakter", "muslim"],
  publishedAt: "2025-01-15",
  readTime: 8,
  views: 1250,
  likes: 89,
  comments: 23,
  featuredImage: "/api/placeholder/800/400",
  seoTitle: "Membangun Karakter Pemimpin Muslim di Era Digital - HILMI",
  seoDescription: "Panduan lengkap untuk mengembangkan karakter kepemimpinan Muslim yang efektif di era digital dengan tetap berpegang pada nilai-nilai Islam.",
};

const relatedArticles = [
  {
    id: "2",
    title: "Etika Bisnis dalam Islam: Panduan Praktis untuk Entrepreneur Muslim",
    slug: "etika-bisnis-islam-panduan-entrepreneur-muslim",
    excerpt: "Memahami prinsip-prinsip etika bisnis Islam yang dapat diterapkan dalam dunia entrepreneurship modern.",
    category: "Bisnis",
    readTime: 6,
    publishedAt: "2025-01-10",
  },
  {
    id: "3",
    title: "Teknologi dan Islam: Memanfaatkan Inovasi untuk Kebaikan Umat",
    slug: "teknologi-islam-inovasi-kebaikan-umat",
    excerpt: "Bagaimana teknologi dapat dimanfaatkan sesuai dengan nilai-nilai Islam untuk kemajuan umat.",
    category: "Teknologi",
    readTime: 7,
    publishedAt: "2025-01-08",
  },
];

export default function ArticleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Extract table of contents from content
  const [tableOfContents, setTableOfContents] = useState<TableOfContentsItem[]>([]);

  useEffect(() => {
    // Simulate API call
    const slug = params.slug as string;
    if (slug === mockArticle.slug) {
      setTimeout(() => {
        setArticle(mockArticle);
        setLoading(false);
        
        // Extract headings for table of contents
        const parser = new DOMParser();
        const doc = parser.parseFromString(mockArticle.content, 'text/html');
        const headings = doc.querySelectorAll('h2, h3');
        const toc: TableOfContentsItem[] = [];
        
        headings.forEach((heading) => {
          if (heading.id) {
            toc.push({
              id: heading.id,
              title: heading.textContent || '',
              level: parseInt(heading.tagName.charAt(1)),
            });
          }
        });
        
        setTableOfContents(toc);
      }, 500);
    } else {
      setLoading(false);
    }
  }, [params.slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = article?.title || "";
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  const handleLike = () => {
    setLiked(!liked);
    // Here you would typically make an API call to update the like status
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Memuat artikel...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📄</div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Artikel Tidak Ditemukan
          </h1>
          <p className="text-muted-foreground mb-6">
            Maaf, artikel yang Anda cari tidak dapat ditemukan.
          </p>
          <Link href="/artikel">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Daftar Artikel
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 dark:from-primary/20 dark:via-primary/10 dark:to-primary/20 py-8">
        <div className="container mx-auto px-4">
          <Link href="/artikel">
            <Button variant="ghost" className="mb-4 text-high-contrast hover:bg-accent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Artikel
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="sticky top-8">
              <Card className="card-improved">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Daftar Isi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-sm transition-colors duration-200 ${
                          item.level === 2 ? 'font-medium' : 'ml-4 text-muted-foreground'
                        } hover:text-primary`}
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Share Card */}
              <Card className="card-improved mt-6">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Share2 className="mr-2 h-5 w-5" />
                    Bagikan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('facebook')}
                      className="btn-outline-improved"
                    >
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('twitter')}
                      className="btn-outline-improved"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('linkedin')}
                      className="btn-outline-improved"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('copy')}
                      className="btn-outline-improved"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {/* Article Header */}
            <Card className="card-improved mb-8">
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">{article.category}</Badge>
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-3xl md:text-4xl text-high-contrast leading-tight">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-lg text-medium-contrast mt-4">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Article Meta */}
            <Card className="card-improved mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-high-contrast">{article.author.name}</p>
                      <p className="text-sm text-medium-contrast">{article.author.bio}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-medium-contrast">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(article.publishedAt)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime} menit baca
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {article.views.toLocaleString()}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Featured Image */}
            <Card className="card-improved mb-8 overflow-hidden">
              <div className="h-64 md:h-96 bg-gradient-to-br from-primary/20 to-primary/10 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </Card>

            {/* Article Content */}
            <Card className="card-improved mb-8">
              <CardContent className="p-8">
                <div 
                  className="prose prose-lg prose-slate dark:prose-invert max-w-none
                    prose-headings:text-high-contrast prose-p:text-medium-contrast
                    prose-strong:text-high-contrast prose-blockquote:border-primary
                    prose-blockquote:bg-primary/5 prose-blockquote:text-medium-contrast
                    prose-li:text-medium-contrast prose-a:text-primary hover:prose-a:text-primary/80"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </CardContent>
            </Card>

            {/* Article Actions */}
            <Card className="card-improved mb-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button
                      variant={liked ? "default" : "outline"}
                      onClick={handleLike}
                      className={liked ? "btn-primary-improved" : "btn-outline-improved"}
                    >
                      <Heart className={`h-4 w-4 mr-2 ${liked ? 'fill-current' : ''}`} />
                      {liked ? article.likes + 1 : article.likes}
                    </Button>
                    <Button variant="outline" className="btn-outline-improved">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      {article.comments} Komentar
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('copy')}
                      className="btn-outline-improved"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Bagikan
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Articles */}
            <Card className="card-improved">
              <CardHeader>
                <CardTitle className="text-xl text-high-contrast">Artikel Terkait</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {relatedArticles.map((relatedArticle) => (
                    <Link
                      key={relatedArticle.id}
                      href={`/artikel/${relatedArticle.slug}`}
                      className="group"
                    >
                      <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-accent transition-colors duration-200">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex-shrink-0"></div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-high-contrast group-hover:text-primary transition-colors duration-200 mb-2">
                            {relatedArticle.title}
                          </h3>
                          <p className="text-sm text-medium-contrast mb-2 line-clamp-2">
                            {relatedArticle.excerpt}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-medium-contrast">
                            <Badge variant="outline" className="text-xs">
                              {relatedArticle.category}
                            </Badge>
                            <span>{relatedArticle.readTime} menit baca</span>
                            <span>{formatDate(relatedArticle.publishedAt)}</span>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-medium-contrast group-hover:text-primary transition-colors duration-200" />
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
