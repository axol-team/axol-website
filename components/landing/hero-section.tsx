import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import ContactForm from "@/components/forms/contactForm";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column - Content */}
        <div className="text-center lg:text-left">
          <Badge className="mb-6 inline-flex bg-primary/10 border-primary text-primary hover:bg-primary/20">
            <Star className="w-4 h-4 mr-1" />
            Featured in Time Magazine&apos;s Top 20 EdTech Apps
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Educational Digital
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Services Specialists
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Transform your educational vision into reality with our Merve platform. Start free, scale affordably, 
            or go completely bespoke. We&apos;re the go-to experts for digital learning solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="https://www.merve.app/signup" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:brightness-95 text-primary-foreground text-lg px-8 py-4">
                Start with Merve Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/stories" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-4 border-2 border-primary/30 hover:bg-primary/10 text-primary">
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="mt-12 lg:mt-0">
          <ContactForm className="max-w-xl mx-auto lg:max-w-none" />
        </div>
      </div>
    </section>
  );
} 