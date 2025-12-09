import { 
  Building2, 
  CreditCard, 
  ShoppingCart, 
  Users, 
  MapPin, 
  LayoutDashboard,
  Cpu,
  Sparkles
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "HRMS Solutions",
    description: "Complete human resource management systems with payroll, attendance, and performance tracking."
  },
  {
    icon: Building2,
    title: "Banking Software",
    description: "Secure and scalable banking applications with transaction management and compliance features."
  },
  {
    icon: CreditCard,
    title: "POS Systems",
    description: "Modern point-of-sale solutions for retail businesses with inventory and sales analytics."
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platforms",
    description: "Full-featured shopping carts with payment integration, order management, and customer portals."
  },
  {
    icon: MapPin,
    title: "Tracking Systems",
    description: "Real-time GPS tracking and fleet management solutions for logistics and delivery."
  },
  {
    icon: LayoutDashboard,
    title: "Management Systems",
    description: "Custom ERP and CRM solutions tailored to your business workflows and processes."
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background Accent */}
      <div className="hero-glow top-1/2 left-0 -translate-y-1/2 opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Solutions That <span className="gradient-text">Transform</span> Business
          </h2>
          <p className="text-muted-foreground">
            We deliver end-to-end software solutions across industries, powered by modern technologies and AI integration.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 glow-effect"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* AI Badge */}
              <div className="mt-6 inline-flex items-center gap-1 text-xs text-accent">
                <Sparkles className="w-3 h-3" />
                AI-Enhanced
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
