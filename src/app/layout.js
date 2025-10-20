import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Smart Move - شركة الحلول التقنية الذكية | IT Solutions Company Jordan",
  description: "Smart Move provides comprehensive IT solutions including web development, mobile applications, business solutions, designs, social media and marketing services. شركة سمارت موف تقدم حلول تقنية شاملة تشمل تطوير المواقع، تطبيقات الهاتف المحمول، الحلول التجارية، التصميم، والتسويق الرقمي في الأردن",
  keywords: [
    // English Keywords
    "web development", "mobile app development", "business solutions", "digital marketing", 
    "SEO services", "social media marketing", "e-commerce development", "custom software development",
    "UI/UX design", "website design", "mobile applications", "iOS development", "Android development",
    "React development", "Next.js development", "Node.js development", "database management",
    "cloud solutions", "API development", "CMS development", "WordPress development",
    "enterprise solutions", "startup solutions", "digital transformation", "automation systems",
    "data analytics", "business intelligence", "cybersecurity", "IT consulting",
    "Jordan IT company", "Amman web development", "Middle East technology",
    
    // Arabic Keywords  
    "تطوير المواقع", "تطوير تطبيقات الهاتف", "الحلول التجارية", "التسويق الرقمي",
    "خدمات السيو", "تسويق وسائل التواصل الاجتماعي", "تطوير المتاجر الإلكترونية", "تطوير البرمجيات المخصصة",
    "تصميم واجهات المستخدم", "تصميم المواقع", "تطبيقات الهاتف المحمول", "تطوير آيفون", "تطوير أندرويد",
    "تطوير ريأكت", "تطوير نكست جي اس", "تطوير نود جي اس", "إدارة قواعد البيانات",
    "الحلول السحابية", "تطوير واجهات برمجة التطبيقات", "تطوير أنظمة إدارة المحتوى", "تطوير ووردبريس",
    "حلول المؤسسات", "حلول الشركات الناشئة", "التحول الرقمي", "أنظمة الأتمتة",
    "تحليل البيانات", "ذكاء الأعمال", "الأمن السيبراني", "استشارات تقنية المعلومات",
    "شركة تقنية في الأردن", "تطوير مواقع عمان", "تكنولوجيا الشرق الأوسط",
    "شركة برمجة", "شركة تصميم", "شركة تسويق", "حلول ذكية", "تقنية متقدمة"
  ].join(", "),
  authors: [{ name: "Smart Move Team" }],
  creator: "Smart Move",
  publisher: "Smart Move",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://smartmove.jo'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'ar-JO': '/ar',
    },
  },
  openGraph: {
    title: "Smart Move - شركة الحلول التقنية الذكية | IT Solutions Company Jordan",
    description: "Leading IT solutions company in Jordan providing web development, mobile apps, business solutions, digital marketing, and SEO services. شركة رائدة في الحلول التقنية في الأردن",
    url: 'https://smartmove.jo',
    siteName: 'Smart Move',
    images: [
      {
        url: '/smart-move-logo.svg',
        width: 1200,
        height: 630,
        alt: 'Smart Move - IT Solutions Company Jordan',
      },
    ],
    locale: 'en_US',
    alternateLocale: ['ar_JO'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Smart Move - IT Solutions Company Jordan",
    description: "Leading IT solutions company providing web development, mobile apps, business solutions, and digital marketing in Jordan",
    images: ['/smart-move-logo.svg'],
    creator: '@smartmove_jo',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'theme-color': '#167dc1',
    'msapplication-TileColor': '#167dc1',
    'application-name': 'Smart Move',
    'apple-mobile-web-app-title': 'Smart Move',
    'msapplication-tooltip': 'Smart Move - IT Solutions Company',
    'DC.title': 'Smart Move - IT Solutions Company Jordan',
    'DC.creator': 'Smart Move Team',
    'DC.subject': 'IT Solutions, Web Development, Mobile Apps, Digital Marketing',
    'DC.description': 'Leading IT solutions company in Jordan providing comprehensive technology services',
    'DC.publisher': 'Smart Move',
    'DC.contributor': 'Smart Move Development Team',
    'DC.date': new Date().toISOString(),
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://smartmove.jo',
    'DC.source': 'https://smartmove.jo',
    'DC.language': 'en,ar',
    'DC.relation': 'https://smartmove.jo',
    'DC.coverage': 'Jordan, Middle East, MENA',
    'DC.rights': 'Copyright Smart Move',
    'geo.region': 'JO',
    'geo.placename': 'Amman, Jordan',
    'geo.position': '31.9539;35.9106',
    'ICBM': '31.9539, 35.9106',
    'business.contact_data.locality': 'Amman',
    'business.contact_data.region': 'Jordan',
    'business.contact_data.country_name': 'Jordan',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
