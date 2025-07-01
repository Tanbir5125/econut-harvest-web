import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "./HeroSection";
import ProblemSolutionSection from "./ProblemSolutionSection";
import MarketTractionSection from "./MarketTractionSection";
import EnvironmentalImpactSection from "./EnvironmentalImpactSection";

const Impact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ProblemSolutionSection />
      <MarketTractionSection />
      <EnvironmentalImpactSection />
      <Footer />
    </div>
  );
};

export default Impact;
