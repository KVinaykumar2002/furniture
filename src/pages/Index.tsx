import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ShopByCategory from "@/components/home/ShopByCategory";
import CompletedProjectsAndShowrooms from "@/components/home/CompletedProjectsAndShowrooms";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BestSellers from "@/components/home/BestSellers";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ShopByCategory />
      <CompletedProjectsAndShowrooms />
      <WhyChooseUs />
      <BestSellers />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
