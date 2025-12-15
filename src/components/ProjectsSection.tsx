import { ExternalLink, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { useNavigate } from "react-router-dom";

const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 relative">
      <div className="hero-glow top-1/3 right-0 opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Featured Projects</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Our <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-muted-foreground">
            Explore some of our recent projects that have helped businesses transform and grow.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="group glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 relative overflow-hidden`}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs text-accent font-mono mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Link */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="p-0 h-auto text-primary self-start"
                  onClick={() => navigate(`/work/${project.slug}`)}
                >
                  View Case Study
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
