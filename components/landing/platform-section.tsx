import { CheckCircle, Zap, Shield, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PlatformSection() {
  return (
    <section id="platform" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">The Merve Platform Advantage</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            As part of our service offering, we provide access to our proven Merve platform - 
            a cost-effective starting point for many educational projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 border-chart-1/20 hover:shadow-lg transition-all duration-300 flex flex-col">
            <CardHeader>
              <div className="w-12 h-12 bg-chart-1/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-chart-1" />
              </div>
              <CardTitle className="text-chart-1">Start Free</CardTitle>
              <CardDescription>
                Get the complete Merve platform with essential learning features. 
                Customize branding to match your needs at no cost.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 justify-between gap-6">
              <ul className="space-y-2">
              <li className="flex items-center text-sm text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Build your own courses and content library
                </li>
                <li className="flex items-center text-sm text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Invite your students
                </li>
                <li className="flex items-center text-sm text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Track student progress
                </li>
              </ul>
              <Button asChild className="w-full bg-chart-1 hover:bg-chart-1/90">
                <Link href="https://www.merve.app/signup?plan=free">Get Started Free</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 bg-card hover:shadow-lg transition-all duration-300 flex flex-col">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-primary">Pro Subscription</CardTitle>
              <CardDescription>
                Unlock advanced features and premium support for just £90/month. 
                Perfect for growing educational businesses.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 justify-between gap-6">
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Secure Video Streaming
                </li>
                <li className="flex items-center text-sm text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Unlimited Merve Platform Users
                </li>
                <li className="flex items-center text-sm text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Priority Support
                </li>
              </ul>
              <Button asChild className="w-full">
                <Link href="https://www.merve.app/signup?plan=pro">Upgrade to Pro</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-chart-2/20 bg-card hover:shadow-lg transition-all duration-300 flex flex-col">
            <CardHeader>
              <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-chart-2" />
              </div>
              <CardTitle className="text-chart-2">Bespoke Solutions</CardTitle>
              <CardDescription>
                Need something unique? We use Merve as a base and charge only for modifications 
                plus a perpetual license. Save money on initial build costs.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 justify-between gap-6">
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-chart-2 mr-2" />
                  Custom development
                </li>
                <li className="flex items-center text-sm text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-chart-2 mr-2" />
                  Dedicated Account Manager
                </li>
                <li className="flex items-center text-sm text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-chart-2 mr-2" />
                  Flexible pricing options
                </li>
              </ul>
              <Button asChild className="w-full bg-chart-2 hover:bg-chart-2/90">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 