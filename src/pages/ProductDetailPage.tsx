import { useParams, Link } from "react-router-dom";
import { Star, ShoppingCart, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { getProductById } from "@/data/products";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  const { addItem } = useCart();
  const { isInWishlist, toggle } = useWishlist();

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-32 text-center">
          <p className="text-muted-foreground mb-4">Product not found.</p>
          <Link to="/" className="text-primary font-medium">Back to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 md:py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-light text-foreground mb-4">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < product.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`} />
              ))}
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-semibold text-foreground">₹{product.price.toLocaleString("en-IN")}</span>
              {product.oldPrice != null && (
                <span className="text-lg text-muted-foreground line-through">₹{product.oldPrice.toLocaleString("en-IN")}</span>
              )}
              {product.save != null && product.save > 0 && (
                <span className="text-sm font-medium text-primary">Save ₹{product.save}</span>
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}
                className="inline-flex items-center gap-2 h-12 px-8 rounded-2xl bg-primary text-primary-foreground font-medium hover:bg-primary/90"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
              <button
                type="button"
                onClick={() => toggle(product.id)}
                className={`inline-flex items-center gap-2 h-12 px-6 rounded-2xl border border-border ${isInWishlist(product.id) ? "bg-primary/10 text-primary border-primary" : ""}`}
              >
                <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? "fill-primary" : ""}`} />
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
