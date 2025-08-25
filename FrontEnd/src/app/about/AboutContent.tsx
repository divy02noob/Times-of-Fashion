"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

export default function AboutContent() {
  return (
    <div className="mt-12 space-y-28 font-sans">
      {/* INTRO SECTION */}
      <motion.section
        className="grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          {/* Headline with Gold Accent */}
          <h1 className="text-center md:text-left font-serif text-5xl sm:text-6xl text-black dark:text-white">
            About <span className="text-[#D4AF37]">Times of Fashion</span>
          </h1>
          <p className="mt-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            We are a modern digital magazine celebrating fashion, beauty, and culture. Our editorial
            blends runway authority with real-world style, crafted for fashion lovers and creators.
          </p>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            With a clean, fashion-forward aesthetic, we partner with brands and influencers to tell
            compelling stories that inspire.
          </p>
        </motion.div>

        {/* Elegant Image Card */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop"
            alt="Editorial team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>
      </motion.section>

      {/* VALUES SECTION */}
      <section>
        <div className="text-center mb-12">
          {/* Gold Luxe Gradient for Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl sm:text-5xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-transparent bg-clip-text inline-block"
          >
            Our Core Values
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid sm:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Editorial Integrity",
              desc: "We commit to thoughtful storytelling, highlighting trends with purpose and context.",
            },
            {
              title: "Diverse Voices",
              desc: "We amplify unique perspectives, embracing creativity across global cultures.",
            },
            {
              title: "Sustainable Vision",
              desc: "We celebrate innovation that empowers mindful fashion choices for the future.",
            },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{
                y: -8,
                scale: 1.05,
                boxShadow: "0 25px 40px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 150 }}
              className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-md cursor-pointer text-center"
            >
              <h3 className="font-serif text-2xl text-black dark:text-white mb-3 tracking-wide">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {value.desc}
              </p>
              {/* Accent underline */}
              <div className="mt-4 h-0.5 w-16 mx-auto bg-[#D4AF37]" />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
