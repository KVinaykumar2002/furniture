import { useState, useEffect } from "react";

const navLinks = ["Furniture", "Outdoor", "Office", "Lighting", "Rugs", "Decor", "About"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-nav shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 px-6">
        <a href="/" className="font-display text-2xl font-light tracking-wide text-nav-foreground">
          DesignerZhub
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-nav-foreground/80 hover:text-nav-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center">
          <button
            className="md:hidden text-nav-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-nav border-t border-nav-foreground/10 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a key={link} href="#" className="block text-sm text-nav-foreground/80 hover:text-nav-foreground">
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
