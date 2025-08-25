export const metadata = {
  title: "Celebrity",
  description: "Street style, red carpet, and trendsetters.",
};

export default function CelebrityCategoryPage() {
  return (
    <div className="container py-14">
      <h1 className="section-title">Celebrity</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 9 }).map((_, i) => (
          <article key={i} className="border border-dark rounded-lg overflow-hidden bg-white">
            <div className="aspect-[16/10] bg-[var(--color-pastel-mint)]" />
            <div className="p-4">
              <h3 className="mt-1 text-lg font-medium">Celebrity Street Style {i + 1}</h3>
              <p className="mt-2 text-sm opacity-80">Get the look for less.</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}


