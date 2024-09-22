import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { EventSection } from "@/sections/Events";
import { AboutSection } from "@/sections/About";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <EventSection />
      <AboutSection />
    </div>
  );
}
