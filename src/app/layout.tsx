import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Script from "next/script";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

/** Site-wide default metadata — individual pages override as needed */
export const metadata: Metadata = {
  metadataBase: new URL("https://job-board-one-chi.vercel.app"),
  title: {
    default: "JobBoard — Find Your Next Opportunity",
    template: "%s | JobBoard",
  },
  description:
    "Browse the latest job openings in frontend, remote, and fresher categories. Find your next career opportunity on JobBoard.",
  applicationName: "JobBoard",
  authors: [{ name: "JobBoard Team" }],
  keywords: ["jobs", "frontend jobs", "remote jobs", "internships", "fresher jobs", "developer jobs", "React jobs", "JavaScript jobs"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://job-board-one-chi.vercel.app",
    siteName: "JobBoard",
    title: "JobBoard — Find Your Next Opportunity",
    description: "Browse the latest job openings in frontend, remote, and fresher categories. Find your next career opportunity on JobBoard.",
  },
  twitter: {
    card: "summary_large_image",
    title: "JobBoard — Find Your Next Opportunity",
    description: "Browse the latest job openings in frontend, remote, and fresher categories.",
    creator: "@jobboard",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense - must be in <head> per AdSense requirements */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5781883816349006"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} flex min-h-screen flex-col bg-gray-50 antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KB0QTWEHWC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KB0QTWEHWC');
          `}
        </Script>

        <Header />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
