import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductsHeroSection from "./Products/ProductsHeroSection";
import ProductsGridSection from "./Products/ProductsGridSection";
import ProductsQualityPromiseSection from "./Products/ProductsQualityPromiseSection";

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ProductsHeroSection />
      <ProductsGridSection />
      <ProductsQualityPromiseSection />
      <Footer />
    </div>
  );
};

export default Products;
