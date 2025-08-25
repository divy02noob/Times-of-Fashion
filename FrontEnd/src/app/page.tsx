"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactElement } from "react";

const heroImage =
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1920&auto=format&fit=crop";

interface Article {
  title: string;
  img: string;
  tag: string;
  excerpt: string;
  author: string;
  readTime: string;
  date: string;
}

const latest: Article[] = [
  {
    title: "Runway Report: Paris Fashion Week Highlights",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
    tag: "Fashion",
    excerpt:
      "Discover the silhouettes, palettes, and textures defining the season's couture.",
    author: "Emma Wilson",
    readTime: "5 min read",
    date: "2 days ago",
  },
  {
    title: "Beauty Edit: Dewy Skin and Glossy Lids",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    tag: "Beauty",
    excerpt:
      "Fresh, radiant, and effortless: pro techniques to master high-shine looks.",
    author: "Sarah Chen",
    readTime: "4 min read",
    date: "3 days ago",
  },
  {
    title: "Street Style: Pastel Pairings We Love",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
    tag: "Celebrity",
    excerpt: "Get inspired by off-duty outfits and learn how to recreate them.",
    author: "Michael Torres",
    readTime: "6 min read",
    date: "5 days ago",
  },
];

interface CategoryCard {
  name: string;
  color: string; // gradient tail
  image: string;
  count: string;
}

const categories: CategoryCard[] = [
  {
    name: "Fashion",
    color: "from-rose-500/70 to-fuchsia-500/70",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
    count: "127 Articles",
  },
  {
    name: "Beauty",
    color: "from-fuchsia-500/70 to-indigo-500/70",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    count: "89 Articles",
  },
  {
    name: "Lifestyle",
    color: "from-teal-500/70 to-sky-500/70",
    image:
      "https://images.unsplash.com/photo-1519150268069-c094cfc0b3c8?q=80&w=1200&auto=format&fit=crop",
    count: "156 Articles",
  },
  {
    name: "Celebrity",
    color: "from-amber-500/70 to-orange-600/70",
    image:
      "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?q=80&w=1200&auto=format&fit=crop",
    count: "94 Articles",
  },
];

export default function HomePage(): ReactElement {
  return (
    <div className="space-y-28">
      {/* Hero Banner */}
      <section className="relative mt-8 overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Fashion editorial"
            fill
            priority
            className="object-cover"
          />
          <motion.div
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-black"
          />
        </div>
        <div className="relative px-6 py-24 sm:py-32 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-serif text-4xl sm:text-6xl max-w-3xl"
          >
            Your Daily Dose of Fashion & Glamour
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-4 max-w-xl text-white/85"
          >
            Discover runway trends, beauty edits, and lifestyle stories curated for
            modern tastemakers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-8 flex gap-3"
          >
            <Link href="/blog" className="btn btn-primary">
              Read the Blog
            </Link>
            <Link href="/newsletter" className="btn btn-ghost">
              Join Newsletter
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Latest Articles */}
      <section>
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-3">
            Latest Stories
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.2 }} // Increased animation time
            className="text-muted text-lg max-w-xl"
          >
            Stay updated with the freshest fashion insights and trending topics
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latest.map((a, idx) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="card overflow-hidden bg-white"
            >
              <div className="relative">
                <div className="relative h-64">
                  <Image src={a.img} alt={a.title} fill className="object-cover" />
                </div>
                <span className="absolute top-4 left-4 bg-gold text-black text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
                  {a.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-2xl leading-snug">{a.title}</h3>
                <p className="mt-2 text-muted">{a.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-sm text-muted">
                  <span>{a.author}</span>
                  <span>•</span>
                  <span>{a.readTime}</span>
                  <span>•</span>
                  <span>{a.date}</span>
                </div>
                <div className="mt-4">
                  <Link href="/blog" className="link-underline">
                    Read more
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/blog" className="btn btn-primary px-8 py-3 text-lg">
            Explore Blog
          </Link>
        </div>
      </section>

      {/* Category Highlights */}
      <section>
        <div className="mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2 }} // Increased animation time
            className="font-serif text-4xl sm:text-5xl font-bold"
          >
            Explore Our World
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, delay: 0.2 }} // Increased animation time + delay
            className="text-muted text-lg mt-4" // Added space between title and subtitle
          >
            From runway to street style, beauty secrets to lifestyle tips
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c, idx) => (
            <Link key={c.name} href="/blog">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative h-80 rounded-3xl overflow-hidden shadow-md"
              >
                <Image src={c.image} alt={c.name} fill className="object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-tr ${c.color}`} />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="text-3xl font-serif font-bold drop-shadow">{c.name}</div>
                  <div className="text-sm opacity-90 mt-2">{c.count}</div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative overflow-hidden rounded-3xl p-14 bg-gradient-to-b from-pastel-lilac/40 to-pastel-pink/40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold">Never Miss a Trend</h2>
          <p className="mt-3 text-lg text-muted max-w-3xl mx-auto">
            Get the latest fashion news, exclusive content, and style tips delivered to your inbox
          </p>
          <form className="mt-8 mx-auto max-w-2xl flex gap-3 justify-center">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full border border-black/10 rounded-full px-5 py-4 bg-white"
            />
            <button type="submit" className="btn btn-primary px-6 rounded-full">
              Subscribe
            </button>
          </form>
          <div className="mt-4 text-sm text-muted">Join 50,000+ fashion enthusiasts. Unsubscribe anytime.</div>
        </motion.div>
        <div className="pointer-events-none absolute -left-10 -top-10 w-40 h-40 rounded-full bg-gold/20" />
        <div className="pointer-events-none absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-pastel-pink/40" />
      </section>

      {/* Instagram Feed */}
      <section className="rounded-3xl bg-black text-white p-10 sm:p-12">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-gold/30"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </motion.span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold">Follow Our Style</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/70"
          >
            @timesoffashion – Behind the scenes and daily inspiration
          </motion.p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {[
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519150268069-c094cfc0b3c8?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
          ].map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <Image src={src} alt="Instagram post" fill className="object-cover" />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="https://instagram.com"
            target="_blank"
            className="btn btn-primary bg-gold text-black"
          >
            Follow @timesoffashion
          </Link>
        </div>
      </section>
    </div>
  );
}
