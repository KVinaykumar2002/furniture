import { ArrowRight } from "lucide-react";
import storeBg from "@/assets/our-stores-bg.jpg";

export default function OurStores() {
    return (
        <section className="w-full bg-[#E8DFD3] py-20 md:py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* ── LEFT CONTENT BLOCK ── */}
                    <div className="w-full lg:w-5/12 flex flex-col items-start text-left">
                        <span className="text-sm font-semibold tracking-[0.15em] text-[#2C1F1A]/80 uppercase mb-4 font-body">
                            Our Stores
                        </span>

                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#2C1F1A] leading-[1.1] mb-6 font-display uppercase">
                            One-Stop Shop<br />
                            For Your Dream Home
                        </h2>

                        <p className="text-base md:text-lg text-[#2C1F1A]/70 leading-relaxed mb-10 max-w-[480px] font-body">
                            Discover the epitome of elegance and sophistication at our stores.
                            Visit your nearest location today to experience our premium collections firsthand.
                        </p>

                        <a
                            href="/stores"
                            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-white px-8 py-4 rounded-full font-semibold tracking-wider uppercase text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Get Location
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        {/* Optional Stats Row */}
                        <div className="flex items-center gap-8 mt-16 pt-8 border-t border-[#2C1F1A]/10 w-full max-w-[480px]">
                            <div>
                                <p className="text-2xl font-bold text-[#2C1F1A] font-display">25+</p>
                                <p className="text-xs font-semibold tracking-wider text-[#2C1F1A]/60 uppercase mt-1">Stores</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-[#2C1F1A] font-display">10+</p>
                                <p className="text-xs font-semibold tracking-wider text-[#2C1F1A]/60 uppercase mt-1">Cities</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-[#2C1F1A] font-display">3 Yr</p>
                                <p className="text-xs font-semibold tracking-wider text-[#2C1F1A]/60 uppercase mt-1">Warranty</p>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT IMAGE BLOCK ── */}
                    {/* The user provided a single wide image containing what looks like 2 panels combined.
              We'll display it filling the right block beautifully. */}
                    <div className="w-full lg:w-7/12">
                        <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl group">
                            <img
                                src={storeBg}
                                alt="Our Stores Showroom & Exterior"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            {/* Subtle gradient overlay to match luxury feel */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
