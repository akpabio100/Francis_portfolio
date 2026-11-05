import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";
import { EASE } from "./Reveal";
import { START } from "../lib/data";

/** Intro screen that slides up like a curtain. */
export function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, START * 1000);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          className="keep-dark fixed inset-0 z-[100] grid place-items-center bg-ink"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.6, opacity: 0, rotate: -12 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="grad-brand grid h-24 w-24 place-items-center rounded-3xl font-display text-4xl font-bold text-white shadow-[0_0_60px_rgba(59,130,246,0.7)]"
            >
              AF
            </motion.div>
            <div className="h-[3px] w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="grad-brand h-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: START - 0.3, ease: "easeInOut" }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm uppercase tracking-[0.4em] text-slate-400"
            >
              Loading portfolio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Thin blue bar at the top that fills as you scroll. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="grad-brand fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left"
    />
  );
}

/** Soft blue light that follows the mouse (desktop only). */
export function CursorGlow() {
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 250);
      y.set(e.clientY - 250);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[500px] w-[500px] rounded-full bg-blue-500/15 blur-[110px] md:block"
    />
  );
}

/** Fixed background: grid, glowing blobs, and a fade. */
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="bg-grid absolute inset-0" />
      <div className="animate-blob absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-blue-600/30 blur-[130px]" />
      <div
        className="animate-blob absolute -right-40 top-1/3 h-[520px] w-[520px] rounded-full bg-sky-500/20 blur-[130px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="animate-blob absolute -bottom-48 left-1/4 h-[560px] w-[560px] rounded-full bg-indigo-600/25 blur-[140px]"
        style={{ animationDelay: "-12s" }}
      />
    </div>
  );
}
