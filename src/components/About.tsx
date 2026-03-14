import { motion } from "framer-motion";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import { stats, terminalLines } from "@/data";
import { useCountUp } from "@/hooks/useCountUp";

function StatItem({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix: string;
}) {
  const isNumeric = !isNaN(Number(value));
  const { count, ref } = useCountUp(isNumeric ? Number(value) : 0, 1500);

  return (
    <div ref={ref} className="text-center">
      <div className="text-primary text-3xl font-bold">
        {isNumeric ? count : value}
        {suffix}
      </div>
      <div className="text-muted-foreground mt-1 text-sm">{label}</div>
    </div>
  );
}

function TerminalCard() {
  return (
    <motion.div
      variants={slideInRight}
      className="glass overflow-hidden rounded-xl"
    >
      <div className="border-border flex items-center gap-2 border-b px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500/70" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <div className="h-3 w-3 rounded-full bg-green-500/70" />
        <span className="text-muted-foreground ml-2 font-mono text-xs">
          terminal
        </span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed">
        {terminalLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={
              line.startsWith("$") ? "text-primary" : "text-foreground/80"
            }
          >
            {line || "\u00A0"}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center text-3xl font-bold"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid items-start gap-12 md:grid-cols-2"
        >
          {/* Left — bio + stats */}
          <motion.div variants={slideInLeft} className="space-y-6">
            <p className="text-foreground/80 leading-relaxed">
              I'm a frontend developer based in Egypt with a passion for
              building clean, performant, and accessible web experiences. I
              primarily work with React and TypeScript, and I'm currently
              expanding into full-stack development.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I love building CLI tools that solve real developer problems —
              currently working on{" "}
              <a
                href="https://github.com/Cat-Div7/muscle-config"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium"
              >
                muscle-config
              </a>
              , a scaffolding tool for React projects. When I'm not coding, I'm
              exploring open source, obsessing over developer experience, or
              fueling up on coffee.
            </p>

            <motion.div
              variants={staggerContainer}
              className="border-border flex justify-around border-t pt-6"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={staggerItem}>
                  <StatItem {...stat} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — terminal */}
          <TerminalCard />
        </motion.div>
      </div>
    </section>
  );
}
