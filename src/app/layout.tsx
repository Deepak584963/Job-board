import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
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
      <body className={`${inter.className} flex min-h-screen flex-col bg-gray-50 antialiased`}>
        <Header />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
