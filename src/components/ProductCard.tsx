import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
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
    <article className="group flex flex-col">
      {/* Image — square, sharp corners, no shadow */}
      <Link
        to={`/product/${product.id}`}
        className="block relative aspect-square overflow-hidden flex-shrink-0"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* Wishlist — always visible */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggle(product.id);
          }}
          className="absolute top-3 right-3 w-9 h-9 bg-white/80 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-white"
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`h-4 w-4 transition-colors ${inWishlist ? "fill-red-500 text-red-500" : "text-neutral-700"
              }`}
          />
        </button>

        {/* Add to Cart — visible on mobile, hover on desktop */}
        <div className="absolute bottom-0 left-0 right-0 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
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
            className="w-full py-2.5 bg-neutral-900 text-white text-xs font-medium tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Product info — flat, no card, no background */}
      <div className="pt-3 pb-1">
        <Link to={`/product/${product.id}`} className="block">
          <p className="text-xs font-normal text-neutral-600 uppercase tracking-wide line-clamp-2 leading-relaxed">
            {product.name}
          </p>
        </Link>
      </div>
    </article>
  );
}
