import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin } from "lucide-react";
import { getStoreById } from "@/data/stores";

export default function StoreDetailPage() {
  const { id } = useParams<{ id: string }>();
  const store = id ? getStoreById(id) : undefined;

  if (!store) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-32 text-center">
          <p className="text-muted-foreground mb-4">Store not found.</p>
          <Link to="/stores" className="text-primary font-medium">Back to Store Locator</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 md:py-12 px-4 pt-24">
        <Link to="/stores" className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block">← Store Locator</Link>
        <div className="flex gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <MapPin className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-light text-foreground">{store.name}</h1>
            <p className="text-muted-foreground">{store.address}, {store.city}</p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-border bg-muted">
          <iframe
            title={`Map for ${store.name}`}
            src={store.mapEmbedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a
          href={store.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-12 px-8 rounded-2xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 mt-6"
        >
          Open in Google Maps
        </a>
      </div>
      <Footer />
    </div>
  );
}
