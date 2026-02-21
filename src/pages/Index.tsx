import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesGrid from "@/components/CategoriesGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import BestSellersNewArrivals from "@/components/BestSellersNewArrivals";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CategoriesGrid />
      <FeaturedProducts />
      <WhyChooseUs />
      <BestSellersNewArrivals />
      <Testimonials />
      <Newsletter />
      <ContactLocation />
      <Footer />
    </div>
  );
};

export default Index;
