import type { Metadata } from "next";
import { About } from "@/components/About";
import { VisionMission } from "@/components/VisionMission";
import { Theme } from "@/components/Theme";
import { PageBand } from "@/components/PageBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Get to know TuringAI Club, our mission, and our student community at Makerere University.",
};

export default function AboutPage() {
  return (
    <>
      <PageBand
        crumb="About"
        title={
          <>
            Curiosity brings us <span className="hl">together.</span>
          </>
        }
      >
        <p className="lead mt-6 max-w-[54ch]">
          Different courses, different perspectives. A shared ambition to
          understand AI and use it to make something useful.
        </p>
      </PageBand>
      <About />
      <VisionMission />
      <Theme />
    </>
  );
}
