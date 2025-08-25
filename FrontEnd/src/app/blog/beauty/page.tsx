export const metadata = {
  title: "Beauty",
  description: "Makeup, skincare routines, and product roundups.",
};

export default function BeautyCategoryPage() {
  return (
    <div className="container py-14">
      <h1 className="section-title">Beauty</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 9 }).map((_, i) => (
          <article key={i} className="border border-dark rounded-lg overflow-hidden bg-white">
            <div className="aspect-[16/10] bg-[var(--color-pastel-pink)]" />
            <div className="p-4">
              <h3 className="mt-1 text-lg font-medium">Beauty Routine {i + 1}</h3>
              <p className="mt-2 text-sm opacity-80">Glow-up tips and product picks.</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}


