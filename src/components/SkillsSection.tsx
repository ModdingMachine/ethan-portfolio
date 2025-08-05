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
    color: "text-accent"
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["Unity3D", "JavaScript", "C#", "React", "Python", "AutoLISP"],
    color: "text-blue-400"
  },
  {
    title: "Engineering",
    icon: Cpu,
    skills: ["AutoCAD Electrical", "Circuit Design", "PCB Development", "ESP32", "Arduino"],
    color: "text-green-400"
  },
  {
    title: "IoT & Hardware",
    icon: Smartphone,
    skills: ["Microcontrollers", "Sensor Integration", "3D Design", "Hydroponics", "Solar Systems"],
    color: "text-purple-400"
  },
  {
    title: "Development",
    icon: Globe,
    skills: ["API Development", "Database Design", "Mobile Apps", "Game Development", "VR"],
    color: "text-orange-400"
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Cursor AI", "Github", "Excel Macros", "Android SDK", "Version Control"],
    color: "text-pink-400"
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
    <section id="skills" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient-accent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning AI, automation, engineering, and modern development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.title} className="p-6 card-glow group hover:border-accent/50 transition-smooth">
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg bg-accent/10 mr-3 group-hover:bg-accent/20 transition-smooth`}>
                    <IconComponent className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs bg-muted/30 hover:bg-accent/20 transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Core Competencies */}
        <Card className="p-8 card-glow">
          <div className="flex items-center mb-6">
            <Lightbulb className="h-6 w-6 text-accent mr-3" />
            <h3 className="text-2xl font-semibold">Core Competencies</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {coreCompetencies.map((competency) => (
              <div key={competency.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{competency.name}</span>
                  <span className="text-sm text-accent">{competency.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-accent h-2 rounded-full transition-all duration-1000 ease-out"
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