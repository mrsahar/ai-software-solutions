import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, ExternalLink, Layers } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (!project) {
      navigate("/not-found");
    }
    window.scrollTo(0, 0);
  }, [project, navigate]);

  if (!project) return null;

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
        <div className="container mx-auto max-w-4xl relative z-10">
          <Link to="/work">
            <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Layers className="w-4 h-4" />
            {project.category}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {project.description}
          </p>
        </div>
      </section>

      {/* Project Image */}
      <section className="px-4 -mt-8 mb-16">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto object-cover max-h-[600px]"
            />
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {project.solution}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Key Results</h2>
                <div className="grid gap-4">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 glass-card rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl text-center">
                <h3 className="font-semibold mb-2">Ready to build something similar?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Let's discuss how we can help you achieve similar results.
                </p>
                <Button className="w-full" onClick={() => navigate("/start-project")}>
                  Start Your Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectDetail;
