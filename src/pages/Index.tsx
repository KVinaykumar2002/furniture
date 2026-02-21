import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ShopByCategory from "@/components/home/ShopByCategory";
import FeaturedProducts from "@/components/home/FeaturedProducts";
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
      <FeaturedProducts />
      <WhyChooseUs />
      <BestSellers />
      <TestimonialsSection />
      <NewsletterSection />
      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="container text-center">
          <h2 className="font-display text-2xl font-light text-foreground mb-4">Get in touch</h2>
          <p className="text-muted-foreground mb-6">81218 06688 · designerzhub.co.in</p>
          <Link to="/stores" className="inline-flex items-center justify-center h-12 px-8 rounded-2xl border border-border font-medium hover:bg-muted">
            Store Locator
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
