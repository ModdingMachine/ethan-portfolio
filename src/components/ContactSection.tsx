import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { 
  Mail, 
  Calendar, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone,
  Send,
  CheckCircle
} from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. Ethan will get back to you soon.",
    });

    // Reset form after success animation
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openCalendly = () => {
    // Calendly popup integration would go here
    window.open('https://calendly.com/ethan-orr', '_blank');
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient-accent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next automation project or AI integration? Let's talk about how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Calendly */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="p-6 card-glow">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Mail className="h-6 w-6 text-accent mr-3" />
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>Colorado Springs, Colorado</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <a 
                    href="mailto:ethan@example.com" 
                    className="hover:text-accent transition-smooth"
                  >
                    ethan@example.com
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-accent" />
                  <a 
                    href="https://www.linkedin.com/in/ethankorr/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-smooth"
                  >
                    linkedin.com/in/ethankorr
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-semibold mb-3">Services Available</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-accent/20 text-accent border-accent/30">AI Automation</Badge>
                  <Badge className="bg-accent/20 text-accent border-accent/30">Custom Development</Badge>
                  <Badge className="bg-accent/20 text-accent border-accent/30">IoT Solutions</Badge>
                  <Badge className="bg-accent/20 text-accent border-accent/30">Consulting</Badge>
                </div>
              </div>
            </Card>

            {/* Calendly Integration */}
            <Card className="p-6 card-glow">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Calendar className="h-6 w-6 text-accent mr-3" />
                Schedule a Meeting
              </h3>
              <p className="text-muted-foreground mb-6">
                Book a free 30-minute consultation to discuss your project needs and explore how we can work together.
              </p>
              <Button 
                onClick={openCalendly}
                className="w-full bg-gradient-accent hover:opacity-90 transition-smooth glow-accent"
                size="lg"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book a Call
              </Button>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 card-glow">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-success mb-2">Message Sent!</h4>
                <p className="text-muted-foreground">
                  Thank you for reaching out. Ethan will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="transition-smooth focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transition-smooth focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project or how I can help..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="transition-smooth focus:ring-2 focus:ring-accent resize-none"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-accent hover:opacity-90 transition-smooth glow-accent"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-background mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-lg p-8 card-glow">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to <span className="text-gradient-accent">Automate</span> Your Workflow?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              From AI-powered automation to custom IoT solutions, let's transform your ideas into intelligent, 
              efficient systems that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-accent hover:opacity-90 transition-smooth glow-accent"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Project
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent text-accent hover:bg-accent/10 transition-smooth"
                onClick={openCalendly}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};