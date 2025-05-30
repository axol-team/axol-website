import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <Badge className="mb-6 bg-primary/10 border-primary text-primary hover:bg-primary/20">
        <Star className="w-4 h-4 mr-1" />
        Featured in Time Magazine&apos;s Top 20 EdTech Apps
      </Badge>
      <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
        Educational Digital
        <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Services Specialists
        </span>
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
        Transform your educational vision into reality with our Merve platform. Start free, scale affordably, 
        or go completely bespoke. We&apos;re the go-to experts for digital learning solutions.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:brightness-95 text-primary-foreground text-lg px-8 py-4">
          Start with Merve Free
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
        <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-primary/30 hover:bg-primary/10 text-primary">
          View Success Stories
        </Button>
      </div>
    </section>
  );
} 