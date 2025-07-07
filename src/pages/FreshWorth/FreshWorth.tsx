import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FreshWorthHeroSection from "./HeroSection";
import FreshWorthProjectOverview from "./ProjectOverview";
import FreshWorthKeyInitiatives from "./KeyInitiatives";
import FreshWorthSuccessStories from "./SuccessStories";
import FreshWorthImpactMetrics from "./ImpactMetrics";
import FreshWorthCallToAction from "./CallToAction";

const FreshWorth = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FreshWorthHeroSection />
      <FreshWorthProjectOverview />
      <FreshWorthKeyInitiatives />
      <FreshWorthSuccessStories />
      <FreshWorthImpactMetrics />
      <FreshWorthCallToAction />
      <Footer />
    </div>
  );
};

export default FreshWorth;
