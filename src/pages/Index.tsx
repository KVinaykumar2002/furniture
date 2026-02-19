import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContactLocation from "@/components/ContactLocation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ContactLocation />
    </div>
  );
};

export default Index;
