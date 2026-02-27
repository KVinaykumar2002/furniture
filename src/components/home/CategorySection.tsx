import { useState } from "react";
import { Link } from "react-router-dom";
import {
  mainCategoryTabs,
  furnitureSubTabs,
  getFurnitureGridBySub,
  type MainCategorySlug,
  type FurnitureSubSlug,
} from "@/data/categorySection";

/**
 * Category section matching the reference: CATEGORIES heading, one-line main nav,
 * INDOOR / OUTDOOR / OFFICE sub-nav, and 3×4 product grid. All categories fit on one line.
 */
export default function CategorySection() {
  const [mainCategory, setMainCategory] = useState<MainCategorySlug>("furniture");
  const [subCategory, setSubCategory] = useState<FurnitureSubSlug>("indoor");

  const gridItems = getFurnitureGridBySub(subCategory);

  return (
    <section
      className="py-10 md:py-14 px-4 md:px-6"
      style={{ backgroundColor: "#f8f6f3" }}
    >
      <div className="container max-w-7xl mx-auto">
        {/* Heading */}
        <p
          className="text-center mb-6"
          style={{
            fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
            fontSize: "0.875rem",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#5c5346",
          }}
        >
          Categories
        </p>

        {/* Main category nav — single line, no scroll */}
        <nav
          className="category-main-nav flex flex-nowrap justify-center items-center mb-8 overflow-x-hidden"
          aria-label="Main categories"
        >
          {mainCategoryTabs.map((tab) => (
            <button
              key={tab.slug}
              type="button"
              onClick={() => setMainCategory(tab.slug)}
              className="category-main-nav-item shrink-0 whitespace-nowrap uppercase font-medium tracking-wide transition-colors pb-1 border-b-2 -mb-px"
              style={{
                fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                color: mainCategory === tab.slug ? "#3d3832" : "#8a8378",
                borderBottomColor: mainCategory === tab.slug ? "#3d3832" : "transparent",
              }}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        <style>{`
          .category-main-nav { gap: clamp(0.5rem, 1.5vw, 1.5rem); }
          .category-main-nav-item { font-size: clamp(0.5rem, 1.05vw, 0.8rem); }
        `}</style>

        {/* Sub-category: INDOOR / OUTDOOR / OFFICE */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
          {furnitureSubTabs.map((tab, index) => (
            <span key={tab.slug} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-[#8a8378]" style={{ fontSize: "clamp(0.65rem, 1vw, 0.75rem)" }}>
                  /
                </span>
              )}
              <button
                type="button"
                onClick={() => setSubCategory(tab.slug)}
                className="uppercase font-medium tracking-wide transition-colors pb-1 border-b-2 -mb-px"
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                  fontSize: "clamp(0.7rem, 1vw, 0.8rem)",
                  color: subCategory === tab.slug ? "#3d3832" : "#8a8378",
                  borderBottomColor: subCategory === tab.slug ? "#3d3832" : "transparent",
                }}
              >
                {tab.label}
              </button>
            </span>
          ))}
        </div>

        {/* Product grid: 3 rows × 4 columns */}
        <div
          className="grid gap-4 md:gap-6"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "1fr",
          }}
        >
          {gridItems.map((item) => (
            <Link
              key={item.slug}
              to={item.href}
              className="group flex flex-col items-center text-decoration-none text-inherit"
            >
              <div
                className="w-full max-w-[140px] md:max-w-[160px] aspect-[4/3] overflow-hidden bg-[#e8e4df] mb-2 md:mb-3"
                style={{
                  filter: "sepia(0.15) contrast(1.02)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <span
                className="text-center uppercase font-medium tracking-wide"
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                  fontSize: "clamp(0.65rem, 0.9vw, 0.75rem)",
                  color: "#3d3832",
                  lineHeight: 1.3,
                }}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
