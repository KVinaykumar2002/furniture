import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Priya S.", role: "Hyderabad", rating: 5, text: "DesignerZhub transformed our living room. Exceptional quality and great team.", avatar: "PS" },
  { name: "Rahul M.", role: "Mumbai", rating: 5, text: "Smooth ordering and delivery. Furniture looks even better in person.", avatar: "RM" },
  { name: "Anita K.", role: "Chennai", rating: 4, text: "Beautiful designs and sturdy construction. Highly recommend.", avatar: "AK" },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <SectionWrapper subtitle="Testimonials" title="What Our Customers Say" className="bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-border/50">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center font-display text-xl text-primary">
            {t.avatar}
          </div>
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <blockquote className="text-foreground text-center mb-6">&ldquo;{t.text}&rdquo;</blockquote>
          <p className="font-display text-lg text-center text-foreground">{t.name}</p>
          <p className="text-sm text-muted-foreground text-center">{t.role}</p>
        </div>
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-muted"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
            className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-muted"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
