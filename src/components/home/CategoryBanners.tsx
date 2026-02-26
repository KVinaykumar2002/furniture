import { Link } from "react-router-dom";
import catSofas from "@/assets/cat-sofas.jpg";
import catDining from "@/assets/cat-dining.jpg";
import catBedroom from "@/assets/cat-bedroom.jpg";

interface BannerData {
    category: string;
    title: string;
    tagline: string;
    href: string;
    image: string;
}

const banners: BannerData[] = [
    {
        category: "Living",
        title: "Welcoming",
        tagline: "Comfort Redefined",
        href: "/living",
        image: catSofas,
    },
    {
        category: "Dining",
        title: "Elegant",
        tagline: "Dining Essentials",
        href: "/dining",
        image: catDining,
    },
    {
        category: "Bedroom",
        title: "Serene",
        tagline: "Sleep Spaces",
        href: "/bedroom",
        image: catBedroom,
    },
];

export default function CategoryBanners() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                    {banners.map((banner, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] flex flex-col justify-end"
                        >
                            {/* Background Image */}
                            <img
                                src={banner.image}
                                alt={`${banner.category} Collection - ${banner.title}`}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />

                            {/* Overlay for text readability (subtle gradient from bottom) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90 pointer-events-none" />

                            {/* Content Block */}
                            <div className="relative z-10 flex flex-col items-center justify-end p-8 md:p-10 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                                <span className="text-white/80 text-xs tracking-[0.2em] font-semibold uppercase mb-3 block">
                                    {banner.category}
                                </span>
                                <h3 className="text-white text-3xl md:text-4xl font-bold tracking-widest uppercase mb-2">
                                    {banner.title}
                                </h3>
                                <p className="text-white/90 text-sm md:text-base tracking-[0.15em] font-medium uppercase mb-8">
                                    {banner.tagline}
                                </p>

                                <div className="mt-auto">
                                    <Link
                                        to={banner.href}
                                        className="inline-block bg-white text-black px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] hover:bg-neutral-900 hover:text-white transition-colors duration-300"
                                    >
                                        Explore Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
