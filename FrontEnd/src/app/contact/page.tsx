export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mt-6 max-w-2xl">
      <h1 className="font-serif text-3xl">Contact</h1>
      <p className="mt-2 text-muted">For partnerships, pitches, or press, drop us a note.</p>
      <form className="mt-6 grid gap-4">
        <input className="border border-black/10 rounded px-3 py-2" placeholder="Name" />
        <input className="border border-black/10 rounded px-3 py-2" placeholder="Email" type="email" />
        <textarea className="border border-black/10 rounded px-3 py-2 h-32" placeholder="Message" />
        <button className="btn btn-primary w-fit">Send</button>
      </form>
    </div>
  );
}


