import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { socialLinks } from "@/data";
import { Copy, Check, Github, Linkedin, Send, Instagram } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24">
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(199 89% 60% / 0.06) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="mb-4 text-3xl font-bold sm:text-4xl"
        >
          Let's Build <span className="text-gradient">Something</span>
        </motion.h2>

        <motion.p variants={fadeInUp} className="text-muted-foreground mb-10">
          Open to frontend roles, internships, and collaborations
        </motion.p>

        <motion.button
          variants={staggerItem}
          onClick={copyEmail}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 30px hsl(199 89% 60% / 0.3)",
          }}
          whileTap={{ scale: 0.97 }}
          className="bg-card border-border text-foreground hover:border-primary/50 mx-auto inline-flex cursor-pointer items-center gap-3 rounded-xl border px-8 py-4 font-mono text-sm transition-colors"
        >
          {socialLinks.email}
          <motion.span
            key={copied ? "check" : "copy"}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-primary"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </motion.span>
        </motion.button>

        <motion.div
          variants={staggerItem}
          className="mt-8 flex justify-center gap-4"
        >
          <motion.a
            href={socialLinks.telegram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="border-border text-muted-foreground hover:text-primary hover:border-primary/40 cursor-pointer rounded-lg border p-3 transition-colors"
            aria-label="Telegram"
          >
            <Send size={20} />
          </motion.a>

          <motion.a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="border-border text-muted-foreground hover:text-primary hover:border-primary/40 cursor-pointer rounded-lg border p-3 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </motion.a>

          <motion.a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="border-border text-muted-foreground hover:text-primary hover:border-primary/40 cursor-pointer rounded-lg border p-3 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </motion.a>
          
          <motion.a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="border-border text-muted-foreground hover:text-primary hover:border-primary/40 cursor-pointer rounded-lg border p-3 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
