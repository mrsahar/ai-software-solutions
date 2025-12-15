import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/services";
import { CheckCircle, ArrowRight } from "lucide-react";

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = servicesData[slug as keyof typeof servicesData];

  useEffect(() => {
    if (!service) {
      navigate("/not-found");
    }
    window.scrollTo(0, 0);
  }, [service, navigate]);

  if (!service) return null;

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="hero-glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-8">
              <Icon className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {service.description}
            </p>
            <Button size="lg" className="rounded-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Request Proposal
            </Button>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-8 md:p-12 rounded-2xl border-primary/20">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {service.problem}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, idx) => (
              <div key={idx} className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {service.techStack.map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 group">
                <div className="w-16 h-16 rounded-xl bg-background flex items-center justify-center shadow-sm border border-border group-hover:border-primary/50 transition-colors">
                  <tech.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="font-medium text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Common Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {service.useCases.map((useCase, idx) => (
              <div key={idx} className="flex items-center justify-between p-6 glass-card rounded-xl group cursor-default">
                <span className="font-semibold text-lg">{useCase}</span>
                <ArrowRight className="w-5 h-5 text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our {service.title} services can help you achieve your goals.
          </p>
          <Button 
            size="lg" 
            className="rounded-full text-lg px-8"
            onClick={() => navigate("/contact")}
          >
            Get in Touch
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServiceDetail;
