import { LucideIcon, Star, Users, Clock, Trophy } from "lucide-react";

export interface StoryStat {
  icon: LucideIcon;
  iconColorClass: string;
  borderColorClass: string;
  hoverBorderColorClass: string;
  title: string;
  description: string;
}

export interface SuccessStory {
  id: string;
  title: string;
  logo: string;
  description: string;
  badgeText: string;
  badgeIcon: LucideIcon;
  badgeIconColorClass: string;
  badgeBorderColorClass: string;
  stats: StoryStat[];
  quote: string;
  image: string;
  clientSiteLink?: string;
  readMoreLink?: string;
}

export const successStories: SuccessStory[] = [
  {
    id: "pickatale",
    title: "Pickatale",
    logo: "/images/stories/pickatale.png",
    description: "A completely bespoke online book library for schools globally, built in just 3 months",
    badgeText: "Featured Success",
    badgeIcon: Trophy,
    badgeIconColorClass: "text-chart-4",
    badgeBorderColorClass: "border-chart-4/50",
    stats: [
      {
        icon: Clock,
        iconColorClass: "text-primary",
        borderColorClass: "border-primary/40",
        hoverBorderColorClass: "hover:border-primary-darker/60",
        title: "3 Months",
        description: "From concept to global launch",
      },
      {
        icon: Star,
        iconColorClass: "text-chart-4",
        borderColorClass: "border-chart-4/40",
        hoverBorderColorClass: "hover:border-chart-4-darker/60",
        title: "Top 20 Globally",
        description: "Time Magazine's Best EdTech Apps",
      },
      {
        icon: Users,
        iconColorClass: "text-chart-1",
        borderColorClass: "border-chart-1/40",
        hoverBorderColorClass: "hover:border-chart-1-darker/60",
        title: "2+ Years",
        description: "Ongoing partnership & improvements",
      },
    ],
    quote:
      "Not only did we achieve this tight deadline, but we also continued to work with Pickatale to improve their product over the next two years, leading to global recognition.",
    image: "/images/pickatale.png",
    clientSiteLink: "https://pickatale.com",
    readMoreLink: "/stories/pickatale",
  },
  // Add more stories here in the future
];
