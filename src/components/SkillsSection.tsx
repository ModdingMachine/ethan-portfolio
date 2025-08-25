import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Cpu, 
  Zap, 
  Database, 
  Brain, 
  Wrench,
  Smartphone,
  Globe,
  Settings,
  Lightbulb
} from "lucide-react";

const skillCategories = [
  {
    title: "AI & Automation",
    icon: Brain,
    skills: ["ChatGPT API", "CrewAI", "AI Workflow Design", "Prompt Engineering", "Machine Learning"],
    color: "text-apple-blue"
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["Unity3D", "JavaScript", "C#", "React", "Python", "AutoLISP"],
    color: "text-apple-blue"
  },
  {
    title: "Engineering",
    icon: Cpu,
    skills: ["AutoCAD Electrical", "Circuit Design", "PCB Development", "ESP32", "Arduino"],
    color: "text-apple-blue"
  },
  {
    title: "IoT & Hardware",
    icon: Smartphone,
    skills: ["Microcontrollers", "Sensor Integration", "3D Design", "Hydroponics", "Solar Systems"],
    color: "text-apple-blue"
  },
  {
    title: "Development",
    icon: Globe,
    skills: ["API Development", "Database Design", "Mobile Apps", "Game Development", "VR"],
    color: "text-apple-blue"
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Cursor AI", "Github", "Excel Macros", "Android SDK", "Version Control"],
    color: "text-apple-blue"
  }
];

const coreCompetencies = [
  { name: "Programming", level: 97 },
  { name: "Learning", level: 95 },
  { name: "Automation", level: 92 },
  { name: "AI Integration", level: 90 },
  { name: "Circuit Design", level: 88 },
  { name: "Project Management", level: 85 }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-apple-bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Apple-style */}
        <div className="text-center mb-20">
          <h2 className="text-apple-headline font-bold mb-8 tracking-tight">
            Skills & <span className="text-apple-text-primary">Expertise</span>
          </h2>
          <p className="text-apple-subtitle text-apple-text-secondary max-w-4xl mx-auto font-light leading-relaxed">
            A comprehensive toolkit spanning AI, automation, engineering, and modern development
          </p>
        </div>

        {/* Skills Grid - Apple-style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.title} className="card-apple group hover-apple-lift">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-apple-lg bg-apple-blue-bg mr-4 group-hover:bg-apple-blue/20 transition-apple-normal">
                    <IconComponent className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-apple-title font-semibold text-apple-text-primary">{category.title}</h3>
                </div>
                <div className="flex flex-wrap space-apple-sm">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="badge-apple-secondary hover:bg-apple-blue/10 transition-apple-normal cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Core Competencies - Apple-style */}
        <Card className="card-apple">
          <div className="flex items-center mb-8">
            <div className="p-3 rounded-apple-lg bg-apple-blue-bg mr-4">
              <Lightbulb className="h-6 w-6 text-apple-blue" />
            </div>
            <h3 className="text-apple-headline font-semibold text-apple-text-primary">Core Competencies</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {coreCompetencies.map((competency) => (
              <div key={competency.name} className="space-apple-md">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-apple-text-primary text-lg">{competency.name}</span>
                  <span className="text-lg font-semibold text-apple-blue">{competency.level}%</span>
                </div>
                <div className="w-full bg-apple-gray-bg rounded-full h-3">
                  <div 
                    className="bg-apple-blue h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${competency.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};