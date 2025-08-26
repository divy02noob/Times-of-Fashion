export default function BlogSidebar() {
  const recentPosts = [
    {
      category: "MAKEUP",
      title: "Inside Ariana Madix's Glowy Glam on the Love Island Reunion",
      author: "BY MARGAUX ANBOUBA",
      image: "/images/istockphoto-1241605085-612x612.jpg"
    },
    {
      category: "CELEBRITY STYLE",
      title: "Emma Watson Offers a Boho Take on Activewear",
      author: "BY HANNAH JACKSON",
      image: "/images/istockphoto-834760220-612x612.jpg"
    },
    {
      category: "FASHION",
      title: "The Ultimate Guide to Building a Capsule Wardrobe",
      author: "BY ANNA CAFOLLA",
      image: "/images/istockphoto-821606032-612x612.jpg"
    }
  ];

  const trendingTopics = [
    "Sustainable Fashion",
    "Clean Beauty",
    "Street Style",
    "Celebrity Fashion",
    "Fashion Week",
    "Vintage Revival"
  ];

  return (
    <div className="space-y-8">
      {/* Recent Posts */}
      <div>
        <h3 className="text-lg font-serif font-semibold mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-[var(--color-pastel-blue)] rounded-lg overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="category-label opacity-70 mb-1">{post.category}</div>
                  <h4 className="text-sm font-medium group-hover:opacity-80 transition-opacity line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs opacity-70 mt-1">{post.author}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Trending Topics */}
      <div>
        <h3 className="text-lg font-serif font-semibold mb-4">Trending Topics</h3>
        <div className="flex flex-wrap gap-2">
          {trendingTopics.map((topic, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-xs cursor-pointer transition-colors"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-[var(--color-pastel-mint)] p-4 rounded-lg">
        <h3 className="text-lg font-serif font-semibold mb-2">Stay Updated</h3>
        <p className="text-sm opacity-70 mb-3">
          Get the latest fashion trends and beauty tips delivered to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm outline-none focus:border-gray-500"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md text-sm hover:bg-gray-800 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
