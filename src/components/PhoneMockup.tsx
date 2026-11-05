import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { START } from "../lib/data";

const CHIPS = [
  { label: "Flutter", cls: "left-0 top-10 sm:-left-8" },
  { label: "Dart", cls: "right-0 top-36 sm:-right-8" },
  { label: "Riverpod", cls: "-left-2 bottom-44 sm:-left-12" },
  { label: "Firebase", cls: "bottom-16 right-0 sm:-right-6" },
  { label: "Hive", cls: "left-6 bottom-2 sm:left-2" },
];

const BARS = [38, 62, 46, 80, 55, 92, 68];

/** Decorative 3D phone that tilts with the mouse. Not a real app screenshot. */
export default function PhoneMockup() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-16, 16]), {
    stiffness: 70,
    damping: 14,
  });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), {
    stiffness: 70,
    damping: 14,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: START + 0.3, duration: 1 }}
      className="relative mx-auto flex h-[560px] w-full max-w-[440px] items-center justify-center [perspective:1200px]"
    >
      {/* Orbit rings */}
      <motion.div
        className="absolute h-[430px] w-[430px] rounded-full border border-blue-400/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_22px_#38bdf8]" />
      </motion.div>
      <motion.div
        className="absolute h-[330px] w-[330px] rounded-full border border-dashed border-sky-400/25"
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -bottom-1.5 left-1/2 h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_18px_#60a5fa]" />
      </motion.div>

      <div className="absolute h-72 w-72 rounded-full bg-blue-600/40 blur-[90px]" />

      {/* Phone */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="keep-dark relative h-[480px] w-[238px] rounded-[42px] border border-white/15 bg-gradient-to-b from-slate-600/50 to-slate-900 p-2.5 shadow-[0_45px_90px_-20px_rgba(37,99,235,0.75)]"
        >
          <div className="relative flex h-full flex-col gap-3 overflow-hidden rounded-[32px] bg-gradient-to-b from-[#0e2250] to-[#050d24] px-4 pb-4 pt-5">
            <div className="mx-auto h-1.5 w-16 rounded-full bg-white/20" />

            <div className="flex items-center justify-between">
              <div className="space-y-1.5">
                <div className="h-2 w-20 rounded bg-white/25" />
                <div className="h-2.5 w-28 rounded bg-white/45" />
              </div>
              <div className="grad-brand h-9 w-9 rounded-full" />
            </div>

            {/* Gradient card with shimmer */}
            <div className="grad-brand relative h-28 overflow-hidden rounded-2xl p-4">
              <div className="h-2 w-16 rounded bg-white/50" />
              <div className="mt-3 h-4 w-32 rounded bg-white/80" />
              <div className="mt-3 h-2 w-24 rounded bg-white/40" />
              <div className="animate-shimmer absolute inset-y-0 w-14 bg-white/30 blur-md" />
            </div>

            {/* Animated bars */}
            <div className="flex h-20 items-end justify-between gap-2 rounded-2xl bg-white/5 p-3">
              {BARS.map((h, i) => (
                <motion.div
                  key={i}
                  className="grad-brand w-full rounded-t"
                  initial={{ height: "20%" }}
                  animate={{ height: [`${h}%`, `${Math.max(25, 100 - h)}%`, `${h}%`] }}
                  transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </div>

            {/* List rows */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3"
                initial={{ opacity: 0.4 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.4 }}
              >
                <div className="h-9 w-9 rounded-xl bg-blue-500/30" />
                <div className="flex-1 space-y-1.5">
                  <div className="h-2 w-4/5 rounded bg-white/30" />
                  <div className="h-2 w-1/2 rounded bg-white/15" />
                </div>
              </motion.div>
            ))}

            <div className="mt-auto flex justify-around border-t border-white/10 pt-3">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-5 w-5 rounded-md ${i === 0 ? "bg-sky-400" : "bg-white/20"}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating tech chips */}
      {CHIPS.map((c, i) => (
        <motion.div
          key={c.label}
          className={`glass absolute rounded-full px-4 py-2 text-sm font-semibold text-sky-200 shadow-[0_12px_30px_-8px_rgba(37,99,235,0.6)] ${c.cls}`}
          animate={{ y: [0, i % 2 ? 12 : -12, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        >
          {c.label}
        </motion.div>
      ))}
    </motion.div>
  );
}
