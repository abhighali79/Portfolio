import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Project {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  githubUrl?: string;
  featured?: boolean;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);
  
  return (
    <section ref={ref} className="py-24 md:py-32 bg-card/30" id="projects">
      <div className="container px-6 max-w-7xl mx-auto">
        <div className={`text-center mb-16 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-projects-title">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-projects-subtitle">
            A showcase of my recent work and side projects
          </p>
        </div>
        
        <div className="space-y-8">
          {featuredProject && (
            <Card className={`overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 animate-scale-in-scroll ${isVisible ? 'visible' : ''}`} data-testid="card-featured-project">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden lg:min-h-[400px]">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {featuredProject.images.map((image, idx) => (
                        <CarouselItem key={idx}>
                          <AspectRatio ratio={16 / 9} className="lg:aspect-auto lg:min-h-[400px]">
                            <img
                              src={image}
                              alt={`${featuredProject.title} - Image ${idx + 1}`}
                              className="w-full h-full object-cover"
                              data-testid={`img-featured-project-${idx}`}
                            />
                          </AspectRatio>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {featuredProject.images.length > 1 && (
                      <>
                        <CarouselPrevious className="left-2" data-testid="button-featured-carousel-prev" />
                        <CarouselNext className="right-2" data-testid="button-featured-carousel-next" />
                      </>
                    )}
                  </Carousel>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:hidden pointer-events-none" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <Badge className="mb-4" data-testid="badge-featured">Featured Project</Badge>
                    <h3 className="text-3xl font-bold mb-4" data-testid="text-featured-title">
                      {featuredProject.title}
                    </h3>
                    <p className="text-muted-foreground mb-6" data-testid="text-featured-description">
                      {featuredProject.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" data-testid={`badge-featured-tag-${index}`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {featuredProject.githubUrl && featuredProject.githubUrl !== '#' && (
                      <Button 
                        variant="outline"
                        onClick={() => window.open(featuredProject.githubUrl, '_blank')}
                        data-testid="button-featured-github"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          )}
          
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 animate-scale-in-scroll ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${(index + 1) * 0.15}s` }}
                data-testid={`card-project-${index}`}
              >
                <div className="relative overflow-hidden">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.images.map((image, idx) => (
                        <CarouselItem key={idx}>
                          <AspectRatio ratio={16 / 9}>
                            <img
                              src={image}
                              alt={`${project.title} - Image ${idx + 1}`}
                              className="w-full h-full object-cover"
                              data-testid={`img-project-${index}-${idx}`}
                            />
                          </AspectRatio>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {project.images.length > 1 && (
                      <>
                        <CarouselPrevious className="left-2" data-testid={`button-project-${index}-carousel-prev`} />
                        <CarouselNext className="right-2" data-testid={`button-project-${index}-carousel-next`} />
                      </>
                    )}
                  </Carousel>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3" data-testid={`text-project-title-${index}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${index}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" data-testid={`badge-project-${index}-tag-${tagIndex}`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <Button 
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        data-testid={`button-project-${index}-github`}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
