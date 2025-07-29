import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient-accent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate technologist with a focus on AI automation and innovative engineering solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I've been passionate about technology since my youth, starting with electronics and 
              transitioning to coding through innovative Minecraft projects. My journey evolved through 
              game design, where I earned top 50 placements in global Ludum Dare competitions.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              In 2023, I ventured into Virtual Reality game design, expanding my expertise in 
              three-dimensional mathematics and critical problem solving. As my interests shifted 
              from gaming to real-world applications, I rekindled my passion for electronics and automation.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently, I'm automating multiple systems at Revamp Engineering while developing 
              cutting-edge AI automation projects. My work bridges the gap between traditional 
              engineering practices and modern AI-driven solutions.
            </p>

            {/* Current Focus */}
            <div className="bg-card border border-border rounded-lg p-6 card-glow">
              <h3 className="text-xl font-semibold mb-4 text-accent">Current Focus</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-accent/20 text-accent border-accent/30">AI Automation</Badge>
                <Badge className="bg-accent/20 text-accent border-accent/30">AutoCAD Integration</Badge>
                <Badge className="bg-accent/20 text-accent border-accent/30">Python Scripting</Badge>
                <Badge className="bg-accent/20 text-accent border-accent/30">IoT Development</Badge>
              </div>
            </div>
          </div>

          {/* Stats & Highlights */}
          <div className="space-y-6">
            <Card className="p-6 card-glow">
              <h3 className="text-xl font-semibold mb-4">Professional Highlights</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Years of Experience</span>
                  <span className="font-semibold text-accent">5+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Game Competitions Won</span>
                  <span className="font-semibold text-accent">Top 50 Global</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Current GPA</span>
                  <span className="font-semibold text-accent">3.5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Automation Scripts Created</span>
                  <span className="font-semibold text-accent">15+</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-glow">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">University of Colorado Colorado Springs</h4>
                  <p className="text-muted-foreground">Bachelor of Science - Electrical Engineering</p>
                  <p className="text-sm text-accent">2023 - 2027 | GPA: 3.5</p>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-muted-foreground">
                    Chancellor's Leadership Class • Advanced Coursework in Calculus III, 
                    Logic Circuits II, and Physics II
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};