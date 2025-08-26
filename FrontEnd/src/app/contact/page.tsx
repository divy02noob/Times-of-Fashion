export const metadata = {
  title: "Contact & Collaboration",
  description: "Get in touch for collaborations, PR, and general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="container py-14">
      <h1 className="section-title">Contact & Collaboration</h1>
      <p className="mt-4 opacity-80 max-w-2xl">
        Brands, PR, and creators—let&apos;s build something stylish together. Use the
        form below or email <span className="gold-accent">collaboration@timesoffashion.com</span>.
      </p>
      <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="border border-dark rounded-full px-4 py-3" placeholder="Your name" />
        <input className="border border-dark rounded-full px-4 py-3" placeholder="Your email" type="email" />
        <input className="border border-dark rounded-full px-4 py-3 md:col-span-2" placeholder="Brand / Company (optional)" />
        <textarea className="border border-dark rounded-3xl px-4 py-3 md:col-span-2" placeholder="Tell us about your project" rows={6} />
        <div className="md:col-span-2">
          <button className="btn btn-primary" type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}


