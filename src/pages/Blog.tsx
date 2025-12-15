import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="hero-glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, trends, and thoughts on the future of technology and Artificial Intelligence.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug} 
                to={`/blog/${post.slug}`}
                className="group glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary border border-primary/20">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
