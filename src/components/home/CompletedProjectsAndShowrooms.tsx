import { Building2, Sofa, Users, MapPin } from "lucide-react";
const stats = [
  { icon: Building2, label: "Fit-out", value: "553" },
  { icon: Sofa, label: "Furnishing", value: "10,154" },
  { icon: Users, label: "Consultation", value: "756" },
];

export default function CompletedProjectsAndShowrooms() {

  return (
    <div className="bg-muted/30">
      {/* Completed Projects */}
      <section className="bg-white py-12 md:py-16 px-4 md:px-6">
        <div className="container">
          <p className="text-center text-sm font-semibold tracking-[0.15em] text-muted-foreground uppercase mb-4">
            Completed Projects
          </p>
          <div className="max-w-2xl mx-auto h-px bg-border mb-12 md:mb-16" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-20 max-w-5xl mx-auto">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon className="w-10 h-10 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">{label}</p>
                <p className="font-display text-3xl md:text-4xl font-light text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Our Showroom - Dark strip marquee */}
      <section className="w-full overflow-hidden">
        <div className="bg-foreground text-primary-foreground py-5 md:py-6 min-h-[4.5rem] md:min-h-[5rem] flex items-center overflow-hidden">
          <div className="flex animate-marquee-left whitespace-nowrap w-max will-change-transform">
            {[1, 2, 3].map((copy) => (
              <div key={copy} className="flex items-center gap-8 md:gap-12 px-6 shrink-0">
                <p className="text-base md:text-lg font-semibold tracking-[0.2em] uppercase">
                  VISIT OUR SHOWROOM AT &nbsp;
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-5 h-5 text-destructive inline-block" />
                    KONDAPUR, HYDERABAD
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
