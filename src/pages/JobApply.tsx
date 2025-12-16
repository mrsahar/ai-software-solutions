import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { jobs } from "@/data/jobs";
import { ArrowLeft, Upload, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const JobApply = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const job = jobs.find((j) => j.id === id);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (!job) {
      navigate("/careers");
    }
    window.scrollTo(0, 0);
  }, [job, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Application Submitted!",
      description: "We've received your application and will get back to you soon.",
    });

    setIsSubmitting(false);
    setTimeout(() => navigate("/careers"), 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  if (!job) return null;

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-2xl">
            {/* Back Button */}
            <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all" onClick={() => navigate("/careers")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Careers
            </Button>

            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Apply for {job.title}</h1>
                <p className="text-muted-foreground">{job.department} · {job.location} · {job.type}</p>
            </div>

            <div className="glass-card p-8 rounded-xl border border-border/50">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" required placeholder="John" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" required placeholder="Doe" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required placeholder="john@example.com" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn Profile</Label>
                        <Input id="linkedin" type="url" placeholder="https://linkedin.com/in/johndoe" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="portfolio">Portfolio / Website (Optional)</Label>
                        <Input id="portfolio" type="url" placeholder="https://johndoe.com" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="resume">Resume/CV</Label>
                        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:bg-secondary/50 transition-colors cursor-pointer relative">
                            <Input 
                                id="resume" 
                                type="file" 
                                accept=".pdf,.doc,.docx" 
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                onChange={handleFileChange}
                                required
                            />
                            <div className="flex flex-col items-center gap-2">
                                <Upload className="w-8 h-8 text-muted-foreground" />
                                {file ? (
                                    <div className="flex items-center gap-2 text-primary font-medium">
                                        <CheckCircle2 className="w-4 h-4" />
                                        {file.name}
                                    </div>
                                ) : (
                                    <>
                                        <p className="font-medium">Click to upload or drag and drop</p>
                                        <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (Max 5MB)</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="coverLetter">Cover Letter</Label>
                        <Textarea 
                            id="coverLetter" 
                            placeholder="Tell us why you're a great fit for this role..." 
                            className="min-h-[150px]"
                        />
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting Application..." : "Submit Application"}
                    </Button>
                </form>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default JobApply;
