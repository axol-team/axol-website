import { ArrowRight, CheckCircle, Code, Lightbulb, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
export function CoreServicesSection() {
  return (
    <section id="services" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Digital Learning Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From rapid prototypes to enterprise-scale solutions, we deliver comprehensive digital learning experiences 
            tailored to your unique requirements and industry needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-primary">Custom Development</CardTitle>
              <CardDescription>
                Bespoke educational platforms built from the ground up to meet your exact specifications and learning objectives.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Learning Management Systems
                </li>
                <li className="flex items-center text-sm text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Interactive Course Platforms
                </li>
                <li className="flex items-center text-sm text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Assessment & Analytics Tools
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-chart-1/20 bg-card hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-chart-1/10 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-chart-1" />
              </div>
              <CardTitle className="text-chart-1">Digital Consultation</CardTitle>
              <CardDescription>
                Strategic guidance to transform your educational vision into a robust digital learning ecosystem.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-chart-1 mr-2" />
                  Learning Strategy Development
                </li>
                <li className="flex items-center text-sm text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-chart-1 mr-2" />
                  Technology Stack Planning
                </li>
                <li className="flex items-center text-sm text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-chart-1 mr-2" />
                  User Experience Design
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-chart-2/20 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6 text-chart-2" />
              </div>
              <CardTitle className="text-chart-2">Ongoing Support</CardTitle>
              <CardDescription>
                Continuous improvement and support to ensure your platform evolves with your growing needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-chart-2 mr-2" />
                  Feature Enhancement
                </li>
                <li className="flex items-center text-sm text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-chart-2 mr-2" />
                  Technical Maintenance
                </li>
                <li className="flex items-center text-sm text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-chart-2 mr-2" />
                  Performance Optimization
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:scale-105 hover:bg-gradient-to-r hover:from-primary hover:to-accent text-primary-foreground text-lg px-8 py-4 transition-transform duration-200">
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 