import { motion } from "framer-motion";
import { useState } from "react";
import { PROFILE } from "../lib/data";
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone } from "./Icons";
import { Magnetic } from "./Interactive";
import { Reveal } from "./Reveal";
import ContactForm from "./ContactForm";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const links = [
    { label: "GitHub", href: PROFILE.github },
    { label: "LinkedIn", href: PROFILE.linkedin },
  ];

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-blue-400/25 bg-gradient-to-br from-blue-700/40 via-blue-950/60 to-ink p-10 text-center sm:p-16">
            {/* Decorative glows */}
            <motion.div
              className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-sky-500/30 blur-[90px]"
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-indigo-500/30 blur-[100px]"
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="bg-grid absolute inset-0 opacity-30" />

            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
                Get in touch
              </span>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Let&apos;s build something <span className="text-gradient">great</span> together
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">
                I&apos;m open to Flutter roles and collaborations. Send me a message and I&apos;ll
                get back to you.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Magnetic>
                  <a href={`mailto:${PROFILE.email}`} className="btn-primary">
                    <Mail width={18} height={18} /> Email me
                  </a>
                </Magnetic>
                <Magnetic>
                  <button onClick={copyEmail} className="btn-ghost">
                    {copied ? <Check width={18} height={18} /> : <Copy width={18} height={18} />}
                    {copied ? "Copied!" : PROFILE.email}
                  </button>
                </Magnetic>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chip inline-flex items-center gap-1.5 !px-4 !py-2"
                  >
                    {l.label} <ArrowUpRight width={14} height={14} />
                  </a>
                ))}
                <a href={PROFILE.phoneHref} className="chip inline-flex items-center gap-1.5 !px-4 !py-2">
                  <Phone width={14} height={14} /> {PROFILE.phone}
                </a>
                <a
                  href={`https://wa.me/${PROFILE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip inline-flex items-center gap-1.5 !px-4 !py-2"
                >
                  WhatsApp: {PROFILE.phone2} <ArrowUpRight width={14} height={14} />
                </a>
                <a
                  href={PROFILE.cvFile}
                  download
                  className="chip inline-flex items-center gap-1.5 !px-4 !py-2"
                >
                  Download CV
                </a>
                <span className="chip inline-flex items-center gap-1.5 !px-4 !py-2">
                  <MapPin width={14} height={14} /> {PROFILE.location}
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
