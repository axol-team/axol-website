import { HeroSection } from "@/components/landing/hero-section";
import { CoreServicesSection } from "@/components/landing/core-services-section";
import { DevelopmentApproachSection } from "@/components/landing/development-approach-section";
import { PlatformSection } from "@/components/landing/platform-section";
import { SuccessStorySection } from "@/components/landing/success-story-section";
import { ExpertiseSection } from "@/components/landing/expertise-section";
import { AwardsSection } from "@/components/landing/awards-section";
import { CtaSection } from "@/components/landing/cta-section";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <HeroSection />
      <CoreServicesSection />
      <ExpertiseSection />
      <AwardsSection />
      <DevelopmentApproachSection />
      <PlatformSection />
      <SuccessStorySection />
      <CtaSection />
    </div>
  );
};

export default Home;
