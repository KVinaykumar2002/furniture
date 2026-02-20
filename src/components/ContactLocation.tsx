import { MapPin, Phone, Globe } from "lucide-react";

const MAP_LINK = "https://maps.app.goo.gl/nuu48w3k8SECmGEdA";
const ADDRESS =
  "F963+6C, Shop No 101 & 102, TVRR Majestic Botanical Garden Lane, Opp Chirec Public School, Kobdpur, Hyderabad, Telangana 500084";

const ContactLocation = () => {
  return (
    <section className="bg-footer text-footer-foreground py-12">
      <div className="container px-6 space-y-10">
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
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 text-footer-foreground hover:opacity-90 transition-opacity"
          >
            <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-footer-foreground/70" />
            <span className="text-sm md:text-base text-left">{ADDRESS}</span>
          </a>
        </div>

        <div className="w-full">
          <p className="text-sm font-semibold text-footer-foreground/90 mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Find us on the map
          </p>
          <div className="rounded-lg overflow-hidden border border-footer-foreground/20 shadow-md">
            <iframe
              title="Designerz Hub location on Google Maps"
              src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full block"
            />
          </div>
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm text-footer-foreground/80 hover:text-footer-foreground transition-colors underline"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;
