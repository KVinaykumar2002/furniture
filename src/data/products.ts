import productSofa from "@/assets/product-sofa.jpg";
import productBed from "@/assets/product-bed.jpg";
import productTable from "@/assets/product-table.jpg";
import productLamp from "@/assets/cat-lighting.jpg";
import catSofas from "@/assets/cat-sofas.jpg";
import catBedroom from "@/assets/cat-bedroom.jpg";
import catDining from "@/assets/cat-dining.jpg";
import catOffice from "@/assets/cat-office.jpg";
import catOutdoor from "@/assets/cat-outdoor.jpg";
import catRugs from "@/assets/cat-rugs.jpg";
import catDecor from "@/assets/cat-decor.jpg";
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
  { id: "1", name: "MOVO Service Trolley - JK-D208", image: productSofa, price: 2035, oldPrice: 2325, save: 290, rating: 5, reviews: 3, category: "furniture", mainCategory: "living", subcategory: "center-tables" },
  { id: "2", name: "43 Pieces Passifoy Dining Set", image: productBed, price: 1015, oldPrice: 1410, save: 395, rating: 4, reviews: 12, category: "furniture", mainCategory: "dining", subcategory: "dining-tables" },
  { id: "3", name: "Haven Ebarza Dinnerware Set", image: productTable, price: 755, oldPrice: 1165, save: 410, rating: 4, reviews: 5, category: "furniture", mainCategory: "dining" },
  { id: "4", name: "Classic Oak Sideboard", image: catSofas, price: 24999, rating: 5, reviews: 8, category: "furniture", mainCategory: "living", subcategory: "sofas" },
  { id: "5", name: "Velvet Lounge Chair", image: catBedroom, price: 18999, rating: 4, reviews: 6, category: "furniture", mainCategory: "living", subcategory: "relax-chairs" },
  { id: "6", name: "Patio Dining Set - 6 Seater", image: catOutdoor, price: 34999, oldPrice: 39999, save: 5000, rating: 5, reviews: 4, category: "outdoor", mainCategory: "dining", subcategory: "dining-tables" },
  { id: "7", name: "Garden Lounge Chairs (Pair)", image: productTable, price: 12999, rating: 4, reviews: 11, category: "outdoor", mainCategory: "living", subcategory: "relax-chairs" },
  { id: "8", name: "Outdoor Coffee Table - Teak", image: productBed, price: 15999, rating: 5, reviews: 7, category: "outdoor", mainCategory: "living", subcategory: "coffee-tables" },
  { id: "9", name: "Balcony Bistro Set", image: catOutdoor, price: 8999, rating: 4, reviews: 9, category: "outdoor", mainCategory: "dining", isNew: true },
  { id: "10", name: "Executive Desk - Walnut", image: catOffice, price: 28999, rating: 5, reviews: 5, category: "office", mainCategory: "living" },
  { id: "11", name: "Ergonomic Office Chair", image: productSofa, price: 14999, oldPrice: 17999, save: 3000, rating: 4, reviews: 14, category: "office", mainCategory: "living", subcategory: "relax-chairs" },
  { id: "12", name: "Filing Cabinet - 2 Drawer", image: productTable, price: 7999, rating: 4, reviews: 3, category: "office", mainCategory: "living" },
  { id: "13", name: "Bookcase with Ladder", image: catOffice, price: 21999, rating: 5, reviews: 6, category: "office", mainCategory: "living" },
  { id: "14", name: "Terra Pendant Lamp", image: productLamp, price: 4999, oldPrice: 6499, save: 1500, rating: 5, reviews: 8, category: "lighting", mainCategory: "living", isNew: true },
  { id: "15", name: "Minimal Floor Lamp", image: productLamp, price: 7499, rating: 4, reviews: 10, category: "lighting", mainCategory: "living" },
  { id: "16", name: "Table Lamp - Ceramic Base", image: productLamp, price: 3599, rating: 5, reviews: 12, category: "lighting", mainCategory: "bedroom" },
  { id: "17", name: "Chandelier - 6 Light", image: productLamp, price: 18999, rating: 5, reviews: 4, category: "lighting", mainCategory: "dining" },
  { id: "18", name: "Handwoven Wool Rug - 8x10", image: catRugs, price: 22999, rating: 5, reviews: 7, category: "rugs", mainCategory: "living" },
  { id: "19", name: "Runner - Geometric Pattern", image: catDining, price: 5999, rating: 4, reviews: 9, category: "rugs", mainCategory: "dining" },
  { id: "20", name: "Area Rug - Neutral", image: catRugs, price: 12999, oldPrice: 14999, save: 2000, rating: 4, reviews: 15, category: "rugs", mainCategory: "living" },
  { id: "21", name: "Decorative Wall Mirror", image: catDecor, price: 6999, rating: 5, reviews: 6, category: "decor", mainCategory: "bedroom" },
  { id: "22", name: "Ceramic Vase Set (3)", image: productTable, price: 3499, rating: 4, reviews: 8, category: "decor", mainCategory: "dining" },
  { id: "23", name: "Abstract Canvas Art", image: catDecor, price: 8999, rating: 5, reviews: 4, category: "decor", mainCategory: "living" },
  { id: "24", name: "Throw Cushions - Set of 4", image: catBedroom, price: 2499, rating: 4, reviews: 22, category: "decor", mainCategory: "bedroom" },
  { id: "25", name: "Modern 3-Seater Sofa", image: catSofas, price: 42999, rating: 5, reviews: 12, category: "furniture", mainCategory: "living", subcategory: "sofas", isNew: true },
  { id: "26", name: "Dining Table - 6 Seater", image: catDining, price: 31999, oldPrice: 35999, save: 4000, rating: 5, reviews: 7, category: "furniture", mainCategory: "dining", subcategory: "dining-tables" },
  { id: "27", name: "King Size Bed - Upholstered", image: catBedroom, price: 44999, rating: 5, reviews: 9, category: "furniture", mainCategory: "bedroom", subcategory: "beds" },
  { id: "28", name: "Bar Stool - Set of 2", image: productSofa, price: 8999, rating: 4, reviews: 5, category: "furniture", mainCategory: "living", subcategory: "bar-stools" },
  // Extra Living
  { id: "29", name: "Marble Top Center Table", image: productTable, price: 18499, oldPrice: 20999, save: 2500, rating: 5, reviews: 6, category: "furniture", mainCategory: "living", subcategory: "center-tables" },
  { id: "30", name: "Nested Coffee Tables - Set of 2", image: catSofas, price: 12999, rating: 4, reviews: 8, category: "furniture", mainCategory: "living", subcategory: "coffee-tables" },
  { id: "31", name: "Metal Bar Stools - Set of 2", image: productBed, price: 7499, rating: 4, reviews: 4, category: "furniture", mainCategory: "living", subcategory: "bar-stools" },
  { id: "32", name: "Leather Accent Chair", image: catBedroom, price: 22999, rating: 5, reviews: 10, category: "furniture", mainCategory: "living", subcategory: "relax-chairs" },
  { id: "33", name: "L-Shaped Sectional Sofa", image: catSofas, price: 54999, rating: 5, reviews: 7, category: "furniture", mainCategory: "living", subcategory: "sofas" },
  // Extra Dining
  { id: "34", name: "Upholstered Dining Chairs - Set of 4", image: catDining, price: 24999, rating: 5, reviews: 5, category: "furniture", mainCategory: "dining", subcategory: "dining-chairs" },
  { id: "35", name: "Wooden Dining Chairs - Pair", image: productTable, price: 8999, rating: 4, reviews: 11, category: "furniture", mainCategory: "dining", subcategory: "dining-chairs" },
  { id: "36", name: "Counter Bar Stools - Set of 2", image: productSofa, price: 10999, rating: 5, reviews: 3, category: "furniture", mainCategory: "dining", subcategory: "bar-stools" },
  { id: "36b", name: "Swivel Bar Stools - Set of 2", image: productBed, price: 12999, rating: 4, reviews: 6, category: "furniture", mainCategory: "dining", subcategory: "bar-stools" },
  { id: "37", name: "Extendable Dining Table", image: catDining, price: 37999, rating: 5, reviews: 8, category: "furniture", mainCategory: "dining", subcategory: "dining-tables" },
  { id: "38", name: "Round Dining Table - 4 Seater", image: productBed, price: 19999, rating: 4, reviews: 6, category: "furniture", mainCategory: "dining", subcategory: "dining-tables" },
  // Extra Bedroom
  { id: "39", name: "Queen Size Platform Bed", image: catBedroom, price: 32999, oldPrice: 36999, save: 4000, rating: 5, reviews: 8, category: "furniture", mainCategory: "bedroom", subcategory: "beds" },
  { id: "40", name: "Single Bed - Solid Wood", image: productBed, price: 15999, rating: 4, reviews: 4, category: "furniture", mainCategory: "bedroom", subcategory: "beds" },
  { id: "41", name: "Bedside Table with Drawer", image: productTable, price: 6999, rating: 4, reviews: 9, category: "furniture", mainCategory: "bedroom" },
  { id: "42", name: "Dressing Table with Mirror", image: catDecor, price: 27999, rating: 5, reviews: 5, category: "furniture", mainCategory: "bedroom" },
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
