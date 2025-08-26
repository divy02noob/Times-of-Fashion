import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      toast({
        title: "Welcome to Times of Fashion!",
        description: "You've successfully subscribed to our newsletter.",
      });
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-magazine border-0 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="text-rose-gold" size={24} />
                  <span className="text-rose-gold font-inter font-semibold">VIP Access</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
                  Stay In <span className="text-rose-gold">Style</span>
                </h2>
                
                <p className="text-muted-foreground font-inter mb-6 text-lg">
                  Get exclusive access to the latest fashion trends, beauty secrets, and celebrity insights delivered straight to your inbox.
                </p>
                
                <ul className="text-muted-foreground font-inter mb-8 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-rose-gold rounded-full"></div>
                    Weekly fashion trend reports
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-rose-gold rounded-full"></div>
                    Exclusive celebrity interviews
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-rose-gold rounded-full"></div>
                    Early access to sales & collaborations
                  </li>
                </ul>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 h-12 font-inter"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      size="lg"
                      className="bg-rose-gold hover:bg-rose-gold-dark text-primary font-inter font-semibold h-12 px-8 shadow-rose-gold"
                      disabled={isSubscribed}
                    >
                      {isSubscribed ? "Subscribed!" : "Subscribe"}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground font-inter">
                    By subscribing, you agree to our privacy policy. Unsubscribe at any time.
                  </p>
                </form>
              </div>

              {/* Visual */}
              <div className="relative h-64 lg:h-auto bg-gradient-to-br from-pastel-blush to-pastel-lavender">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-rose-gold rounded-full flex items-center justify-center mb-4 mx-auto shadow-rose-gold">
                      <Mail className="text-primary" size={32} />
                    </div>
                    <div className="font-playfair font-bold text-2xl text-primary mb-2">
                      Join 10,000+
                    </div>
                    <div className="font-inter text-primary/80">
                      Fashion Enthusiasts
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-8 h-8 bg-rose-gold/30 rounded-full"></div>
                <div className="absolute top-1/2 left-4 w-4 h-4 bg-white/40 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;