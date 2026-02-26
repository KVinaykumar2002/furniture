import catSofas from "@/assets/cat-sofas.jpg";
import catBedroom from "@/assets/cat-bedroom.jpg";
import catDining from "@/assets/cat-dining.jpg";
import catOffice from "@/assets/cat-office.jpg";
import catOutdoor from "@/assets/cat-outdoor.jpg";
import catLighting from "@/assets/cat-lighting.jpg";
import catRugs from "@/assets/cat-rugs.jpg";
import catDecor from "@/assets/cat-decor.jpg";
import productSofa from "@/assets/product-sofa.jpg";
import productBed from "@/assets/product-bed.jpg";
import productTable from "@/assets/product-table.jpg";

export type MainCategorySlug =
  | "rugs"
  | "decor"
  | "furniture"
  | "lighting"
  | "kitchenware"
  | "wall-covering"
  | "toilet"
  | "scent-diffusers"
  | "fitout-joinery";

export type FurnitureSubSlug = "indoor" | "outdoor" | "office";

export const mainCategoryTabs: { slug: MainCategorySlug; label: string }[] = [
  { slug: "rugs", label: "Rugs" },
  { slug: "decor", label: "Decor" },
  { slug: "furniture", label: "Furniture" },
  { slug: "lighting", label: "Lighting" },
  { slug: "kitchenware", label: "Kitchenware" },
  { slug: "wall-covering", label: "Wall Covering" },
  { slug: "toilet", label: "Toilet" },
  { slug: "scent-diffusers", label: "Scent Diffusers" },
  { slug: "fitout-joinery", label: "Fitout / Joinery" },
];

export const furnitureSubTabs: { slug: FurnitureSubSlug; label: string }[] = [
  { slug: "indoor", label: "Indoor" },
  { slug: "outdoor", label: "Outdoor" },
  { slug: "office", label: "Office" },
];

export interface CategoryGridItem {
  slug: string;
  label: string;
  image: string;
  href: string;
}

/** 2x4 grid for Furniture > Indoor — each item has a unique image */
export const indoorFurnitureGrid: CategoryGridItem[] = [
  { slug: "all", label: "All Furniture", image: catSofas, href: "/collections" },
  { slug: "sofas", label: "Sofas", image: productSofa, href: "/living?sub=sofas" },
  { slug: "bedsteads", label: "Bedsteads", image: catBedroom, href: "/bedroom?sub=beds" },
  { slug: "mattress", label: "Mattress", image: productBed, href: "/bedroom" },
  { slug: "bedside-tables", label: "Bedside Tables", image: productTable, href: "/bedroom" },
  { slug: "dressers-mirrors", label: "Dressers & Mirrors", image: catDecor, href: "/bedroom" },
  { slug: "lounge-chairs", label: "Lounge Chairs", image: catLighting, href: "/living?sub=relax-chairs" },
  { slug: "sideboard", label: "Sideboard / Storage", image: catDining, href: "/dining" },
];

/** Outdoor grid — each item has a unique image */
export const outdoorFurnitureGrid: CategoryGridItem[] = [
  { slug: "all", label: "All Outdoor", image: catOutdoor, href: "/collections" },
  { slug: "seating", label: "Outdoor Seating", image: catSofas, href: "/collections" },
  { slug: "dining", label: "Outdoor Dining", image: catDining, href: "/dining" },
  { slug: "loungers", label: "Loungers", image: productSofa, href: "/collections" },
  { slug: "umbrellas", label: "Umbrellas", image: catDecor, href: "/collections" },
  { slug: "planters", label: "Planters", image: catRugs, href: "/collections" },
  { slug: "accessories", label: "Accessories", image: catLighting, href: "/collections" },
  { slug: "storage", label: "Storage", image: catBedroom, href: "/collections" },
];

/** Office grid — each item has a unique image */
export const officeFurnitureGrid: CategoryGridItem[] = [
  { slug: "all", label: "All Office", image: catOffice, href: "/collections" },
  { slug: "desks", label: "Desks", image: productTable, href: "/collections" },
  { slug: "chairs", label: "Office Chairs", image: catSofas, href: "/collections" },
  { slug: "storage", label: "Storage", image: catDining, href: "/collections" },
  { slug: "tables", label: "Meeting Tables", image: catBedroom, href: "/collections" },
  { slug: "shelving", label: "Shelving", image: catDecor, href: "/collections" },
  { slug: "screens", label: "Screens", image: catLighting, href: "/collections" },
  { slug: "accessories", label: "Accessories", image: catRugs, href: "/collections" },
];

export function getFurnitureGridBySub(sub: FurnitureSubSlug): CategoryGridItem[] {
  switch (sub) {
    case "indoor":
      return indoorFurnitureGrid;
    case "outdoor":
      return outdoorFurnitureGrid;
    case "office":
      return officeFurnitureGrid;
    default:
      return indoorFurnitureGrid;
  }
}

/* ── Shop by Category – circular grid (matches reference design) ── */

export interface ShopByCategoryItem {
  slug: string;
  label: string;
  image: string;
  href: string;
  /** If true, render as the special "New Arrivals" star circle */
  isNewArrivals?: boolean;
}

export const shopByCategories: ShopByCategoryItem[] = [
  { slug: "new-arrivals", label: "New Arrivals", image: "", href: "/collections", isNewArrivals: true },
  { slug: "sofas", label: "Sofas", image: catSofas, href: "/living?sub=sofas" },
  { slug: "sofa-cum-beds", label: "Sofa Cum Beds", image: productSofa, href: "/living?sub=sofas" },
  { slug: "coffee-tables", label: "Coffee Tables", image: productTable, href: "/living?sub=coffee-tables" },
  { slug: "beds", label: "Beds", image: catBedroom, href: "/bedroom?sub=beds" },
  { slug: "wardrobes", label: "Wardrobes", image: catOffice, href: "/bedroom" },
  { slug: "tv-units", label: "TV Units", image: catDecor, href: "/living" },
  { slug: "recliners", label: "Recliners", image: productBed, href: "/living?sub=relax-chairs" },
  { slug: "dining-sets", label: "Dining Sets", image: catDining, href: "/dining?sub=dining-tables" },
  { slug: "lounge-chairs", label: "Lounge Chairs", image: catLighting, href: "/living?sub=relax-chairs" },
  { slug: "shoe-racks", label: "Shoe Racks", image: catRugs, href: "/collections" },
  { slug: "bookshelves", label: "Bookshelves", image: catOutdoor, href: "/collections" },
  { slug: "study-tables", label: "Study Tables", image: productTable, href: "/collections" },
  { slug: "chest-of-drawers", label: "Chest of Drawers", image: catDecor, href: "/bedroom" },
  { slug: "sideboards", label: "Sideboards", image: catDining, href: "/dining" },
  { slug: "mattresses", label: "Mattresses", image: productBed, href: "/bedroom?sub=beds" },
];
