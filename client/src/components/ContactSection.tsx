import { Github, Linkedin, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ContactSectionProps {
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}

export default function ContactSection({ email, githubUrl, linkedinUrl }: ContactSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="container px-6 max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-contact-title">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className={`space-y-8 animate-scale-in-scroll ${isVisible ? 'visible' : ''}`}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing</h3>
              <p className="text-muted-foreground">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href={`mailto:${email}`}
                className="flex flex-col items-center gap-4 p-6 rounded-lg hover-elevate active-elevate-2 transition-all group border border-border/40"
                data-testid="link-email"
              >
                <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-medium mb-1">Email</p>
                  <p className="text-sm text-muted-foreground break-all">{email}</p>
                </div>
              </a>
              
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-6 rounded-lg hover-elevate active-elevate-2 transition-all group border border-border/40"
                data-testid="link-github"
              >
                <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Github className="h-8 w-8 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-medium mb-1">GitHub</p>
                  <p className="text-sm text-muted-foreground">View my repositories</p>
                </div>
              </a>
              
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-6 rounded-lg hover-elevate active-elevate-2 transition-all group border border-border/40"
                data-testid="link-linkedin"
              >
                <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-8 w-8 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-medium mb-1">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Connect with me</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
