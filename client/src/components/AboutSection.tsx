import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AboutSectionProps {
  description: string;
}

export default function AboutSection({ description }: AboutSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section ref={ref} className="py-24 md:py-32 bg-card/30" id="about">
      <div className="container px-6 max-w-7xl mx-auto">
        <div className={`max-w-4xl mx-auto animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center" data-testid="text-about-title">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center" data-testid="text-about-description">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
