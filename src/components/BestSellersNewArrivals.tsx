import { useState } from "react";
import { Star, ShoppingCart } from "lucide-react";
import productSofa from "@/assets/product-sofa.jpg";
import productBed from "@/assets/product-bed.jpg";
import productLamp from "@/assets/cat-lighting.jpg";
import productTable from "@/assets/product-table.jpg";
import { useCart } from "@/context/CartContext";

const bestSellers = [
  { id: "bs-1", name: "Classic Oak Sideboard", image: productSofa, price: 24999, rating: 5 },
  { id: "bs-2", name: "Velvet Lounge Chair", image: productBed, price: 18999, rating: 4 },
];

const newArrivals = [
  { id: "na-1", name: "Minimal Pendant Lamp", image: productLamp, price: 4999, rating: 5 },
  { id: "na-2", name: "Scandinavian Coffee Table", image: productTable, price: 12999, rating: 4 },
];

const BestSellersNewArrivals = () => {
  const [activeTab, setActiveTab] = useState<"bestsellers" | "newarrivals">("bestsellers");
  const { addItem } = useCart();

  const list = activeTab === "bestsellers" ? bestSellers : newArrivals;

  return (
    <section className="py-20 px-6 bg-muted/50">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          <button
            type="button"
            onClick={() => setActiveTab("bestsellers")}
            className={`font-display text-xl md:text-2xl tracking-[0.15em] uppercase pb-2 border-b-2 transition-colors ${
              activeTab === "bestsellers"
                ? "text-foreground border-primary"
                : "text-muted-foreground/60 border-transparent hover:text-muted-foreground"
            }`}
          >
            Best Sellers
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("newarrivals")}
            className={`font-display text-xl md:text-2xl tracking-[0.15em] uppercase pb-2 border-b-2 transition-colors ${
              activeTab === "newarrivals"
                ? "text-foreground border-primary"
                : "text-muted-foreground/60 border-transparent hover:text-muted-foreground"
            }`}
          >
            New Arrivals
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {list.map((product) => (
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
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < product.rating ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm font-medium text-foreground">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellersNewArrivals;
