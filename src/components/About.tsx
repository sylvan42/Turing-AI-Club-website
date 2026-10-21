import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { stages, tracks } from "@/lib/content";

export function About({ preview = false }: { preview?: boolean }) {
  return (
    <section id="about" className="container section">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow">The community</p>
          <h2 className="display-lg mt-4 max-w-[14ch]">
            Learn the skills. <span className="marker">Find your people.</span>
          </h2>
          <p className="lead mt-6 max-w-[52ch] text-ink">
            TuringAI is a student community at Makerere University for learning
            AI through practice and collaboration.
          </p>
          <p className="mt-4 max-w-[58ch]">
            Based at CEDAT and open to every course, we bring different skills
            and perspectives to the same table. Learn alongside other students,
            test your ideas, and build something useful together.
          </p>
          {preview ? (
            <Link className="link-green mt-5" href="/about/">
              Get to know TuringAI <ArrowRight aria-hidden="true" />
            </Link>
          ) : (
            <p className="mt-4 max-w-[58ch]">
              A club year begins with self-paced learning matched to your level.
              From there, mixed teams explore a problem, build a prototype with
              mentorship, and demonstrate their work. The best ideas can become
              a starting point for next year’s teams.
            </p>
          )}
        </div>

        <div className="tip-panel self-start p-6 sm:p-8">
          <p className="flex items-center gap-2 text-[15px] font-bold text-ink">
            <ArrowRight size={18} className="text-primary" aria-hidden="true" />
            Why students join
          </p>
          <p className="mt-3 max-w-[44ch] text-ink">
            No prior AI experience needed. Pick a track, learn at your own pace,
            meet other learners, and put your skills into practice with a team.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-[1.2fr_1fr]">
            <div className="stat-dark p-5">
              <TrendingUp
                className="absolute -right-3 -top-3 h-24 w-24 text-white/10"
                strokeWidth={1.25}
                aria-hidden="true"
              />
              <div className="flex gap-8">
                <div>
                  <p className="stat-value">{stages.length}</p>
                  <p className="mt-2 text-[13px] font-medium text-white/80">
                    stages of the club year
                  </p>
                </div>
                <div>
                  <p className="stat-value">{tracks.length}</p>
                  <p className="mt-2 text-[13px] font-medium text-white/80">
                    learning tracks
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[8px] bg-white p-5">
              <p className="text-[13px] font-medium text-muted">Who it’s for</p>
              <p className="mt-2 text-[26px] font-extrabold leading-none tracking-tight text-primary">
                All courses
              </p>
              <p className="mt-2 text-[13px] text-muted">
                From engineering to law
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
