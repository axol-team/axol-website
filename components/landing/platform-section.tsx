import { CheckCircle, Shield, Users, ArrowRight, Zap, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function PlatformSection() {
  return (
    <section id="platform" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Choose Your Path to Success</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you need a ready-to-go solution or custom development, we&apos;ve got you covered. 
            Both options leverage our proven Merve platform for maximum value.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {/* Pro Subscription Option */}
          <Card className="relative border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Zap className="w-3 h-3 mr-1" />
                Most Popular
              </Badge>
            </div>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <CardTitle className="text-2xl text-primary">Pro Subscription</CardTitle>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">£40</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>
              <CardDescription className="text-base leading-relaxed">
                Perfect for growing educational businesses. Get instant access to all features 
                with premium support included.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 justify-between gap-6">
              <div className="space-y-4">
                <div className="grid gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">Secure Online Learning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">Unlimited Users & Content</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">Premium Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">30-Day Money Back Guarantee</span>
                  </div>
                </div>
              </div>
              <Button asChild className="w-full h-12 text-base font-semibold hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-transform duration-200">
                <Link href="https://www.merve.app/signup?plan=pro" className="flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Bespoke Solutions Option */}
          <Card className="relative border-2 border-chart-2/30 bg-gradient-to-br from-chart-2/5 to-transparent hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-chart-2/10 text-chart-2 border-chart-2/20">
                <Wrench className="w-3 h-3 mr-1" />
                Custom
              </Badge>
            </div>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-chart-2 to-chart-2/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <CardTitle className="text-2xl text-chart-2">Bespoke Solutions</CardTitle>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-chart-2">Flexible</span>
                  <span className="text-muted-foreground">pricing</span>
                </div>
              </div>
              <CardDescription className="text-base leading-relaxed">
                Need something unique? We build custom solutions on the Merve foundation, 
                saving you up to 90% on development costs.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 justify-between gap-6">
              <div className="space-y-4">
                <div className="grid gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-chart-2/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-chart-2" />
                    </div>
                    <span className="text-sm font-medium">Custom Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-chart-2/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-chart-2" />
                    </div>
                    <span className="text-sm font-medium">Dedicated Account Manager</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-chart-2/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-chart-2" />
                    </div>
                    <span className="text-sm font-medium">Integrations & Customisation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-chart-2/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-chart-2" />
                    </div>
                    <span className="text-sm font-medium">Ongoing Support & Maintenance</span>
                  </div>
                </div>
              </div>
              <Button asChild className="w-full h-12 text-base font-semibold bg-chart-2 hover:scale-105 hover:bg-chart-2 hover:text-white transition-transform duration-200">
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  Get Custom Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Summary */}
        <div className="bg-muted/30 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">Why Choose Merve as Your Foundation?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold">Proven Platform</h4>
              <p className="text-sm text-muted-foreground">Battle-tested infrastructure used by thousands of users</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Wrench className="w-6 h-6 text-chart-2" />
              </div>
              <h4 className="font-semibold">Cost Effective</h4>
              <p className="text-sm text-muted-foreground">Save 60-80% on development costs vs building from scratch</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold">Secure & Scalable</h4>
              <p className="text-sm text-muted-foreground">Enterprise-grade security with automatic scaling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 