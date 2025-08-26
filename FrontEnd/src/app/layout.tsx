import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
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
        <header className="sticky top-0 z-50 border-b border-dark bg-white/95 backdrop-blur">
          {/* Top promotional bar */}
          <div className="bg-black text-white py-2 text-center text-sm">
            <div className="container flex items-center justify-between">
              <span>The September issue is here</span>
              <a href="/newsletter" className="hover:underline font-medium">SUBSCRIBE</a>
            </div>
          </div>
          
          {/* Main header */}
          <div className="container py-4">
            <div className="flex items-center justify-between mb-4">
              <a href="/newsletter" className="btn btn-primary text-sm px-4 py-2">SUBSCRIBE</a>
              <Link href="/" className="select-none text-[32px] md:text-[36px] leading-none font-serif font-black tracking-[-0.02em]">
                Times <span className="gold-accent">of</span> Fashion
              </Link>
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Search">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="User profile">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
                <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <span className="text-sm font-medium">MENU</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Category navigation */}
            <nav className="flex items-center justify-center gap-8 text-[12px] tracking-[0.2em] uppercase font-medium">
              {[
                "FASHION",
                "RUNWAY", 
                "SHOPPING",
                "BEAUTY",
                "CULTURE",
                "LIVING",
                "WEDDINGS",
                "FASHION BUSINESS"
              ].map((category) => (
                <a 
                  key={category} 
                  href={`/blog/${category.toLowerCase().replace(' ', '-')}`} 
                  className="hover:opacity-70 transition-opacity"
                >
                  {category}
                </a>
              ))}
            </nav>
          </div>
        </header>
        <main>{children}</main>
        
        {/* Comprehensive Footer */}
        <footer className="bg-black text-white mt-16">
          <div className="container py-16">
            {/* Top Section - Branding and Social Media */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <div className="text-[32px] font-serif font-black mb-4">
                  Times <span className="text-[var(--color-gold)]">of</span> Fashion
                </div>
                <p className="text-gray-300 mb-6 max-w-md">
                  The latest fashion news, beauty coverage, celebrity style, fashion week updates, culture reviews, and videos on Times of Fashion.
                </p>
                <div className="flex gap-4">
                  {["Facebook", "X", "Pinterest", "Instagram", "TikTok"].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center hover:border-white transition-colors"
                      aria-label={platform}
                    >
                      <span className="text-xs font-medium">{platform === "X" ? "X" : platform.charAt(0)}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle Section - Navigation Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-4 text-sm tracking-wider uppercase">MORE FROM TIMES OF FASHION</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {[
                    "NEWSLETTER",
                    "MANAGE ACCOUNT",
                    "VERIFY SUBSCRIPTION",
                    "CONTACT US",
                    "ABOUT TIMES OF FASHION",
                    "CAREERS",
                    "PROJECTS",
                    "FASHION ARCHIVE",
                    "FORCES OF FASHION",
                    "FASHION COLLEGE"
                  ].map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-sm tracking-wider uppercase">SEE MORE STORIES</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {[
                    "FASHION",
                    "BEAUTY",
                    "CULTURE",
                    "LIVING",
                    "RUNWAY",
                    "SHOPPING",
                    "MAGAZINE",
                    "GIFT GUIDES",
                    "BEST OF SALE"
                  ].map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Section - Legal and Copyright */}
            <div className="border-t border-gray-800 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                  {[
                    "USER AGREEMENT",
                    "PRIVACY POLICY",
                    "YOUR CALIFORNIA PRIVACY RIGHTS",
                    "ACCESSIBILITY HELP",
                    "MASTHEAD",
                    "VISUAL STORIES"
                  ].map((item) => (
                    <a key={item} href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  ))}
                </div>
                                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <span>YOUR PRIVACY CHOICES</span>
                    <div className="flex items-center gap-2">
                      <span>CN Fashion & Beauty</span>
                      <select 
                        className="bg-transparent border border-gray-600 rounded px-2 py-1"
                        aria-label="Select country"
                      >
                        <option>United States</option>
                      </select>
                    </div>
                  </div>
              </div>
              <div className="text-xs text-gray-400 leading-relaxed">
                <p>
                  © {new Date().getFullYear()} Times of Fashion. All rights reserved. Times of Fashion may earn a portion of sales from products that are purchased through our site as part of our Affiliate Partnerships with retailers. The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used, except with the prior written permission of Times of Fashion.
                </p>
                <div className="mt-2">
                  <a href="#" className="hover:text-white transition-colors">Ad Choices</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
