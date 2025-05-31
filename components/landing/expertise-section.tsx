import { Users, Zap, Shield, Star } from "lucide-react";

export function ExpertiseSection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">K-12 Schools</h3>
            <p className="text-sm text-muted-foreground">Comprehensive learning management systems for educational institutions</p>
          </div>

          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-chart-1 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Corporate Training</h3>
            <p className="text-sm text-muted-foreground">Internal training tools and HR learning platforms for businesses</p>
          </div>

          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-chart-2 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Higher Education</h3>
            <p className="text-sm text-muted-foreground">University and college digital learning ecosystems</p>
          </div>

          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-chart-3 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Online Courses</h3>
            <p className="text-sm text-muted-foreground">Custom e-learning platforms and course delivery systems</p>
          </div>
        </div>
      </div>
    </section>
  );
} 