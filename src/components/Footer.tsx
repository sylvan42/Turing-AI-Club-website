"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks, CONTACT_EMAIL, BASE } from "@/lib/content";
import { Mark } from "@/components/Mark";

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
    <p className="step-lead font-bold">
      Kampala · <span aria-label="local time">{time}</span>
    </p>
  );
}

/** The footer: one tile board, dark panels with lime for the invite. */
export function Footer() {
  const mailto = `mailto:${CONTACT_EMAIL}`;

  const tile =
    "flex flex-col justify-between p-6 min-h-[220px] rounded-[12px] bg-panel";

  return (
    <footer className="footer-board isolate bg-ink">
      <div className="grid gap-2 md:grid-cols-12">
        <div className={`${tile} md:col-span-4`}>
          <Mark className="h-9 w-9 self-start text-lime" />
          <p className="step-lead font-bold leading-tight">
            Learn. Collaborate. Build. Demonstrate.
          </p>
        </div>

        <nav aria-label="Footer" className={`${tile} md:col-span-3`}>
          <ul className="space-y-2 step-body font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-lime">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`${tile} md:col-span-2`}>
          <KampalaTime />
          <p className="ink-soft step-small">East Africa Time (UTC+3)</p>
        </div>

        <div className={`${tile} md:col-span-3`}>
          <p className="ink-soft step-small font-medium">
            One email reaches everyone:
          </p>
          <a
            href={mailto}
            className="step-body font-bold break-all hover:text-lime"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className={`${tile} !min-h-[320px] !bg-ink md:col-span-8`}>
          <Image
            src={`${BASE}/logo.png`}
            alt="TuringAI Club logo, taglined AI for transformation"
            width={320}
            height={95}
            className="h-auto w-64 self-center md:w-[420px]"
          />
          <p className="ink-soft step-small flex items-center gap-4">
            <Mark className="h-6 w-6 text-lime" />
            CEDAT · Makerere University · Kampala
          </p>
        </div>

        <a
          href={mailto}
          className={`${tile} !bg-lime text-ink md:col-span-4 hover:bg-[#d7fb63]`}
        >
          <p className="step-lead font-bold leading-tight">
            Join the
            <br />
            club this
            <br />
            year.
          </p>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            aria-hidden
            className="self-end"
          >
            <path
              d="M4 20h30M22 8l12 12-12 12"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}
