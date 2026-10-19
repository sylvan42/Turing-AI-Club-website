"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks, stages, CONTACT_EMAIL, BASE } from "@/lib/content";

function KampalaTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Africa/Kampala",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return (
    <span aria-label="local time">{time}</span>
  );
}

/** The footer: an OpenAI-style sitemap — wordmark row, link columns,
 * one quiet bottom bar. No tile board. */
export function Footer() {
  const mailto = `mailto:${CONTACT_EMAIL}`;

  return (
    <footer className="chapter !pb-12 !pt-24 bg-ink">
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        {/* Wordmark */}
        <div className="md:col-span-5">
          <Image
            src={`${BASE}/logo.png`}
            alt="TuringAI Club logo, taglined AI for transformation"
            width={280}
            height={86}
            className="h-auto w-44 self-start"
          />
          <p className="step-lead mt-8 max-w-[16ch] font-semibold leading-tight">
            Learn. Collaborate. Build. Demonstrate.
          </p>
          <p className="ink-soft step-small mt-4">
            AI for transformation
          </p>
        </div>

        {/* Explore */}
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="step-small font-semibold">Explore</p>
          <ul className="mt-6 space-y-3 step-body font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-lime">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* The year */}
        <nav aria-label="The club year" className="md:col-span-2">
          <p className="step-small font-semibold">The year</p>
          <ul className="mt-6 space-y-3 step-body font-medium">
            {stages.map((stage) => (
              <li key={stage.name}>
                <a href="#how-it-works" className="transition-colors hover:text-lime">
                  {stage.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="md:col-span-2">
          <p className="step-small font-semibold">Contact</p>
          <a
            href={mailto}
            className="step-body mt-6 block w-fit font-semibold break-all text-lime underline decoration-lime decoration-2 underline-offset-4 transition-colors hover:text-paper"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="ink-soft step-small mt-4 max-w-[26ch]">
            One email reaches everyone. The WhatsApp link is shared when you
            write.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="ink-soft mt-24 flex flex-col gap-2 step-small sm:flex-row sm:items-center sm:justify-between">
        <p>
          CEDAT · Makerere University · Kampala ·{" "}
          <KampalaTime /> EAT (UTC+3)
        </p>
        <p>© {new Date().getFullYear()} TuringAI Club</p>
      </div>
    </footer>
  );
}
