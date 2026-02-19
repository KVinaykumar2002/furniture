import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesGrid from "@/components/CategoriesGrid";
import PromoBanner from "@/components/PromoBanner";
import SneakPeek from "@/components/SneakPeek";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CategoriesGrid />
      <PromoBanner />
      <SneakPeek />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
