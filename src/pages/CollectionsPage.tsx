import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import ProductCard from "@/components/ProductCard";
import { filterAndSortProducts, type SortOption, type FilterCategory } from "@/data/products";
import { shopCategorySlugs } from "@/data/shopCategories";

export default function CollectionsPage() {
  const [category, setCategory] = useState<FilterCategory>("all");
  const [sort, setSort] = useState<SortOption>("popularity");
  const [priceMin, setPriceMin] = useState<string>("");
  const [priceMax, setPriceMax] = useState<string>("");

  const products = useMemo(() => {
    return filterAndSortProducts({
      mainCategory: category,
      priceMin: priceMin ? Number(priceMin) : undefined,
      priceMax: priceMax ? Number(priceMax) : undefined,
      sort,
    });
  }, [category, sort, priceMin, priceMax]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SectionWrapper title="All Collections" className="pt-24">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 shrink-0 space-y-6">
            <div>
              <h3 className="font-medium text-foreground mb-3">Category</h3>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as FilterCategory)}
                className="w-full h-10 rounded-xl border border-input bg-background px-3 text-sm"
              >
                <option value="all">All</option>
                {shopCategorySlugs.map((slug) => (
                  <option key={slug} value={slug}>{slug.charAt(0).toUpperCase() + slug.slice(1)}</option>
                ))}
              </select>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-3">Price</h3>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceMin}
                  onChange={(e) => setPriceMin(e.target.value)}
                  className="w-full h-10 rounded-xl border border-input px-3 text-sm"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={priceMax}
                  onChange={(e) => setPriceMax(e.target.value)}
                  className="w-full h-10 rounded-xl border border-input px-3 text-sm"
                />
              </div>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-3">Sort by</h3>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="w-full h-10 rounded-xl border border-input bg-background px-3 text-sm"
              >
                <option value="popularity">Popularity</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="new">New Arrivals</option>
              </select>
            </div>
          </aside>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-4">{products.length} products</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
      <Footer />
    </div>
  );
}
