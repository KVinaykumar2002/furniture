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
        <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col w-full mx-auto max-w-[1600px] gap-12 lg:gap-20">
                {banners.map((banner, index) => {
                    // Define background colors based on category to match design
                    let bgColor = "bg-white";
                    if (banner.category === "Living") bgColor = "bg-[#d8e2c8]"; // Light green
                    if (banner.category === "Dining") bgColor = "bg-[#dbcfc4]"; // Light tan/brown
                    if (banner.category === "Bedroom") bgColor = "bg-[#e2deb8]"; // Light beige/yellow

                    const isImageFirst = index % 2 === 0;

                    return (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-stretch w-full group ${bgColor} overflow-hidden shadow-sm`}
                        >
                            {/* Text Content Block (30%) */}
                            <div
                                className={`w-full md:w-[30%] flex flex-col justify-center p-8 md:p-12 lg:p-16 ${isImageFirst ? 'order-2' : 'order-1'} md:order-none`}
                                style={{ order: isImageFirst ? 2 : 1 }}
                            >
                                <h3 className="text-[#3b2b2b] text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest uppercase mb-4">
                                    {banner.category}
                                </h3>
                                <div className="mb-6">
                                    <span className="text-[#4a3b3b] text-xl md:text-2xl font-light uppercase block leading-tight">
                                        {banner.title}
                                    </span>
                                    <span className="text-[#4a3b3b] text-xl md:text-2xl font-light uppercase block leading-tight">
                                        {banner.tagline}
                                    </span>
                                </div>
                                <p className="text-[#5c4d4d] text-sm md:text-base mb-8 max-w-[280px]">
                                    {banner.category === "Living" && "Create a living space that defines comfort and elegance."}
                                    {banner.category === "Dining" && "Set the stage for meaningful conversations and memorable meals."}
                                    {banner.category === "Bedroom" && "Transform your bedroom into a sanctuary of rest and beauty."}
                                </p>

                                <div>
                                    <Link
                                        to={banner.href}
                                        className="inline-block bg-[#D8C38B] text-white px-8 py-3.5 text-xs font-bold uppercase hover:bg-[#c2a969] transition-colors duration-300 rounded-none w-fit"
                                    >
                                        Explore Now
                                    </Link>
                                </div>
                            </div>

                            {/* Image Block (70%) */}
                            <div className="w-full md:w-[70%] relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[24/9] overflow-hidden" style={{ order: isImageFirst ? 1 : 2 }}>
                                <img
                                    src={banner.image}
                                    alt={`${banner.category} Collection - ${banner.title}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
