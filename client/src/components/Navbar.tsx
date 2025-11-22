import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Moon, Sun, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark' || (!savedTheme && true);
    setIsDark(prefersDark);
    
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/40' : 'bg-transparent'
      }`}
    >
      <div className="container px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={scrollToTop}
            className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-all"
            data-testid="button-logo"
          >
            ASG
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={scrollToTop}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-skills"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-experience"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
              className="relative"
            >
              {isDark ? (
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all" />
              ) : (
                <Moon className="h-5 w-5 rotate-0 scale-100 transition-all" />
              )}
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button size="icon" variant="ghost" data-testid="button-mobile-menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]" data-testid="mobile-menu-sheet">
                <div className="mb-8">
                  <button
                    onClick={scrollToTop}
                    className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                    data-testid="mobile-logo"
                  >
                    ASG
                  </button>
                </div>
                <nav className="flex flex-col gap-6">
                  <button
                    onClick={scrollToTop}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                    data-testid="mobile-link-home"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                    data-testid="mobile-link-about"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection('skills')}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                    data-testid="mobile-link-skills"
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                    data-testid="mobile-link-projects"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => scrollToSection('experience')}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                    data-testid="mobile-link-experience"
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                    data-testid="mobile-link-contact"
                  >
                    Contact
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
