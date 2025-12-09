import { ExternalLink, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Enterprise HRMS",
    category: "Human Resources",
    description: "Complete HR management solution with payroll automation, leave management, and employee self-service portal.",
    tech: [".NET Core", "Angular", "PostgreSQL"],
    gradient: "from-primary/20 to-accent/20"
  },
  {
    title: "Digital Banking Platform",
    category: "FinTech",
    description: "Secure mobile and web banking application with real-time transactions, loan processing, and fraud detection.",
    tech: ["React", "Firebase", "AI/ML"],
    gradient: "from-accent/20 to-primary/20"
  },
  {
    title: "Smart Retail POS",
    category: "Retail",
    description: "Modern point-of-sale system with inventory management, sales analytics, and multi-location support.",
    tech: ["Flutter", "Firebase", "MySQL"],
    gradient: "from-primary/15 to-accent/25"
  },
  {
    title: "Fleet Tracking System",
    category: "Logistics",
    description: "Real-time GPS tracking platform with route optimization, driver management, and delivery notifications.",
    tech: [".NET Core", "React", "PostgreSQL"],
    gradient: "from-accent/25 to-primary/15"
  },
];

const ProjectsSection = () => {
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
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-30 font-bold text-primary">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs text-accent font-mono mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
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
