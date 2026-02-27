// Local images removed to ensure 100% unique category images
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
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
  },
  dining: {
    slug: "dining",
    title: "Dining",
    description: "Dining chairs, tables & bar stools for every home.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1c0945594?auto=format&fit=crop&q=80&w=800",
  },
  bedroom: {
    slug: "bedroom",
    title: "Bedroom",
    description: "Beds and bedroom furniture for restful nights.",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800",
  },
};

export const shopCategorySlugs: MainCategorySlug[] = ["living", "dining", "bedroom"];
