import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";
import { shopCategories } from "@/data/shopCategories";
import { getProductsByMainCategory } from "@/data/products";

export default function DiningPage() {
  const [searchParams] = useSearchParams();
  const sub = searchParams.get("sub") ?? undefined;
  const cat = shopCategories.dining;
  const products = getProductsByMainCategory("dining", sub);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={cat.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-6xl font-light text-white mb-4">{cat.title}</h1>
          <p className="text-white/90 max-w-xl mx-auto">{cat.description}</p>
        </div>
      </section>
      <SectionWrapper title={sub ? `${sub.replace(/-/g, " ")}` : "All Dining"} className="bg-white">
        {products.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">No products in this category yet.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </SectionWrapper>
      <Footer />
    </div>
  );
}
