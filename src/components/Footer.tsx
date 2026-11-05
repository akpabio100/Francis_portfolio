import { PROFILE } from "../lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-slate-500 sm:flex-row sm:px-8">
        <p>
          &copy; {new Date().getFullYear()} {PROFILE.name}. Built with React, TypeScript &amp;
          Tailwind CSS.
        </p>
        <a
          href="#home"
          className="rounded-full border border-blue-400/30 px-4 py-2 font-medium text-sky-300 transition-colors hover:bg-blue-500/20 hover:text-white"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
