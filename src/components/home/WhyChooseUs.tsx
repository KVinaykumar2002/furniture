import SectionWrapper from "@/components/SectionWrapper";
import { Truck, RotateCcw, CreditCard, Award } from "lucide-react";

const features = [
  { icon: Truck, title: "Free Shipping", description: "On orders above ₹5,000. Fast delivery across India." },
  { icon: RotateCcw, title: "30-Day Returns", description: "Not satisfied? Full refund, no questions asked." },
  { icon: CreditCard, title: "Secure Payment", description: "Industry-standard encryption & secure checkout." },
  { icon: Award, title: "Premium Quality", description: "Handpicked materials & craftsmanship that lasts." },
];

export default function WhyChooseUs() {
  return (
    <SectionWrapper subtitle="Why us" title="Why Choose Us" className="bg-muted/30">
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border/50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-light text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
