import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ViewWork = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="hero-glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects. We take pride in delivering high-quality solutions that solve real-world problems.
          </p>
        </div>
      </section>

      {/* Reuse the existing ProjectsSection but maybe we can customize it or just render it */}
      <ProjectsSection />

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden bg-secondary/30">
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Inspired by what you see?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's build the next success story together.
          </p>
          <Button size="lg" className="rounded-full text-lg px-8" onClick={() => navigate("/start-project")}>
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ViewWork;
