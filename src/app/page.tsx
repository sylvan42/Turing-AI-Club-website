import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ClubProcess } from "@/components/ClubProcess";
import { Tracks } from "@/components/Tracks";
import { Theme } from "@/components/Theme";
import { committee, visionStatement } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <About preview />
      <Theme />
      <Tracks preview />
      <ClubProcess />
      <section id="vision" className="container section">
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="panel-mint p-7 sm:p-10">
            <p className="eyebrow">Looking ahead</p>
            <h2 className="heading-1 mt-4 max-w-[26ch]">{visionStatement}</h2>
            <Link className="link-green mt-6" href="/about/#vision">
              Our vision and mission <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <Link
            id="team"
            href="/team/"
            className="tile card flex flex-col justify-between p-7 sm:p-10"
          >
            <div>
              <p className="eyebrow">The people</p>
              <h3 className="heading-1 mt-4">Meet the team behind the club.</h3>
              <p className="mt-3">
                Meet our patron and the {committee.length} students helping the
                club learn, connect, and build.
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <span className="text-[15px] font-bold text-primary">Meet the team</span>
              <span className="arrow-circle">
                <ArrowRight size={18} aria-hidden="true" />
              </span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
