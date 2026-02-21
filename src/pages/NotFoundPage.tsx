import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container flex flex-col items-center justify-center py-32 px-4">
        <h1 className="font-display text-6xl font-light text-foreground mb-4">404</h1>
        <p className="text-muted-foreground mb-8">Page not found.</p>
        <Link to="/" className="inline-flex items-center justify-center h-12 px-8 rounded-2xl bg-primary text-primary-foreground font-medium hover:bg-primary/90">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
