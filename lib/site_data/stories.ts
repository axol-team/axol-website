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
        description: "Time Magazine's Top EdTech Companies 2024",
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
      "AXOL played a pivotal role in the successful launch of our web library product back in 2022. Their expertise and efficiency, from concept to execution, allowed us to bring our vision to life in just three months — a feat that seemed nearly impossible at the time.",
    image: "/images/pickatale.png",
    clientSiteLink: "https://pickatale.com",
    readMoreLink: "/stories/pickatale",
  },
  {
    id: "ultimateshred",
    title: "Ultimate Shred Academy",
    logo: "/images/stories/ultimate-shred.png",
    description: "How we helped scale NCFE-accredited fitness courses from 10 to 150+ students while reducing admin time by 87%",
    badgeText: "Education Success",
    badgeIcon: Trophy,
    badgeIconColorClass: "text-chart-2",
    badgeBorderColorClass: "border-chart-2/50",
    stats: [
      {
        icon: Users,
        iconColorClass: "text-chart-1",
        borderColorClass: "border-chart-1/40",
        hoverBorderColorClass: "hover:border-chart-1-darker/60",
        title: "15x Growth",
        description: "From 10 to 150+ student capacity",
      },
      {
        icon: Clock,
        iconColorClass: "text-primary",
        borderColorClass: "border-primary/40",
        hoverBorderColorClass: "hover:border-primary-darker/60",
        title: "87% Less Admin",
        description: "From 32 to just 4 hours weekly",
      },
      {
        icon: Star,
        iconColorClass: "text-chart-4",
        borderColorClass: "border-chart-4/40",
        hoverBorderColorClass: "hover:border-chart-4-darker/60",
        title: "92% Completion",
        description: "17% increase in success rate",
      },
    ],
    quote: "The platform hasn't just transformed our operations - it's transformed lives. We're reaching more students than ever, and I finally have time to focus on what I love - teaching.",
    image: "/images/stories/ultimate-shred-hero.jpg",
    clientSiteLink: "https://ultimateshredacademy.com",
    readMoreLink: "/stories/ultimateshred",
  },
  {
    id: "letsthrive",
    title: "Let's Thrive",
    logo: "/images/stories/letsthrive.png",
    description: "Partnering with TV Personality Baasit Siddiqui to transform character education through 'The 7 C's to Thrive' - helping young people develop essential traits for success",
    badgeText: "Education Innovation",
    badgeIcon: Trophy,
    badgeIconColorClass: "text-chart-3",
    badgeBorderColorClass: "border-chart-3/50",
    stats: [
      {
        icon: Star,
        iconColorClass: "text-chart-4",
        borderColorClass: "border-chart-4/40",
        hoverBorderColorClass: "hover:border-chart-4-darker/60",
        title: "Product Direction",
        description: "Helping Baasit refine his vision",
      },
      {
        icon: Users,
        iconColorClass: "text-chart-1",
        borderColorClass: "border-chart-1/40",
        hoverBorderColorClass: "hover:border-chart-1-darker/60",
        title: "3-Tier Program",
        description: "Comprehensive development path",
      },
      {
        icon: Clock,
        iconColorClass: "text-primary",
        borderColorClass: "border-primary/40",
        hoverBorderColorClass: "hover:border-primary-darker/60",
        title: "Nationwide",
        description: "Scaling impact across UK schools",
      },
    ],
    quote: "The wealth of knowledge they have. They have talked me through what makes a good EdTech Product. I've got so much more confidence in what the Let's Thrive platform's going to look like and, most importantly, how it's going to support schools.",
    image: "/images/stories/letsthrive-hero.jpg",
    clientSiteLink: "https://baasitsiddiqui.com/thrive-celebrating-success-in-education/",
    readMoreLink: "/stories/letsthrive",
  },
  // Add more stories here in the future
];
