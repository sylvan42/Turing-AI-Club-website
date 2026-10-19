"use client";

import { CONTACT_EMAIL } from "@/lib/content";

/** The close: the brand inverted (lime ground, ink text), one headline
 * echoing the hero, one sentence and one dark button on a shared baseline. */
export function JoinCTA() {
  const mailto = `mailto:${CONTACT_EMAIL}?subject=Joining%20TuringAI%20Club`;

  return (
    <section
      id="join"
      className="chapter !pb-[80px] bg-lime text-ink"
      data-chapter="join"
    >
      <h2 className="display">Start&nbsp;here.</h2>

      <div className="mt-16 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-xl step-body text-ink/80">
          Join a community of students learning AI, picking real problems and
          building together.{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Question`}
            className="font-bold text-ink underline underline-offset-4"
          >
            Questions welcome.
          </a>{" "}
          The WhatsApp group link is shared as soon as you write to us.
        </p>
        <a
          href={mailto}
          className="inline-flex shrink-0 items-center gap-3 bg-ink px-7 py-4 font-bold text-lime transition-transform duration-200 hover:-translate-y-0.5"
        >
          Write to the club
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
            <path
              d="M2 9h13M10 3l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
