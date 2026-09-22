import { navLinks, CONTACT_EMAIL } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4">
          <img
            src="logo.png"
            alt="TuringAI Club — AI for transformation"
            width={200}
            height={40}
            className="h-10 w-auto"
          />
          <p className="label-mono text-faint">AI for transformation</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors duration-200 hover:text-lime"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-2 md:items-end">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-muted transition-colors duration-200 hover:text-lime"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="label-mono text-faint">
            CEDAT · Makerere University
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <p className="label-mono border-t border-line pt-6 text-faint">
          © {new Date().getFullYear()} TuringAI Club · Learn. Collaborate.
          Build. Demonstrate.
        </p>
      </div>
    </footer>
  );
}
