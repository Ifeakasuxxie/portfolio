import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-ink min-h-[92vh] flex flex-col justify-center px-6 md:px-16 pt-28 pb-16"
    >
      <div className="flex flex-col-reverse md:flex-row items-center md:items-center gap-10 md:gap-16">
        <div className="flex-1 max-w-3xl">
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
            className="font-display text-mist text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.12]"
          >
            Hi, I'm Ishioma Ifeakachukwu Success.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted font-display text-lg md:text-2xl mt-3 font-medium"
          >
            Frontend Developer &amp; Computer Engineering Student.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted text-base md:text-lg mt-6 max-w-xl leading-relaxed"
          >
            I build modern websites and web applications that solve real
            problems for real businesses — restaurants, fashion brands, and
            service businesses, live and deployed, not tutorial clones.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 mt-9"
          >
            <a
              href="#work"
              className="bg-lime text-ink font-medium text-sm px-5 py-2.5 rounded-md hover:opacity-90 transition"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="border border-border-dark text-mist text-sm px-5 py-2.5 rounded-md hover:bg-ink-soft transition"
            >
              Hire me
            </a>
            <a
              href="/resume/Ishioma-Ifeakachukwu-Success-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-mist text-sm px-5 py-2.5 rounded-md flex items-center gap-2 hover:text-lime transition"
            >
              View resume
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative shrink-0"
        >
          <div className="absolute -inset-3 rounded-[28px] bg-lime/15 blur-2xl" />
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-[24px] overflow-hidden border border-border-dark">
            <img
              src={profile}
              alt="Ishioma Ifeakachukwu Success"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-3 -left-3 bg-lime text-ink text-[11px] font-mono px-2.5 py-1 rounded-md">
            open to work
          </div>
        </motion.div>
      </div>
    </section>
  );
}
