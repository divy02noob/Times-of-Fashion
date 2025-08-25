export const metadata = { title: "Newsletter" };

export default function NewsletterPage() {
  return (
    <div className="mt-6 max-w-2xl">
      <h1 className="font-serif text-3xl">Newsletter</h1>
      <p className="mt-2 text-muted">Join to receive weekly fashion briefs and exclusives.</p>
      <form className="mt-6 flex gap-3">
        <input type="email" required placeholder="Your email" className="w-full border border-black/10 rounded px-3 py-3" />
        <button className="btn btn-primary">Subscribe</button>
      </form>
    </div>
  );
}


