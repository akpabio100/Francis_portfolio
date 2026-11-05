import { MARQUEE } from "../lib/data";

/** Endless scrolling strip of tech names. */
export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];

  return (
    <div className="marquee-track marquee-mask relative overflow-hidden border-y border-white/10 bg-blue-950/30 py-5 backdrop-blur">
      <div className="animate-marquee flex w-max items-center gap-12 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display text-xl font-semibold text-slate-300"
          >
            {item}
            <span className="h-2 w-2 rotate-45 bg-sky-400" />
          </span>
        ))}
      </div>
    </div>
  );
}
