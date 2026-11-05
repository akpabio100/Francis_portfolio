import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EXPERIENCE } from "../lib/data";
import { Reveal, SectionTitle } from "./Reveal";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Experience"
          title="Where I've been building"
          subtitle="From learning and teaching web fundamentals to shipping Flutter apps at a software company."
        />

        <div ref={ref} className="relative pl-10 sm:pl-14">
          {/* Timeline track + animated fill */}
          <div className="absolute bottom-2 left-[11px] top-2 w-[2px] bg-white/10 sm:left-[19px]" />
          <motion.div
            style={{ height }}
            className="grad-brand absolute left-[11px] top-2 w-[2px] shadow-[0_0_14px_#38bdf8] sm:left-[19px]"
          />

          <div className="space-y-10">
            {EXPERIENCE.map((job, i) => (
              <Reveal key={job.role} delay={0.05} x={i % 2 ? 40 : -40} y={0}>
                <div className="relative">
                  {/* Dot */}
                  <span className="absolute -left-[39px] top-7 grid h-6 w-6 place-items-center rounded-full bg-ink ring-2 ring-sky-400 sm:-left-[47px]">
                    <span className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_12px_#38bdf8]" />
                  </span>

                  <div className="glass rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 sm:p-9">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-2xl font-semibold text-white">
                          {job.role}
                        </h3>
                        <p className="mt-1 text-sky-300">{job.org}</p>
                      </div>
                      <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-sky-200">
                        {job.date}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {job.points.map((p) => (
                        <li key={p} className="flex gap-3 leading-relaxed text-slate-400">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-sky-400" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
