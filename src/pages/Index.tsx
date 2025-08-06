import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { EmbeddedChatAssistant } from "@/components/EmbeddedChatAssistant";

const Index = () => {
  return (
    <div className="min-h-screen bg-apple-bg-primary">
      <HeroSection />
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
