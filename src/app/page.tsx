import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Theme } from "@/components/Theme";
import { VisionMission } from "@/components/VisionMission";
import { ClubProcess } from "@/components/ClubProcess";
import { Tracks } from "@/components/Tracks";
import { Community } from "@/components/Community";
import { ExecutiveTeam } from "@/components/ExecutiveTeam";
import { JoinCTA } from "@/components/JoinCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Theme />
        <VisionMission />
        <ClubProcess />
        <Tracks />
        <Community />
        <ExecutiveTeam />
        <JoinCTA />
      </main>
      <Footer />
    </>
  );
}
