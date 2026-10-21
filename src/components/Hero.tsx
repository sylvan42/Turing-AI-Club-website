import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { hero, stages, concepts } from "@/lib/content";

export function Hero() {
  return (
    <>
      <section className="hero-band on-green" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:py-24">
          <div>
            <p className="eyebrow">Makerere University · CEDAT</p>
            <h1 id="hero-title" className="display-xl mt-6 max-w-[12ch]">
              {hero.title} <span className="hl">{hero.highlight}</span>
            </h1>
            <p className="lead mt-6 max-w-[43ch]">{hero.sentence}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="button button-lime" href="#join">
                Join the club <ArrowRight aria-hidden="true" />
              </a>
              <Link className="button button-ghost" href="/learning/">
                Explore learning tracks
              </Link>
            </div>
            <p className="mt-5 text-[14px]">
              Every course welcome. No AI experience needed.
            </p>
          </div>

          <aside
            className="hero-ideas rounded-[16px] bg-lime-panel p-6 sm:p-8"
            aria-labelledby="hero-ideas-title"
          >
            <p className="eyebrow">Start with a question</p>
            <h2 id="hero-ideas-title" className="display-lg mt-4 max-w-[12ch]">
              What could <span className="text-primary">you build?</span>
            </h2>
            <p className="mt-4 text-base">
              Look around campus. Think about home. A problem you know could be
              the start of your next project.
            </p>
            <ul className="mt-7 border-t border-forest/20">
              {concepts.slice(0, 3).map((concept) => (
                <li key={concept.id} className="border-b border-forest/20">
                  <a
                    className="group flex min-h-16 items-center justify-between gap-4 py-4 text-forest"
                    href={`#idea-${concept.id}`}
                  >
                    <span>
                      <span className="block text-[13px] font-medium">
                        {concept.label}
                      </span>
                      <span className="mt-1 block text-base font-bold">
                        {concept.question}
                      </span>
                    </span>
                    <ArrowRight
                      className="transition-transform group-hover:translate-x-1"
                      size={20}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
            <a className="link-green mt-5" href="#ideas">
              Explore the possibilities <ArrowDown aria-hidden="true" />
            </a>
          </aside>
        </div>
      </section>
      <div className="border-b border-mint-200 bg-mint-50">
        <ol
          aria-label="Your journey with TuringAI"
          className="container grid grid-cols-2 gap-x-6 gap-y-4 py-6 sm:grid-cols-4"
        >
          {stages.map((stage, index) => (
            <li
              key={stage.name}
              className="flex items-center gap-3 text-[14px] font-bold text-forest sm:text-base"
            >
              <span className="text-[12px] font-medium text-primary">
                0{index + 1}
              </span>
              {stage.name}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
