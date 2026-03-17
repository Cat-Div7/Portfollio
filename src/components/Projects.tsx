import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  cardHover,
} from "@/lib/animations";
import { projects, filterCategories } from "@/data";
import { Github, ExternalLink } from "lucide-react";
import type { ProjectCategory } from "@/types";

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category.includes(active));

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 text-center text-3xl font-bold"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        {/* Filter bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {filterCategories.map((cat) => {
            const isActive = active === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat}
                {isActive && (
                  <motion.span layoutId="filter-active" className="sr-only" />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Project grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                variants={staggerItem}
                whileHover={cardHover}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="group glass hover:border-primary/40 hover:glow-primary overflow-hidden rounded-xl transition-all duration-300"
              >
                {/* Browser frame */}
                <div className="border-border border-b">
                  <div className="flex items-center gap-2 px-4 py-2.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                    <span className="text-muted-foreground ml-2 font-mono text-[11px]">
                      {project.title.toLowerCase().replace(" ", "-")}.dev
                    </span>
                  </div>
                  <div className="from-card to-muted flex h-32 items-center justify-center bg-linear-to-br">
                    <span className="text-primary/20 font-mono text-4xl font-bold">
                      {project.title[0]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <div className="flex flex-wrap gap-1">
                      {project.category.map((cat) => (
                        <span
                          key={cat}
                          className="border-border text-muted-foreground rounded-full border px-2 py-0.5 font-mono text-[10px]"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="border-border text-muted-foreground bg-background/50 rounded-md border px-2.5 py-1 font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={18} />
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Visit ${project.title} live`}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
