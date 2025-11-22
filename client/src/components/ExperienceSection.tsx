import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Experience {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section ref={ref} className="py-24 md:py-32" id="experience">
      <div className="container px-6 max-w-7xl mx-auto">
        <div className={`text-center mb-16 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-experience-title">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-experience-subtitle">
            My professional journey and key achievements
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent transform -translate-x-1/2" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-2 ring-4 ring-background" />
                  
                  <div className="ml-8 md:ml-0 md:grid md:grid-cols-2 md:gap-8">
                    <div className={index % 2 === 0 ? "md:text-right" : "md:col-start-2"}>
                      <Card className={`p-6 hover-elevate active-elevate-2 transition-all duration-300 animate-scale-in-scroll ${isVisible ? 'visible' : ''}`} style={{ animationDelay: `${index * 0.2}s` }} data-testid={`card-experience-${index}`}>
                        <div className="flex items-start gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                            <Briefcase className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1" data-testid={`text-experience-position-${index}`}>
                              {exp.position}
                            </h3>
                            <p className="text-primary font-medium mb-1" data-testid={`text-experience-company-${index}`}>
                              {exp.company}
                            </p>
                            <p className="text-sm text-muted-foreground" data-testid={`text-experience-duration-${index}`}>
                              {exp.duration}
                            </p>
                          </div>
                        </div>
                        
                        <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="flex gap-2" data-testid={`text-experience-${index}-responsibility-${respIndex}`}>
                              <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" data-testid={`badge-experience-${index}-tech-${techIndex}`}>
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
