import { MapPin, Phone, Globe } from "lucide-react";

const ContactLocation = () => {
  return (
    <section className="bg-footer text-footer-foreground py-12">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8 md:gap-12 flex-wrap">
          <a
            href="tel:8121806688"
            className="flex items-center gap-3 text-footer-foreground hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5 shrink-0 text-footer-foreground/70" />
            <span className="text-sm md:text-base">81218 06688</span>
          </a>
          <a
            href="https://designerzhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-footer-foreground hover:opacity-90 transition-opacity"
          >
            <Globe className="w-5 h-5 shrink-0 text-footer-foreground/70" />
            <span className="text-sm md:text-base">designerzhub.co.in</span>
          </a>
          <a
            href="https://maps.app.goo.gl/nuu48w3k8SECmGEdA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 text-footer-foreground hover:opacity-90 transition-opacity"
          >
            <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-footer-foreground/70" />
            <span className="text-sm md:text-base text-left">
              F963+6C, Shop No 101 & 102, TVRR Majestic Botanical Garden Lane, Opp Chirec Public School, Kobdpur, Hyderabad, Telangana 500084
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;
