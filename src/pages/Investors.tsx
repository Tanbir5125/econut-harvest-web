import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "./Investors/HeroSection";
import MarketOpportunity from "./Investors/MarketOpportunity";
import TargetAudience from "./Investors/TargetAudience";
import BusinessModel from "./Investors/BusinessModel";
import FinancialProjections from "./Investors/FinancialProjections";
import TheAsk from "./Investors/TheAsk";

const Investors = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <MarketOpportunity />
      <TargetAudience />
      <BusinessModel />
      <FinancialProjections />
      <TheAsk />
      <Footer />
    </div>
  );
};

export default Investors;
