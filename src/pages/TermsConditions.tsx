import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 gradient-text">Terms & Conditions</h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-semibold text-foreground">1. Agreement to Terms</h2>
            <p>
              These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Everlogic ("we," "us" or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
            </p>

            <h2 className="text-2xl font-semibold text-foreground">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">3. User Representations</h2>
            <p>
              By using the Site, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All registration information you submit will be true, accurate, current, and complete.</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
              <li>You have the legal capacity and you agree to comply with these Terms of Use.</li>
              <li>You are not a minor in the jurisdiction in which you reside.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground">4. Prohibited Activities</h2>
            <p>
              You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">5. Limitation of Liability</h2>
            <p>
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">6. Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:legal@everlogic.dev" className="text-primary hover:underline">legal@everlogic.dev</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TermsConditions;
