import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post) {
      navigate("/not-found");
    }
    window.scrollTo(0, 0);
  }, [post, navigate]);

  if (!post) return null;

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <article className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <div className="mb-8">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground border-b border-border pb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden mb-12 border border-border">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>

          <div 
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default BlogPost;
