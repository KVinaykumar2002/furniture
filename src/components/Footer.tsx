import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { stores } from "@/data/stores";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <h3 className="font-display text-lg font-light text-foreground mb-4">DesignerZhub</h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Premium furniture for inspired living. Quality craftsmanship and timeless design.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
              <a
                href="#"
                aria-label="Pinterest"
                className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background transition-colors"
              >
                <span className="text-xs font-bold">P</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blogs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Customer Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#contact" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Return Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Stores</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {stores.map((store) => (
                <li key={store.id}>
                  <Link to={`/stores/${store.id}`} className="hover:text-foreground transition-colors">
                    {store.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} DesignerZhub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
