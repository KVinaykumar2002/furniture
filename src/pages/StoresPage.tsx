import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { MapPin } from "lucide-react";
import { stores } from "@/data/stores";

export default function StoresPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SectionWrapper subtitle="Find us" title="Store Locator" className="pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stores.map((store) => (
            <Link
              key={store.id}
              to={`/stores/${store.id}`}
              className="block p-6 border border-border bg-white hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-light text-foreground mb-1">{store.name}</h3>
                  <p className="text-sm text-muted-foreground">{store.address}, {store.city}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>
      <Footer />
    </div>
  );
}
