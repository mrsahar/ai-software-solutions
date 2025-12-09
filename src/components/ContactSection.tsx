import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <div className="animated-border rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="hero-glow top-0 left-1/2 -translate-x-1/2 opacity-30" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Let's Talk</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Ready to <span className="gradient-text">Build Something Great?</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Let's discuss your project and explore how we can help you achieve your goals 
                with cutting-edge technology and AI solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl">
                  Schedule a Call
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="hero-outline" size="xl">
                  <Mail className="w-5 h-5" />
                  Send an Email
                </Button>
              </div>

              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  Or reach us directly at{" "}
                  <a href="mailto:hello@nexatech.dev" className="text-primary hover:underline">
                    hello@nexatech.dev
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
