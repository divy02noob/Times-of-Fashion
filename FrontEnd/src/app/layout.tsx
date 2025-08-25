import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: {
    default: "Times of Fashion – Your Daily Dose of Fashion & Glamour",
    template: "%s | Times of Fashion",
  },
  description:
    "A modern online fashion magazine covering trends, beauty, lifestyle, and culture. Stylish, mobile-friendly, and collaboration ready.",
  metadataBase: new URL("https://times-of-fashion.example"),
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Times of Fashion",
    description:
      "Your Daily Dose of Fashion & Glamour. Discover trends, beauty, and lifestyle.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Times of Fashion",
    description: "Your Daily Dose of Fashion & Glamour",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 sm:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


