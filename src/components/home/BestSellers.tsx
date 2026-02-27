import SectionWrapper from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getBestSellers } from "@/data/products";

export default function BestSellers() {
  const products = getBestSellers(4);
  const ref = useScrollReveal<HTMLDivElement>(0.08);

  return (
    <div ref={ref} className="animate-on-scroll">
    <SectionWrapper subtitle="Just viewed" title="Recently Viewed" className="bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </SectionWrapper>
    </div>
  );
}
