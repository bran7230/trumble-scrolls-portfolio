import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, Bug, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Chatbot (C++ / CUDA)",
    icon: Bot,
    description: "Built a GPT-style chatbot with a custom transformer architecture",
    details: [
      "Implemented CUDA-accelerated matrix operations for softmax, token embedding, and inference",
      "Designed batch training and performance-tuned memory usage for fast execution",
      "Custom transformer architecture built from scratch"
    ],
    technologies: ["C++", "CUDA", "GPU Computing", "AI/ML", "Performance Optimization"],
    gradient: "bg-gradient-to-br from-primary/20 to-accent/20"
  },
  {
    title: "Computer Debugger Tool (C#)",
    icon: Bug,
    description: "Designed a system diagnostics tool for memory, thread, and I/O analysis",
    details: [
      "Developed a multithreaded logging engine with real-time system metrics visualization", 
      "Created a responsive user interface with detailed debugging feedback",
      "Implemented comprehensive system monitoring and analysis features"
    ],
    technologies: ["C#", "Multithreading", "System Analysis", "UI Design", "Real-time Processing"],
    gradient: "bg-gradient-to-br from-accent/20 to-primary/20"
  }
];

export const Projects = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-tech-gradient bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of technical expertise in AI development and system-level programming
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={project.title} className={`border-border ${project.gradient} backdrop-blur-sm hover:shadow-glow-primary transition-all duration-300 group`}>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl group-hover:text-primary transition-colors">
                  <project.icon className="h-6 w-6 text-primary" />
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent/10">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};