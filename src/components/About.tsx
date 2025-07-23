import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Award, Code2, Users } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Problem Solving",
    description: "I like figuring out why things break and finding ways to fix them"
  },
  {
    icon: Award,
    title: "Learning Fast",
    description: "Pick up new technologies pretty quickly when I need to"
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Try to write code that's easy to read and maintain"
  },
  {
    icon: Users,
    title: "Team Work",
    description: "Good at communicating and working with others on projects"
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
            Computer science student who enjoys coding and learning new things
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Main Description */}
            <div className="space-y-6">
              <Card className="border-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">About Me</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      I'm a second-year Computer Programming & Analysis student at Georgian College. 
                      I really enjoy working with C++ and CUDA for GPU programming - there's something 
                      satisfying about optimizing code to run faster.
                    </p>
                    <p>
                      I've been getting into web development lately with React and TypeScript. 
                      It's pretty different from the low-level stuff I'm used to, but I like 
                      how quickly you can build something that people can actually use.
                    </p>
                    <p>
                      Looking for internship opportunities where I can work on interesting projects 
                      and learn from experienced developers. I'm particularly interested in anything 
                      involving performance optimization or AI applications.
                    </p>
                  </div>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      Looking for Internships
                    </Badge>
                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                      Open to Part-time
                    </Badge>
                    <Badge variant="secondary" className="bg-secondary/50">
                      Can Work Remote
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Highlights */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">What I'm Good At</h3>
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