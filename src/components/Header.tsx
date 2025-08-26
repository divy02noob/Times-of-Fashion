import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Fashion", href: "/blog/fashion" },
    { name: "Beauty", href: "/blog/beauty" },
    { name: "Lifestyle", href: "/blog/lifestyle" },
    { name: "Celebrity", href: "/blog/celebrity" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-playfair font-bold bg-gradient-gold bg-clip-text text-transparent">
              Times of Fashion
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-inter font-medium transition-colors hover:text-gold ${
                  isActive(item.href) ? "text-gold" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="outline" 
              size="sm"
              className="border-gold text-gold hover:bg-gold hover:text-primary font-inter"
            >
              Newsletter
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-inter font-medium transition-colors ${
                    isActive(item.href) ? "text-gold" : "text-foreground hover:text-gold"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-gold text-gold hover:bg-gold hover:text-primary font-inter"
                >
                  Newsletter
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;