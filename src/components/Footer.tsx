import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-footer text-footer-foreground overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-footer-foreground/20 to-transparent" />

      <div className="container px-6 py-20 relative z-10 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <h3 className="font-display text-3xl font-light tracking-wider mb-6 text-primary">DesignerZhub</h3>
            <p className="text-base text-footer-muted leading-relaxed mb-8 max-w-sm">
              Exclusive Luxury Home Interiors. We curate spaces that tell your story with elegance and precision.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="inline-block border border-footer-foreground/30 text-footer-foreground text-xs uppercase tracking-widest px-8 py-3 hover:bg-footer-foreground/5 transition-all duration-300 backdrop-blur-sm"
              >
                Inquire Now
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] mb-6 text-footer-foreground/70 uppercase">Discover</h4>
            <ul className="space-y-3 text-sm text-footer-muted">
              {["Furniture", "Collections", "Outdoor", "Lighting", "Art & Decor"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-px bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] mb-6 text-footer-foreground/70 uppercase">Company</h4>
            <ul className="space-y-3 text-sm text-footer-muted">
              {["Our Philosophy", "Designers", "Showrooms", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-px bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-8">
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] mb-6 text-footer-foreground/70 uppercase">Headquarters</h4>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 text-primary/80" />
                <p className="text-sm text-footer-muted leading-loose">
                  F963+6C, Shop No 101 & 102,<br />
                  TVRR Majestic Botanical Garden Lane,<br />
                  Opp Chirec Public School, Kobdpur,<br />
                  Hyderabad, Telangana 500084
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-footer-foreground/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-footer-foreground/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary/80" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-tighter text-footer-muted">Concierge</p>
                  <p className="text-sm font-medium">81218 06688</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-footer-foreground/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary/80" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-tighter text-footer-muted">Digital Store</p>
                  <p className="text-sm font-medium">designerzhub.co.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-footer-foreground/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[11px] text-footer-muted tracking-wide flex items-center gap-4">
            <span>© 2025 DesignerZhub.</span>
            <span className="w-1 h-1 rounded-full bg-footer-muted/30"></span>
            <span>All rights reserved.</span>
          </div>
          <div className="flex gap-8 text-[11px] text-footer-muted tracking-widest uppercase">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
