"use client";

import { tracks, topicNotes, disciplines } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

/* Small drawn bullets for the menu items (flat lime shapes, one language) */
function TopicBullet({ topic }: { topic: string }) {
  const lime = "var(--color-lime)";
  const s = {
    stroke: lime,
    strokeWidth: 6,
    fill: "none" as const,
    strokeLinecap: "round" as const,
  };
  let art: React.ReactNode;
  const label =
    topic === "Python"
      ? "PY"
      : topic === "Working with data"
        ? "data"
        : topic === "Charts"
          ? "charts"
          : topic === "Basic statistics"
            ? "stats"
            : topic === "First machine learning ideas"
              ? "mli"
              : topic === "Machine learning"
                ? "ml"
                : topic === "Text"
                  ? "text"
                  : topic === "Images"
                    ? "img"
                    : topic === "Prediction"
                      ? "pred"
                      : "fast";

  switch (label) {
    case "PY":
      art = (
        <path d="M45 30c-8 8-8 30 8 36M45 76c14 6 22-4 18-14" {...s} />
      ); // serpent line
      break;
    case "data":
      art = (
        <>
          <line x1="30" y1="34" x2="76" y2="34" {...s} />
          <line x1="53" y1="24" x2="53" y2="82" {...s} />
          <rect x="70" y="52" width="10" height="30" fill={lime} />
        </>
      );
      break;
    case "charts":
      art = (
        <>
          <rect x="28" y="50" width="12" height="34" fill={lime} />
          <rect x="46" y="38" width="12" height="46" fill={lime} />
          <rect x="64" y="26" width="12" height="58" fill={lime} />
        </>
      );
      break;
    case "stats":
    case "ml":
      art = (
        <path d="M24 78c10-40 12-50 16-44s8 44 14 40 10-30 14-30 10 34 25 34" {...s} />
      );
      break;
    case "mli":
    case "pred":
      art = (
        <>
          <circle cx="30" cy="36" r="5" fill={lime} />
          <circle cx="76" cy="42" r="5" fill={lime} />
          <circle cx="52" cy="76" r="5" fill={lime} />
          <line x1="32" y1="38" x2="74" y2="41" {...s} />
          <line x1="32" y1="38" x2="51" y2="73" {...s} />
          <line x1="74" y1="44" x2="53" y2="72" {...s} />
        </>
      );
      break;
    case "text":
      art = (
        <>
          <line x1="28" y1="32" x2="78" y2="32" {...s} />
          <line x1="28" y1="50" x2="72" y2="50" {...s} />
          <line x1="28" y1="68" x2="62" y2="68" {...s} />
        </>
      );
      break;
    case "img":
      art = (
        <>
          <rect x="28" y="30" width="24" height="24" {...s} />
          <rect x="54" y="44" width="24" height="24" {...s} />
          <rect x="38" y="56" width="24" height="24" {...s} />
        </>
      );
      break;
    default:
      art = <path d="M50 22 30 56h16l-6 28 26-38H48l8-24Z" fill={lime} />;
  }

  return (
    <svg viewBox="0 0 106 106" aria-hidden className="h-full w-full">
      {art}
    </svg>
  );
}

/** The list: a menu of what you learn with drawn bullets. */
export function Tracks() {
  return (
    <section
      id="tracks"
      className="chapter bg-panel text-paper"
      data-chapter="tracks"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-baseline lg:justify-between">
        <Reveal>
          <h2 className="step-head h-head">What you learn.</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="ink-soft step-body max-w-md lg:text-right">
            Two self-paced tracks on DataCamp. Pick the one at your level.
          </p>
        </Reveal>
      </div>

      {tracks.map((track, ti) => (
        <div key={track.id} className="mt-24">
          <Reveal delay={0.05 * ti}>
            <div className="flex items-baseline justify-between">
              <h3 className="h-head step-head uppercase leading-none">
                {track.label}
              </h3>
              <p className="step-small font-medium">{track.level}</p>
            </div>
            <p className="ink-soft mt-4 max-w-[52ch] step-body">
              {track.description}
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-x-16 gap-y-9 sm:grid-cols-2">
            {track.topics.map((topic, i) => (
              <Reveal key={topic} delay={0.04 * i}>
                <li className="flex items-start gap-5">
                  <span
                    aria-hidden
                    className="h-16 w-16 shrink-0 rounded-[12px] bg-ink p-2"
                  >
                    <TopicBullet topic={topic} />
                  </span>
                  <span>
                    <span className="block step-body font-bold leading-tight">
                      {topic}
                    </span>
                    <span className="ink-soft mt-1 block max-w-[38ch] step-small leading-snug">
                      {topicNotes[topic]}
                    </span>
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      ))}

      <Reveal delay={0.1}>
        <div className="mt-20">
          <p className="step-body font-bold">Members join from every course:</p>
          <p className="ink-soft mt-3 font-medium leading-snug statement">
            {disciplines.join(" · ")}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
