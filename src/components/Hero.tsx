import { Button } from "@/components/ui/button";
import { Github, Mail, MapPin, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
            <span className="bg-tech-gradient bg-clip-text text-transparent">
              Brandon Trumble
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-tech-gradient rounded-full"></div>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Computer Programming & Analysis Student
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Specializing in AI development, CUDA programming, and system-level solutions. 
            Building the future with innovative technology.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Barrie, ON
            </div>
           
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              brandonttrumble@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              bran7230
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="https://github.com/bran7230" target="_blank">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary">
              View Projects
            </Button>
            </a>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};