import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Lightbulb, CheckCircle, Rocket, Heart } from "lucide-react";

const AboutUs = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="hero-glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building trust through innovation and excellence. We are dedicated to transforming businesses with intelligent software solutions.
          </p>
        </div>
      </section>

      {/* Company Story & Mission */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story & Mission</h2>
            <p className="text-muted-foreground mb-4">
              Founded with a vision to bridge the gap between complex technology and business needs, Everlogic has grown into a leading provider of AI-driven software solutions.
            </p>
            <p className="text-muted-foreground mb-6">
              Our mission is to empower organizations by organizing their future with intelligent tools that drive efficiency, growth, and innovation. We believe in the power of technology to solve real-world problems.
            </p>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Mission Driven</h3>
                <p className="text-sm text-muted-foreground">Focused on delivering value and impact.</p>
              </div>
            </div>
          </div>
          <div className="bg-secondary/50 rounded-2xl p-8 h-80 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
             {/* Placeholder for an image or illustration */}
             <Rocket className="w-32 h-32 text-primary/20 relative z-10 animate-float" />
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vision & Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make and every solution we build.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, title: "Innovation", desc: "Constantly pushing boundaries to find better solutions." },
              { icon: CheckCircle, title: "Integrity", desc: "Honest, transparent, and accountable in all we do." },
              { icon: Heart, title: "Customer Focus", desc: "Your success is our priority. We build for you." },
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Expert Team",
              "Tailored Solutions",
              "Cutting-edge Tech",
              "Proven Track Record",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 glass-card rounded-lg hover:border-primary/50 transition-colors">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Work Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs and goals." },
              { step: "02", title: "Strategy", desc: "Planning the perfect solution." },
              { step: "03", title: "Development", desc: "Building with precision and care." },
              { step: "04", title: "Launch", desc: "Deploying and supporting your success." },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
             {/* Placeholder Team Members */}
             {[1, 2, 3].map((i) => (
               <div key={i} className="glass-card rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                 <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-primary/20">
                    <Users className="w-10 h-10 text-primary" />
                 </div>
                 <h3 className="font-semibold text-lg">Team Member {i}</h3>
                 <p className="text-sm text-muted-foreground">Position</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutUs;
