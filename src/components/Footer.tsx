import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Mark } from "@/components/Mark";
import { navLinks, stages, CONTACT_EMAIL } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer border-t border-line">
      <div className="container pb-8 pt-16 sm:pt-20">
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_.75fr_.75fr_1.2fr]">
          <div>
            <Link
              href="/"
              aria-label="TuringAI Club home"
              className="inline-flex min-h-11 items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-forest">
                <Mark className="h-5 w-5 text-logo-lime" />
              </span>
              <span className="text-lg font-extrabold uppercase text-ink">
                Turing<span className="text-primary">AI</span>{" "}
                <span className="font-medium">Club</span>
              </span>
            </Link>
            <p className="mt-5 max-w-[25ch] text-[15px] leading-relaxed">
              Learn with curiosity.
              <br />
              Build with purpose.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <h2 className="eyebrow mb-3">Explore</h2>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link className="footer-link" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="The club year">
            <h2 className="eyebrow mb-3">The club year</h2>
            <ul>
              {stages.map((stage) => (
                <li key={stage.name}>
                  <Link className="footer-link" href="/learning/#how-it-works">
                    {stage.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="min-w-0">
            <h2 className="eyebrow mb-3">Let’s connect</h2>
            <a className="footer-link gap-2" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              CEDAT, Makerere University
              <br />
              Kampala, Uganda
            </p>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-line-strong pt-6 text-[13px] text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} TuringAI Club</p>
          <p>Learn. Collaborate. Build. Demonstrate.</p>
          <a
            href="#top"
            className="inline-flex min-h-6 items-center gap-2 hover:text-primary"
          >
            Back to top <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
