import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { socialLinks } from "@/data";
import { Copy, Check, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
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
        className="max-w-2xl mx-auto text-center relative z-10"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-bold mb-4"
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
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-card border border-border text-foreground font-mono text-sm hover:border-primary/50 transition-colors mx-auto cursor-pointer"
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
          className="flex justify-center gap-4 mt-8"
        >
          <motion.a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors cursor-pointer"
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
            className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors cursor-pointer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
