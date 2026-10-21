import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/content";

export function JoinCTA() {
  return (
    <section id="join" className="container pb-20 pt-4" aria-labelledby="join-heading">
      <div className="hero-band on-green rounded-[16px] px-6 py-12 sm:px-12 sm:py-16">
        <div className="hero-grid" aria-hidden="true" />
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-[620px]">
            <p className="eyebrow">Join TuringAI</p>
            <h2 id="join-heading" className="display-lg mt-4">
              Bring an idea. <span className="hl">Find your team.</span>
            </h2>
            <p className="lead mt-5 max-w-[48ch]">
              Whether you’re opening Python for the first time or ready to train
              a model, there’s a place for you here. Email us to get connected.
            </p>
            <ol className="mt-6 grid gap-2 text-[15px] text-white/90 sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-lime" aria-hidden="true" />
                1. Email the club
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="text-lime" aria-hidden="true" />
                2. Get the WhatsApp group link
              </li>
            </ol>
          </div>
          <div className="flex shrink-0 flex-col gap-3">
            <a
              className="button button-lime"
              href={`mailto:${CONTACT_EMAIL}?subject=Joining%20TuringAI%20Club`}
            >
              Write to the club <ArrowUpRight aria-hidden="true" />
            </a>
            <a
              className="button button-ghost"
              href={`mailto:${CONTACT_EMAIL}?subject=Question`}
            >
              Ask a question
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
