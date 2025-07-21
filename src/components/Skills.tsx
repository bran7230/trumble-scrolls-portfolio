import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Settings, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C++", "Java", "C#", "CUDA", "Python", "JavaScript", "SQL", "Bash"],
    color: "primary"
  },
  {
    title: "Tools & Platforms", 
    icon: Settings,
    skills: ["Git", "GitHub", "Visual Studio", "VS Code", "Unity", "Windows 10", "Linux/Bash"],
    color: "accent"
  },
  {
    title: "Concepts & Methodologies",
    icon: Zap,
    skills: ["OOP", "SOLID Principles", "CI/CD", "SDLC", "Debugging", "REST APIs", "Unit Testing", "Agile"],
    color: "secondary"
  },
  {
    title: "Specializations",
    icon: Database,
    skills: ["CUDA GPU Compute", "AI Development", "System Diagnostics", "Performance Optimization"],
    color: "primary"
  }
];

export const Skills = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-tech-gradient bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning low-level systems programming to modern web technologies,
            with specialized expertise in AI and GPU computing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="border-border bg-card/50 backdrop-blur-sm hover:shadow-glow-primary transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <category.icon className="h-6 w-6 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-secondary/50 hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};