import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section id="contact" className="bg-gradient-to-r from-primary to-accent py-20 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Digital Learning?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Partner with education technology specialists who understand your challenges and deliver proven solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary-foreground text-primary hover:scale-105 hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 transition-transform duration-200">
            Discuss Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-primary-foreground text-primary bg-primary-foreground hover:scale-105 hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 transition-transform duration-200">
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  );
} 