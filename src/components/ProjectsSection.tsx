import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Cpu, Droplets, Bot } from "lucide-react";

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
    status: "In Development"
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
    status: "Seeking Investment"
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
    status: "Completed"
  },
  {
    title: "AutoCAD Automation Suite",
    description: "Custom LISP and Python scripts for Revamp Engineering to automate electrical schematic workflows. Bridges traditional AutoCAD with modern AutoCAD Electrical systems.",
    tech: ["LISP", "Python", "AutoCAD API", "Excel Automation"],
    category: "Automation",
    icon: Cpu,
    date: "May 2025 - Present",
    features: [
      "Test switch schedule automation",
      "Panel nameplate generators",
      "PinList generator for relay terminals",
      "Excel macro development"
    ],
    status: "Production"
  }
];

export const ProjectsSection = () => {
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
            return (
              <Card key={project.title} className="p-6 card-glow group hover:border-accent/50 transition-smooth">
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

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-accent/50 text-accent hover:bg-accent/10 transition-smooth"
                  >
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Learn More
                  </Button>
                  {project.status !== 'Seeking Investment' && (
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="text-muted-foreground hover:text-accent transition-smooth"
                    >
                      <Github className="h-3 w-3 mr-2" />
                      Code
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating on innovative projects?
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-accent hover:opacity-90 transition-smooth glow-accent"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};