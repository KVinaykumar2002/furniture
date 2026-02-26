import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/data/products";

export default function FeaturedProducts() {
  const products = getFeaturedProducts(8);

  return (
    <SectionWrapper
      id="featured"
      subtitle="Curated picks"
      title="Featured Products"
      className="bg-white"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/collections"
          className="inline-flex items-center justify-center h-12 px-8 border border-muted-foreground/30 text-muted-foreground font-medium hover:bg-muted/50 transition-colors uppercase tracking-wide text-sm"
        >
          View All
        </Link>
      </div>
    </SectionWrapper>
  );
}
