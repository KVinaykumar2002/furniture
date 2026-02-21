import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const PHONE = "8121806688";
const WEBSITE = "https://designerzhub.co.in";

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

const Footer = () => {
  return (
    <footer className="relative bg-footer text-footer-foreground overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-footer-foreground/30 to-transparent" />

      <div className="container px-6 py-20 relative z-10 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-3">
            <h3 className="font-display text-3xl font-light tracking-wider mb-6 text-primary">DesignerZhub</h3>
            <p className="text-base text-footer-muted leading-relaxed mb-6 max-w-sm">
              Exclusive Luxury Home Interiors. We curate spaces that tell your story with elegance and precision.
            </p>
            <div className="flex gap-3 mb-6">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-footer-foreground/20 flex items-center justify-center text-footer-foreground hover:bg-footer-foreground/10 hover:text-primary transition-colors focus-ring-footer"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-block border border-footer-foreground/40 text-footer-foreground text-xs uppercase tracking-widest px-8 py-3.5 min-h-[44px] flex items-center hover:bg-footer-foreground/10 transition-all duration-300 focus-ring-footer rounded-sm"
            >
              Inquire Now
            </a>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] mb-6 text-footer-foreground uppercase">Discover</h4>
            <ul className="space-y-3 text-sm text-footer-muted leading-relaxed">
              {["Furniture", "Collections", "Outdoor", "Lighting", "Art & Decor"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-300 flex items-center group py-1.5 min-h-[44px] md:min-h-0 focus-ring-footer rounded"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary mr-0 group-hover:mr-2 transition-all duration-300 shrink-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] mb-6 text-footer-foreground uppercase">Company</h4>
            <ul className="space-y-3 text-sm text-footer-muted leading-relaxed">
              {["Our Philosophy", "Designers", "Showrooms", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-300 flex items-center group py-1.5 min-h-[44px] md:min-h-0 focus-ring-footer rounded"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary mr-0 group-hover:mr-2 transition-all duration-300 shrink-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] mb-6 text-footer-foreground uppercase">Customer Service</h4>
            <ul className="space-y-3 text-sm text-footer-muted leading-relaxed">
              {["Contact Us", "Shipping Info", "Returns & Exchanges", "FAQ", "Order Status"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-300 flex items-center group py-1.5 min-h-[44px] md:min-h-0 focus-ring-footer rounded"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary mr-0 group-hover:mr-2 transition-all duration-300 shrink-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-8">
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] mb-6 text-footer-foreground uppercase">Headquarters</h4>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 text-primary shrink-0" aria-hidden />
                <p className="text-sm text-footer-muted leading-loose">
                  F963+6C, Shop No 101 & 102,<br />
                  TVRR Majestic Botanical Garden Lane,<br />
                  Opp Chirec Public School, Kobdpur,<br />
                  Hyderabad, Telangana 500084
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-footer-foreground/20">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-4 py-3 min-h-[52px] rounded-md hover:bg-footer-foreground/5 transition-colors focus-ring-footer"
              >
                <div className="w-10 h-10 rounded-full border border-footer-foreground/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" aria-hidden />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-footer-muted">Concierge</p>
                  <p className="text-base font-medium text-footer-foreground">81218 06688</p>
                </div>
              </a>
              <a
                href={WEBSITE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 py-3 min-h-[52px] rounded-md hover:bg-footer-foreground/5 transition-colors focus-ring-footer"
              >
                <div className="w-10 h-10 rounded-full border border-footer-foreground/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" aria-hidden />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-footer-muted">Digital Store</p>
                  <p className="text-base font-medium text-footer-foreground break-all">designerzhub.co.in</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-footer-foreground/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-footer-muted tracking-wide flex flex-wrap items-center gap-3">
            <span>© 2025 DesignerZhub.</span>
            <span className="w-1 h-1 rounded-full bg-footer-muted/50" aria-hidden />
            <span>All rights reserved.</span>
          </div>
          <div className="flex flex-wrap gap-6 sm:gap-8 text-xs text-footer-muted tracking-widest uppercase">
            <a href="#" className="py-2 min-h-[44px] flex items-center hover:text-primary transition-colors focus-ring-footer rounded">
              Privacy
            </a>
            <a href="#" className="py-2 min-h-[44px] flex items-center hover:text-primary transition-colors focus-ring-footer rounded">
              Terms
            </a>
            <a href="#" className="py-2 min-h-[44px] flex items-center hover:text-primary transition-colors focus-ring-footer rounded">
              Shipping
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
