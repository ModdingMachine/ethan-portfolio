import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const isMobile = useRef(false);
  const animationFrameRef = useRef<number>();

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Detect mobile device
    isMobile.current = window.innerWidth < 768;
    
    // Only add expensive animations on desktop
    if (isMobile.current) return;

    let lastMouseX = 0;
    let lastMouseY = 0;
    let lastScrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse events
      if (Math.abs(e.clientX - lastMouseX) < 5 && Math.abs(e.clientY - lastMouseY) < 5) return;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;

      const particles = document.querySelectorAll('.particle');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      particles.forEach((particle, index) => {
        const element = particle as HTMLElement;
        const speed = (index % 5 + 1) * 0.03; // Reduced speed
        const x = (mouseX - 0.5) * speed * 200; // Reduced movement
        const y = (mouseY - 0.5) * speed * 200;
        
        element.style.transform = `translate(${x}px, ${y}px) scale(${1 + mouseX * 0.2})`;
        element.style.opacity = `${0.3 + mouseX * 0.3}`;
      });
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Throttle scroll events
      if (Math.abs(scrollY - lastScrollY) < 10) return;
      lastScrollY = scrollY;

      const particles = document.querySelectorAll('.particle');
      
      particles.forEach((particle, index) => {
        const element = particle as HTMLElement;
        const speed = (index % 3 + 1) * 0.0005; // Reduced speed
        const rotation = scrollY * speed * 0.3;
        const drift = Math.sin(scrollY * 0.005 + index) * 1; // Reduced drift
        
        element.style.transform += ` rotate(${rotation}deg) translateX(${drift}px)`;
      });
    };

    // Use requestAnimationFrame for better performance
    const throttledMouseMove = (e: MouseEvent) => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(() => handleMouseMove(e));
    };

    const throttledScroll = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('mousemove', throttledMouseMove, { passive: true });
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      window.removeEventListener('scroll', throttledScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
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

      {/* Interactive particles - reduced count on mobile */}
      <div className="absolute inset-0" id="particles-container">
        {[...Array(isMobile.current ? 15 : 30)].map((_, i) => (
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
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gradient-accent">Ethan Orr</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-muted-foreground">
          Entrepreneur & Automation Engineer
        </h2>

        {/* Pitch */}
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Bridging the gap between innovative AI solutions and real-world automation. 
          Specializing in intelligent systems that transform workflows and drive business growth.
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {['AI Integration', 'API Development', 'Automation', 'IoT Systems', 'Python', 'AutoCAD'].map((tech) => (
            <Badge key={tech} variant="secondary" className="px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm bg-muted/50 hover:bg-accent/20 transition-smooth">
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