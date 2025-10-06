import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { successStories } from "@/lib/site_data/stories";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function SuccessStorySection() {
  // For now, we'll just display the first story.
  // In the future, you might want to select a story dynamically or rotate through them.
  const story = successStories[0];

  if (!story) {
    return null; // Or some fallback UI if no stories are available
  }

  const BadgeIcon = story.badgeIcon;

  return (
    <section id="success" className="bg-gradient-to-br from-accent/5 via-background to-primary/5 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Proven Success Stories
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From tight deadlines to global recognition, we deliver results that matter.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-card shadow-lg hover:shadow-xl transition-all duration-300 ease-out rounded-xl overflow-hidden border border-border/20 hover:border-accent/50">
          <CardHeader className="text-center p-6 md:p-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6">
              <div className={`flex items-center justify-center p-3 bg-chart-4/10 rounded-full`}>
                <BadgeIcon className={`w-7 h-7 ${story.badgeIconColorClass}`} />
              </div>
              <Badge variant="outline" className={`text-base px-4 py-1 ${story.badgeBorderColorClass} ${story.badgeIconColorClass} font-semibold`}>
                {story.badgeText}
              </Badge>
            </div>
            <img 
              src={story.logo} 
              alt={story.title} 
              className="h-16 mb-2 mx-auto object-contain" 
            />
            <CardDescription className="text-md md:text-lg text-muted-foreground max-w-2xl mx-auto pt-5">
              {story.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 md:p-8 space-y-8">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
              {story.stats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <div 
                    key={index} 
                    className={`flex flex-col items-center space-y-3 p-6 bg-card rounded-lg border ${stat.borderColorClass} shadow-sm hover:shadow-md ${stat.hoverBorderColorClass} transition-all duration-300`}
                  >
                    <StatIcon className={`w-8 h-8 ${stat.iconColorClass} mb-2`} />
                    <h4 className="text-xl font-semibold text-card-foreground">{stat.title}</h4>
                    <p className="text-sm text-muted-foreground px-2">{stat.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="bg-card p-6 rounded-lg border border-muted shadow-sm hover:shadow-md hover:border-accent-darker/60 transition-all duration-300">
              <p className="text-muted-foreground italic text-center text-lg md:text-xl leading-relaxed">
                &quot;{story.quote}&quot;
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              {story.clientSiteLink && (
                <Button variant="outline" asChild className="w-full sm:w-auto hover:scale-105 transition-transform duration-200">
                  <Link href={story.clientSiteLink} target="_blank" rel="noopener noreferrer">
                    Client Site <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
              {story.readMoreLink && (
                <Button variant="default" asChild className="w-full sm:w-auto hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-transform duration-200">
                  <Link href={story.readMoreLink}>
                    Read More
                  </Link>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
} 