import type { Metadata } from &quot;next&quot;;
import { Geist, Geist_Mono } from &quot;next/font/google&quot;;
import &quot;./globals.css&quot;;

const geistSans = Geist({
  variable: &quot;--font-geist-sans&quot;,
  subsets: [&quot;latin&quot;],
});

const geistMono = Geist_Mono({
  variable: &quot;--font-geist-mono&quot;,
  subsets: [&quot;latin&quot;],
});

export const metadata: Metadata = {
  title: {
    default: &quot;Automations and More - AI-Powered Business Solutions&quot;,
    template: &quot;%s | Automations and More&quot;
  },
  description: &quot;Transform your mainstreet business with AI automation, custom websites, and intelligent apps. We help small businesses leverage artificial intelligence for growth and efficiency.&quot;,
  keywords: [
    &quot;AI automation&quot;,
    &quot;business automation&quot;,
    &quot;small business AI&quot;,
    &quot;custom websites&quot;,
    &quot;business apps&quot;,
    &quot;AI integration&quot;,
    &quot;mainstreet business&quot;,
    &quot;artificial intelligence&quot;,
    &quot;business process automation&quot;,
    &quot;AI consulting&quot;
  ],
  authors: [{ name: &quot;Automations and More&quot; }],
  creator: &quot;Automations and More&quot;,
  publisher: &quot;Automations and More&quot;,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(&quot;https://automationsandmore.com&quot;),
  alternates: {
    canonical: &quot;/&quot;,
  },
  openGraph: {
    type: &quot;website&quot;,
    locale: &quot;en_US&quot;,
    url: &quot;https://automationsandmore.com&quot;,
    title: &quot;Automations and More - AI-Powered Business Solutions&quot;,
    description: &quot;Transform your mainstreet business with AI automation, custom websites, and intelligent apps.&quot;,
    siteName: &quot;Automations and More&quot;,
  },
  twitter: {
    card: &quot;summary_large_image&quot;,
    title: &quot;Automations and More - AI-Powered Business Solutions&quot;,
    description: &quot;Transform your mainstreet business with AI automation, custom websites, and intelligent apps.&quot;,
    creator: &quot;@automationsandmore&quot;,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      &quot;max-video-preview&quot;: -1,
      &quot;max-image-preview&quot;: &quot;large&quot;,
      &quot;max-snippet&quot;: -1,
    },
  },
  verification: {
    google: &quot;your-google-verification-code&quot;,
  },
};

const jsonLd = {
  &quot;@context&quot;: &quot;https://schema.org&quot;,
  &quot;@type&quot;: &quot;Organization&quot;,
  &quot;name&quot;: &quot;Automations and More&quot;,
  &quot;url&quot;: &quot;https://automationsandmore.com&quot;,
  &quot;logo&quot;: &quot;https://automationsandmore.com/logo.png&quot;,
  &quot;description&quot;: &quot;AI-powered business solutions for mainstreet businesses including automation, custom websites, and intelligent apps.&quot;,
  &quot;foundingDate&quot;: &quot;2024&quot;,
      &quot;address&quot;: {
        &quot;@type&quot;: &quot;PostalAddress&quot;,
        &quot;addressLocality&quot;: &quot;Calgary&quot;,
        &quot;addressRegion&quot;: &quot;AB&quot;,
        &quot;addressCountry&quot;: &quot;CA&quot;
      },
  &quot;contactPoint&quot;: {
    &quot;@type&quot;: &quot;ContactPoint&quot;,
    &quot;contactType&quot;: &quot;customer service&quot;,
    &quot;availableLanguage&quot;: &quot;English&quot;
  },
  &quot;sameAs&quot;: [
    &quot;https://twitter.com/automationsandmore&quot;,
    &quot;https://linkedin.com/company/automationsandmore&quot;
  ],
  &quot;service&quot;: [
    {
      &quot;@type&quot;: &quot;Service&quot;,
      &quot;name&quot;: &quot;AI Business Automation&quot;,
      &quot;description&quot;: &quot;Custom AI automation solutions for small businesses&quot;
    },
    {
      &quot;@type&quot;: &quot;Service&quot;, 
      &quot;name&quot;: &quot;Custom Website Development&quot;,
      &quot;description&quot;: &quot;AI-powered website development and optimization&quot;
    },
    {
      &quot;@type&quot;: &quot;Service&quot;,
      &quot;name&quot;: &quot;Business App Development&quot;, 
      &quot;description&quot;: &quot;Custom business applications with AI integration&quot;
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang=&quot;en&quot;>
          <head>
            <script
              type=&quot;application/ld+json&quot;
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
              src=&quot;https://asset-tidycal.b-cdn.net/js/embed.js&quot;
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
