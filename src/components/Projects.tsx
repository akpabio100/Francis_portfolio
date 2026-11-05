import { PROJECTS } from "../lib/data";
import type { Project } from "../lib/data";
import { ArrowUpRight, Code, Mobile, Shield } from "./Icons";
import { TiltCard } from "./Interactive";
import { Reveal, SectionTitle } from "./Reveal";

const KIND = {
  company: {
    cover: "from-blue-700 via-blue-600 to-indigo-700",
    Icon: Mobile,
  },
  academic: {
    cover: "from-sky-600 via-blue-600 to-blue-800",
    Icon: Shield,
  },
  live: {
    cover: "from-cyan-500 via-sky-600 to-blue-700",
    Icon: Code,
  },
} as const;

function Card({ p }: { p: Project }) {
  const { cover, Icon } = KIND[p.kind];

  return (
    <TiltCard className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition-colors duration-300 hover:border-sky-400/50">
      {/* Cover art */}
      <div className={`keep-dark relative h-40 overflow-hidden bg-gradient-to-br ${cover}`}>
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
        <div className="absolute inset-0 grid place-items-center text-white/90 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6">
          <Icon width={64} height={64} strokeWidth={1.2} />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-black/35 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {p.badge}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-xl font-semibold leading-snug text-white">{p.title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-slate-400">{p.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        {p.note && <p className="mt-5 text-sm italic text-slate-500">{p.note}</p>}

        {p.link && (
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-sky-300 transition-all hover:gap-3 hover:text-white"
          >
            {p.linkLabel} <ArrowUpRight width={18} height={18} />
          </a>
        )}
      </div>
    </TiltCard>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Projects"
          title="Things I've built"
          subtitle="Company work is kept confidential, with details and demos available on request."
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.1} className="h-full">
              <Card p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
