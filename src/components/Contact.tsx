import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Mail, MapPin, Phone, Download } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-tech-gradient bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities in AI and system development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border bg-card/50 backdrop-blur-sm shadow-glow-primary">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">brandonttrumble@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
                      <Github className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">GitHub</p>
                        <p className="text-sm text-muted-foreground">bran7230</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="flex flex-col justify-center space-y-6">
                  <div className="text-center">
                    <h4 className="text-xl font-semibold mb-3">Ready to collaborate?</h4>
                    <p className="text-muted-foreground mb-6">
                      Let's discuss how my skills in AI development, CUDA programming, and system optimization can contribute to your next project.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-accent text-accent hover:bg-accent/10"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume
                    </Button>

                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View GitHub
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};