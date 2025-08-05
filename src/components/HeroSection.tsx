import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const isMobile = useRef(false);
  const animationFrameRef = useRef<number>();
  const animationIdRef = useRef<number>();
  const mousePosition = useRef({ x: 0.5, y: 0.5 });
  const scrollPosition = useRef(0);

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

      // Update mouse position for continuous animation
      mousePosition.current.x = e.clientX / window.innerWidth;
      mousePosition.current.y = e.clientY / window.innerHeight;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Throttle scroll events
      if (Math.abs(scrollY - lastScrollY) < 10) return;
      lastScrollY = scrollY;
      
      // Update scroll position for continuous animation
      scrollPosition.current = scrollY;
    };

    // Continuous animation loop
    const animateParticles = () => {
      const particles = document.querySelectorAll('.particle');
      const time = Date.now() * 0.001; // Time in seconds
      
      particles.forEach((particle, index) => {
        const element = particle as HTMLElement;
        const speed = (index % 5 + 1) * 0.02;
        const phase = index * 0.5; // Different phase for each particle
        
        // Base movement over time (slow drift)
        const baseX = Math.sin(time * 0.5 + phase) * 50;
        const baseY = Math.cos(time * 0.3 + phase) * 30;
        
        // Mouse interaction
        const mouseX = (mousePosition.current.x - 0.5) * speed * 150;
        const mouseY = (mousePosition.current.y - 0.5) * speed * 150;
        
        // Scroll interaction
        const scrollInfluence = Math.sin(scrollPosition.current * 0.005 + phase) * 20;
        const scrollRotation = scrollPosition.current * 0.0001 * (index % 3 + 1);
        
        // Combine all movements
        const totalX = baseX + mouseX + scrollInfluence;
        const totalY = baseY + mouseY + scrollInfluence;
        
        // Apply transform
        element.style.transform = `translate(${totalX}px, ${totalY}px) rotate(${scrollRotation}deg) scale(${1 + mousePosition.current.x * 0.1})`;
        
        // Dynamic opacity based on mouse proximity
        const distanceFromMouse = Math.sqrt(
          Math.pow(mousePosition.current.x - 0.5, 2) + 
          Math.pow(mousePosition.current.y - 0.5, 2)
        );
        const opacity = 0.2 + (1 - distanceFromMouse) * 0.4 + Math.sin(time + phase) * 0.1;
        element.style.opacity = Math.max(0.1, Math.min(0.8, opacity)).toString();
      });
      
      animationIdRef.current = requestAnimationFrame(animateParticles);
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
    
    // Start the continuous animation
    animateParticles();
    
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      window.removeEventListener('scroll', throttledScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
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