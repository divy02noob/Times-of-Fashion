import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fashion.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Fashion Magazine Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
          Your Daily Dose of
          <span className="block bg-gradient-gold bg-clip-text text-transparent">
            Fashion & Glamour
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl font-inter font-light mb-8 text-gray-200 max-w-2xl mx-auto">
          Discover the latest trends, celebrity styles, and beauty secrets from the world's fashion capitals
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold-dark text-primary font-inter font-semibold px-8 py-3 text-lg shadow-gold"
          >
            Explore Latest Trends
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary font-inter font-semibold px-8 py-3 text-lg"
          >
            Subscribe Now
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;