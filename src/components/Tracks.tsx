import Link from "next/link";
import { ArrowRight, Check, Code2, Rocket } from "lucide-react";
import { tracks, topicNotes } from "@/lib/content";

const trackIcons = { beginner: Code2, intermediate: Rocket };

export function Tracks({ preview = false }: { preview?: boolean }) {
  return (
    <section id="tracks" className="container section">
      <div className="panel-mint px-5 py-10 sm:px-10 sm:py-14">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Self-paced on DataCamp</p>
            <h2 className="heading-1 mt-3">
              {preview ? "Find your starting point." : "Two tracks. Room to grow."}
            </h2>
          </div>
          {preview ? (
            <Link href="/learning/" className="link-green">
              Compare tracks <ArrowRight aria-hidden="true" />
            </Link>
          ) : (
            <p className="max-w-[38ch]">
              Self-paced courses on DataCamp, matched to where you are.
            </p>
          )}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {tracks.map((track) => {
            const Icon = trackIcons[track.id];
            const header = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <span className="icon-circle active">
                    <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  {track.id === "beginner" ? (
                    <span className="badge-compare">No experience needed</span>
                  ) : (
                    <span className="badge-compare">Code-ready</span>
                  )}
                </div>
                <p className="eyebrow mt-6">{track.level}</p>
                <h3 className="mt-2 text-[28px] font-extrabold tracking-tight">
                  {track.label}
                </h3>
                <p className="mt-2 max-w-[44ch]">{track.description}</p>
              </>
            );

            return preview ? (
              <Link
                key={track.id}
                href={`/learning/#${track.id}`}
                className="tile p-6 sm:p-8"
              >
                {header}
                <div className="mt-6 flex flex-wrap gap-2">
                  {track.topics.slice(0, 4).map((topic) => (
                    <span key={topic} className="chip">
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex items-center justify-between border-t border-line pt-5">
                  <span className="text-[15px] font-bold text-primary">
                    See what you’ll learn
                  </span>
                  <span className="arrow-circle">
                    <ArrowRight size={18} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ) : (
              <article
                id={track.id}
                key={track.id}
                className="tile relative p-6 sm:p-8"
              >
                {track.id === "beginner" && (
                  <span className="ribbon-pill absolute -top-3 left-6">
                    Start here
                  </span>
                )}
                {header}
                <ul className="mt-6">
                  {track.topics.map((topic) => (
                    <li key={topic} className="check-row">
                      <Check
                        className="mt-0.5 text-primary"
                        size={18}
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                      <div>
                        <h4 className="text-base">{topic}</h4>
                        <p className="mt-0.5 text-[15px] text-muted">
                          {topicNotes[topic]}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
