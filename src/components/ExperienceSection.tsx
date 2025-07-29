import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, Award } from "lucide-react";

const experiences = [
  {
    company: "Revamp Engineering, Inc.",
    position: "Substation Protection and Controls Intern",
    duration: "May 2025 - Present",
    location: "Colorado Springs, CO",
    type: "Full-time",
    description: "Leading automation initiatives for electrical engineering workflows, developing custom LISP and Python scripts to modernize AutoCAD processes.",
    achievements: [
      "Created automated test switch schedule generation system",
      "Developed panel nameplate sorter and schedule generator",
      "Built PinList generator for intelligent component recognition",
      "Reduced manual workflow time by 60% through automation"
    ],
    tech: ["LISP", "Python", "AutoCAD Electrical", "Excel Macros"],
    current: true
  },
  {
    company: "LifePonic Solutions",
    position: "Electrical Engineering Intern",
    duration: "Mar 2024 - Sep 2024",
    location: "Colorado Springs, CO",
    type: "Internship",
    description: "Designed and prototyped power distribution and monitoring systems for solar-powered hydroponic tower solutions.",
    achievements: [
      "Developed complete DC to AC solar power solution",
      "Researched and integrated advanced battery management systems",
      "Created custom sensor solutions for hydroponic monitoring",
      "Documented comprehensive design procedures and protocols"
    ],
    tech: ["Circuit Design", "Solar Systems", "Sensor Integration", "Power Management"],
    current: false
  },
  {
    company: "GuardedMind",
    position: "CEO & Founder",
    duration: "Jul 2024 - Sep 2024",
    location: "Colorado Springs, CO",
    type: "Startup",
    description: "Founded startup offering parents technology solutions to bridge the gap between digital accountability and healthy relationships.",
    achievements: [
      "Developed comprehensive parental accountability platform",
      "Created device monitoring and reporting systems",
      "Built educational resources for healthy tech conversations",
      "Led product development and business strategy"
    ],
    tech: ["Mobile Development", "API Design", "User Analytics", "Business Strategy"],
    current: false
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient-accent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through automation, engineering innovation, and entrepreneurial ventures
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-2 ${
                  exp.current 
                    ? 'bg-accent border-accent shadow-glow' 
                    : 'bg-background border-accent/50'
                }`}></div>

                {/* Experience Card */}
                <div className="ml-16">
                  <Card className="p-6 card-glow hover:border-accent/50 transition-smooth">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <Building className="h-5 w-5 text-accent" />
                          <h3 className="text-xl font-semibold">{exp.company}</h3>
                          {exp.current && (
                            <Badge className="bg-success/20 text-success border-success/30">
                              Current
                            </Badge>
                          )}
                        </div>
                        <h4 className="text-lg text-accent font-medium mb-2">{exp.position}</h4>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="h-4 w-4 text-accent" />
                        <span className="font-semibold text-sm">Key Achievements</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <span className="text-accent mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <span className="text-sm font-semibold mb-2 block">Technologies Used:</span>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="text-xs bg-muted/30 hover:bg-accent/20 transition-smooth"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Resume CTA */}
        <div className="text-center mt-16">
          <Card className="p-8 card-glow bg-gradient-to-r from-card to-accent/5">
            <h3 className="text-2xl font-semibold mb-4">
              Want to Learn More?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Download my full resume to see additional experience, certifications, and detailed project information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-accent text-background rounded-lg font-semibold hover:opacity-90 transition-smooth glow-accent">
                Download Resume
              </button>
              <button 
                className="px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-smooth"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};