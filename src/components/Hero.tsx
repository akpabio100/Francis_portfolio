import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { PROFILE, ROLES, START, STATS } from "../lib/data";
import { useTypewriter } from "../lib/useTypewriter";
import { ArrowRight, ChevronDown, Download } from "./Icons";
import { Counter, Magnetic } from "./Interactive";
import PhoneMockup from "./PhoneMockup";
import { EASE } from "./Reveal";

/** One line of the headline that slides up from behind a mask. */
function Line({ children, delay }: { children: ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className="block"
        initial={{ y: "115%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay: START + delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const text = useTypewriter(ROLES);

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: START + delay, duration: 0.8, ease: EASE },
  });

  return (
    <section id="home" className="relative flex min-h-screen items-center pb-16 pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.span
            {...fade(0)}
            className="glass inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm text-sky-200"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities · Home &amp; abroad
          </motion.span>

          <h1 className="mt-7 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            <Line delay={0.1}>Hi, I&apos;m</Line>
            <Line delay={0.22}>
              <span className="text-gradient">Francis</span>
            </Line>
          </h1>

          <motion.p
            {...fade(0.55)}
            className="mt-5 h-10 font-display text-2xl text-slate-300 sm:text-3xl"
          >
            I&apos;m a <span className="font-semibold text-sky-400">{text}</span>
            <span className="animate-caret ml-1 inline-block h-7 w-[3px] translate-y-1 bg-sky-400" />
          </motion.p>

          <motion.p {...fade(0.7)} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            I build smooth, cross-platform mobile apps for Android and iOS with Flutter and Dart,
            backed by clean state management, secure storage, and well-tested code.
          </motion.p>

          <motion.div {...fade(0.85)} className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a href="#projects" className="btn-primary">
                View my work <ArrowRight width={18} height={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn-ghost">
                Let&apos;s talk
              </a>
            </Magnetic>
            <Magnetic>
              <a href={PROFILE.cvFile} download className="btn-ghost">
                <Download width={18} height={18} /> Download CV
              </a>
            </Magnetic>
          </motion.div>

          <motion.dl
            {...fade(1)}
            className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-4xl font-bold text-white">
                  <Counter to={s.value} />
                </dt>
                <dd className="mt-1 text-sm leading-snug text-slate-400">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <PhoneMockup />
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: START + 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-sky-300 md:block"
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ChevronDown width={28} height={28} />
        </motion.span>
      </motion.a>
    </section>
  );
}
