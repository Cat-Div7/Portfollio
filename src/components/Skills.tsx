import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { skillCategories } from "@/data";
import {
  Code2,
  FileCode,
  Braces,
  Paintbrush,
  FileText,
  Palette,
  Sparkles,
  GitBranch,
  Terminal,
  Package,
  Zap,
  Github,
  Server,
  Webhook,
  FlaskConical,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  FileCode,
  Braces,
  Paintbrush,
  FileText,
  Palette,
  Sparkles,
  GitBranch,
  Terminal,
  Package,
  Zap,
  Github,
  Server,
  Webhook,
  FlaskConical,
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center text-3xl font-bold"
        >
          Tech <span className="text-gradient">Stack</span>
        </motion.h2>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-muted-foreground mb-4 font-mono text-lg font-semibold">
                // {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <motion.div
                      key={skill.name}
                      variants={staggerItem}
                      whileHover={{
                        scale: 1.08,
                      }}
                      className="border-border bg-card hover:bg-muted inline-flex cursor-default items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
                    >
                      {Icon && <Icon size={16} className="text-primary" />}
                      {skill.name}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
