import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
};

/** Fades and slides content in when it scrolls into view. */
export function Reveal({ children, delay = 0, y = 40, x = 0, className = "" }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

type TitleProps = { eyebrow: string; title: string; subtitle?: string };

export function SectionTitle({ eyebrow, title, subtitle }: TitleProps) {
  return (
    <div className="mb-14 max-w-2xl">
      <Reveal>
        <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
          <span className="h-px w-10 bg-sky-400" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
