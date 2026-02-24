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
  | "fitout-joinery"
  | "curtains";

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
  { slug: "curtains", label: "Curtains" },
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

/** 2x4 grid for Furniture > Indoor: same structure for all categories */
export const indoorFurnitureGrid: CategoryGridItem[] = [
  { slug: "all", label: "All Furniture", image: catSofas, href: "/collections" },
  { slug: "sofas", label: "Sofas", image: catSofas, href: "/living?sub=sofas" },
  { slug: "bedsteads", label: "Bedsteads", image: catBedroom, href: "/bedroom?sub=beds" },
  { slug: "mattress", label: "Mattress", image: productBed, href: "/bedroom" },
  { slug: "bedside-tables", label: "Bedside Tables", image: productTable, href: "/bedroom" },
  { slug: "dressers-mirrors", label: "Dressers & Mirrors", image: catBedroom, href: "/bedroom" },
  { slug: "lounge-chairs", label: "Lounge Chairs", image: catBedroom, href: "/living?sub=relax-chairs" },
  { slug: "sideboard", label: "Sideboard / Storage", image: catDining, href: "/dining" },
];

export const outdoorFurnitureGrid: CategoryGridItem[] = [
  { slug: "all", label: "All Outdoor", image: catOutdoor, href: "/collections" },
  { slug: "seating", label: "Outdoor Seating", image: catOutdoor, href: "/collections" },
  { slug: "dining", label: "Outdoor Dining", image: catOutdoor, href: "/dining" },
  { slug: "loungers", label: "Loungers", image: catOutdoor, href: "/collections" },
  { slug: "umbrellas", label: "Umbrellas", image: catOutdoor, href: "/collections" },
  { slug: "planters", label: "Planters", image: catOutdoor, href: "/collections" },
  { slug: "accessories", label: "Accessories", image: catOutdoor, href: "/collections" },
  { slug: "storage", label: "Storage", image: catOutdoor, href: "/collections" },
];

export const officeFurnitureGrid: CategoryGridItem[] = [
  { slug: "all", label: "All Office", image: catOffice, href: "/collections" },
  { slug: "desks", label: "Desks", image: catOffice, href: "/collections" },
  { slug: "chairs", label: "Office Chairs", image: catOffice, href: "/collections" },
  { slug: "storage", label: "Storage", image: catOffice, href: "/collections" },
  { slug: "tables", label: "Meeting Tables", image: catOffice, href: "/collections" },
  { slug: "shelving", label: "Shelving", image: catOffice, href: "/collections" },
  { slug: "screens", label: "Screens", image: catOffice, href: "/collections" },
  { slug: "accessories", label: "Accessories", image: catOffice, href: "/collections" },
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
