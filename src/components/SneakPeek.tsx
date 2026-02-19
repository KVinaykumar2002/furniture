import { Plus, Star } from "lucide-react";
import productSofa from "@/assets/product-sofa.jpg";
import productBed from "@/assets/product-bed.jpg";
import productLamp from "@/assets/cat-lighting.jpg";
import productTable from "@/assets/product-table.jpg";

const products = [
  { name: "MOVO SERVICE TROLLEY - JK-D208", image: productSofa, price: 2035, oldPrice: 2325, save: 290, rating: 5, reviews: 3 },
  { name: "43 PIECES PASSIFOY DINING SET - PAS", image: productBed, price: 1015, oldPrice: 1410, save: 395 },
  { name: "39-PIECE 6 PERSON TERRA DINNERWARE & STONEWARE SET", image: productLamp, price: 875, oldPrice: 1345, save: 470 },
  { name: "37-PIECE 6 PERSON HAVEN EBARZA DINNERWARE SET", image: productTable, price: 755, oldPrice: 1165, save: 410 },
];

const SneakPeek = () => {
  return (
    <section className="py-20 px-6 bg-muted">
      <div className="container">
        <div className="text-center mb-4">
          <p className="text-xs tracking-[0.3em] text-muted-foreground/60 uppercase mb-4">
            Featured Collections
          </p>
          <div className="flex items-center justify-center gap-10">
            <button className="font-display text-2xl md:text-4xl tracking-[0.15em] text-foreground border-b-2 border-primary pb-2 uppercase">
              Ramadan Deals
            </button>
            <button className="font-display text-2xl md:text-4xl tracking-[0.15em] text-muted-foreground/40 pb-2 uppercase hover:text-muted-foreground/60 transition-colors">
              New Arrivals
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
          {products.map((product) => (
            <a key={product.name} href="#" className="group text-center">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1">
                  SAVE{product.save}
                </span>
                <button className="absolute bottom-3 right-3 w-9 h-9 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background">
                  <Plus className="w-4 h-4 text-foreground" />
                </button>
              </div>
              <p className="text-xs tracking-[0.1em] text-muted-foreground uppercase mb-2 line-clamp-2 leading-relaxed">
                {product.name}
              </p>
              {product.rating && (
                <div className="flex items-center justify-center gap-1 mb-2">
                  {Array.from({ length: product.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                </div>
              )}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm text-foreground">₹{product.price.toLocaleString('en-IN')}</span>
                <span className="text-sm text-muted-foreground/50 line-through">₹{product.oldPrice?.toLocaleString('en-IN')}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block border border-muted-foreground/30 text-muted-foreground text-sm tracking-[0.15em] uppercase px-10 py-3 hover:bg-muted-foreground/5 transition-colors"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

export default SneakPeek;
