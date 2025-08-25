export const metadata = {
  title: "Newsletter",
  description: "Weekly fashion insights, trends, and editor picks—straight to your inbox.",
};

export default function NewsletterPage() {
  return (
    <div className="container py-14">
      <h1 className="section-title">Newsletter</h1>
      <p className="mt-4 opacity-80 max-w-2xl">
        Subscribe for curated trend reports, beauty routines, and celebrity style breaks.
      </p>
      <form className="mt-8 max-w-xl flex gap-3">
        <input className="flex-1 border border-dark rounded-full px-4 py-3" placeholder="Your email address" type="email" />
        <button className="btn btn-primary" type="submit">Subscribe</button>
      </form>
    </div>
  );
}


