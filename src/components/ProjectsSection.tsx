import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Cpu, Droplets, Bot, Gamepad2, Wrench, ChevronLeft, ChevronRight, X } from "lucide-react";
import { EmbeddedChatAssistant } from "@/components/EmbeddedChatAssistant";
import { useState } from "react";

const projects = [
  {
    title: "AI Lecture Transcription System",
    description: "Multi-agent AI system using CrewAI to enhance educational content. Transforms recorded lectures into enriched, comprehensive learning materials with automated research and synthesis.",
    tech: ["CrewAI", "AI Agents", "Python", "Chain of Thought"],
    category: "AI",
    icon: Bot,
    date: "Jul 2025",
    features: [
      "Summarizer agent for high-level extraction",
      "Research agent with code/math verification",
      "Content enhancer with examples & analogies",
      "Audio synthesis for spoken delivery"
    ],
    status: "In Development",
    showLearnMore: false,
    showLinkIcon: false,
    slideshow: [
      { title: "Multi-Agent Architecture", description: "CrewAI orchestrates specialized agents for content processing", image: "/api/placeholder/400/300" },
      { title: "Research Integration", description: "Automated verification of code and mathematical concepts", image: "/api/placeholder/400/300" },
      { title: "Content Enhancement", description: "AI-generated examples and analogies for better understanding", image: "/api/placeholder/400/300" }
    ]
  },
  {
    title: "HydroQube - Smart Hydration Tracker",
    description: "Ultra-compact IoT device (3cm³) for water bottle hydration tracking. Uses advanced physics algorithms with pressure sensing and tilt detection to monitor water consumption.",
    tech: ["ESP32-C3", "BMP280", "I2C", "Physics Algorithms"],
    category: "IoT",
    icon: Droplets,
    date: "Jan 2025",
    features: [
      "Pressure-based water level detection",
      "Tilt sensor for orientation compensation",
      "Real-time hydration tracking",
      "Ultra-compact 3cm³ form factor"
    ],
    status: "Seeking Investment",
    showLearnMore: true,
    showLinkIcon: false,
    slideshow: [
      { title: "Ultra-Compact Design", description: "3cm³ form factor fits any water bottle", image: "/api/placeholder/400/300" },
      { title: "Pressure Sensing", description: "Advanced algorithms for accurate water level detection", image: "/api/placeholder/400/300" },
      { title: "Smart Integration", description: "Seamless connectivity with mobile apps", image: "/api/placeholder/400/300" }
    ]
  },
  {
    title: "Cookbook AI Mobile App",
    description: "Intelligent recipe generation app powered by ChatGPT 4o. Adapts to user preferences and creates personalized gourmet recipes with continuous learning capabilities.",
    tech: ["Android SDK", "ChatGPT 4o", "Cursor AI", "Mobile Dev"],
    category: "AI",
    icon: Cpu,
    date: "Nov 2024 - May 2025",
    features: [
      "GPT-4o powered recipe generation",
      "Adaptive taste learning algorithms",
      "Personalized meal recommendations",
      "Gourmet recipe customization"
    ],
    status: "Completed",
    showLearnMore: true,
    showLinkIcon: false,
    slideshow: [
      { title: "AI Recipe Generation", description: "GPT-4o creates personalized gourmet recipes", image: "/api/placeholder/400/300" },
      { title: "Taste Learning", description: "Adaptive algorithms learn user preferences", image: "/api/placeholder/400/300" },
      { title: "Mobile Interface", description: "Intuitive Android app with modern UI", image: "/api/placeholder/400/300" }
    ]
  },
  {
    title: "AutoCAD Automation Suite",
    description: "Custom LISP and Python scripts for Revamp Engineering to automate electrical schematic workflows. Bridges traditional AutoCAD with modern AutoCAD Electrical systems.",
    tech: ["LISP", "Python", "AutoCAD API", "Excel Automation"],
    category: "Automation",
    icon: Wrench,
    date: "May 2025 - Present",
    features: [
      "Test switch schedule automation",
      "Panel nameplate generators",
      "PinList generator for relay terminals",
      "Excel macro development"
    ],
    status: "Production",
    showLearnMore: false,
    showLinkIcon: false,
    slideshow: [
      { title: "LISP Automation", description: "Custom scripts for electrical workflows", image: "/api/placeholder/400/300" },
      { title: "Excel Integration", description: "Seamless data flow between AutoCAD and Excel", image: "/api/placeholder/400/300" },
      { title: "Production Ready", description: "Deployed and actively used in engineering workflows", image: "/api/placeholder/400/300" }
    ]
  },
  {
    title: "Custom Mini Hydroponics Tower",
    description: "3D designed mini hydroponics tower with Arduino Nano processor, custom circuit board, and 3D printed structure. Complete automated growing solution.",
    tech: ["Arduino Nano", "3D Printing", "Circuit Design", "Hydroponics"],
    category: "IoT",
    icon: Cpu,
    date: "Aug 2023 - Aug 2024",
    features: [
      "Custom designed circuit board",
      "3D printed frame and structure",
      "Arduino-based automation",
      "Integrated growing system"
    ],
    status: "Completed",
    showLearnMore: true,
    showLinkIcon: false,
    slideshow: [
      { title: "3D Printed Design", description: "Custom frame and structure components", image: "/api/placeholder/400/300" },
      { title: "Circuit Integration", description: "Arduino Nano with custom circuit board", image: "/api/placeholder/400/300" },
      { title: "Automated Growing", description: "Complete hydroponics automation system", image: "/api/placeholder/400/300" }
    ]
  },
  {
    title: "VR & Game Development Portfolio",
    description: "Competed in six game design competitions with 78-hour development sprints. Awarded top 50 globally and developed VR experiences for Oculus Quest.",
    tech: ["Unity", "C#", "VR Development", "Game Design"],
    category: "Development",
    icon: Gamepad2,
    date: "2019 - 2023",
    features: [
      "Top 50 global competition awards",
      "78-hour game jam experiences",
      "Oculus Quest VR development",
      "Complete game design lifecycle"
    ],
    status: "Completed",
    showLearnMore: true,
    showLinkIcon: true,
    link: "https://larty.itch.io/",
    slideshow: [
      { title: "Game Jam Success", description: "Top 50 global rankings in Ludum Dare competitions", image: "/api/placeholder/400/300" },
      { title: "VR Development", description: "Oculus Quest experiences and 3D mathematics", image: "/api/placeholder/400/300" },
      { title: "Complete Lifecycle", description: "From concept to deployment in 78-hour sprints", image: "/api/placeholder/400/300" }
    ]
  }
];

export const ProjectsSection = () => {
  const [activeSlideshow, setActiveSlideshow] = useState<string | null>(null);
  const [slideshowIndex, setSlideshowIndex] = useState<{ [key: string]: number }>({});

  const handleCardFlip = (projectTitle: string) => {
    if (activeSlideshow === projectTitle) {
      setActiveSlideshow(null);
    } else {
      setActiveSlideshow(projectTitle);
      if (!slideshowIndex[projectTitle]) {
        setSlideshowIndex(prev => ({
          ...prev,
          [projectTitle]: 0
        }));
      }
    }
  };

  const handleExternalLink = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const nextSlide = (projectTitle: string, totalSlides: number) => {
    setSlideshowIndex(prev => ({
      ...prev,
      [projectTitle]: (prev[projectTitle] + 1) % totalSlides
    }));
  };

  const prevSlide = (projectTitle: string, totalSlides: number) => {
    setSlideshowIndex(prev => ({
      ...prev,
      [projectTitle]: prev[projectTitle] === 0 ? totalSlides - 1 : prev[projectTitle] - 1
    }));
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient-accent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions spanning AI automation, IoT development, and engineering workflows
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const isActive = activeSlideshow === project.title;
            const currentSlideIndex = slideshowIndex[project.title] || 0;
            const currentSlide = project.slideshow?.[currentSlideIndex];

            return (
              <div key={project.title} className="relative h-[500px]">
                {!isActive ? (
                  /* Front of Card */
                  <Card className="absolute inset-0 p-6 card-glow group transition-smooth hover:border-accent/50">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="p-2 rounded-lg bg-accent/10 mr-3 group-hover:bg-accent/20 transition-smooth">
                          <IconComponent className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold group-hover:text-accent transition-smooth">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar className="h-3 w-3 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{project.date}</span>
                          </div>
                        </div>
                      </div>
                      <Badge 
                        className={`
                          ${project.status === 'Production' ? 'bg-success/20 text-success border-success/30' : ''}
                          ${project.status === 'In Development' ? 'bg-warning/20 text-warning border-warning/30' : ''}
                          ${project.status === 'Seeking Investment' ? 'bg-accent/20 text-accent border-accent/30' : ''}
                          ${project.status === 'Completed' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : ''}
                        `}
                      >
                        {project.status}
                      </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 text-accent">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="text-xs bg-muted/30 hover:bg-accent/20 transition-smooth"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Button */}
                    {project.showLearnMore && (
                      <div className="flex gap-3">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="border-accent/50 text-accent hover:bg-accent/10 transition-smooth"
                          onClick={() => {
                            if (project.showLinkIcon && project.link) {
                              handleExternalLink(project.link);
                            } else {
                              handleCardFlip(project.title);
                            }
                          }}
                        >
                          {project.showLinkIcon && <ExternalLink className="h-3 w-3 mr-2" />}
                          Learn More
                        </Button>
                      </div>
                    )}
                  </Card>
                ) : (
                  /* Slideshow View */
                  <Card className="absolute inset-0 p-6 card-glow transition-smooth">
                    <div className="h-full flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-accent">Project Details</h3>
                        <Button 
                          size="sm" 
                          variant="ghost"
                          className="text-muted-foreground hover:text-accent"
                          onClick={() => handleCardFlip(project.title)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      {currentSlide && (
                        <div className="flex-1 flex flex-col">
                          {/* Slideshow Navigation */}
                          <div className="flex items-center justify-between mb-4">
                            <Button 
                              size="sm" 
                              variant="ghost"
                              className="text-muted-foreground hover:text-accent"
                              onClick={() => prevSlide(project.title, project.slideshow.length)}
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <span className="text-sm text-muted-foreground">
                              {currentSlideIndex + 1} / {project.slideshow.length}
                            </span>
                            <Button 
                              size="sm" 
                              variant="ghost"
                              className="text-muted-foreground hover:text-accent"
                              onClick={() => nextSlide(project.title, project.slideshow.length)}
                            >
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>

                          {/* Slide Content */}
                          <div className="flex-1 bg-muted/20 rounded-lg p-4 mb-4 flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-32 h-32 bg-gradient-accent rounded-lg mb-4 mx-auto flex items-center justify-center">
                                <IconComponent className="h-12 w-12 text-background" />
                              </div>
                              <h4 className="text-lg font-semibold mb-2">{currentSlide.title}</h4>
                              <p className="text-sm text-muted-foreground">{currentSlide.description}</p>
                            </div>
                          </div>

                          {/* Slide Indicators */}
                          <div className="flex justify-center gap-2">
                            {project.slideshow.map((_, slideIndex) => (
                              <button
                                key={slideIndex}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  slideIndex === currentSlideIndex 
                                    ? 'bg-accent' 
                                    : 'bg-muted-foreground/30'
                                }`}
                                onClick={() => setSlideshowIndex(prev => ({
                                  ...prev,
                                  [project.title]: slideIndex
                                }))}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </Card>
                )}
              </div>
            );
          })}
        </div>

        {/* AI Assistant Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-card/50 to-card/30 rounded-2xl p-8 border border-accent/20">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mr-4">
                  <Bot className="h-6 w-6 text-background" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient-accent">Ask Ethan's AI Assistant</h3>
                  <p className="text-muted-foreground">Get instant answers about experience, projects, and services</p>
                </div>
              </div>
              <EmbeddedChatAssistant />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};