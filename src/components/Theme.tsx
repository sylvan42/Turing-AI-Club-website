import {
  BookOpen,
  Bus,
  CloudSun,
  Lightbulb,
  Wallet,
} from "lucide-react";
import { concepts } from "@/lib/content";

const icons = {
  transport: Bus,
  weather: CloudSun,
  budget: Wallet,
  notes: BookOpen,
};

export function Theme() {
  return (
    <section id="ideas" className="bg-soft" aria-labelledby="ideas-heading">
      <div className="container section">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Ideas worth building</p>
            <h2 id="ideas-heading" className="heading-1 mt-3 max-w-[18ch]">
              Your next project could start here.
            </h2>
          </div>
          <div className="max-w-[44ch]">
            <p>
              Start with something familiar. Explore how data and AI could help,
              then build an idea worth testing.
            </p>
            <p className="mt-2 text-[13px] font-medium text-muted">
              Ideas to explore with a team. These are examples, not completed
              club projects.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {concepts.map((concept) => {
            const Icon = icons[concept.id as keyof typeof icons];
            return (
              <article
                id={`idea-${concept.id}`}
                key={concept.id}
                className="tile flex flex-col p-6"
              >
                <span className="icon-circle">
                  <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="heading-3 mt-6">{concept.label}</h3>
                <p className="mt-2 text-base">{concept.problem}.</p>
                <div className="mt-auto pt-6">
                  <div className="border-t border-line pt-4">
                    <p className="text-[13px] font-medium text-muted">
                      What you could try
                    </p>
                    <p className="mt-1 text-[15px] font-bold text-primary">
                      {concept.idea}
                    </p>
                  </div>
                  <p className="mt-3 flex gap-2 text-[15px] text-ink">
                    <Lightbulb
                      className="mt-0.5 text-primary"
                      size={16}
                      aria-hidden="true"
                    />
                    {concept.solution}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
