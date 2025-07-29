import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Status Badge */}
        <Badge variant="outline" className="mb-6 border-accent text-accent hover:bg-accent/10 transition-smooth">
          Available for Freelance & Consulting
        </Badge>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gradient-accent">Ethan Orr</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-light mb-8 text-muted-foreground">
          Entrepreneur & Automation Engineer
        </h2>

        {/* Pitch */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Bridging the gap between innovative AI solutions and real-world automation. 
          Specializing in intelligent systems that transform workflows and drive business growth.
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['AI Integration', 'API Development', 'Automation', 'IoT Systems', 'Python', 'AutoCAD'].map((tech) => (
            <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm bg-muted/50 hover:bg-accent/20 transition-smooth">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-accent hover:opacity-90 transition-smooth glow-accent">
            <Mail className="mr-2 h-4 w-4" />
            Get in Touch
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-accent text-accent hover:bg-accent/10 transition-smooth"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a 
            href="https://www.linkedin.com/in/ethankorr/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-smooth"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-smooth"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-accent transition-smooth animate-float"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  );
};