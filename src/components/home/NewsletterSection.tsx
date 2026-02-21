import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Mail } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setEmail("");
  };

  return (
    <SectionWrapper className="border-t border-border">
      <div className="max-w-xl mx-auto text-center">
        <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Mail className="w-7 h-7 text-primary" />
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-light text-foreground mb-2">Stay in the loop</h2>
        <p className="text-muted-foreground text-sm mb-8">Subscribe for new arrivals, offers and inspiration.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 h-12 px-4 rounded-2xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            required
          />
          <button
            type="submit"
            className="h-12 px-8 rounded-2xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}
