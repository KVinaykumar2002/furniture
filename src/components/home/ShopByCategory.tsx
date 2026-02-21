import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import { shopCategories, shopCategorySlugs } from "@/data/shopCategories";

export default function ShopByCategory() {
  return (
    <SectionWrapper
      id="categories"
      subtitle="Shop by room"
      title="Shop by Category"
      className="bg-muted/30"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {shopCategorySlugs.map((slug) => {
          const cat = shopCategories[slug];
          return (
            <Link
              key={slug}
              to={`/${slug}`}
              className="group relative aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-display text-2xl md:text-3xl font-light mb-1">{cat.title}</h3>
                <p className="text-sm text-white/90">{cat.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
