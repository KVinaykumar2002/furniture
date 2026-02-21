import { Link } from "react-router-dom";
import { Minus, Plus, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 md:py-12 px-4 pt-24">
        <h1 className="font-display text-2xl font-light text-foreground mb-8">Your Cart</h1>
        {items.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-6">Your cart is empty.</p>
            <Link to="/collections" className="inline-flex items-center justify-center h-12 px-8 rounded-2xl bg-primary text-primary-foreground font-medium">
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 rounded-2xl border border-border bg-white">
                  <div className="w-24 h-24 rounded-xl overflow-hidden bg-muted shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground line-clamp-2">{item.name}</p>
                    <p className="text-primary font-medium mt-1">₹{item.price.toLocaleString("en-IN")}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-input rounded-xl">
                        <button type="button" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="p-2">
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-[2rem] text-center text-sm">{item.quantity}</span>
                        <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2">
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button type="button" onClick={() => removeItem(item.id)} className="p-2 text-muted-foreground hover:text-destructive">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="p-6 rounded-2xl border border-border bg-white">
                <p className="flex justify-between text-foreground mb-4">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{subtotal.toLocaleString("en-IN")}</span>
                </p>
                <button type="button" className="w-full h-12 rounded-2xl bg-primary text-primary-foreground font-medium hover:bg-primary/90">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
