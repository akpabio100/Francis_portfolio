import { useState } from "react";
import type { FormEvent } from "react";
import { PROFILE } from "../lib/data";
import { ArrowUpRight, Check, Send } from "./Icons";

type Status = "idle" | "sending" | "success" | "error";
type Draft = { name: string; email: string; message: string };

const field =
  "w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-slate-500 outline-none transition focus:border-sky-400/70 focus:bg-blue-500/10 focus:shadow-[0_0_0_4px_rgba(56,189,248,0.12)]";

/**
 * Contact form that sends the message to your email from the page.
 * - Default: FormSubmit (free, no account). It does NOT work from localhost.
 *   On your live website, the FIRST message triggers an activation email to
 *   your inbox. Click "Activate" once, and every message after arrives normally.
 * - If you set formspreeId in data.ts, Formspree is used instead.
 * - If sending fails, the visitor gets one-tap WhatsApp and email fallbacks
 *   with their message already filled in, so a message is never lost.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [draft, setDraft] = useState<Draft>({ name: "", email: "", message: "" });

  // Which service sends the message: Web3Forms (recommended) > Formspree > FormSubmit
  const provider = PROFILE.web3formsKey
    ? "web3forms"
    : PROFILE.formspreeId
      ? "formspree"
      : "formsubmit";

  const endpoint =
    provider === "web3forms"
      ? "https://api.web3forms.com/submit"
      : provider === "formspree"
        ? `https://formspree.io/f/${PROFILE.formspreeId}`
        : `https://formsubmit.co/ajax/${PROFILE.email}`;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const values: Draft = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };
    setDraft(values);

    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(
          provider === "web3forms"
            ? {
                access_key: PROFILE.web3formsKey,
                subject: "New message from your portfolio website",
                from_name: "Portfolio website",
                ...values,
              }
            : {
                ...values,
                _subject: "New message from your portfolio website",
                _captcha: "false",
                _template: "table",
              }
        ),
      });

      let ok = res.ok;
      if (ok && provider === "web3forms") {
        const result = (await res.json()) as { success?: boolean };
        ok = Boolean(result.success);
      }

      if (ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const whatsappHref = `https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(
    `Hi Francis, I'm ${draft.name} (${draft.email}). ${draft.message}`
  )}`;
  const mailHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    `Portfolio message from ${draft.name}`
  )}&body=${encodeURIComponent(`${draft.message}\n\nFrom: ${draft.name} (${draft.email})`)}`;

  return (
    <form
      onSubmit={onSubmit}
      className="glass mx-auto max-w-3xl rounded-3xl p-7 text-left sm:p-10"
    >
      <h3 className="font-display text-2xl font-semibold text-white">Send me a message</h3>
      <p className="mt-1 text-slate-400">
        Tell me about your project or role. I&apos;ll reply soon.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" className={field} />
        <input name="email" type="email" required placeholder="Your email" className={field} />
      </div>
      <textarea
        name="message"
        required
        rows={5}
        placeholder="Your message"
        className={`${field} mt-5 resize-none`}
      />

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send message"}
          <Send width={18} height={18} />
        </button>

        {status === "success" && (
          <span className="inline-flex items-center gap-2 text-emerald-400">
            <Check width={18} height={18} /> Message sent. Thank you!
          </span>
        )}
      </div>

      {status === "error" && (
        <div className="mt-6 rounded-2xl border border-rose-400/30 bg-rose-500/10 p-5">
          <p className="text-rose-300">
            Couldn&apos;t send it from here right now. Your message is kept, so send it in one tap:
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-5 !py-2.5 text-sm">
              Send via WhatsApp <ArrowUpRight width={16} height={16} />
            </a>
            <a href={mailHref} className="btn-ghost !px-5 !py-2.5 text-sm">
              Send via email <ArrowUpRight width={16} height={16} />
            </a>
          </div>
        </div>
      )}
    </form>
  );
}
