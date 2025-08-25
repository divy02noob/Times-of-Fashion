export const metadata = {
  title: "Lifestyle",
  description: "Wellness, culture, and chic living.",
};

export default function LifestyleCategoryPage() {
  return (
    <div className="container py-14">
      <h1 className="section-title">Lifestyle</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 9 }).map((_, i) => (
          <article key={i} className="border border-black/10 rounded-lg overflow-hidden">
            <div className="aspect-[16/10] bg-[var(--color-pastel-blue)]" />
            <div className="p-4">
              <h3 className="mt-1 text-lg font-medium">Lifestyle Feature {i + 1}</h3>
              <p className="mt-2 text-sm opacity-80">Elevate your everyday routine.</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}


