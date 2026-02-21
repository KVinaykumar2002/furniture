import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative pt-24 pb-20 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={hero2} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="container relative z-10 text-center px-6">
          <p className="text-xs tracking-[0.3em] text-primary-foreground/80 uppercase mb-2">
            Our story
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-light tracking-wider text-primary-foreground">
            About DesignerZhub
          </h1>
        </div>
      </section>
      <main className="py-16 pb-20 px-6">
        <div className="container max-w-3xl">
          <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p>
              DesignerZhub is your destination for exclusive luxury home interiors. We curate spaces that tell your story with elegance and precision, bringing together premium furniture, lighting, rugs, and decor from trusted makers.
            </p>
            <p>
              Based in Hyderabad, we serve clients across India who value quality craftsmanship and timeless design. Whether you are furnishing a living room, bedroom, office, or outdoor space, our collections are chosen to inspire and last.
            </p>
            <p>
              From modern minimalism to classic elegance, we help you create a home that reflects your taste and lifestyle. Visit our showroom or explore online—we are here to help you design the space you have always imagined.
            </p>
          </div>
          <div className="mt-16 pt-12 border-t border-border space-y-6">
            <h2 className="font-display text-2xl font-light tracking-wider text-foreground">
              Get in touch
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap gap-6">
              <a
                href="tel:8121806688"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>81218 06688</span>
              </a>
              <a
                href="https://designerzhub.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>designerzhub.co.in</span>
              </a>
              <span className="flex items-start gap-3 text-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  F963+6C, Shop No 101 & 102, TVRR Majestic Botanical Garden Lane, Opp Chirec Public School, Kobdpur, Hyderabad, Telangana 500084
                </span>
              </span>
            </div>
            <Link
              to="/#contact"
              className="inline-block border border-foreground/40 text-foreground text-sm px-8 py-3.5 hover:bg-foreground/5 transition-colors mt-4"
            >
              View full contact & map
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
