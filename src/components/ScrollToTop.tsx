import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  const strokeDashoffset = useTransform(
    progress,
    [0, 1],
    [CIRCUMFERENCE, 0]
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setVisible(v > 0.1);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center cursor-pointer"
          aria-label="Scroll to top"
        >
          {/* Track + progress ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 48 48"
          >
            <circle
              cx="24"
              cy="24"
              r={RADIUS}
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            <motion.circle
              cx="24"
              cy="24"
              r={RADIUS}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              style={{ strokeDashoffset }}
            />
          </svg>

          {/* Icon */}
          <span className="relative z-10 w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center">
            <ArrowUp size={16} className="text-primary" />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
