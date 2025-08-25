import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-xl mb-3">Times of Fashion</h3>
          <p className="text-sm text-muted">Modern fashion magazine for trendsetters and creators.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="link-underline">About</Link></li>
            <li><Link href="/blog" className="link-underline">Blog</Link></li>
            <li><Link href="/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <p className="text-sm text-muted mb-3">Get weekly trend reports and beauty insights.</p>
          <form className="flex gap-2">
            <input type="email" placeholder="Your email" className="w-full border border-black/10 rounded px-3 py-2" />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="py-6 border-t border-black/5 text-center text-xs text-muted">
        © {new Date().getFullYear()} Times of Fashion. All rights reserved.
      </div>
    </footer>
  );
}


