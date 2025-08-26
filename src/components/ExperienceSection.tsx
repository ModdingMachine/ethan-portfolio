import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Automation Engineer",
    company: "Revamp Engineering",
    location: "Colorado Springs, CO",
    period: "May 2025 - Present",
    description: "Developing custom LISP and Python scripts for AutoCAD automation, creating Excel macros, and implementing AI-driven workflow optimizations.",
    achievements: [
      "Automated test switch schedule generation",
      "Developed panel nameplate generators",
      "Created PinList generators for relay terminals",
      "Implemented Excel macro automation"
    ],
    skills: ["AutoCAD", "LISP", "Python", "Excel", "Automation"],
    type: "work"
  },
  {
    title: "Student",
    company: "University of Colorado Colorado Springs",
    location: "Colorado Springs, CO",
    period: "2023 - 2027",
    description: "Pursuing Bachelor of Science in Electrical Engineering with focus on automation, AI integration, and modern engineering practices.",
    achievements: [
      "Maintaining 3.5 GPA",
      "Advanced coursework in differential equations",
      "Studying Laplace transforms and circuit analysis",
      "Physics III with focus on electromagnetism"
    ],
    skills: ["Electrical Engineering", "Mathematics", "Physics", "Research"],
    type: "education"
  },
  {
    title: "Game Developer",
    company: "Independent Projects",
    location: "Remote",
    period: "2020 - 2023",
    description: "Developed innovative Minecraft mods and participated in global game development competitions, achieving top 50 placements in Ludum Dare.",
    achievements: [
      "Top 50 global placements in Ludum Dare",
      "Developed complex Minecraft automation systems",
      "Created 3D game environments and mechanics",
      "Implemented advanced programming concepts"
    ],
    skills: ["Unity3D", "C#", "Game Development", "3D Design", "VR"],
    type: "project"
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-apple-bg-primary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Apple-style */}
        <div className="text-center mb-20">
          <h2 className="text-apple-headline font-bold mb-8 tracking-tight">
            Experience & <span className="text-apple-text-primary">Education</span>
          </h2>
          <p className="text-apple-subtitle text-apple-text-secondary max-w-4xl mx-auto font-light leading-relaxed">
            My professional journey from game development to engineering automation
          </p>
        </div>

        {/* Experience Timeline - Apple-style */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="card-apple hover-apple-lift">
              <div className="flex flex-col lg:flex-row lg:items-start space-apple-lg">
                {/* Timeline Icon */}
                <div className="flex items-center lg:items-start space-apple-sm lg:flex-col">
                  <div className={`p-3 rounded-apple-lg ${
                    experience.type === 'work' ? 'bg-apple-blue-bg' : 
                    experience.type === 'education' ? 'bg-apple-green-bg' : 
                    'bg-apple-purple-bg'
                  }`}>
                    {experience.type === 'work' ? (
                      <Building2 className="h-6 w-6 text-apple-blue" />
                    ) : experience.type === 'education' ? (
                      <GraduationCap className="h-6 w-6 text-apple-green" />
                    ) : (
                      <Calendar className="h-6 w-6 text-apple-purple" />
                    )}
                  </div>
                  <div className="hidden lg:block w-px h-16 bg-apple-border-primary mx-auto"></div>
                </div>

                {/* Content */}
                <div className="flex-1 space-apple-md">
                  {/* Header */}
                  <div className="space-apple-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-apple-title font-semibold text-apple-text-primary">
                        {experience.title}
                      </h3>
                      <Badge className={`w-fit ${
                        experience.type === 'work' ? 'badge-apple-primary' : 
                        experience.type === 'education' ? 'badge-apple-success' : 
                        'badge-apple-secondary'
                      }`}>
                        {experience.type === 'work' ? 'Work' : 
                         experience.type === 'education' ? 'Education' : 'Project'}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center space-apple-sm text-apple-text-secondary">
                      <div className="flex items-center space-apple-sm">
                        <Building2 className="h-4 w-4" />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                      <div className="flex items-center space-apple-sm">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center space-apple-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-apple-body text-apple-text-secondary leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-apple-sm">
                    <h4 className="text-apple-subtitle font-medium text-apple-text-primary">Key Achievements</h4>
                    <ul className="space-apple-sm">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-apple-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-apple-blue mt-2 flex-shrink-0"></div>
                          <span className="text-apple-body text-apple-text-secondary">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap space-apple-sm">
                    {experience.skills.map((skill) => (
                      <Badge key={skill} className="badge-apple-secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};