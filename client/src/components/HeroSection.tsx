import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import heroImage1 from "@assets/IMG-20250608-WA0027_1763550604521.png";
import heroImage2 from "@assets/IMG-20250608-WA0029_1763550604522.png";

interface HeroSectionProps {
  name: string;
  role: string;
  tagline: string;
  imageUrl?: string;
}

export default function HeroSection({ name, role, tagline }: HeroSectionProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Abhishek_Suresh_Ghali_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const heroImages = [heroImage1, heroImage2];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <div className="container relative z-10 px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="order-1 lg:order-1 space-y-8 animate-fade-in">
            
            <div className="space-y-4">
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                data-testid="text-name"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {name}
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-medium" data-testid="text-role">
                {role}
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground max-w-xl" data-testid="text-tagline">
                {tagline}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('projects')}
                data-testid="button-view-projects"
                className="text-base px-8"
              >
                View Projects
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={handleDownloadResume}
                data-testid="button-download-resume"
                className="text-base px-8 gap-2"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => window.open('https://github.com/abhighali79', '_blank')}
                data-testid="button-github"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => window.open('https://www.linkedin.com/in/abhishek-ghali/', '_blank')}
                data-testid="button-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => window.open('mailto:abhighali79@gmail.com', '_blank')}
                data-testid="button-email"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end animate-fade-in-delayed">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <Carousel
                plugins={[plugin.current]}
                className="relative w-72 h-72 md:w-96 md:h-96"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {heroImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20">
                        <img
                          src={image}
                          alt={`${name} - ${index + 1}`}
                          className="w-full h-full object-cover"
                          data-testid={`img-hero-${index}`}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="absolute -bottom-8 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background/80 blur-xl" />
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delayed {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
      `}</style>
    </section>
  );
}
