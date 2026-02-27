// Local images removed to ensure 100% unique product images
import type { CategorySlug } from "./categories";
import type { MainCategorySlug } from "./nav";

export type SubcategorySlug =
  | "sofas"
  | "center-tables"
  | "coffee-tables"
  | "relax-chairs"
  | "bar-stools"
  | "dining-chairs"
  | "dining-tables"
  | "beds";

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  save?: number;
  rating: number;
  reviews: number;
  image: string;
  category: CategorySlug;
  mainCategory: MainCategorySlug;
  subcategory?: SubcategorySlug;
  isNew?: boolean;
}

export const products: Product[] = [
  { id: "1", name: "MOVO Service Trolley - JK-D208", image: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&q=80&w=800", price: 2035, oldPrice: 2325, save: 290, rating: 5, reviews: 3, category: "furniture", mainCategory: "living", subcategory: "center-tables" },
  { id: "2", name: "43 Pieces Passifoy Dining Set", image: "https://images.unsplash.com/photo-1617806118233-18e1c0945594?auto=format&fit=crop&q=80&w=800", price: 1015, oldPrice: 1410, save: 395, rating: 4, reviews: 12, category: "furniture", mainCategory: "dining", subcategory: "dining-tables" },
  { id: "3", name: "Haven Ebarza Dinnerware Set", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800", price: 755, oldPrice: 1165, save: 410, rating: 4, reviews: 5, category: "furniture", mainCategory: "dining" },
  { id: "4", name: "Classic Oak Sideboard", image: "https://images.unsplash.com/photo-1595514535215-188b0a94b4cf?auto=format&fit=crop&q=80&w=800", price: 24999, rating: 5, reviews: 8, category: "furniture", mainCategory: "living", subcategory: "sofas" },
  { id: "5", name: "Velvet Lounge Chair", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800", price: 18999, rating: 4, reviews: 6, category: "furniture", mainCategory: "living", subcategory: "relax-chairs" },
  { id: "6", name: "Patio Dining Set - 6 Seater", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800", price: 34999, oldPrice: 39999, save: 5000, rating: 5, reviews: 4, category: "outdoor", mainCategory: "dining", subcategory: "dining-tables" },
  { id: "7", name: "Garden Lounge Chairs (Pair)", image: "https://images.unsplash.com/photo-1599596652431-8f5eb22304dc?auto=format&fit=crop&q=80&w=800", price: 12999, rating: 4, reviews: 11, category: "outdoor", mainCategory: "living", subcategory: "relax-chairs" },
  { id: "8", name: "Outdoor Coffee Table - Teak", image: "https://images.unsplash.com/photo-1583847268964-b28ce8f31586?auto=format&fit=crop&q=80&w=800", price: 15999, rating: 5, reviews: 7, category: "outdoor", mainCategory: "living", subcategory: "coffee-tables" },
  { id: "9", name: "Balcony Bistro Set", image: "https://images.unsplash.com/photo-1592398572111-e40ae68dfbf1?auto=format&fit=crop&q=80&w=800", price: 8999, rating: 4, reviews: 9, category: "outdoor", mainCategory: "dining", isNew: true },
  { id: "10", name: "Executive Desk - Walnut", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800", price: 28999, rating: 5, reviews: 5, category: "office", mainCategory: "living" },
  { id: "11", name: "Ergonomic Office Chair", image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800", price: 14999, oldPrice: 17999, save: 3000, rating: 4, reviews: 14, category: "office", mainCategory: "living", subcategory: "relax-chairs" },
  { id: "12", name: "Filing Cabinet - 2 Drawer", image: "https://images.unsplash.com/photo-1598442299849-0d9c4de4ba7d?auto=format&fit=crop&q=80&w=800", price: 7999, rating: 4, reviews: 3, category: "office", mainCategory: "living" },
  { id: "13", name: "Bookcase with Ladder", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=800", price: 21999, rating: 5, reviews: 6, category: "office", mainCategory: "living" },
  { id: "14", name: "Terra Pendant Lamp", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800", price: 4999, oldPrice: 6499, save: 1500, rating: 5, reviews: 8, category: "lighting", mainCategory: "living", isNew: true },
  { id: "15", name: "Minimal Floor Lamp", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800", price: 7499, rating: 4, reviews: 10, category: "lighting", mainCategory: "living" },
  { id: "16", name: "Table Lamp - Ceramic Base", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80&w=800", price: 3599, rating: 5, reviews: 12, category: "lighting", mainCategory: "bedroom" },
  { id: "17", name: "Chandelier - 6 Light", image: "https://images.unsplash.com/photo-1565507722709-a1b7e28b17ab?auto=format&fit=crop&q=80&w=800", price: 18999, rating: 5, reviews: 4, category: "lighting", mainCategory: "dining" },
  { id: "18", name: "Handwoven Wool Rug - 8x10", image: "https://images.unsplash.com/photo-1585144860106-998ca082ca9f?auto=format&fit=crop&q=80&w=800", price: 22999, rating: 5, reviews: 7, category: "rugs", mainCategory: "living" },
  { id: "19", name: "Runner - Geometric Pattern", image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800", price: 5999, rating: 4, reviews: 9, category: "rugs", mainCategory: "dining" },
  { id: "20", name: "Area Rug - Neutral", image: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80&w=800", price: 12999, oldPrice: 14999, save: 2000, rating: 4, reviews: 15, category: "rugs", mainCategory: "living" },
  { id: "21", name: "Decorative Wall Mirror", image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800", price: 6999, rating: 5, reviews: 6, category: "decor", mainCategory: "bedroom" },
  { id: "22", name: "Ceramic Vase Set (3)", image: "https://images.unsplash.com/photo-1612152605347-f9479b18973b?auto=format&fit=crop&q=80&w=800", price: 3499, rating: 4, reviews: 8, category: "decor", mainCategory: "dining" },
  { id: "23", name: "Abstract Canvas Art", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800", price: 8999, rating: 5, reviews: 4, category: "decor", mainCategory: "living" },
  { id: "24", name: "Throw Cushions - Set of 4", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=800", price: 2499, rating: 4, reviews: 22, category: "decor", mainCategory: "bedroom" },
  { id: "25", name: "Modern 3-Seater Sofa", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800", price: 42999, rating: 5, reviews: 12, category: "furniture", mainCategory: "living", subcategory: "sofas", isNew: true },
  { id: "26", name: "Dining Table - 6 Seater", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800", price: 31999, oldPrice: 35999, save: 4000, rating: 5, reviews: 7, category: "furniture", mainCategory: "dining", subcategory: "dining-tables" },
  { id: "27", name: "King Size Bed - Upholstered", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800", price: 44999, rating: 5, reviews: 9, category: "furniture", mainCategory: "bedroom", subcategory: "beds" },
  { id: "28", name: "Bar Stool - Set of 2", image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800", price: 8999, rating: 4, reviews: 5, category: "furniture", mainCategory: "living", subcategory: "bar-stools" },
  { id: "29", name: "Marble Top Center Table", image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80&w=800", price: 18499, oldPrice: 20999, save: 2500, rating: 5, reviews: 6, category: "furniture", mainCategory: "living", subcategory: "center-tables" },
  { id: "30", name: "Nested Coffee Tables - Set of 2", image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80&w=800", price: 12999, rating: 4, reviews: 8, category: "furniture", mainCategory: "living", subcategory: "coffee-tables" },
  { id: "31", name: "Metal Bar Stools - Set of 2", image: "https://images.unsplash.com/photo-1562184552-997c461abbe6?auto=format&fit=crop&q=80&w=800", price: 7499, rating: 4, reviews: 4, category: "furniture", mainCategory: "living", subcategory: "bar-stools" },
  { id: "32", name: "Leather Accent Chair", image: "https://images.unsplash.com/photo-1596076846938-23e595e7d480?auto=format&fit=crop&q=80&w=800", price: 22999, rating: 5, reviews: 10, category: "furniture", mainCategory: "living", subcategory: "relax-chairs" },
  { id: "33", name: "L-Shaped Sectional Sofa", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800", price: 54999, rating: 5, reviews: 7, category: "furniture", mainCategory: "living", subcategory: "sofas" },
  { id: "34", name: "Upholstered Dining Chairs - Set of 4", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800", price: 24999, rating: 5, reviews: 5, category: "furniture", mainCategory: "dining", subcategory: "dining-chairs" },
  { id: "35", name: "Wooden Dining Chairs - Pair", image: "https://images.unsplash.com/photo-1581428982868-e410dd047c90?auto=format&fit=crop&q=80&w=800", price: 8999, rating: 4, reviews: 11, category: "furniture", mainCategory: "dining", subcategory: "dining-chairs" },
  { id: "36", name: "Counter Bar Stools - Set of 2", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=800", price: 10999, rating: 5, reviews: 3, category: "furniture", mainCategory: "dining", subcategory: "bar-stools" },
  { id: "36b", name: "Swivel Bar Stools - Set of 2", image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=800", price: 12999, rating: 4, reviews: 6, category: "furniture", mainCategory: "dining", subcategory: "bar-stools" },
  { id: "37", name: "Extendable Dining Table", image: "https://images.unsplash.com/photo-1604578762246-4113259e20af?auto=format&fit=crop&q=80&w=800", price: 37999, rating: 5, reviews: 8, category: "furniture", mainCategory: "dining", subcategory: "dining-tables" },
  { id: "38", name: "Round Dining Table - 4 Seater", image: "https://images.unsplash.com/photo-1616627529452-fbdff13d5089?auto=format&fit=crop&q=80&w=800", price: 19999, rating: 4, reviews: 6, category: "furniture", mainCategory: "dining", subcategory: "dining-tables" },
  { id: "39", name: "Queen Size Platform Bed", image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800", price: 32999, oldPrice: 36999, save: 4000, rating: 5, reviews: 8, category: "furniture", mainCategory: "bedroom", subcategory: "beds" },
  { id: "40", name: "Single Bed - Solid Wood", image: "https://images.unsplash.com/photo-1533000720448-958aed61476b?auto=format&fit=crop&q=80&w=800", price: 15999, rating: 4, reviews: 4, category: "furniture", mainCategory: "bedroom", subcategory: "beds" },
  { id: "41", name: "Bedside Table with Drawer", image: "https://images.unsplash.com/photo-1582562124578-8ba94c25f4b5?auto=format&fit=crop&q=80&w=800", price: 6999, rating: 4, reviews: 9, category: "furniture", mainCategory: "bedroom" },
  { id: "42", name: "Dressing Table with Mirror", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800", price: 27999, rating: 5, reviews: 5, category: "furniture", mainCategory: "bedroom" },
];

export function getProductsByCategory(category: CategorySlug): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsByMainCategory(mainCategory: MainCategorySlug, subcategory?: string): Product[] {
  let list = products.filter((p) => p.mainCategory === mainCategory);
  if (subcategory) list = list.filter((p) => p.subcategory === subcategory);
  return list;
}

export function getFeaturedProducts(limit = 8): Product[] {
  return products.filter((p) => p.save != null || p.rating === 5).slice(0, limit);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getBestSellers(limit = 4): Product[] {
  return [...products].sort((a, b) => b.reviews - a.reviews).slice(0, limit);
}

export type SortOption = "popularity" | "price-asc" | "price-desc" | "new";
export type FilterCategory = MainCategorySlug | "all";

export function filterAndSortProducts(opts: {
  mainCategory?: FilterCategory;
  priceMin?: number;
  priceMax?: number;
  sort?: SortOption;
}): Product[] {
  let list = [...products];
  if (opts.mainCategory && opts.mainCategory !== "all") {
    list = list.filter((p) => p.mainCategory === opts.mainCategory);
  }
  if (opts.priceMin != null) list = list.filter((p) => p.price >= opts.priceMin!);
  if (opts.priceMax != null) list = list.filter((p) => p.price <= opts.priceMax!);
  switch (opts.sort) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "new":
      list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
    case "popularity":
    default:
      list.sort((a, b) => b.reviews - a.reviews);
      break;
  }
  return list;
}
