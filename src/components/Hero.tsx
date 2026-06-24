import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-ink min-h-[90vh] flex flex-col justify-center px-6 md:px-16 pt-24 pb-16">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-lime font-mono text-sm mb-6"
      >
        ifeaka.dev
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-mist text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] max-w-3xl"
      >
        Building websites for businesses that don't have one yet.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="text-muted text-base md:text-lg mt-6 max-w-xl leading-relaxed"
      >
        Computer Engineering student shipping real, deployed client projects —
        restaurants, fashion brands, and service businesses, live in days.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex gap-3 mt-9"
      >
        <a
          href="#work"
          className="bg-lime text-ink font-medium text-sm px-5 py-2.5 rounded-md hover:opacity-90 transition"
        >
          View work
        </a>
        <a
          href="#contact"
          className="border border-border-dark text-mist text-sm px-5 py-2.5 rounded-md hover:bg-ink-soft transition"
        >
          Hire me
        </a>
      </motion.div>
    </section>
  );
}
