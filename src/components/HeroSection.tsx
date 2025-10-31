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

  const scrollToAI = () => {
    const aiSection = document.querySelector('#ai-assistant .card-apple');
    if (aiSection) {
      aiSection.scrollIntoView({ behavior: 'smooth' });
    }
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

    // Continuous animation loop - Apple-style subtle
    const animateParticles = () => {
      const particles = document.querySelectorAll('.particle');
      const time = Date.now() * 0.0005; // Slower, more subtle
      
      particles.forEach((particle, index) => {
        const element = particle as HTMLElement;
        const speed = (index % 3 + 1) * 10; // Slower movement
        const phase = index * 0.3; // Different phase for each particle
        
        // Base movement over time (very slow drift)
        const baseX = Math.sin(time * 0.3 + phase) * 100;
        const baseY = Math.cos(time * 0.2 + phase) * 100;
        
        // Mouse interaction - more subtle
        const rect = particle.getBoundingClientRect();
        const particleCenterX = rect.left + rect.width / 2;
        const particleCenterY = rect.top + rect.height / 2;

        // Mouse position in screen coordinates
        const mouseScreenX = mousePosition.current.x * window.innerWidth;
        const mouseScreenY = mousePosition.current.y * window.innerHeight;

        // Distance from mouse to particle center
        const dx = particleCenterX - mouseScreenX;
        const dy = particleCenterY - mouseScreenY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Influence factor: closer = stronger (max at 0, min at 1)
        // Clamp min distance to avoid division by zero
        const influence = Math.max(0, 1 - Math.min(distance / 300, 1));

        // Mouse influence is stronger when closer
        const mouseX = dx * speed * influence * 0.04;
        const mouseY = dy * speed * influence * 0.04;
        
        // Scroll interaction - very subtle
        const scrollInfluence = Math.sin(scrollPosition.current * 0.003 + phase) * 0.5;
        const scrollRotation = scrollPosition.current * 0.00005 * (index % 2 + 1);
        
        // Combine all movements
        const totalX = baseX + mouseX + scrollInfluence;
        const totalY = baseY + mouseY + scrollInfluence;
        
        // Apply transform - Apple-style subtle
        element.style.transform = `translate(${totalX}px, ${totalY}px) rotate(${scrollRotation}deg) scale(${1 + mousePosition.current.x * 0.05})`;
        
        // Dynamic opacity - Apple-style subtle
        const distanceFromMouse = Math.sqrt(
          Math.pow(mousePosition.current.x - 0.5, 2) + 
          Math.pow(mousePosition.current.y - 0.5, 2)
        );
        const opacity = 0.1 + (1 - distanceFromMouse) * 2 + Math.sin(time + phase) * 0.05;
        element.style.opacity = Math.max(0.05, Math.min(0.4, opacity)).toString();
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-apple-bg-primary">
      {/* Background - Apple-style clean */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-apple-bg-primary via-apple-bg-primary/95 to-apple-bg-primary"></div>
      </div>

      {/* Interactive particles - Apple-style subtle */}
      <div className="absolute inset-0" id="particles-container">
        {[...Array(isMobile.current ? 0 : 40)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-apple-blue rounded-full transition-all duration-2000 ease-out"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random(),
            }}
          />
        ))}
      </div>

      {/* Content - Apple-style typography */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main Heading - Apple-style large typography */}
        <h1 className="text-apple-display font-bold mb-8 leading-tight tracking-tight">
          <span className="text-apple-text-primary">Ethan Orr</span>
        </h1>
        
        <h2 className="text-apple-subtitle font-light mb-10 text-apple-text-secondary tracking-wide">
          Entrepreneur & Automation Engineer
        </h2>

        {/* Pitch - Apple-style clean copy */}
        <p className="text-apple-body text-apple-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Bridging the gap between innovative AI solutions and real-world automation. 
          Specializing in intelligent systems that transform workflows and drive business growth.
        </p>

        {/* Tech Stack Pills - Apple-style minimal */}
        <div className="flex flex-wrap justify-center space-apple-md mb-12">
          {['AI Integration', 'Microelectronics', 'Arduino', 'IoT Systems', 'C#', 'AutoCAD', 'Web Development'].map((tech) => (
            <Badge key={tech} variant="secondary" className="badge-apple-secondary hover:bg-apple-blue/10 transition-apple-normal">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Buttons - Apple-style */}
        <div className="flex flex-col sm:flex-row space-apple-md justify-center items-center mb-16">
          <Button size="lg" className="btn-apple-primary">
            <Mail className="mr-2 h-4 w-4" />
            Get in Touch
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="btn-apple-secondary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
        </div>

      </div>

      {/* Scroll Indicator - Apple-style subtle */}
      <button
        onClick={scrollToAI}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-apple-text-secondary hover:text-apple-text-primary transition-all duration-300 ease-out p-4 rounded-full hover:bg-apple-gray/20 active:bg-apple-gray/30 focus:outline-none focus:ring-2 focus:ring-apple-blue/50 focus:ring-offset-2 focus:ring-offset-apple-bg-primary min-w-[48px] min-h-[48px] flex items-center justify-center group z-50 cursor-pointer"
        aria-label="Scroll to AI Assistant"
        title="Scroll to AI Assistant"
      >
        <ChevronDown className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
      </button>
    </section>
  );
};