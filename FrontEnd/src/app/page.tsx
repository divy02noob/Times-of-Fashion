import HeroCarousel from "./components/HeroCarousel";

export default function Home() {
  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative border-b border-light">
        <div className="absolute inset-0">
          <HeroCarousel
            images={[
              { src: "/images/istockphoto-821606032-612x612.jpg", alt: "Fashion globe" },
              { src: "/images/istockphoto-834760220-612x612.jpg", alt: "Showcase window" },
              { src: "/images/istockphoto-1241605085-612x612.jpg", alt: "Detail texture" },
            ]}
          />
        </div>
        <div className="container py-20 text-center relative">
          <p className="category-label gold-accent mb-4">Times of Fashion</p>
          <h1 className="text-5xl md:text-7xl font-serif leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] mb-6">
            Your Daily Dose of Fashion & Glamour
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white opacity-95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] mb-10">
            Trends, beauty, lifestyle and celebrity style inspiration—curated for fashion lovers and creators.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="#latest" className="btn btn-primary">Read Latest</a>
            <a href="/newsletter" className="btn border-white text-white hover:bg-white hover:text-black">Subscribe</a>
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="container py-16">
        <h2 className="section-title mb-12">Featured Stories</h2>
        <div className="featured-grid">
          <article className="group cursor-pointer">
            <div className="aspect-[4/5] bg-[var(--color-pastel-blue)] rounded-lg overflow-hidden mb-4">
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200" />
            </div>
            <div className="category-label opacity-70 mb-2">Fashion</div>
            <h3 className="article-title group-hover:opacity-80 transition-opacity">
              The Rise of Sustainable Luxury: How Designers Are Embracing Eco-Conscious Fashion
            </h3>
            <p className="mt-2 text-sm opacity-70 leading-relaxed">
              From recycled materials to ethical production, discover how luxury brands are leading the sustainability revolution.
            </p>
          </article>
          
          <article className="group cursor-pointer">
            <div className="aspect-[4/5] bg-[var(--color-pastel-mint)] rounded-lg overflow-hidden mb-4">
              <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200" />
            </div>
            <div className="category-label opacity-70 mb-2">Beauty</div>
            <h3 className="article-title group-hover:opacity-80 transition-opacity">
              Clean Beauty Revolution: The Ingredients You Need to Know in 2025
            </h3>
            <p className="mt-2 text-sm opacity-70 leading-relaxed">
              Navigate the world of clean beauty with our expert guide to the most effective and safe ingredients.
            </p>
          </article>
        </div>
      </section>

      {/* Latest Articles Grid */}
      <section id="latest" className="container py-16">
        <h2 className="section-title mb-12">Latest Articles</h2>
        <div className="editorial-grid">
          {Array.from({ length: 6 }).map((_, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-[var(--color-pastel-blue)] rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100" />
              </div>
              <div className="category-label opacity-70 mb-2">Fashion</div>
              <h3 className="article-title group-hover:opacity-80 transition-opacity mb-2">
                {[
                  "Street Style Stars: How to Recreate Celebrity Looks for Less",
                  "The Ultimate Guide to Building a Capsule Wardrobe",
                  "Fashion Week Highlights: What's Trending This Season",
                  "Sustainable Shopping: Where to Find Ethical Fashion",
                  "Vintage Revival: How to Style Retro Pieces in 2025",
                  "Accessory Essentials: The Pieces That Complete Every Outfit"
                ][index]}
              </h3>
              <p className="text-sm opacity-70 leading-relaxed">
                {[
                  "Get the celebrity look without breaking the bank with these affordable alternatives.",
                  "Build a versatile wardrobe that works for every occasion and season.",
                  "From runway to real life, discover the trends that will define this year's style.",
                  "Shop consciously with our curated list of sustainable fashion brands.",
                  "Give new life to vintage pieces with modern styling techniques.",
                  "The finishing touches that elevate any outfit from basic to brilliant."
                ][index]}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Category Highlights */}
      <section className="bg-[var(--color-pastel-mint)] py-16">
        <div className="container">
          <h2 className="section-title mb-12">Explore Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {["Fashion", "Beauty", "Lifestyle", "Celebrity"].map((category) => (
              <a key={category} href={`/blog/${category.toLowerCase()}`} className="group">
                <div className="border border-dark rounded-lg p-8 bg-white/80 hover:bg-white transition-all duration-300 hover:shadow-lg">
                  <div className="category-label opacity-70 mb-3">{category}</div>
                  <div className="text-lg font-medium group-hover:opacity-80 transition-opacity">
                    Discover the latest in {category.toLowerCase()} trends, tips, and inspiration.
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-subtitle mb-6">Join Our Newsletter</h2>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            Weekly fashion insights, trend reports, and exclusive editor picks—straight to your inbox.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 border border-dark rounded-full px-6 py-4 outline-none focus:border-foreground transition-colors" 
            />
            <button className="btn btn-primary px-8" type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="border-t border-dark py-16">
        <div className="container">
          <h2 className="section-title mb-8">Follow Our Style Journey</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="aspect-square bg-[var(--color-pastel-pink)] rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
