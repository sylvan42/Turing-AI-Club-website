import type { Metadata } from "next";
import { ExecutiveTeam } from "@/components/ExecutiveTeam";
import { PageBand } from "@/components/PageBand";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the patron and student committee behind TuringAI Club at Makerere University.",
};

export default function TeamPage() {
  return (
    <>
      <PageBand
        crumb="Team"
        title={
          <>
            A community takes a <span className="hl">team.</span>
          </>
        }
      >
        <p className="lead mt-6 max-w-[53ch]">
          Meet our patron and student committee, supporting practical learning,
          collaboration, and innovation at Makerere.
        </p>
      </PageBand>
      <ExecutiveTeam />
    </>
  );
}
