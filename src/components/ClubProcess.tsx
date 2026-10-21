import { BookOpen, Presentation, Users, Wrench } from "lucide-react";
import { stages } from "@/lib/content";

const stageIcons = [BookOpen, Users, Wrench, Presentation];

export function ClubProcess() {
  return (
    <section id="how-it-works" className="container section">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">How a club year works</p>
        <h2 className="heading-1 mt-3">
          Learn it. Try it. Build on it.
        </h2>
        <p className="mx-auto mt-4 max-w-[46ch]">
          Build your foundations, find a team, and put your learning to work
          through the four stages of the club year.
        </p>
      </div>
      <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <li
          className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-mint-200 lg:block"
          aria-hidden="true"
          role="presentation"
        />
        {stages.map((stage, index) => {
          const Icon = stageIcons[index];
          return (
            <li key={stage.name} className="step relative text-center">
              <span className="icon-circle relative bg-white">
                <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <p className="mt-4 text-[13px] font-bold text-primary">
                Step {index + 1}
              </p>
              <h3 className="heading-3 mt-1">{stage.name}</h3>
              <p className="mx-auto mt-2 max-w-[26ch] text-base">
                {stage.description}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
