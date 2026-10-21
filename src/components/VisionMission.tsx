import { Compass, Target } from "lucide-react";
import { visionStatement, missionStatement, disciplines } from "@/lib/content";

export function VisionMission() {
  return (
    <section id="vision" className="container section">
      <p className="eyebrow">Our direction</p>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div className="panel-mint p-7 sm:p-9">
          <span className="icon-circle active">
            <Compass size={24} strokeWidth={1.75} aria-hidden="true" />
          </span>
          <h2 className="heading-1 mt-6">A shared vision.</h2>
          <p className="lead mt-4 max-w-[42ch] text-ink">{visionStatement}</p>
        </div>
        <div className="tip-panel p-7 sm:p-9">
          <span className="icon-circle active">
            <Target size={24} strokeWidth={1.75} aria-hidden="true" />
          </span>
          <h2 className="heading-1 mt-6">A practical mission.</h2>
          <p className="lead mt-4 max-w-[42ch] text-ink">{missionStatement}</p>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="heading-3">Different disciplines. A common curiosity.</h3>
        <ul className="mt-5 flex flex-wrap gap-2">
          {disciplines.map((discipline) => (
            <li key={discipline} className="chip">
              {discipline}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
