import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Moon, Sun } from "./Icons";

type Theme = "dark" | "light";

/** Reads the theme set by the inline script in index.html and keeps it saved. */
function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage can be blocked; the toggle still works for this visit */
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return { theme, toggle };
}

/** Round sun/moon button that switches between dark and light mode. */
export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
      className="glass grid h-10 w-10 cursor-pointer place-items-center overflow-hidden rounded-full text-sky-300 transition-colors hover:border-sky-400/60"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 16, rotate: -90, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: -16, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="grid place-items-center"
        >
          {theme === "dark" ? <Sun width={19} height={19} /> : <Moon width={19} height={19} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
