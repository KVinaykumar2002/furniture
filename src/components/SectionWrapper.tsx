import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
}

export default function SectionWrapper({ children, className = "", id, title, subtitle }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 md:py-20 px-4 md:px-6 ${className}`}>
      <div className="container">
        {(title || subtitle) && (
          <div className="text-center mb-10 md:mb-12">
            {subtitle && (
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2">{subtitle}</p>
            )}
            {title && (
              <h2 className="font-display text-2xl md:text-4xl font-light tracking-wide text-foreground">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
