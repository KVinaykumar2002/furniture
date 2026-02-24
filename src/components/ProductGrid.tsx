import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

interface ProductGridProps {
  products: Product[];
  title?: string;
  sectionId?: string;
  showViewAll?: boolean;
}

const ProductGrid = ({ products, title, sectionId, showViewAll = false }: ProductGridProps) => {
  const { addItem } = useCart();
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  if (products.length === 0) {
    return (
      <section id={sectionId} className="py-20 px-6 bg-muted">
        <div className="container text-center py-12">
          <p className="text-muted-foreground">No products in this category yet. Check back soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section id={sectionId} className="py-20 px-6 bg-muted">
      <div className="container">
        {title && (
          <>
            <p className="text-xs tracking-[0.3em] text-muted-foreground/60 uppercase mb-2 text-center">
              Curated picks
            </p>
            <h2 className="font-display text-2xl md:text-4xl font-light tracking-wider text-foreground mb-12 text-center">
              {title}
            </h2>
          </>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-card rounded-sm overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.save != null && product.save > 0 && (
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1">
                    SAVE ₹{product.save}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 w-9 h-9 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                  aria-label={wishlist.has(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart
                    className={`w-4 h-4 ${wishlist.has(product.id) ? "fill-primary text-primary" : "text-foreground"}`}
                  />
                </button>
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={() =>
                      addItem({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                      })
                    }
                    className="w-full py-2.5 bg-foreground text-primary-foreground text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-foreground/90 transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs tracking-[0.08em] text-muted-foreground uppercase line-clamp-2 leading-relaxed mb-2">
                  {product.name}
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium text-foreground">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>
                  {product.oldPrice != null && (
                    <span className="text-sm text-muted-foreground/50 line-through">
                      ₹{product.oldPrice.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        {showViewAll && (
          <div className="text-center mt-12">
            <Link
              to="/#featured"
              className="inline-block border border-muted-foreground/30 text-muted-foreground text-sm tracking-[0.15em] uppercase px-10 py-3 hover:bg-muted-foreground/5 transition-colors min-h-[44px] flex items-center justify-center"
            >
              View All
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
