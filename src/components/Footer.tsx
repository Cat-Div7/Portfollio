import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border border-t px-6 py-8">
      <div className="text-muted-foreground mx-auto flex max-w-6xl items-center justify-center gap-2 text-sm">
        <span>Built by Omar · {year}</span>
        <motion.span
          whileHover={{ scale: 1.4 }}
          className="text-primary inline-flex cursor-default"
        >
          <Heart size={14} fill="currentColor" />
        </motion.span>
      </div>
    </footer>
  );
}
