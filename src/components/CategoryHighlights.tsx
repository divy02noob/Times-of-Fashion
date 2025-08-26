import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CategoryHighlights = () => {
  const categories = [
    {
      name: "Fashion",
      description: "Latest runway trends and style inspiration",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop",
      count: "142 articles",
      color: "pastel-blush"
    },
    {
      name: "Beauty",
      description: "Skincare, makeup, and wellness tips",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop",
      count: "98 articles",
      color: "pastel-lavender"
    },
    {
      name: "Lifestyle",
      description: "Living well with style and purpose",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      count: "76 articles",
      color: "pastel-mint"
    },
    {
      name: "Celebrity",
      description: "Red carpet looks and star interviews",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop",
      count: "89 articles",
      color: "gold"
    },
    {
      name: "Culture",
      description: "Art, music, and cultural movements",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      count: "54 articles",
      color: "pastel-blush"
    },
    {
      name: "Wellness",
      description: "Mind, body, and soul in harmony",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68e71?w=400&h=300&fit=crop",
      count: "67 articles",
      color: "pastel-lavender"
    },
    {
      name: "Honours",
      description: "Celebrating excellence and achievements",
      image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=400&h=300&fit=crop",
      count: "32 articles",
      color: "gold"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-elegant">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-4">
            Explore Our <span className="text-gold">Categories</span>
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Dive deep into the topics that matter most to you, from high fashion to everyday wellness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Card key={category.name} className="group overflow-hidden shadow-elegant hover:shadow-magazine transition-all duration-300 border-0">
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-playfair font-bold mb-1">{category.name}</h3>
                  <p className="text-sm font-inter text-gray-200">{category.count}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground font-inter mb-4">
                  {category.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="group-hover:bg-gold group-hover:text-primary transition-colors p-0 h-auto font-inter font-semibold text-gold hover:text-primary"
                >
                  Explore Category
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryHighlights;