import { Card } from "@/components/ui/card";
import { SiJavascript, SiMongodb, SiReact, SiNodedotjs, SiExpress, SiTailwindcss, SiBootstrap, SiMysql, SiHtml5, SiCss3, SiGithub, SiGit, SiEclipseide, SiPostman } from "react-icons/si";
import { Database, Coffee, BookOpen, Workflow, Code } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Skill {
  name: string;
  icon: any;
}

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  
  // Map skill names to their brand colors
  const getIconColor = (skillName: string): string => {
    const colorMap: Record<string, string> = {
      'JavaScript': '#F7DF1E',
      'HTML5': '#E34F26',
      'CSS3': '#1572B6',
      'React.js': '#61DAFB',
      'Node.js': '#339933',
      'Express.js': '#000000',
      'MongoDB': '#47A248',
      'MySQL': '#4479A1',
      'Bootstrap': '#7952B3',
      'Tailwind CSS': '#06B6D4',
      'Git': '#F05032',
      'GitHub': '#181717',
      'Eclipse': '#2C2255',
      'Postman': '#FF6C37',
      'Core Java': '#007396',
      'SQL': '#4479A1',
      'PL/SQL': '#F80000',
      'VS Code': '#007ACC',
      'OOPs': '#f59e0b',
      'DBMS': '#f59e0b',
      'SDLC': '#f59e0b',
      'Agile': '#f59e0b',
    };
    return colorMap[skillName] || '#f59e0b';
  };
  
  return (
    <section ref={ref} className="py-24 md:py-32" id="skills">
      <div className="container px-6 max-w-7xl mx-auto">
        <div className={`text-center mb-16 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-skills-title">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-skills-subtitle">
            Proficient in a wide range of modern technologies and frameworks
          </p>
        </div>
        
        <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const iconColor = getIconColor(skill.name);
            return (
              <Card
                key={index}
                className={`p-6 hover-elevate active-elevate-2 transition-all duration-300 group cursor-pointer animate-scale-in-scroll ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.05}s` }}
                data-testid={`card-skill-${skill.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`}
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="p-3 rounded-lg bg-card/50 group-hover:bg-card transition-colors">
                    <Icon className="h-8 w-8" style={{ color: iconColor }} />
                  </div>
                  <p className="font-medium text-sm" data-testid={`text-skill-${skill.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`}>
                    {skill.name}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
