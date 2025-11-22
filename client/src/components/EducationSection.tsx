import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
}

interface EducationSectionProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section ref={ref} className="py-24 md:py-32 bg-card/30" id="education">
      <div className="container px-6 max-w-7xl mx-auto">
        <div className={`text-center mb-16 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-education-title">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-education-subtitle">
            My academic background and qualifications
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card
              key={index}
              className={`p-6 hover-elevate active-elevate-2 transition-all duration-300 animate-scale-in-scroll ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              data-testid={`card-education-${index}`}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-bold" data-testid={`text-education-degree-${index}`}>
                      {edu.degree}
                    </h3>
                    <span className="text-sm text-muted-foreground font-medium" data-testid={`text-education-period-${index}`}>
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-base font-medium text-foreground" data-testid={`text-education-institution-${index}`}>
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid={`text-education-location-${index}`}>
                    {edu.location}
                  </p>
                  <p className="text-sm font-medium text-primary" data-testid={`text-education-grade-${index}`}>
                    {edu.grade}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
