import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { sendContactEmail, validateContactForm, type ContactFormData } from "@/lib/email";
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
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors([]);
    
    // Validate form before submission
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      toast({
        title: "Validation Error",
        description: validation.errors.join(', '),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setIsSubmitted(true);
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. Ethan will get back to you soon.",
        });

        // Reset form after success animation
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitted(false);
        }, 3000);
      } else {
        toast({
          title: "Error",
          description: result.message || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const openCalendly = () => {
    // Calendly popup integration would go here
    window.open('https://calendly.com/ethan-orr', '_blank');
  };

  return (
    <section id="contact" className="py-24 px-6 bg-apple-bg-primary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Apple-style */}
        <div className="text-center mb-20">
          <h2 className="text-apple-headline font-bold mb-8 tracking-tight">
            Let's <span className="text-apple-text-primary">Connect</span>
          </h2>
          <p className="text-apple-subtitle text-apple-text-secondary max-w-4xl mx-auto font-light leading-relaxed">
            Ready to discuss your next automation project or AI integration? Let's talk about how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Info & Calendly - Apple-style */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="card-apple">
              <h3 className="text-apple-title font-semibold mb-8 flex items-center text-apple-text-primary">
                <Mail className="h-6 w-6 text-apple-blue mr-3" />
                Get in Touch
              </h3>
              
              <div className="space-apple-md">
                <div className="flex items-center space-apple-sm">
                  <MapPin className="h-5 w-5 text-apple-blue" />
                  <span className="text-apple-text-secondary font-medium">Colorado Springs, Colorado</span>
                </div>
                
                <div className="flex items-center space-apple-sm">
                  <Mail className="h-5 w-5 text-apple-blue" />
                  <a 
                    href="mailto:coder930@gmail.com" 
                    className="hover:text-apple-blue transition-apple-normal text-apple-text-secondary font-medium"
                  >
                    coder930@gmail.com
                 </a>
                </div>

                <div className="flex items-center space-apple-sm">
                  <Linkedin className="h-5 w-5 text-apple-blue" />
                  <a 
                    href="https://www.linkedin.com/in/ethankorr/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-apple-blue transition-apple-normal text-apple-text-secondary font-medium"
                  >
                    linkedin.com/in/ethankorr
                  </a>
                </div>
              </div>

            </Card>

            {/* Calendly Integration */}
            <Card className="card-apple">
              <h3 className="text-apple-title font-semibold mb-6 flex items-center text-apple-text-primary">
                <Calendar className="h-6 w-6 text-apple-blue mr-3" />
                Schedule a Meeting
              </h3>
              <p className="text-apple-text-secondary mb-8 font-light leading-relaxed">
                Book a free 30-minute consultation to discuss your project needs and explore how we can work together.
              </p>
              <Button 
                onClick={openCalendly}
                className="btn-apple-primary w-full"
                size="lg"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book a Call
              </Button>
            </Card>
          </div>

          {/* Contact Form - Apple-style */}
          <Card className="card-apple">
            <h3 className="text-apple-title font-semibold mb-8 text-apple-text-primary">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-apple-blue mx-auto mb-6" />
                <h4 className="text-apple-title font-semibold text-apple-text-primary mb-3">Message Sent!</h4>
                <p className="text-apple-text-secondary font-light">
                  Thank you for reaching out. Ethan will get back to you within 24 hours.
                </p>
              </div>
            ) : (
                             <form onSubmit={handleSubmit} className="space-apple-lg">
                 <div className="space-y-8">
                   <div>
                     <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`input-apple ${
                        errors.some(e => e.includes('Name')) ? 'border-apple-red focus:ring-apple-red' : ''
                      }`}
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
                      className={`input-apple ${
                        errors.some(e => e.includes('Email')) ? 'border-apple-red focus:ring-apple-red' : ''
                      }`}
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`input-apple resize-none ${
                        errors.some(e => e.includes('Message')) ? 'border-apple-red focus:ring-apple-red' : ''
                      }`}
                    />
                  </div>
                </div>

                {errors.length > 0 && (
                  <div className="p-4 rounded-apple-md bg-apple-red-bg border border-apple-red/20">
                    <ul className="space-apple-sm text-sm text-apple-red">
                      {errors.map((error, index) => (
                        <li key={index} className="flex items-start space-apple-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-apple-red mt-2 flex-shrink-0"></div>
                          {error}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                                 <div className="mt-8">
                   <Button 
                     type="submit" 
                     disabled={isSubmitting}
                     className="btn-apple-primary w-full"
                     size="lg"
                   >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                                       )}
                   </Button>
                 </div>
               </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};