import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, User } from "lucide-react";

const LatestArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Top 10 Fashion Trends to Try This Season",
      excerpt: "From bold colors to minimalist chic, discover the must-have trends that are dominating runways and streets this season.",
      category: "Fashion",
      author: "Emma Stone",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Budget-Friendly Fashion Hacks That Actually Work",
      excerpt: "Look expensive without breaking the bank with these clever styling tricks and shopping strategies.",
      category: "Lifestyle",
      author: "Sophia Chen",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Celebrity Street Styles You Can Copy",
      excerpt: "Get inspired by the effortless looks of your favorite celebrities and learn how to recreate them.",
      category: "Celebrity",
      author: "Alex Rivera",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "The Ultimate Guide to Sustainable Fashion",
      excerpt: "Make conscious choices with our comprehensive guide to building an eco-friendly wardrobe.",
      category: "Fashion",
      author: "Maya Patel",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-4">
            Latest <span className="text-gold">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Stay ahead of the curve with our curated selection of fashion insights, beauty tips, and lifestyle inspiration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Featured Article */}
          <div className="lg:col-span-1">
            <Card className="group overflow-hidden h-full shadow-magazine hover:shadow-gold transition-all duration-300 border-0">
              <div className="relative overflow-hidden">
                <img 
                  src={articles[0].image} 
                  alt={articles[0].title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-primary px-3 py-1 rounded-full text-sm font-inter font-semibold">
                    {articles[0].category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-playfair font-bold mb-3 group-hover:text-gold transition-colors">
                  {articles[0].title}
                </h3>
                <p className="text-muted-foreground font-inter mb-4 line-clamp-3">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground font-inter">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{articles[0].author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{articles[0].readTime}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Other Articles */}
          <div className="grid grid-cols-1 gap-6">
            {articles.slice(1).map((article) => (
              <Card key={article.id} className="group overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300 border-0">
                <div className="flex gap-4 p-6">
                  <div className="relative w-32 h-24 overflow-hidden rounded-lg flex-shrink-0">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="bg-pastel-blush text-primary px-2 py-1 rounded-full text-xs font-inter font-medium">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-playfair font-semibold mb-2 group-hover:text-gold transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-inter">
                      <div className="flex items-center gap-1">
                        <User size={12} />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-gold text-gold hover:bg-gold hover:text-primary font-inter font-semibold px-8"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
