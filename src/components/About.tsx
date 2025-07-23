import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Award, Code2, Users } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Focused on delivering scalable solutions that solve real-world problems"
  },
  {
    icon: Award,
    title: "Performance-Driven",
    description: "Consistently delivering projects on time with optimal performance"
  },
  {
    icon: Code2,
    title: "Technical Excellence",
    description: "Committed to clean, maintainable code and best practices"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Strong communication skills and experience in agile environments"
  }
];

export const About = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-tech-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a focus on innovation and technical excellence
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Main Description */}
            <div className="space-y-6">
              <Card className="border-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Professional Summary</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      As a Computer Programming & Analysis student with specialized expertise in AI development 
                      and CUDA programming, I bring a unique combination of theoretical knowledge and practical 
                      application to every project.
                    </p>
                    <p>
                      My experience spans from low-level systems programming in C++ to modern web technologies, 
                      with a particular focus on performance optimization and GPU computing. I thrive in 
                      collaborative environments where innovative thinking meets technical challenges.
                    </p>
                    <p>
                      Currently seeking opportunities to contribute to cutting-edge projects in AI, system 
                      development, or full-stack applications where I can leverage my diverse skill set 
                      and passion for technology.
                    </p>
                  </div>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      Available for Full-time
                    </Badge>
                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                      Open to Internships
                    </Badge>
                    <Badge variant="secondary" className="bg-secondary/50">
                      Remote-Friendly
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Highlights */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">What I Bring</h3>
              <div className="grid grid-cols-1 gap-4">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="border-border bg-card/30 hover:bg-card/50 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <highlight.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{highlight.title}</h4>
                          <p className="text-sm text-muted-foreground">{highlight.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};