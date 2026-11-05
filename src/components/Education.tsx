import { EDUCATION } from "../lib/data";
import { TiltCard } from "./Interactive";
import { Reveal, SectionTitle } from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle eyebrow="Education" title="Education & certification" />

        <div className="grid gap-7 md:grid-cols-2">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.12} className="h-full">
              <TiltCard className="glass h-full rounded-3xl p-8 transition-colors duration-300 hover:border-sky-400/40">
                <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-sky-200">
                  {e.date}
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-white">{e.title}</h3>
                <p className="mt-1 text-sky-300">{e.place}</p>
                <p className="mt-4 leading-relaxed text-slate-400">{e.text}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
