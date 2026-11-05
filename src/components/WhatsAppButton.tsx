import { motion } from "framer-motion";
import { PROFILE, START } from "../lib/data";
import { Chat } from "./Icons";

/** Floating "Chat on WhatsApp" button, bottom right. */
export default function WhatsAppButton() {
  const message = "Hi Francis, I found your portfolio and I'd like to talk.";
  const href = `https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: START + 1.5, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="keep-dark fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3.5 font-semibold text-white shadow-[0_12px_34px_-6px_rgba(37,211,102,0.7)]"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-white/60" />
        <Chat className="relative" width={22} height={22} />
      </span>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </motion.a>
  );
}
