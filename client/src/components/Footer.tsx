import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  name: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

export default function Footer({ name, githubUrl, linkedinUrl, email }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border/40 bg-card/20">
      <div className="container px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" data-testid="text-footer-name">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground">
              Full-Stack Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="link-footer-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="link-footer-skills"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="link-footer-projects"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                data-testid="link-footer-contact"
              >
                Contact
              </button>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => window.open(githubUrl, '_blank')}
                data-testid="button-footer-github"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => window.open(linkedinUrl, '_blank')}
                data-testid="button-footer-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => window.open(`mailto:${email}`, '_blank')}
                data-testid="button-footer-email"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2" data-testid="text-copyright">
            © {currentYear} {name}. Built with 
            <Heart className="h-4 w-4 text-primary fill-primary" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
