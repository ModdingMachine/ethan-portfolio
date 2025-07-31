import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const particles = document.querySelectorAll('.particle');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      particles.forEach((particle, index) => {
        const element = particle as HTMLElement;
        const speed = (index % 5 + 1) * 0.05;
        const x = (mouseX - 0.5) * speed * 300;
        const y = (mouseY - 0.5) * speed * 300;
        
        element.style.transform = `translate(${x}px, ${y}px) scale(${1 + mouseX * 0.3})`;
        element.style.opacity = `${0.3 + mouseX * 0.5}`;
      });
    };

    const handleScroll = () => {
      const particles = document.querySelectorAll('.particle');
      const scrollY = window.scrollY;
      
      particles.forEach((particle, index) => {
        const element = particle as HTMLElement;
        const speed = (index % 3 + 1) * 0.001;
        const rotation = scrollY * speed * 0.5;
        const drift = Math.sin(scrollY * 0.01 + index) * 2;
        
        element.style.transform += ` rotate(${rotation}deg) translateX(${drift}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

  {/* Interactive particles */}
      <div className="absolute inset-0" id="particles-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-accent rounded-full transition-all duration-1000 ease-out"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.7,
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