import catSofas from "@/assets/cat-sofas.jpg";
import catDining from "@/assets/cat-dining.jpg";
import catBedroom from "@/assets/cat-bedroom.jpg";
import type { MainCategorySlug } from "./nav";

export interface ShopCategory {
  slug: MainCategorySlug;
  title: string;
  description: string;
  image: string;
}

export const shopCategories: Record<MainCategorySlug, ShopCategory> = {
  living: {
    slug: "living",
    title: "Living",
    description: "Sofas, center tables, coffee tables & more for your living space.",
    image: catSofas,
  },
  dining: {
    slug: "dining",
    title: "Dining",
    description: "Dining chairs, tables & bar stools for every home.",
    image: catDining,
  },
  bedroom: {
    slug: "bedroom",
    title: "Bedroom",
    description: "Beds and bedroom furniture for restful nights.",
    image: catBedroom,
  },
};

export const shopCategorySlugs: MainCategorySlug[] = ["living", "dining", "bedroom"];
