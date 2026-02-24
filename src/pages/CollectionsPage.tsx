import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { filterAndSortProducts, type SortOption, type FilterCategory } from "@/data/products";
import { shopCategorySlugs } from "@/data/shopCategories";
import { LayoutGrid, LayoutList, Rows2, ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

type LayoutMode = "grid-2" | "grid-4" | "list";

const FILTER_SECTIONS = [
  { id: "price", label: "Price" },
  { id: "product-type", label: "Product Type" },
  { id: "color", label: "Color" },
  { id: "size", label: "Size" },
  { id: "availability", label: "Availability" },
  { id: "product-location", label: "Product Location" },
  { id: "has-3d", label: "Has 3D" },
] as const;

export default function CollectionsPage() {
  const [category, setCategory] = useState<FilterCategory>("all");
  const [sort, setSort] = useState<SortOption>("popularity");
  const [priceMin, setPriceMin] = useState<string>("");
  const [priceMax, setPriceMax] = useState<string>("");
  const [layout, setLayout] = useState<LayoutMode>("grid-4");
  const [openFilter, setOpenFilter] = useState<string | null>("price");

  const products = useMemo(() => {
    return filterAndSortProducts({
      mainCategory: category,
      priceMin: priceMin ? Number(priceMin) : undefined,
      priceMax: priceMax ? Number(priceMax) : undefined,
      sort,
    });
  }, [category, sort, priceMin, priceMax]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4 md:px-6">
        <div className="container">
          <h1 className="font-display text-2xl md:text-3xl font-light text-foreground mb-8 text-center">
            All Collections
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter sidebar - exact to image */}
            <aside className="lg:w-56 xl:w-64 shrink-0 border border-border/50 rounded-lg bg-card overflow-hidden">
              {FILTER_SECTIONS.map((section, index) => (
                <Collapsible
                  key={section.id}
                  open={openFilter === section.id}
                  onOpenChange={(open) => setOpenFilter(open ? section.id : null)}
                >
                  <div className={cn("border-b border-border/50", index === 0 && "border-t-0")}>
                    <CollapsibleTrigger className="flex w-full items-center justify-between py-4 px-4 text-left text-sm font-medium uppercase tracking-wide text-foreground hover:bg-muted/30 transition-colors">
                      {section.label}
                      <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform", openFilter === section.id && "rotate-180")} />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="px-4 pb-4 pt-0 space-y-3">
                        {section.id === "price" && (
                          <>
                            <div className="flex gap-2">
                              <input
                                type="number"
                                placeholder="Min"
                                value={priceMin}
                                onChange={(e) => setPriceMin(e.target.value)}
                                className="w-full h-9 rounded-lg border border-input bg-background px-3 text-sm"
                              />
                              <input
                                type="number"
                                placeholder="Max"
                                value={priceMax}
                                onChange={(e) => setPriceMax(e.target.value)}
                                className="w-full h-9 rounded-lg border border-input bg-background px-3 text-sm"
                              />
                            </div>
                          </>
                        )}
                        {section.id === "product-type" && (
                          <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                              <input
                                type="radio"
                                name="product-type"
                                checked={category === "all"}
                                onChange={() => setCategory("all")}
                                className="rounded border-input"
                              />
                              All
                            </label>
                            {shopCategorySlugs.map((slug) => (
                              <label key={slug} className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                                <input
                                  type="radio"
                                  name="product-type"
                                  checked={category === slug}
                                  onChange={() => setCategory(slug)}
                                  className="rounded border-input"
                                />
                                {slug.charAt(0).toUpperCase() + slug.slice(1)}
                              </label>
                            ))}
                          </div>
                        )}
                        {section.id === "color" && (
                          <div className="space-y-2 text-sm text-muted-foreground">
                            {["Black", "White", "Grey", "Brown", "Beige", "Blue"].map((c) => (
                              <label key={c} className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="rounded border-input" />
                                {c}
                              </label>
                            ))}
                          </div>
                        )}
                        {section.id === "size" && (
                          <div className="space-y-2 text-sm text-muted-foreground">
                            {["S", "M", "L", "XL"].map((s) => (
                              <label key={s} className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="rounded border-input" />
                                {s}
                              </label>
                            ))}
                          </div>
                        )}
                        {section.id === "availability" && (
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" className="rounded border-input" defaultChecked />
                              In stock
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" className="rounded border-input" />
                              Out of stock
                            </label>
                          </div>
                        )}
                        {section.id === "product-location" && (
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" className="rounded border-input" />
                              Showroom
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" className="rounded border-input" />
                              Warehouse
                            </label>
                          </div>
                        )}
                        {section.id === "has-3d" && (
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" className="rounded border-input" />
                              Yes
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" className="rounded border-input" defaultChecked />
                              No
                            </label>
                          </div>
                        )}
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              ))}
            </aside>

            {/* Main content: layout toggles + product grid */}
            <div className="flex-1 min-w-0">
              {/* Layout toggle bar - exact to image */}
              <div className="flex items-center gap-1 mb-6">
                <button
                  type="button"
                  onClick={() => setLayout("grid-2")}
                  className={cn(
                    "p-2.5 rounded-md border transition-colors",
                    layout === "grid-2"
                      ? "bg-muted border-foreground/20 text-foreground"
                      : "border-border text-muted-foreground hover:bg-muted/50"
                  )}
                  aria-label="Grid 2 columns"
                >
                  <Rows2 className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setLayout("grid-4")}
                  className={cn(
                    "p-2.5 rounded-md border transition-colors",
                    layout === "grid-4"
                      ? "bg-muted border-foreground/20 text-foreground"
                      : "border-border text-muted-foreground hover:bg-muted/50"
                  )}
                  aria-label="Grid 4 columns"
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setLayout("list")}
                  className={cn(
                    "p-2.5 rounded-md border transition-colors",
                    layout === "list"
                      ? "bg-muted border-foreground/20 text-foreground"
                      : "border-border text-muted-foreground hover:bg-muted/50"
                  )}
                  aria-label="List view"
                >
                  <LayoutList className="h-4 w-4" />
                </button>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{products.length} products</p>

              <div
                className={cn(
                  "gap-4 md:gap-6",
                  layout === "grid-2" && "grid grid-cols-2",
                  layout === "grid-4" && "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                  layout === "list" && "flex flex-col gap-4"
                )}
              >
                {products.map((p) =>
                  layout === "list" ? (
                    <Link
                      key={p.id}
                      to={`/product/${p.id}`}
                      className="flex gap-4 p-4 rounded-xl border border-border/50 bg-card hover:shadow-md transition-shadow"
                    >
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden shrink-0 bg-muted">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0 flex-1 py-1">
                        <p className="font-medium text-foreground line-clamp-2">{p.name}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          ₹{p.price.toLocaleString("en-IN")}
                          {p.oldPrice != null && (
                            <span className="ml-2 line-through">₹{p.oldPrice.toLocaleString("en-IN")}</span>
                          )}
                        </p>
                      </div>
                    </Link>
                  ) : (
                    <ProductCard key={p.id} product={p} imageAspect="portrait" />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
