import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

/** Green editorial band that opens each inner page (DESIGN.md hero-band). */
export function PageBand({
  crumb,
  title,
  children,
}: {
  crumb: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="hero-band on-green">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container pb-14 pt-8 sm:pb-20">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <Link href="/">Home</Link>
          <ChevronRight size={13} aria-hidden="true" />
          <span aria-current="page">{crumb}</span>
        </nav>
        <h1 className="display-lg mt-8 max-w-[18ch]">{title}</h1>
        {children}
      </div>
    </header>
  );
}
