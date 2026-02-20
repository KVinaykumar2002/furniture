import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ContactLocation />
      <Footer />
    </div>
  );
};

export default Index;
