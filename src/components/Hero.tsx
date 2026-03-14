import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { typewriterWords } from "@/data";
import { staggerContainer, letterAnimation } from "@/lib/animations";

const headlineText = "Hi, I'm Omar";

function GridBackground() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(199 89% 60%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          transform: `translate(${(mousePos.x - 0.5) * 10}px, ${(mousePos.y - 0.5) * 10}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute h-150 w-150 rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, hsl(199 89% 60% / 0.3), transparent 70%)",
          left: `${mousePos.x * 100}%`,
          top: `${mousePos.y * 100}%`,
          transform: "translate(-50%, -50%)",
          transition: "left 0.5s ease-out, top 0.5s ease-out",
        }}
      />
    </div>
  );
}

function FloatingCodeBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="hidden lg:block"
    >
      <div className="glass w-95 overflow-hidden rounded-xl">
        <div className="border-border flex items-center gap-2 border-b px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-red-500/70" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <div className="h-3 w-3 rounded-full bg-green-500/70" />
          <span className="text-muted-foreground ml-2 font-mono text-xs">
            developer.tsx
          </span>
        </div>
        <pre className="p-5 font-mono text-sm leading-relaxed">
          <code>
            <span className="text-secondary">const</span>{" "}
            <span className="text-primary">developer</span>{" "}
            <span className="text-muted-foreground">=</span> {"{\n"}
            {"  "}name<span className="text-muted-foreground">:</span>{" "}
            <span className="text-green-400">"Omar"</span>,{"\n"}
            {"  "}role<span className="text-muted-foreground">:</span>{" "}
            <span className="text-green-400">"Frontend Dev"</span>,{"\n"}
            {"  "}stack<span className="text-muted-foreground">:</span> [
            <span className="text-green-400">"React"</span>,{" "}
            <span className="text-green-400">"TS"</span>],{"\n"}
            {"  "}passion<span className="text-muted-foreground">:</span>{" "}
            <span className="text-green-400">"clean code"</span>
            {"\n"}
            {"}"};
          </code>
        </pre>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const typedText = useTypewriter(typewriterWords, 80, 50, 2000);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center pt-16"
    >
      <GridBackground />

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-12 px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-xl flex-1"
        >
          {/* Available badge */}
          <motion.div variants={letterAnimation} className="mb-6">
            <span className="border-border bg-card/50 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium">
              <span className="animate-pulse-glow h-2 w-2 rounded-full bg-green-400" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Headline with per-letter animation */}
          <motion.h1
            variants={letterAnimation}
            className="mb-4 text-4xl leading-tight font-bold sm:text-5xl md:text-6xl"
          >
            {headlineText.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.04 },
                  },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Typewriter */}
          <motion.div variants={letterAnimation} className="mb-8">
            <p className="text-muted-foreground text-xl font-light sm:text-2xl">
              {typedText}
              <span className="animate-blink text-primary">|</span>
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={letterAnimation}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px hsl(199 89% 60% / 0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary text-primary-foreground inline-flex cursor-pointer items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium"
            >
              View My Work <ExternalLink size={16} />
            </motion.a>
            {/* Currently Unavailable Add Later */}
            <motion.a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px hsl(235 77% 72% / 0.3)",
              }}
              whileTap={{ scale: 0.97 }}
              className="border-border text-foreground hover:border-primary/50 inline-flex cursor-pointer items-center gap-2 rounded-lg border px-6 py-3 text-sm font-medium transition-colors"
            >
              Download CV <Download size={16} />
            </motion.a>
          </motion.div>
        </motion.div>

        <FloatingCodeBlock />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
