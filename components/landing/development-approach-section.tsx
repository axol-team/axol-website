import { CheckCircle, Users, Shield, Clock, Rocket } from "lucide-react";

export function DevelopmentApproachSection() {
  return (
    <section className="bg-gradient-to-br from-muted/10 to-primary/10 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Development Approach</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine proven methodologies with innovative solutions to deliver exceptional digital learning experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Rapid Prototyping</h3>
                <p className="text-muted-foreground">Quick concept validation and iterative development to bring your ideas to life faster.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-chart-1/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-chart-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">User-Centered Design</h3>
                <p className="text-muted-foreground">Every solution is crafted with the end learner in mind, ensuring optimal engagement and learning outcomes.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-chart-2" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Scalable Architecture</h3>
                <p className="text-muted-foreground">Built to grow with your organization, from small teams to global institutions.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-chart-3" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Agile Delivery</h3>
                <p className="text-muted-foreground">Regular updates and transparent communication throughout the development process.</p>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Why Choose Our Services?</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-chart-1 mr-3" />
                <span className="text-card-foreground">10+ years of education technology expertise</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-chart-1 mr-3" />
                <span className="text-card-foreground">Proven track record with global recognition</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-chart-1 mr-3" />
                <span className="text-card-foreground">Cost-effective solutions using proven frameworks</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-chart-1 mr-3" />
                <span className="text-card-foreground">Ongoing support and continuous improvement</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-chart-1 mr-3" />
                <span className="text-card-foreground">Cross-industry experience and adaptability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 