import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks: { label: string; path: string }[] = [
  { label: "Furniture", path: "/furniture" },
  { label: "Outdoor", path: "/outdoor" },
  { label: "Office", path: "/office" },
  { label: "Lighting", path: "/lighting" },
  { label: "Rugs", path: "/rugs" },
  { label: "Decor", path: "/decor" },
  { label: "About", path: "/about" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-nav shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 px-6">
        <Link to="/" className="font-display text-2xl font-light tracking-wide text-nav-foreground">
          DesignerZhub
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`text-sm transition-colors ${
                location.pathname === path
                  ? "text-nav-foreground font-medium"
                  : "text-nav-foreground/80 hover:text-nav-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCart}
            className="relative p-3 -m-3 text-nav-foreground rounded-md hover:bg-nav-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-nav min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={`Open cart${itemCount > 0 ? `, ${itemCount} items` : ""}`}
          >
            <ShoppingBag className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center justify-center">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </button>
          <button
            type="button"
            className="md:hidden p-3 -m-3 text-nav-foreground rounded-md hover:bg-nav-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-nav min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-nav border-t border-nav-foreground/10 px-6 py-4" aria-label="Mobile menu">
          <ul className="space-y-1">
            {navLinks.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`block py-3.5 px-2 text-sm rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-nav-foreground/40 focus-visible:ring-inset min-h-[44px] flex items-center transition-colors ${
                    location.pathname === path
                      ? "text-nav-foreground bg-nav-foreground/10"
                      : "text-nav-foreground/90 hover:text-nav-foreground hover:bg-nav-foreground/5"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
