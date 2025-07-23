import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Professor, Computer Science",
    company: "Georgian College",
    content: "Brandon consistently demonstrates exceptional problem-solving abilities and a deep understanding of complex programming concepts. His work on GPU optimization projects has been outstanding.",
    rating: 5,
    initials: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    content: "During our collaboration on the AI diagnostic tool, Brandon showed remarkable technical skill and attention to detail. His code quality and documentation are exemplary.",
    rating: 5,
    initials: "MR"
  },
  {
    name: "Jennifer Lee",
    role: "Team Lead, Development",
    company: "Innovation Labs",
    content: "Brandon brings fresh perspectives to challenging problems. His ability to learn new technologies quickly and apply them effectively makes him a valuable team member.",
    rating: 5,
    initials: "JL"
  },
  {
    name: "David Thompson",
    role: "Project Manager",
    company: "Systems Dynamics",
    content: "Reliable, communicative, and technically proficient. Brandon delivered his components ahead of schedule and helped mentor other team members. Highly recommend!",
    rating: 5,
    initials: "DT"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-tech-gradient bg-clip-text text-transparent">
            What People Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from professors, colleagues, and project collaborators
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:shadow-glow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="text-muted-foreground italic mb-4">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center gap-2 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};