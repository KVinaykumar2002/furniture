import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[500px] overflow-hidden">
      <img src={hero1} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-wide text-white text-shadow-hero mb-4">
          Modern Furniture for Inspired Living
        </h1>
        <p className="text-lg md:text-xl text-white/90 font-light mb-8 max-w-xl">
          Curate your space with elegance. Premium pieces for every room.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/#featured"
            className="inline-flex items-center justify-center h-12 px-8 rounded-2xl bg-white text-foreground font-medium hover:bg-white/90 transition-colors"
          >
            Shop Now
          </Link>
          <Link
            to="/collections"
            className="inline-flex items-center justify-center h-12 px-8 rounded-2xl border-2 border-white text-white font-medium hover:bg-white/10 transition-colors"
          >
            Explore Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
