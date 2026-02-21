import type { MainCategorySlug } from "./nav";
import type { SubcategorySlug } from "./products";

export interface SubcategoryInfo {
  slug: SubcategorySlug;
  label: string;
  description: string;
  mainCategory: MainCategorySlug;
}

export const subcategoryDescriptions: Record<SubcategorySlug, SubcategoryInfo> = {
  sofas: {
    slug: "sofas",
    label: "Sofas",
    description: "Discover sofas that combine comfort and style. From compact two-seaters to spacious sectionals, find the perfect centrepiece for your living room.",
    mainCategory: "living",
  },
  "center-tables": {
    slug: "center-tables",
    label: "Center Tables",
    description: "Elegant center tables and console tables to anchor your seating area. Quality materials and timeless designs for every living space.",
    mainCategory: "living",
  },
  "coffee-tables": {
    slug: "coffee-tables",
    label: "Coffee Tables",
    description: "Functional and stylish coffee tables for your lounge. Choose from classic wood, modern glass, or versatile nesting sets.",
    mainCategory: "living",
  },
  "relax-chairs": {
    slug: "relax-chairs",
    label: "Relax Chairs",
    description: "Accent chairs and lounge chairs for reading, relaxing, or entertaining. Upholstered and ergonomic options for lasting comfort.",
    mainCategory: "living",
  },
  "bar-stools": {
    slug: "bar-stools",
    label: "Bar Stools",
    description: "Bar stools and counter stools for your kitchen island or home bar. Sturdy construction and comfortable seating heights.",
    mainCategory: "living",
  },
  "dining-chairs": {
    slug: "dining-chairs",
    label: "Dining Chairs",
    description: "Dining chairs that complement your table and lifestyle. From upholstered to wooden, find sets and pairs for every dining space.",
    mainCategory: "dining",
  },
  "dining-tables": {
    slug: "dining-tables",
    label: "Dining Tables",
    description: "Dining tables for everyday meals and special occasions. Extendable, round, or rectangular—crafted for durability and style.",
    mainCategory: "dining",
  },
  beds: {
    slug: "beds",
    label: "Beds",
    description: "Beds and bed frames for restful sleep. King, queen, and single sizes in upholstered, wooden, and platform styles.",
    mainCategory: "bedroom",
  },
};

/** Bar stools appear under both Living and Dining; use mainCategory to get the right description context */
export function getSubcategoryInfo(
  slug: string,
  mainCategory: MainCategorySlug
): SubcategoryInfo | undefined {
  const info = subcategoryDescriptions[slug as SubcategorySlug];
  if (!info) return undefined;
  if (slug === "bar-stools" && mainCategory === "dining") {
    return {
      ...info,
      description:
        "Bar stools for the dining area and kitchen island. Pair with your counter or bar for casual meals and entertaining.",
      mainCategory: "dining",
    };
  }
  return info.mainCategory === mainCategory ? info : undefined;
}

export function getSubcategoryBySlug(slug: string): SubcategoryInfo | undefined {
  return subcategoryDescriptions[slug as SubcategorySlug];
}
