import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, FileQuestion } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const quickLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Services", path: "/#services", icon: Search },
    { name: "Projects", path: "/work", icon: FileQuestion },
    { name: "Contact", path: "/contact", icon: Search },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Illustration */}
          <div className="mb-8 relative">
            <div className="text-[150px] md:text-[200px] font-bold text-primary/10 leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <FileQuestion className="w-24 h-24 md:w-32 md:h-32 text-primary/30" />
            </div>
          </div>

          {/* Message */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Page Not Found
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="default" 
              size="lg"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate(-1)}
              className="gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </Button>
          </div>

          {/* Quick Links */}
          <div className="border-t border-border pt-8">
            <h2 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
              Quick Links
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickLinks.map((link) => (
                link.path.startsWith("/#") ? (
                  <a
                    key={link.name}
                    href={link.path}
                    className="p-4 rounded-lg border border-border hover:border-primary hover:bg-secondary transition-all group"
                  >
                    <link.icon className="w-6 h-6 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                    <p className="text-sm font-medium">{link.name}</p>
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="p-4 rounded-lg border border-border hover:border-primary hover:bg-secondary transition-all group"
                  >
                    <link.icon className="w-6 h-6 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                    <p className="text-sm font-medium">{link.name}</p>
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Attempted URL */}
          {location.pathname && (
            <div className="mt-8 p-4 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground">
                Attempted URL: <code className="text-primary">{location.pathname}</code>
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
