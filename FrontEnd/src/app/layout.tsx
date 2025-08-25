import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Times of Fashion",
    template: "%s • Times of Fashion",
  },
  description: "Your Daily Dose of Fashion & Glamour. Trends, beauty, lifestyle, and celebrity style.",
  keywords: [
    "fashion",
    "beauty",
    "lifestyle",
    "celebrity",
    "trends",
    "style",
    "glamour",
  ],
  openGraph: {
    title: "Times of Fashion",
    description:
      "Your Daily Dose of Fashion & Glamour. Trends, beauty, lifestyle, and celebrity style.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable} antialiased`}>
        <header className="border-b border-dark bg-white">
          <div className="container flex items-center justify-between py-4">
            <a href="/" className="text-2xl font-serif font-semibold tracking-wide">
              Times <span className="gold-accent">of</span> Fashion
            </a>
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="/" className="hover:underline">Home</a>
              <a href="/about" className="hover:underline">About</a>
              <a href="/blog" className="hover:underline">Blog</a>
              <a href="/contact" className="hover:underline">Contact</a>
              <a href="/newsletter" className="hover:underline">Newsletter</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-dark mt-16 bg-white">
          <div className="container py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Times of Fashion. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="/privacy" className="hover:underline">Privacy</a>
              <a href="/terms" className="hover:underline">Terms</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
