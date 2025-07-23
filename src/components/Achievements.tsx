import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp, Code2, Zap, Award, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Academic Excellence",
    metric: "3.9+ GPA",
    description: "Consistently maintaining high academic performance in Computer Programming & Analysis",
    color: "primary"
  },
  {
    icon: Code2,
    title: "School Projects",
    metric: "12+",
    description: "Projects completed in various programming languages and frameworks",
    color: "accent"
  },
  {
    icon: Zap,
    title: "GPU Performance",
    metric: "2-3x Faster",
    description: "Performance improvements I've achieved using CUDA programming in assignments",
    color: "secondary"
  },
  {
    icon: TrendingUp,
    title: "New Tech This Year",
    metric: "5 Languages",
    description: "New programming languages and frameworks I've learned recently",
    color: "primary"
  }
];

const certifications = [
  "CUDA Parallel Programming Fundamentals",
  "Advanced C++ Programming Techniques", 
  "Agile Development Methodology",
  "Git Version Control & Collaboration",
  "Object-Oriented Design Principles"
];

const recognitions = [
  {
    title: "Dean's List",
    period: "Fall 2023, Winter 2024",
    description: "Academic excellence recognition for outstanding performance"
  },
  {
    title: "Best Team Project",
    period: "Winter 2024",
    description: "Led team to develop award-winning AI diagnostic tool"
  },
  {
    title: "Code Quality Award",
    period: "Fall 2023",
    description: "Recognized for exceptional code documentation and structure"
  }
];

export const Achievements = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-tech-gradient bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Some numbers from my time in school and personal projects
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:shadow-glow-primary transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <achievement.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.metric}</div>
                  <h3 className="font-semibold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};