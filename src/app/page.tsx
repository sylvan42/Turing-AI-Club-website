import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { VisionMission } from "@/components/VisionMission";
import { Theme } from "@/components/Theme";
import { ClubProcess } from "@/components/ClubProcess";
import { Tracks } from "@/components/Tracks";
import { ExecutiveTeam } from "@/components/ExecutiveTeam";
import { JoinCTA } from "@/components/JoinCTA";
import { Footer } from "@/components/Footer";
import { tracks, disciplines, stages } from "@/lib/content";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <About />
      <VisionMission />
      <Theme />
      <ClubProcess />
      <Tracks />
      <ExecutiveTeam />
      <JoinCTA />
      <Footer />
    </main>
  );
}
