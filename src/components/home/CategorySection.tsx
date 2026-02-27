import { Link } from "react-router-dom";
import { shopByCategories } from "@/data/categorySection";

/**
 * "Shop by Category" section – circular image grid.
 * Matches the reference design: 8 per row, 2 rows, light-gray circles,
 * category label below each circle.
 */
export default function CategorySection() {
  return (
    <section className="bg-white py-12 md:py-16 px-4 md:px-6">
      <div className="container max-w-7xl mx-auto">
        {/* Heading */}
        <p
          className="text-muted-foreground"
          style={{
            fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
            fontSize: "0.875rem",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          Shop by Category
        </p>

        {/* Grid: 4 cols on mobile, 8 cols on desktop */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
            gap: "1.25rem 0.75rem",
          }}
          className="shop-by-category-grid"
        >
          {shopByCategories.map((cat) => (
            <Link
              key={cat.slug}
              to={cat.href}
              className="shop-by-category-item"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              {/* Square Box */}
              <div
                className="shop-by-category-square"
                style={{
                  width: "100%",
                  maxWidth: "110px",
                  aspectRatio: "1 / 1",
                  borderRadius: "0",
                  overflow: "hidden",
                  backgroundColor: cat.isNewArrivals ? "#1a3a6b" : "#f0f0f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "0.6rem",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                {cat.isNewArrivals ? (
                  /* New Arrivals: 4-point star on dark blue */
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 2 L23.5 15.5 L38 20 L23.5 24.5 L20 38 L16.5 24.5 L2 20 L16.5 15.5 Z"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <img
                    src={cat.image}
                    alt={cat.label}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>

              {/* Label */}
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "#444",
                  textAlign: "center",
                  lineHeight: 1.3,
                  maxWidth: "110px",
                }}
              >
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Responsive CSS injected via style tag */}
      <style>{`
        .shop-by-category-grid {
          grid-template-columns: repeat(4, 1fr) !important;
        }
        @media (min-width: 768px) {
          .shop-by-category-grid {
            grid-template-columns: repeat(8, 1fr) !important;
          }
        }
        .shop-by-category-item:hover .shop-by-category-square {
          transform: scale(1.06);
          box-shadow: 0 4px 16px rgba(0,0,0,0.10);
        }
      `}</style>
    </section>
  );
}
