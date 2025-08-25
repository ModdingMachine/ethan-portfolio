import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { EmbeddedChatAssistant } from "@/components/EmbeddedChatAssistant";
import { Bot } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-apple-bg-primary" id="ai-assistant">
      <HeroSection />
      {/* AI Assistant Section - Apple-style */}
      <div className="text-center mt-20">
          <div className="card-apple">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-12 bg-apple-blue rounded-full flex items-center justify-center mr-4">
                  <Bot className="h-6 w-6 text-apple-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-apple-dark">Ask Ethan's AI Assistant</h3>
                  <p className="text-apple-gray font-light">Get instant answers about experience, projects, and services</p>
                </div>
              </div>
              <EmbeddedChatAssistant />
            </div>
          </div>
        </div>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />

      {/* AI Disclaimer */}
      <footer className="w-full py-4 text-center text-xs text-apple-text-tertiary">
        <p>This website was built with the assistance of an AI.</p>
        <p>Copyright © 2025</p>
      </footer>
    </div>
  );
};

export default Index;
