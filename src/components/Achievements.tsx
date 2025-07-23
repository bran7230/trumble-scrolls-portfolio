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
    title: "Projects Completed",
    metric: "15+",
    description: "Successfully delivered diverse projects ranging from AI applications to system utilities",
    color: "accent"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    metric: "40% Faster",
    description: "Average performance improvement achieved through CUDA programming and optimization techniques",
    color: "secondary"
  },
  {
    icon: TrendingUp,
    title: "Learning Velocity",
    metric: "8 Technologies",
    description: "Mastered new programming languages and frameworks in the past year",
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
            Quantifiable results and recognition that demonstrate my commitment to excellence
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