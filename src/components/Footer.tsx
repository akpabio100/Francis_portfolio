import { PROFILE } from "../lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 text-sm text-slate-500 md:flex-row sm:px-8">
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} {PROFILE.name}. Built with React, TypeScript &amp;
          Tailwind CSS.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="chip !px-4 !py-1.5"
          >
            GitHub
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="chip !px-4 !py-1.5"
          >
            LinkedIn
          </a>
          <a
            href="#home"
            className="rounded-full border border-blue-400/30 px-4 py-1.5 font-medium text-sky-300 transition-colors hover:bg-blue-500/20 hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
