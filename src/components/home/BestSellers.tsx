import SectionWrapper from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";
import { getBestSellers } from "@/data/products";

export default function BestSellers() {
  const products = getBestSellers(4);

  return (
    <SectionWrapper subtitle="Top picks" title="Best Sellers" className="bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </SectionWrapper>
  );
}
