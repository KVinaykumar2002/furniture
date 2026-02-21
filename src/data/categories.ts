import catSofas from "@/assets/cat-sofas.jpg";
import catBedroom from "@/assets/cat-bedroom.jpg";
import catDining from "@/assets/cat-dining.jpg";
import catOffice from "@/assets/cat-office.jpg";
import catOutdoor from "@/assets/cat-outdoor.jpg";
import catLighting from "@/assets/cat-lighting.jpg";
import catRugs from "@/assets/cat-rugs.jpg";
import catDecor from "@/assets/cat-decor.jpg";

export type CategorySlug = "furniture" | "outdoor" | "office" | "lighting" | "rugs" | "decor";

export interface Category {
  slug: CategorySlug;
  title: string;
  description: string;
  image: string;
}

export const categories: Record<CategorySlug, Category> = {
  furniture: {
    slug: "furniture",
    title: "Furniture",
    description: "Sofas, chairs, tables, and living room essentials. Timeless designs for every home.",
    image: catSofas,
  },
  outdoor: {
    slug: "outdoor",
    title: "Outdoor",
    description: "Patio sets, garden furniture, and outdoor living. Built to last through the seasons.",
    image: catOutdoor,
  },
  office: {
    slug: "office",
    title: "Office",
    description: "Desks, ergonomic chairs, and storage. Create a productive and stylish workspace.",
    image: catOffice,
  },
  lighting: {
    slug: "lighting",
    title: "Lighting",
    description: "Pendant lights, floor lamps, and table lamps. Set the mood in every room.",
    image: catLighting,
  },
  rugs: {
    slug: "rugs",
    title: "Rugs",
    description: "Handpicked rugs and runners. Add warmth and texture to your floors.",
    image: catRugs,
  },
  decor: {
    slug: "decor",
    title: "Decor",
    description: "Mirrors, art, and accents. The finishing touches that make a house a home.",
    image: catDecor,
  },
};

export const categorySlugs: CategorySlug[] = ["furniture", "outdoor", "office", "lighting", "rugs", "decor"];
