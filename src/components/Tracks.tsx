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

/** The list: an index of what you learn — topic left, note right, a
 * quiet row-lift on hover. */
export function Tracks() {
  return (
    <section
      id="tracks"
      className="chapter bg-panel text-paper"
      data-chapter="tracks"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <Reveal>
          <h2 className="section-head h-head">What you learn.</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="ink-soft step-body max-w-md lg:pt-2 lg:text-right">
            Two self-paced tracks on DataCamp. Pick the one at your level.
          </p>
        </Reveal>
      </div>

      {tracks.map((track, ti) => (
        <div key={track.id} className={ti === 0 ? "mt-24" : "mt-20"}>
          <Reveal delay={0.05 * ti}>
            <div className="flex items-baseline justify-between gap-6">
              <h3 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                {track.label}
              </h3>
              <p className="text-fog step-small font-medium">
                {track.level}
              </p>
            </div>
            <p className="ink-soft mt-4 max-w-[52ch] step-body">
              {track.description}
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-x-16 gap-y-2 sm:grid-cols-2">
            {track.topics.map((topic, i) => (
              <Reveal key={topic} delay={0.04 * i}>
                <li className="-mx-3 flex items-start gap-5 rounded-lg px-3 py-4 transition-colors duration-200 hover:bg-white/[0.03]">
                  <span
                    aria-hidden
                    className="h-14 w-14 shrink-0 rounded-lg bg-ink p-2"
                  >
                    <TopicBullet topic={topic} />
                  </span>
                  <span>
                    <span className="block step-body font-semibold leading-tight">
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
        <div className="mt-24">
          <p className="ink-soft step-body">Members join from every course:</p>
          <p className="statement mt-6 max-w-[52ch]">
            {disciplines.join(" · ")}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
