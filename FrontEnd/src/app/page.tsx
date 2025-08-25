export default function Home() {
  return (
    <div>
      <section className="border-b border-black/10 bg-[var(--color-pastel-pink)]">
        <div className="container py-16 text-center">
          <p className="uppercase tracking-[0.3em] text-xs gold-accent">Times of Fashion</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-serif leading-tight">Your Daily Dose of Fashion & Glamour</h1>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg opacity-80">Trends, beauty, lifestyle and celebrity style inspiration—curated for fashion lovers and creators.</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#latest" className="btn btn-primary">Read Latest</a>
            <a href="/newsletter" className="btn">Subscribe</a>
          </div>
        </div>
      </section>

      <section id="latest" className="container py-14">
        <h2 className="section-title">Latest Articles</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <article key={index} className="border border-black/10 rounded-lg overflow-hidden">
              <div className="aspect-[16/10] bg-[var(--color-pastel-blue)]" />
              <div className="p-4">
                <div className="text-xs uppercase tracking-widest opacity-70">Fashion</div>
                <h3 className="mt-2 text-lg font-medium">Sample Article Title {index + 1}</h3>
                <p className="mt-2 text-sm opacity-80">Short teaser description to preview the article content and hook the reader.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-pastel-mint)]">
        <div className="container py-14">
          <h2 className="section-title">Category Highlights</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            {["Fashion", "Beauty", "Lifestyle", "Celebrity"].map((category) => (
              <a key={category} href={`/blog/${category.toLowerCase()}`} className="border border-black/10 rounded-lg p-6 bg-white/60 hover:bg-white transition">
                <div className="text-xs uppercase tracking-widest opacity-70">{category}</div>
                <div className="mt-2 text-base">Explore the latest in {category.toLowerCase()}.</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="section-title">Join Our Newsletter</h2>
            <p className="mt-3 opacity-80">Weekly fashion insights, trend reports, and exclusive editor picks—straight to your inbox.</p>
          </div>
          <form className="flex gap-3">
            <input type="email" placeholder="Your email address" className="flex-1 border border-black/15 rounded-full px-4 py-3 outline-none" />
            <button className="btn btn-primary" type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="container py-14">
          <h2 className="section-title">Instagram</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="aspect-square bg-[var(--color-pastel-pink)]" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
