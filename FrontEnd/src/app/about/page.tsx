export const metadata = {
  title: "About Us",
  description: "Learn about Times of Fashion—our mission, voice, and team.",
};

export default function AboutPage() {
  return (
    <div className="container py-14">
      <h1 className="section-title">About Us</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <p className="opacity-80">
            Times of Fashion is your daily companion for trends, beauty, lifestyle,
            and celebrity style. We blend editorial curation with creator energy—
            bringing inspiration and actionable tips to elevate your personal style.
          </p>
          <p className="mt-4 opacity-80">
            Our mission is to make fashion accessible, inclusive, and fun. From
            seasonal trend guides to budget-friendly hacks, we celebrate fashion
            as a form of self-expression.
          </p>
        </div>
        <aside className="border border-black/10 rounded-lg p-6 bg-[var(--color-pastel-mint)]/60">
          <div className="text-sm uppercase tracking-widest opacity-70">Contact</div>
          <div className="mt-2">For partnerships and press: collaboration@timesoffashion.com</div>
        </aside>
      </div>
    </div>
  );
}


