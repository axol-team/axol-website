import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Logo className="h-10 w-10" />
              <span className="text-xl font-bold">AXOL</span>
            </div>
            <p className="text-background/70">
              Educational digital services specialists helping transform learning experiences globally.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="https://www.merve.app" className="hover:text-background transition-colors">Merve.app</a></li>
              <li><a href="https://www.merve.app/features" className="hover:text-background transition-colors">Features</a></li>
              <li><a href="https://www.merve.app/pricing" className="hover:text-background transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="/services/bespoke-software-development" className="hover:text-background transition-colors">Bespoke Development</a></li>
              <li><a href="/services/merve-platform-customisation" className="hover:text-background transition-colors">Merve Platform Customisation</a></li>
              <li><a href="/services/edtech-consulting" className="hover:text-background transition-colors">EdTech Consulting</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">View All Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="/contact" className="hover:text-background transition-colors">Get in Touch</a></li>
              <li><a href="/contact" className="hover:text-background transition-colors">Partnership</a></li>
              <li><a href="/contact" className="hover:text-background transition-colors">Careers</a></li>
              <li><a href="/posts" className="hover:text-background transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
          <p>&copy; 2025 AXOL Ltd. All rights reserved. Transforming digital learning worldwide.</p>
        </div>
      </div>
    </footer>
  );
} 