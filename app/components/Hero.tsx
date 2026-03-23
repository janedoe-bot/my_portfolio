"use client";

import { motion } from "framer-motion";

const services = ["Small Branding", "Web Design", "Graphic Design"];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 flex flex-col justify-center"
      >
        <p
          className="text-xs mb-3 tracking-widest uppercase"
          style={{ color: "#bbb", fontFamily: "var(--font-mono)" }}
        >
          Seoul, South Korea
        </p>
        <h1 className="text-[clamp(3rem,10vw,7.5rem)] font-semibold leading-[1] tracking-tight mb-6" style={{ color: "#1a1a1a" }}>
          Jane Doe
        </h1>
        <p className="text-[clamp(1rem,2.5vw,1.5rem)] font-light mb-10" style={{ color: "#888" }}>
          Graphic Designer
        </p>

        <div className="flex flex-wrap gap-3">
          {services.map((s) => (
            <span
              key={s}
              className="text-xs px-4 py-2 rounded-full border"
              style={{
                borderColor: "#e8c8e8",
                color: "#aaa",
                fontFamily: "var(--font-mono)",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex items-end justify-between"
      >
        <a
          href="#work"
          className="text-sm border-b pb-0.5 hover:opacity-50 transition-opacity"
          style={{ borderColor: "#1a1a1a", color: "#1a1a1a" }}
        >
          View Work ↓
        </a>
        <span
          className="text-xs"
          style={{ color: "#ccc", fontFamily: "var(--font-mono)" }}
        >
          © 2024
        </span>
      </motion.div>
    </section>
  );
}
