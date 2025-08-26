import HeroCarousel from "./components/HeroCarousel";
import ArticleCarousel from "./components/ArticleCarousel";
import BlogSidebar from "./components/BlogSidebar";

export default function Home() {
  return (
    <div>
      {/* Hero Section - Minimized */}
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
        <div className="container py-12 text-center relative">
          <p className="category-label gold-accent mb-3">Times of Fashion</p>
          <h1 className="text-3xl md:text-4xl font-serif leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] mb-4">
            Your Daily Dose of Fashion & Glamour
          </h1>
          <div className="flex items-center justify-center gap-4">
            <a href="#latest" className="btn btn-primary">Read Latest</a>
            <a href="/newsletter" className="btn border-white text-white hover:bg-white hover:text-black">Subscribe</a>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-gray-100 py-6">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-20 bg-[var(--color-pastel-blue)] rounded overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200" />
              </div>
              <div>
                <p className="text-sm text-gray-600">The September issue is here featuring Emma Stone.</p>
              </div>
            </div>
            <a href="/newsletter" className="btn btn-primary text-sm px-6 py-2">
              SUBSCRIBE NOW
            </a>
          </div>
        </div>
      </section>

      {/* Featured Articles with Blog Sidebar */}
      <section className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Featured Articles */}
          <div className="lg:col-span-2">
            <h2 className="section-title mb-8">Featured Articles</h2>
            <div className="space-y-8">
              {/* Main Featured Article */}
              <article className="group cursor-pointer">
                <div className="aspect-[16/10] bg-[var(--color-pastel-blue)] rounded-lg overflow-hidden mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200" />
                </div>
                <div className="category-label opacity-70 mb-2">FASHION</div>
                <h3 className="article-title group-hover:opacity-80 transition-opacity mb-2">
                  The Rise of Sustainable Luxury: How Designers Are Embracing Eco-Conscious Fashion
                </h3>
                <p className="text-sm opacity-70 leading-relaxed">
                  From recycled materials to ethical production, discover how luxury brands are leading the sustainability revolution.
                </p>
              </article>
              
              {/* Secondary Featured Articles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <article className="group cursor-pointer">
                  <div className="aspect-[4/5] bg-[var(--color-pastel-mint)] rounded-lg overflow-hidden mb-4">
                    <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200" />
                  </div>
                  <div className="category-label opacity-70 mb-2">BEAUTY</div>
                  <h3 className="article-title group-hover:opacity-80 transition-opacity">
                    Clean Beauty Revolution: The Ingredients You Need to Know in 2025
                  </h3>
                </article>
                
                <article className="group cursor-pointer">
                  <div className="aspect-[4/5] bg-[var(--color-pastel-pink)] rounded-lg overflow-hidden mb-4">
                    <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-200" />
                  </div>
                  <div className="category-label opacity-70 mb-2">LIFESTYLE</div>
                  <h3 className="article-title group-hover:opacity-80 transition-opacity">
                    The Art of Slow Living: Finding Balance in a Fast-Paced World
                  </h3>
                </article>
              </div>
            </div>
          </div>

          {/* Blog Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </section>

      {/* Article Carousels */}
      <section className="container py-16">
        <ArticleCarousel 
          title="Trending Now"
          articles={[
            { category: "FASHION", title: "Street Style Stars: How to Recreate Celebrity Looks for Less", author: "BY ANNA CAFOLLA" },
            { category: "BEAUTY", title: "The Ultimate Guide to Building a Capsule Wardrobe", author: "BY MARGAUX ANBOUBA" },
            { category: "LIFESTYLE", title: "Fashion Week Highlights: What's Trending This Season", author: "BY HANNAH JACKSON" },
            { category: "CELEBRITY", title: "Sustainable Shopping: Where to Find Ethical Fashion", author: "BY SHELBY WAX" },
          ]}
        />
      </section>

      {/* Must Read Section */}
      <section className="container py-16">
        <ArticleCarousel 
          title="MUST READ"
          articles={[
            { category: "CELEBRITY STYLE", title: "Rihanna Takes on the Scarf-As-Skirt Trend in the Most Rihanna Way Possible", author: "BY ANNA CAFOLLA" },
            { category: "CELEBRITY STYLE", title: "As Jeans Get Skinnier Once Again, Kendall Jenner Offers a 2025 Take", author: "BY ANNA CAFOLLA" },
            { category: "WEDDINGS", title: "Bob Mackie Came Out of Retirement to Design This Bride&apos;s Bespoke Wedding Gown", author: "BY SHELBY WAX" },
            { category: "FASHION", title: "The Rise of Sustainable Luxury: How Designers Are Embracing Eco-Conscious Fashion", author: "BY MARGAUX ANBOUBA" },
            { category: "BEAUTY", title: "Clean Beauty Revolution: The Ingredients You Need to Know in 2025", author: "BY HANNAH JACKSON" },
            { category: "LIFESTYLE", title: "The Art of Slow Living: Finding Balance in a Fast-Paced World", author: "BY SHELBY WAX" },
          ]}
        />
      </section>

      {/* Must Shop Section */}
      <section className="bg-[var(--color-pastel-mint)] py-16">
        <div className="container">
          <ArticleCarousel 
            title="MUST SHOP"
            articles={[
              { category: "SHOPPING", title: "The Best Sustainable Fashion Brands of 2025", author: "BY ANNA CAFOLLA" },
              { category: "SHOPPING", title: "Luxury Handbags That Are Worth the Investment", author: "BY MARGAUX ANBOUBA" },
              { category: "SHOPPING", title: "Affordable Alternatives to Designer Pieces", author: "BY HANNAH JACKSON" },
              { category: "SHOPPING", title: "Seasonal Essentials Every Wardrobe Needs", author: "BY SHELBY WAX" },
              { category: "SHOPPING", title: "The Ultimate Guide to Building a Capsule Wardrobe", author: "BY ANNA CAFOLLA" },
              { category: "SHOPPING", title: "Street Style Stars: How to Recreate Celebrity Looks for Less", author: "BY MARGAUX ANBOUBA" },
            ]}
          />
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="container py-16">
        <h2 className="section-title text-center mb-12">LATEST BLOGS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-[var(--color-pastel-blue)] rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100" />
              </div>
              <div className="category-label opacity-70 mb-2">FASHION</div>
              <h3 className="article-title group-hover:opacity-80 transition-opacity mb-2">
                {[
                  "Vintage Revival: How to Style Retro Pieces in 2025",
                  "Accessory Essentials: The Pieces That Complete Every Outfit",
                  "Color Theory in Fashion: Creating Harmonious Outfits",
                  "The Rise of Gender-Neutral Fashion",
                  "Sustainable Shopping: Where to Find Ethical Fashion",
                  "Fashion Photography: Capturing Style Through the Lens"
                ][index]}
              </h3>
              <p className="text-sm opacity-70 leading-relaxed">
                {[
                  "Give new life to vintage pieces with modern styling techniques.",
                  "The finishing touches that elevate any outfit from basic to brilliant.",
                  "Understanding color psychology to create stunning ensembles.",
                  "Breaking down traditional fashion boundaries.",
                  "Shop consciously with our curated list of sustainable fashion brands.",
                  "Professional tips for capturing fashion moments."
                ][index]}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Latest Stories Section */}
      <section className="bg-[var(--color-pastel-pink)] py-16">
        <div className="container">
          <h2 className="section-title text-center mb-12">LATEST STORIES</h2>
          <ArticleCarousel 
            title=""
            articles={[
              { category: "CULTURE", title: "The Evolution of Street Style Photography", author: "BY MARGAUX ANBOUBA" },
              { category: "BEAUTY", title: "Skincare Routines That Actually Work", author: "BY HANNAH JACKSON" },
              { category: "LIFESTYLE", title: "Finding Your Personal Style: A Complete Guide", author: "BY SHELBY WAX" },
              { category: "FASHION", title: "The Future of Fashion: Technology Meets Style", author: "BY ANNA CAFOLLA" },
            ]}
          />
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
    </div>
  );
}
