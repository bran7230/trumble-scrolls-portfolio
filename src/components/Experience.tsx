import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const education = [
  {
    institution: "Georgian College",
    degree: "Computer Programming and Analysis Diploma",
    period: "Sep 2024 - May 2025",
    status: "In Progress"
  },
  {
    institution: "Barrie North Collegiate Institute", 
    degree: "Ontario Secondary School Diploma (Honours)",
    period: "2021",
    status: "Completed"
  }
];

const workExperience = [
  {
    company: "Royal Victoria Hospital (RVH)",
    position: "Environmental Services Associate",
    location: "Barrie, ON",
    period: "Sep 2024 - May 2025",
    responsibilities: [
      "Maintained hospital cleanliness and safety according to infection control standards",
      "Collaborated with healthcare teams to support high-risk clinical environments", 
      "Demonstrated precision, responsibility, and adherence to procedural discipline"
    ]
  },
  {
    company: "Domino's Pizza",
    position: "Team Leader",
    location: "Barrie, ON", 
    period: "July 2021 - June 2024",
    responsibilities: [
      "Delivered customer service in a high-pressure, fast-paced team environment",
      "Handled food prep, order fulfillment, and cash transactions with accuracy",
      "Gained skills in teamwork, time management, and quality assurance"
    ]
  }
];

export const Experience = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-tech-gradient bg-clip-text text-transparent">
            Education & Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and professional experience building essential skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:shadow-glow-primary transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg">{edu.institution}</CardTitle>
                    <p className="text-muted-foreground">{edu.degree}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <Badge variant={edu.status === "In Progress" ? "default" : "secondary"}>
                        {edu.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {workExperience.map((work, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:shadow-glow-primary transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg">{work.position}</CardTitle>
                    <p className="text-primary font-medium">{work.company}</p>
                    <p className="text-sm text-muted-foreground">{work.location}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      {work.period}
                    </div>
                    <ul className="space-y-2">
                      {work.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};