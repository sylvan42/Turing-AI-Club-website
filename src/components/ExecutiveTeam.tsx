import { committee, patron } from "@/lib/content";

function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export function ExecutiveTeam() {
  return (
    <section id="team" className="container section">
      <div className="tip-panel flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
        <span className="avatar h-20! w-20! bg-primary! text-2xl! text-white!">
          {initials(patron.name)}
        </span>
        <div>
          <span className="ribbon-pill">
            Club patron
          </span>
          <h2 className="heading-1 mt-3">{patron.name}</h2>
          <p className="mt-1 text-ink">
            {patron.role}, TuringAI Club · CEDAT, Makerere University
          </p>
        </div>
      </div>

      <div className="mt-16 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">Student committee</p>
          <h2 className="heading-1 mt-3">The committee.</h2>
        </div>
        <p className="max-w-[40ch]">
          The students helping the club learn, connect, and build.
        </p>
      </div>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {committee.map((member) => (
          <li key={member.name} className="card flex items-center gap-4 p-5">
            <span className="avatar">{initials(member.name)}</span>
            <div className="min-w-0">
              <h3 className="text-base leading-snug">{member.name}</h3>
              <p className="mt-0.5 text-[15px] text-muted">{member.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
