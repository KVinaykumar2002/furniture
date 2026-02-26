import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  mainCategoryTabs,
  furnitureSubTabs,
  getFurnitureGridBySub,
  type FurnitureSubSlug,
  type MainCategorySlug,
} from "@/data/categorySection";
import {
  getProductsByCategory,
  getFeaturedProducts,
} from "@/data/products";
import type { Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const PRODUCTS_PER_CATEGORY = 5;

function getProductsForMainCategory(
  mainSlug: MainCategorySlug,
  subSlug?: FurnitureSubSlug
): Product[] {
  switch (mainSlug) {
    case "rugs":
      return getProductsByCategory("rugs").slice(0, PRODUCTS_PER_CATEGORY);
    case "decor":
      return getProductsByCategory("decor").slice(0, PRODUCTS_PER_CATEGORY);
    case "furniture": {
      if (subSlug === "outdoor") {
        return getProductsByCategory("outdoor").slice(0, PRODUCTS_PER_CATEGORY);
      }
      if (subSlug === "office") {
        return getProductsByCategory("office").slice(0, PRODUCTS_PER_CATEGORY);
      }
      return getProductsByCategory("furniture").slice(0, PRODUCTS_PER_CATEGORY);
    }
    case "lighting":
      return getProductsByCategory("lighting").slice(0, PRODUCTS_PER_CATEGORY);
    default:
      return getFeaturedProducts(PRODUCTS_PER_CATEGORY);
  }
}

export default function CategorySection() {
  const [mainActive, setMainActive] = useState<MainCategorySlug>("furniture");
  const [subActive, setSubActive] = useState<FurnitureSubSlug>("indoor");

  const gridItems = mainActive === "furniture" ? getFurnitureGridBySub(subActive) : [];
  const categoryProducts = useMemo(
    () => getProductsForMainCategory(mainActive, mainActive === "furniture" ? subActive : undefined),
    [mainActive, subActive]
  );

  return (
    <section className="bg-muted/30 py-12 md:py-16 px-4 md:px-6">
      <div className="container max-w-6xl mx-auto">
        {/* Title */}
        <p className="text-center text-base md:text-lg font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-4">
          Categories
        </p>
        <div className="max-w-2xl mx-auto h-px bg-border mb-8" />

        {/* Main category tabs - single line, spacing preserved */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-6">
          {mainCategoryTabs.map((tab) => (
            <button
              key={tab.slug}
              type="button"
              onClick={() => setMainActive(tab.slug)}
              className={`shrink-0 text-sm font-medium tracking-wide uppercase transition-colors pb-1 border-b-2 -mb-0.5 ${mainActive === tab.slug
                ? "text-foreground border-foreground"
                : "text-muted-foreground border-transparent hover:text-foreground/80"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sub-category tabs (Furniture: Indoor / Outdoor / Office) */}
        {mainActive === "furniture" && (
          <>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10">
              {furnitureSubTabs.map((tab, i) => (
                <span key={tab.slug} className="flex items-center gap-2 md:gap-3">
                  {i > 0 && <span className="text-muted-foreground/60 text-sm">/</span>}
                  <button
                    type="button"
                    onClick={() => setSubActive(tab.slug)}
                    className={`text-sm font-medium tracking-wide uppercase transition-colors pb-1 border-b-2 -mb-0.5 ${subActive === tab.slug
                      ? "text-foreground border-foreground"
                      : "text-muted-foreground border-transparent hover:text-foreground/80"
                      }`}
                  >
                    {tab.label}
                  </button>
                </span>
              ))}
            </div>

            {/* 2x4 Grid - same look for every category */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {gridItems.map((item) => (
                <Link
                  key={item.slug}
                  to={item.href}
                  className="group block text-center"
                >
                  <div className="aspect-square overflow-hidden mb-3 md:mb-4">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs md:text-sm font-medium tracking-wide text-muted-foreground uppercase">
                    {item.label}
                  </p>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* Products grid: 4-5 products for every category */}
        {categoryProducts.length > 0 && (
          <div className="mt-10 md:mt-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {categoryProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to="/collections"
                className="inline-flex items-center justify-center h-11 px-6 border border-muted-foreground/40 text-muted-foreground font-medium hover:bg-muted/50 hover:text-foreground transition-colors text-sm uppercase tracking-wide"
              >
                View All
              </Link>
            </div>
          </div>
        )}

        {/* Fallback when no products (e.g. very new category) */}
        {categoryProducts.length === 0 && mainActive !== "furniture" && (
          <div className="text-center py-12">
            <Link
              to="/collections"
              className="text-sm font-medium text-muted-foreground uppercase tracking-wide hover:text-foreground transition-colors"
            >
              View {mainCategoryTabs.find((t) => t.slug === mainActive)?.label} collection
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
