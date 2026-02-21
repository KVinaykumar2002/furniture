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
}

export const products: Product[] = [
  { id: "1", name: "MOVO Service Trolley - JK-D208", image: productSofa, price: 2035, oldPrice: 2325, save: 290, rating: 5, reviews: 3, category: "furniture" },
  { id: "2", name: "43 Pieces Passifoy Dining Set", image: productBed, price: 1015, oldPrice: 1410, save: 395, rating: 4, reviews: 12, category: "furniture" },
  { id: "3", name: "Haven Ebarza Dinnerware Set", image: productTable, price: 755, oldPrice: 1165, save: 410, rating: 4, reviews: 5, category: "furniture" },
  { id: "4", name: "Classic Oak Sideboard", image: catSofas, price: 24999, rating: 5, reviews: 8, category: "furniture" },
  { id: "5", name: "Velvet Lounge Chair", image: catBedroom, price: 18999, rating: 4, reviews: 6, category: "furniture" },
  { id: "6", name: "Patio Dining Set - 6 Seater", image: catOutdoor, price: 34999, oldPrice: 39999, save: 5000, rating: 5, reviews: 4, category: "outdoor" },
  { id: "7", name: "Garden Lounge Chairs (Pair)", image: productTable, price: 12999, rating: 4, reviews: 11, category: "outdoor" },
  { id: "8", name: "Outdoor Coffee Table - Teak", image: productBed, price: 15999, rating: 5, reviews: 7, category: "outdoor" },
  { id: "9", name: "Balcony Bistro Set", image: catOutdoor, price: 8999, rating: 4, reviews: 9, category: "outdoor" },
  { id: "10", name: "Executive Desk - Walnut", image: catOffice, price: 28999, rating: 5, reviews: 5, category: "office" },
  { id: "11", name: "Ergonomic Office Chair", image: productSofa, price: 14999, oldPrice: 17999, save: 3000, rating: 4, reviews: 14, category: "office" },
  { id: "12", name: "Filing Cabinet - 2 Drawer", image: productTable, price: 7999, rating: 4, reviews: 3, category: "office" },
  { id: "13", name: "Bookcase with Ladder", image: catOffice, price: 21999, rating: 5, reviews: 6, category: "office" },
  { id: "14", name: "Terra Pendant Lamp", image: productLamp, price: 4999, oldPrice: 6499, save: 1500, rating: 5, reviews: 8, category: "lighting" },
  { id: "15", name: "Minimal Floor Lamp", image: catLighting, price: 7499, rating: 4, reviews: 10, category: "lighting" },
  { id: "16", name: "Table Lamp - Ceramic Base", image: productLamp, price: 3599, rating: 5, reviews: 12, category: "lighting" },
  { id: "17", name: "Chandelier - 6 Light", image: catLighting, price: 18999, rating: 5, reviews: 4, category: "lighting" },
  { id: "18", name: "Handwoven Wool Rug - 8x10", image: catRugs, price: 22999, rating: 5, reviews: 7, category: "rugs" },
  { id: "19", name: "Runner - Geometric Pattern", image: catDining, price: 5999, rating: 4, reviews: 9, category: "rugs" },
  { id: "20", name: "Area Rug - Neutral", image: catRugs, price: 12999, oldPrice: 14999, save: 2000, rating: 4, reviews: 15, category: "rugs" },
  { id: "21", name: "Decorative Wall Mirror", image: catDecor, price: 6999, rating: 5, reviews: 6, category: "decor" },
  { id: "22", name: "Ceramic Vase Set (3)", image: productTable, price: 3499, rating: 4, reviews: 8, category: "decor" },
  { id: "23", name: "Abstract Canvas Art", image: catDecor, price: 8999, rating: 5, reviews: 4, category: "decor" },
  { id: "24", name: "Throw Cushions - Set of 4", image: catBedroom, price: 2499, rating: 4, reviews: 22, category: "decor" },
];

export function getProductsByCategory(category: CategorySlug): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(limit = 8): Product[] {
  return products.filter((p) => p.save != null || p.rating === 5).slice(0, limit);
}
