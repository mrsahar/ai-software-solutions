import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Rocket, CheckCircle, ArrowRight } from "lucide-react";

const StartProject = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="hero-glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Start Your Project
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Tell us about your project and let's build something amazing together.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Project Form */}
            <div className="glass-card p-8 rounded-2xl border-primary/20 order-2 lg:order-1">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="mobile">Mobile App</SelectItem>
                      <SelectItem value="ai">AI Integration</SelectItem>
                      <SelectItem value="saas">SaaS Product</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Estimated Budget</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">$5k - $10k</SelectItem>
                      <SelectItem value="medium">$10k - $25k</SelectItem>
                      <SelectItem value="large">$25k - $50k</SelectItem>
                      <SelectItem value="enterprise">$50k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Project Details</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Tell us about your goals, requirements, and timeline..." 
                    className="min-h-[150px]"
                  />
                </div>

                <Button type="submit" className="w-full gap-2" size="lg">
                  Submit Request
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Info / Benefits */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Partner With Us?</h2>
                <p className="text-muted-foreground mb-8">
                  We don't just write code; we build solutions that drive business growth. Here is what you can expect when working with Everlogic.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Expert Consultation",
                    desc: "We start by understanding your business goals to recommend the best technical approach."
                  },
                  {
                    title: "Transparent Process",
                    desc: "Stay updated with regular progress reports, demos, and open communication channels."
                  },
                  {
                    title: "Quality Assurance",
                    desc: "Rigorous testing ensures your software is bug-free, secure, and performs flawlessly."
                  },
                  {
                    title: "Long-term Support",
                    desc: "We stand by our work with ongoing maintenance and support packages."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-secondary/30 rounded-xl border border-primary/10 mt-8">
                <div className="flex items-center gap-4 mb-4">
                  <Rocket className="w-8 h-8 text-primary" />
                  <h3 className="font-bold text-xl">Ready to Launch?</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Most projects kick off within 2 weeks of initial consultation. Don't wait to make your idea a reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default StartProject;
