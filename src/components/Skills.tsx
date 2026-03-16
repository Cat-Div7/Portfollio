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
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
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
              <h3 className="text-lg font-semibold text-muted-foreground mb-4 font-mono">
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
                        backgroundColor: "hsl(213 30% 22%)",
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm font-medium cursor-default transition-colors"
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