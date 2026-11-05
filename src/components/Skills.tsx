import { SKILLS } from "../lib/data";
import { SKILL_ICONS } from "./Icons";
import { TiltCard } from "./Interactive";
import { Reveal, SectionTitle } from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Skills"
          title="The toolkit behind my apps"
          subtitle="Technologies I use day to day to design, build, secure, and test mobile apps."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, i) => {
            const Icon = SKILL_ICONS[group.icon];
            return (
              <Reveal key={group.title} delay={(i % 3) * 0.1}>
                <TiltCard className="glass h-full rounded-3xl p-7 transition-colors duration-300 hover:border-sky-400/40">
                  <div className="grad-brand keep-dark mb-5 grid h-12 w-12 place-items-center rounded-2xl text-white shadow-[0_10px_26px_-6px_rgba(37,99,235,0.8)]">
                    <Icon width={24} height={24} />
                  </div>
                  <h3 className="mb-4 font-display text-xl font-semibold text-white">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
