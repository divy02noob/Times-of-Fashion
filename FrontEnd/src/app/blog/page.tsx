export const metadata = {
  title: "Blog",
  description: "Discover the latest in fashion, beauty, lifestyle, and celebrity style.",
};

const categories = [
  { slug: "fashion", name: "Fashion" },
  { slug: "beauty", name: "Beauty" },
  { slug: "lifestyle", name: "Lifestyle" },
  { slug: "celebrity", name: "Celebrity" },
];

export default function BlogIndexPage() {
  return (
    <div className="container py-14">
      <h1 className="section-title">Latest from the Blog</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {categories.map((c) => (
          <a key={c.slug} href={`/blog/${c.slug}`} className="border border-dark rounded-lg p-6 bg-[var(--color-pastel-blue)]/70 hover:bg-white transition">
            <div className="text-xs uppercase tracking-widest opacity-70">Category</div>
            <div className="mt-2 text-base">{c.name}</div>
          </a>
        ))}
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 9 }).map((_, i) => (
          <article key={i} className="border border-dark rounded-lg overflow-hidden bg-white">
            <div className="aspect-[16/10] bg-[var(--color-pastel-pink)]" />
            <div className="p-4">
              <div className="text-xs uppercase tracking-widest opacity-70">Fashion</div>
              <h3 className="mt-2 text-lg font-medium">Article Headline {i + 1}</h3>
              <p className="mt-2 text-sm opacity-80">Short teaser description for the article.</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}


