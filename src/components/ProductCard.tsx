import { Link } from "react-router-dom";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { isInWishlist, toggle } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300">
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.save != null && product.save > 0 && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-lg">
            SAVE ₹{product.save}
          </span>
        )}
        {product.isNew && (
          <span className="absolute top-3 right-12 bg-foreground text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-lg">
            New
          </span>
        )}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggle(product.id);
          }}
          className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow"
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`h-5 w-5 ${inWishlist ? "fill-primary text-primary" : "text-foreground"}`} />
        </button>
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
              });
            }}
            className="w-full py-3 bg-foreground text-primary-foreground text-sm font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-foreground/90 transition-colors"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <p className="text-sm font-medium text-foreground line-clamp-2 mb-2 hover:text-primary transition-colors">
            {product.name}
          </p>
        </Link>
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < product.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-base font-semibold text-foreground">₹{product.price.toLocaleString("en-IN")}</span>
          {product.oldPrice != null && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
