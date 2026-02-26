import { ArrowRight } from "lucide-react";
import storeBg from "@/assets/our-stores-bg.jpg";

export default function OurStores() {
    return (
        <section className="w-full bg-[#E8DFD3] py-20 md:py-28 px-5 md:px-[6%] lg:px-[8%]">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* ── LEFT CONTENT BLOCK ── */}
                    <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <span className="text-xs md:text-sm font-semibold tracking-[0.15em] text-[#2C1F1A]/80 uppercase mb-3 md:mb-4 font-body">
                            Our Stores
                        </span>

                        <h2 className="text-[32px] md:text-4xl lg:text-[46px] xl:text-[56px] font-bold text-[#2C1F1A] leading-[1.1] mb-5 md:mb-6 font-display uppercase">
                            One-Stop Shop<br />
                            For Your Dream Home
                        </h2>

                        <p className="text-[15px] md:text-lg text-[#2C1F1A]/70 leading-[1.6] md:leading-relaxed mb-8 md:mb-10 max-w-[480px] font-body">
                            Discover the epitome of elegance and sophistication at our stores.
                            Visit your nearest location today to experience our premium collections firsthand.
                        </p>

                        <a
                            href="/stores"
                            className="group inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-white px-8 py-4 rounded-full font-semibold tracking-[0.5px] md:tracking-wider uppercase text-[13px] md:text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Get Location
                            <ArrowRight className="w-[18px] h-[18px] md:w-4 md:h-4 group-hover:translate-x-1.5 transition-transform" />
                        </a>

                        {/* Stats Row */}
                        <div className="flex items-center justify-center lg:justify-start gap-6 md:gap-10 mt-12 md:mt-16 pt-8 border-t border-[#2C1F1A]/10 w-full max-w-[480px]">
                            <div className="text-center lg:text-left">
                                <p className="text-2xl md:text-3xl font-bold text-[#2C1F1A] font-display">25+</p>
                                <p className="text-[10px] md:text-xs font-semibold tracking-wider text-[#2C1F1A]/60 uppercase mt-1">Stores</p>
                            </div>
                            <div className="text-center lg:text-left">
                                <p className="text-2xl md:text-3xl font-bold text-[#2C1F1A] font-display">10+</p>
                                <p className="text-[10px] md:text-xs font-semibold tracking-wider text-[#2C1F1A]/60 uppercase mt-1">Cities</p>
                            </div>
                            <div className="text-center lg:text-left">
                                <p className="text-2xl md:text-3xl font-bold text-[#2C1F1A] font-display">3 Yr</p>
                                <p className="text-[10px] md:text-xs font-semibold tracking-wider text-[#2C1F1A]/60 uppercase mt-1">Warranty</p>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT IMAGE BLOCK ── */}
                    <div className="w-full lg:w-7/12 mt-4 lg:mt-0">
                        <div className="flex flex-col sm:flex-row items-stretch gap-5 md:gap-6 lg:gap-[30px]">

                            {/* Image 1: Interior Showroom (Using CSS object-position to extract center panel of the provided screenshot) */}
                            <div className="relative w-full sm:w-1/2 h-[300px] md:h-[400px] lg:h-[480px] rounded-xl overflow-hidden shadow-xl group">
                                <img
                                    src={storeBg}
                                    alt="Our Stores Showroom Interior"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    style={{ objectPosition: "50% 50%" /* center panel */ }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Image 2: Exterior Showroom (Using CSS object-position to extract right panel of the provided screenshot) */}
                            <div className="relative w-full sm:w-1/2 h-[300px] md:h-[400px] lg:h-[480px] rounded-xl overflow-hidden shadow-xl group">
                                <img
                                    src={storeBg}
                                    alt="Our Stores Exterior Night View"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    style={{ objectPosition: "95% 50%" /* right panel */ }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
