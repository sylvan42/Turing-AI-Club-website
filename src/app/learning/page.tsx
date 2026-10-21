import type { Metadata } from "next";
import { Tracks } from "@/components/Tracks";
import { ClubProcess } from "@/components/ClubProcess";
import { PageBand } from "@/components/PageBand";

export const metadata: Metadata = {
  title: "Learning",
  description:
    "Explore beginner and intermediate AI learning tracks, self-paced DataCamp courses, and the TuringAI club process.",
};

export default function LearningPage() {
  return (
    <>
      <PageBand
        crumb="Learning"
        title={
          <>
            Start where you are. <span className="hl">Build what comes next.</span>
          </>
        }
      >
        <p className="lead mt-6 max-w-[54ch]">
          Begin with the foundations or go deeper into applied machine learning.
          Learn at your own pace on DataCamp, then bring those skills to the
          club.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#beginner" className="button button-lime">
            Beginner track
          </a>
          <a href="#intermediate" className="button button-ghost">
            Intermediate track
          </a>
        </div>
      </PageBand>
      <Tracks />
      <div className="bg-soft">
        <ClubProcess />
      </div>
    </>
  );
}
