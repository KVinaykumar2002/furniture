import ProductGrid from "@/components/ProductGrid";
import { getFeaturedProducts } from "@/data/products";

const FeaturedProducts = () => {
  const products = getFeaturedProducts(8);
  return (
    <ProductGrid
      products={products}
      title="Featured Products"
      sectionId="featured"
      showViewAll
    />
  );
};

export default FeaturedProducts;
