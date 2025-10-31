import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Cpu, Droplets, Bot, Gamepad2, Wrench, ChevronLeft, ChevronRight, X } from "lucide-react";
import { EmbeddedChatAssistant } from "@/components/EmbeddedChatAssistant";
import { useState } from "react";

const projects = [
  {
    title: "LecturnAI - Neural Network Note Taking",
    description: "Obsidian-inspired note taking app that maps AI conversations to a 3D neural network visualization. Enables follow-up conversations with context awareness for an enhanced learning experience.",
    tech: ["AI", "3D Visualization", "Neural Networks", "React"],
    category: "AI",
    icon: Bot,
    date: "Jul 2025",
    features: [
      "3D neural network conversation mapping",
      "Context-aware follow-up conversations",
      "Obsidian-inspired knowledge management",
      "Enhanced AI learning experience"
    ],
    status: "In Development",
    showLearnMore: true,
    showLinkIcon: true,
    link: "https://lecturnai.netlify.app",
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
    title: "VR & Game Development",
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
    <section id="projects" className="py-24 px-6 bg-apple-bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Apple-style */}
        <div className="text-center mb-20">
          <h2 className="text-apple-headline font-bold mb-8 tracking-tight">
            Featured <span className="text-apple-text-primary">Projects</span>
          </h2>
          <p className="text-apple-subtitle text-apple-text-secondary max-w-4xl mx-auto font-light leading-relaxed">
            Innovative solutions spanning AI automation, IoT development, and engineering workflows
          </p>
        </div>

        {/* Projects Grid - Apple-style */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const isActive = activeSlideshow === project.title;
            const currentSlideIndex = slideshowIndex[project.title] || 0;
            const currentSlide = project.slideshow?.[currentSlideIndex];

            return (
              <div key={project.title} className="relative min-h-[500px]">
                {!isActive ? (
                  /* Front of Card - Apple-style */
                  <Card className="absolute inset-0 card-apple group hover-apple-lift flex flex-col">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="p-3 rounded-apple-lg bg-apple-blue-bg mr-3 group-hover:bg-apple-blue/20 transition-apple-normal flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-apple-blue" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base font-semibold text-apple-text-primary group-hover:text-apple-blue transition-apple-normal line-clamp-2">
                            {project.title}
                          </h3>
                          <div className="flex items-center space-apple-sm mt-1">
                            <Calendar className="h-4 w-4 text-apple-text-tertiary flex-shrink-0" />
                            <span className="text-xs text-apple-text-tertiary font-medium">{project.date}</span>
                          </div>
                        </div>
                      </div>
                      <Badge 
                        className={`
                          whitespace-nowrap flex-shrink-0 ml-2
                          ${project.status === 'Production' ? 'badge-apple-primary' : ''}
                          ${project.status === 'In Development' ? 'badge-apple-secondary' : ''}
                          ${project.status === 'Seeking Investment' ? 'badge-apple-primary' : ''}
                          ${project.status === 'Completed' ? 'badge-apple-secondary' : ''}
                        `}
                      >
                        {project.status}
                      </Badge>
                    </div>

                    {/* Scrollable Content Area */}
                    <div className="flex-1 overflow-y-auto min-h-0 mb-4">
                      {/* Description */}
                      <p className="text-apple-text-secondary mb-4 leading-relaxed font-light text-sm">
                        {project.description}
                      </p>

                      {/* Key Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2 text-apple-text-primary">Key Features:</h4>
                        <ul className="text-sm text-apple-text-secondary space-apple-sm font-light">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start space-apple-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-apple-blue mt-2 flex-shrink-0"></div>
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
                            className="badge-apple-secondary hover:bg-apple-blue/10 transition-apple-normal"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Button - Fixed at bottom */}
                    {project.showLearnMore && (
                      <div className="mt-auto pt-2 border-t border-apple-border-primary">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="btn-apple-secondary w-full"
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
                  /* Slideshow View - Apple-style */
                  <Card className="absolute inset-0 card-apple">
                    <div className="h-full flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-apple-title font-semibold text-apple-text-primary">Project Details</h3>
                        <Button 
                          size="sm" 
                          variant="ghost"
                          className="text-apple-text-tertiary hover:text-apple-text-primary"
                          onClick={() => handleCardFlip(project.title)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      {currentSlide && (
                        <div className="flex-1 flex flex-col">
                          {/* Slideshow Navigation */}
                          <div className="flex items-center justify-between mb-6">
                            <Button 
                              size="sm" 
                              variant="ghost"
                              className="text-apple-text-tertiary hover:text-apple-text-primary"
                              onClick={() => prevSlide(project.title, project.slideshow.length)}
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <span className="text-sm text-apple-text-tertiary font-medium">
                              {currentSlideIndex + 1} / {project.slideshow.length}
                            </span>
                            <Button 
                              size="sm" 
                              variant="ghost"
                              className="text-apple-text-tertiary hover:text-apple-text-primary"
                              onClick={() => nextSlide(project.title, project.slideshow.length)}
                            >
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>

                          {/* Slide Content */}
                          <div className="flex-1 bg-apple-gray-bg rounded-apple-lg p-6 mb-6 flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-32 h-32 bg-apple-blue rounded-apple-lg mb-6 mx-auto flex items-center justify-center">
                                <IconComponent className="h-12 w-12 text-white" />
                              </div>
                              <h4 className="text-lg font-semibold mb-3 text-apple-text-primary">{currentSlide.title}</h4>
                              <p className="text-sm text-apple-text-secondary font-light">{currentSlide.description}</p>
                            </div>
                          </div>

                          {/* Slide Indicators */}
                          <div className="flex justify-center space-apple-sm">
                            {project.slideshow.map((_, slideIndex) => (
                              <button
                                key={slideIndex}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  slideIndex === currentSlideIndex 
                                    ? 'bg-apple-blue' 
                                    : 'bg-apple-gray/30'
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
      </div>
    </section>
  );
};