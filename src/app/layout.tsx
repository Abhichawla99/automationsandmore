import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Automations and More - AI-Powered Business Solutions",
    template: "%s | Automations and More"
  },
  description: "Transform your mainstreet business with AI automation, custom websites, and intelligent apps. We help small businesses leverage artificial intelligence for growth and efficiency.",
  keywords: [
    "AI automation",
    "business automation",
    "small business AI",
    "custom websites",
    "business apps",
    "AI integration",
    "mainstreet business",
    "artificial intelligence",
    "business process automation",
    "AI consulting"
  ],
  authors: [{ name: "Automations and More" }],
  creator: "Automations and More",
  publisher: "Automations and More",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://automationsandmore.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://automationsandmore.com",
    title: "Automations and More - AI-Powered Business Solutions",
    description: "Transform your mainstreet business with AI automation, custom websites, and intelligent apps.",
    siteName: "Automations and More",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automations and More - AI-Powered Business Solutions",
    description: "Transform your mainstreet business with AI automation, custom websites, and intelligent apps.",
    creator: "@automationsandmore",
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
    google: "your-google-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Automations and More",
  "url": "https://automationsandmore.com",
  "logo": "https://automationsandmore.com/logo.png",
  "description": "AI-powered business solutions for mainstreet businesses including automation, custom websites, and intelligent apps.",
  "foundingDate": "2024",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Calgary",
        "addressRegion": "AB",
        "addressCountry": "CA"
      },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://twitter.com/automationsandmore",
    "https://linkedin.com/company/automationsandmore"
  ],
  "service": [
    {
      "@type": "Service",
      "name": "AI Business Automation",
      "description": "Custom AI automation solutions for small businesses"
    },
    {
      "@type": "Service", 
      "name": "Custom Website Development",
      "description": "AI-powered website development and optimization"
    },
    {
      "@type": "Service",
      "name": "Business App Development", 
      "description": "Custom business applications with AI integration"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
          <head>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
              src="https://asset-tidycal.b-cdn.net/js/embed.js"
              async
            />
          </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
