import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Script from "next/script";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

/** Site-wide default metadata — individual pages override as needed */
export const metadata: Metadata = {
  title: {
    default: "JobBoard — Find Your Next Opportunity",
    template: "%s | JobBoard",
  },
  description:
    "Browse the latest job openings in frontend, remote, and fresher categories. Find your next career opportunity on JobBoard.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "JobBoard",
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
        {/* AdSense Placeholder: Uncommon line below when you have your Pub ID */}
        {/* <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        /> */}
        
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
