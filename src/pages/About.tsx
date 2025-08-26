import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Star, Award } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Isabella Rodriguez",
      role: "Editor-in-Chief",
      bio: "Fashion industry veteran with 15+ years experience at top magazines.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop"
    },
    {
      name: "James Chen",
      role: "Creative Director",
      bio: "Award-winning photographer and visual storyteller.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
    },
    {
      name: "Sophia Martinez",
      role: "Beauty Editor",
      bio: "Beauty expert and skincare enthusiast with a passion for clean beauty.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl sm:text-6xl font-playfair font-bold mb-6">
              About <span className="text-gold">Times of Fashion</span>
            </h1>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
              We're passionate storytellers dedicated to bringing you the latest in fashion, beauty, and lifestyle. 
              Our mission is to inspire confidence and celebrate individual style.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-playfair font-bold mb-6">
                  Our <span className="text-gold">Mission</span>
                </h2>
                <p className="text-lg text-muted-foreground font-inter mb-6">
                  At Times of Fashion, we believe that style is personal and fashion should be accessible to everyone. 
                  We curate the best trends, share insider tips, and celebrate diverse voices in the fashion world.
                </p>
                <p className="text-lg text-muted-foreground font-inter">
                  From budget-friendly finds to luxury splurges, from sustainable fashion to the latest runway trends, 
                  we're here to guide you on your style journey.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" 
                  alt="Fashion editorial"
                  className="w-full h-96 object-cover rounded-lg shadow-magazine"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-elegant">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold mb-4">
                Our <span className="text-gold">Values</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Heart className="text-gold" size={32} />,
                  title: "Authenticity",
                  description: "We believe in genuine style advice and honest reviews"
                },
                {
                  icon: <Users className="text-gold" size={32} />,
                  title: "Inclusivity",
                  description: "Fashion is for everyone, regardless of size, age, or budget"
                },
                {
                  icon: <Star className="text-gold" size={32} />,
                  title: "Quality",
                  description: "We curate only the best content and most relevant trends"
                },
                {
                  icon: <Award className="text-gold" size={32} />,
                  title: "Innovation",
                  description: "We stay ahead of trends and embrace fashion's evolution"
                }
              ].map((value, index) => (
                <Card key={index} className="text-center p-6 shadow-elegant border-0">
                  <CardContent className="p-0">
                    <div className="mb-4 flex justify-center">{value.icon}</div>
                    <h3 className="text-xl font-playfair font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground font-inter">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold mb-4">
                Meet Our <span className="text-gold">Team</span>
              </h2>
              <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
                The passionate individuals behind Times of Fashion, bringing you the best in style and inspiration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center shadow-magazine border-0 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-playfair font-bold mb-2">{member.name}</h3>
                    <p className="text-gold font-inter font-semibold mb-3">{member.role}</p>
                    <p className="text-muted-foreground font-inter">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;