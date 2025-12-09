import { Code2 } from "lucide-react";

const technologies = [
  { name: ".NET Core", category: "Backend" },
  { name: "Angular", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Flutter", category: "Mobile" },
  { name: "Firebase", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "AI/ML", category: "Intelligence" },
];

const TechStackSection = () => {
  return (
    <section id="tech" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Technology Stack</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Powered by <span className="gradient-text">Modern Tech</span>
          </h2>
          <p className="text-muted-foreground">
            We use industry-leading technologies to build scalable, secure, and performant applications.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group animated-border rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {tech.name}
              </div>
              <div className="text-xs text-muted-foreground mt-1 font-mono">
                {tech.category}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-full animate-float opacity-30" />
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-accent/20 rounded-full animate-float delay-300 opacity-30" />
      </div>
    </section>
  );
};

export default TechStackSection;
