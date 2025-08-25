export const metadata = {
  title: "Fashion",
  description: "Trends, styling tips, and seasonal edits.",
};

export default function FashionCategoryPage() {
  return (
    <div className="container py-14">
      <h1 className="section-title">Fashion</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 9 }).map((_, i) => (
          <article key={i} className="border border-black/10 rounded-lg overflow-hidden">
            <div className="aspect-[16/10] bg-[var(--color-pastel-mint)]" />
            <div className="p-4">
              <h3 className="mt-1 text-lg font-medium">Top 10 Fashion Trends {i + 1}</h3>
              <p className="mt-2 text-sm opacity-80">Seasonal edits and how to style them.</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}


