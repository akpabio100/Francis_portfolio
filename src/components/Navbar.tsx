import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NAV, PROFILE, START } from "../lib/data";
import { Close, Menu } from "./Icons";
import { EASE } from "./Reveal";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Scroll-spy: highlight the section that is in the middle of the screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  // Full-width bar glued to the very top: transparent at the top of the page,
  // solid with a blur once you scroll (or when the mobile menu is open).
  const solid = scrolled || open;

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: START, duration: 0.8, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "glass-bar shadow-[0_12px_40px_-18px_rgba(37,99,235,0.55)]"
          : "border-b border-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-500 sm:px-8 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a href="#home" className="font-display text-lg font-bold tracking-tight text-white">
          {PROFILE.short}
          <span className="text-sky-400">.</span>dev
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === n.id ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {active === n.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-blue-500/20 ring-1 ring-blue-400/40"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a href="#contact" className="btn-primary !px-5 !py-2 text-sm">
            Hire me
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full text-white"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 pb-4">
              {NAV.map((n, i) => (
                <motion.a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`block rounded-2xl px-4 py-3 font-medium ${
                    active === n.id ? "bg-blue-500/20 text-white" : "text-slate-300"
                  }`}
                >
                  {n.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
