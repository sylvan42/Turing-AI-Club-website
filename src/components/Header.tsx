"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Mark } from "@/components/Mark";
import { navLinks } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          menuButton.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className="container flex min-h-[72px] items-center justify-between gap-5">
        <Link
          href="/"
          className="flex min-h-11 shrink-0 items-center gap-2.5"
          aria-label="TuringAI Club home"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-forest">
            <Mark className="h-5 w-5 text-logo-lime" />
          </span>
          <span className="whitespace-nowrap text-[17px] font-extrabold uppercase tracking-[-.01em] text-ink">
            Turing<span className="text-primary">AI</span>{" "}
            <span className="font-medium">Club</span>
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-9 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              aria-current={
                pathname.replace(/\/$/, "") === link.href.replace(/\/$/, "")
                  ? "page"
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 sm:flex">
          <Link href="/learning/" className="button button-secondary hidden lg:inline-flex">
            Tracks
          </Link>
          <a href="#join" className="button">
            Join the club <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <button
          ref={menuButton}
          type="button"
          className="flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X size={23} aria-hidden="true" />
          ) : (
            <Menu size={23} aria-hidden="true" />
          )}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!open}
        className="border-t border-line md:!hidden"
      >
        <div className="container flex flex-col pb-5 pt-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link py-3"
              aria-current={
                pathname.replace(/\/$/, "") === link.href.replace(/\/$/, "")
                  ? "page"
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#join"
            className="link-green py-3"
            onClick={() => setOpen(false)}
          >
            Join the club <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}
