import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-playfair font-bold bg-gradient-rose-gold bg-clip-text text-transparent">
              Times of Fashion
            </div>
            <p className="text-primary-foreground/80 font-inter">
              Your premier destination for fashion, beauty, and lifestyle inspiration. 
              Discover trends, celebrate style, and embrace glamour.
            </p>
            <div className="flex space-x-4">
              <Instagram size={20} className="text-primary-foreground/60 hover:text-rose-gold transition-colors cursor-pointer" />
              <Twitter size={20} className="text-primary-foreground/60 hover:text-rose-gold transition-colors cursor-pointer" />
              <Facebook size={20} className="text-primary-foreground/60 hover:text-rose-gold transition-colors cursor-pointer" />
              <Youtube size={20} className="text-primary-foreground/60 hover:text-rose-gold transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-semibold">Categories</h3>
            <ul className="space-y-2 font-inter">
              <li><Link to="/blog/fashion" className="text-primary-foreground/80 hover:text-rose-gold transition-colors">Fashion</Link></li>
              <li><Link to="/blog/beauty" className="text-primary-foreground/80 hover:text-rose-gold transition-colors">Beauty</Link></li>
              <li><Link to="/blog/lifestyle" className="text-primary-foreground/80 hover:text-rose-gold transition-colors">Lifestyle</Link></li>
              <li><Link to="/blog/celebrity" className="text-primary-foreground/80 hover:text-rose-gold transition-colors">Celebrity</Link></li>
              <li><Link to="/blog/culture" className="text-primary-foreground/80 hover:text-rose-gold transition-colors">Culture</Link></li>
              <li><Link to="/blog/wellness" className="text-primary-foreground/80 hover:text-rose-gold transition-colors">Wellness</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-semibold">Company</h3>
            <ul className="space-y-2 font-inter">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-rose-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-rose-gold transition-colors">Contact</Link></li>
              <li><Link to="/collaboration" className="text-primary-foreground/80 hover:text-rose-gold transition-colors">Collaborations</Link></li>
              <li><Link to="/careers" className="text-primary-foreground/80 hover:text-rose-gold transition-colors">Careers</Link></li>
              <li><Link to="/press" className="text-primary-foreground/80 hover:text-rose-gold transition-colors">Press</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-semibold">Stay Connected</h3>
            <p className="text-primary-foreground/80 font-inter text-sm">
              Subscribe to our newsletter for the latest fashion updates and exclusive content.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-l-md text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:border-rose-gold font-inter text-sm"
              />
              <button className="px-4 py-2 bg-rose-gold text-primary rounded-r-md hover:bg-rose-gold-dark transition-colors">
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 font-inter text-sm">
              © 2024 Times of Fashion. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-rose-gold transition-colors font-inter text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-rose-gold transition-colors font-inter text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-primary-foreground/60 hover:text-rose-gold transition-colors font-inter text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;