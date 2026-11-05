import { PROFILE } from "../lib/data";
import { MapPin } from "./Icons";
import { TiltCard } from "./Interactive";
import { Reveal, SectionTitle } from "./Reveal";

const HIGHLIGHTS = [
  { title: "Clean code", text: "Readable, maintainable Flutter and Dart." },
  { title: "State management", text: "Provider and Riverpod for scalable apps." },
  { title: "Secure by design", text: "Secure storage and Firebase authentication." },
];

const DETAILS = [
  ["Role", PROFILE.title],
  ["Location", PROFILE.location],
  ["Focus", "Android & iOS apps"],
  ["Degree", "BSc Computer Science"],
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="About me"
          title="Software engineer turned Flutter developer"
        />

        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-lg leading-relaxed text-slate-400">
            <Reveal>
              <p>
                I&apos;m a Flutter Mobile App Developer with a BSc in Computer Science and a
                software engineering background in{" "}
                <span className="text-sky-300">JavaScript, Node.js, and REST API development</span>.
                That foundation helps me build mobile apps that connect cleanly to backend services.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                At Integrated Software Service Limited, I&apos;m building three cross-platform
                mobile applications for Android and iOS, including a savings (ajo) app and an
                educational payment app. I focus on organized state management, secure local
                storage, reliable authentication, and tested code.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                I care about clean, maintainable code and smooth user experiences, and I&apos;m
                always learning to build better mobile products.
              </p>
            </Reveal>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {HIGHLIGHTS.map((h, i) => (
                <Reveal key={h.title} delay={0.1 * i}>
                  <div className="glass h-full rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1">
                    <div className="grad-brand mb-3 h-1.5 w-10 rounded-full" />
                    <h3 className="font-display text-base font-semibold text-white">{h.title}</h3>
                    <p className="mt-1 text-sm leading-snug text-slate-400">{h.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15} x={40} y={0}>
            <TiltCard className="glass rounded-3xl p-8">
              <div className="mb-6 flex items-center gap-4">
                {PROFILE.photo ? (
                  <img
                    src={PROFILE.photo}
                    alt={PROFILE.name}
                    className="h-16 w-16 rounded-2xl object-cover shadow-[0_10px_30px_-6px_rgba(37,99,235,0.8)]"
                  />
                ) : (
                  <div className="grad-brand keep-dark grid h-16 w-16 place-items-center rounded-2xl font-display text-2xl font-bold text-white shadow-[0_10px_30px_-6px_rgba(37,99,235,0.8)]">
                    AF
                  </div>
                )}
                <div>
                  <p className="font-display text-xl font-semibold text-white">{PROFILE.name}</p>
                  <p className="flex items-center gap-1.5 text-sm text-slate-400">
                    <MapPin width={14} height={14} /> {PROFILE.location}
                  </p>
                </div>
              </div>
              <ul className="divide-y divide-white/10">
                {DETAILS.map(([k, v]) => (
                  <li key={k} className="flex justify-between gap-4 py-3 text-sm">
                    <span className="text-slate-400">{k}</span>
                    <span className="text-right font-medium text-white">{v}</span>
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
