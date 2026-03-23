"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const exhibitions = [
  { event: "Typojanchi, Mohm", work: "\"The Universe I live in\"", year: "2017" },
  { event: "Jeonju International Film Festival", work: "\"Boundary\"", year: "2017" },
  { event: "Typojanchi, A City without ( )", work: "\"Paper City\"", year: "2015" },
];

const press = [
  { title: "Logo Now", outlet: "Graphic Magazine", year: "2020" },
  { title: "Note of Youth", outlet: "Chosun Ilbo", year: "2018" },
  { title: "Craft+Design No. 033", outlet: "", year: "2018" },
];

const skills = [
  "Small Branding",
  "Web Design",
  "Graphic Design",
  "Type Design",
  "Print",
  "Package Design",
  "Brand Identity",
  "Signage",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between mb-16 pb-6"
        style={{ borderBottom: "1px solid #f0d8f0" }}
      >
        <h2 className="text-3xl font-semibold tracking-tight">About</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        {/* Left col */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-lg leading-relaxed mb-4" style={{ color: "#555" }}>
            Seoul-based graphic designer working across branding, web design, and typography.
          </p>
          <p className="leading-relaxed mb-12" style={{ color: "#888", fontSize: "0.95rem" }}>
            I create visual identities that carry a clear voice — from small studios to independent brands.
            My practice is rooted in careful attention to form, material, and context.
          </p>

          <div className="mb-10">
            <p
              className="text-xs uppercase tracking-widest mb-5"
              style={{ color: "#bbb", fontFamily: "var(--font-mono)" }}
            >
              Exhibitions
            </p>
            <div className="space-y-4">
              {exhibitions.map((ex) => (
                <div key={ex.work} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#1a1a1a" }}>{ex.work}</p>
                    <p className="text-sm" style={{ color: "#aaa" }}>{ex.event}</p>
                  </div>
                  <span
                    className="text-xs shrink-0 mt-0.5"
                    style={{ color: "#ccc", fontFamily: "var(--font-mono)" }}
                  >
                    {ex.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p
              className="text-xs uppercase tracking-widest mb-5"
              style={{ color: "#bbb", fontFamily: "var(--font-mono)" }}
            >
              Press
            </p>
            <div className="space-y-4">
              {press.map((p) => (
                <div key={p.title} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#1a1a1a" }}>{p.title}</p>
                    {p.outlet && <p className="text-sm" style={{ color: "#aaa" }}>{p.outlet}</p>}
                  </div>
                  <span
                    className="text-xs shrink-0 mt-0.5"
                    style={{ color: "#ccc", fontFamily: "var(--font-mono)" }}
                  >
                    {p.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right col */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p
            className="text-xs uppercase tracking-widest mb-5"
            style={{ color: "#bbb", fontFamily: "var(--font-mono)" }}
          >
            Services
          </p>
          <div className="flex flex-wrap gap-2 mb-12">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-sm px-4 py-2 rounded-full border cursor-default hover:opacity-70 transition-opacity"
                style={{ borderColor: "#e8c8e8", color: "#888" }}
              >
                {skill}
              </span>
            ))}
          </div>

          <div
            className="p-6 rounded-2xl"
            style={{ backgroundColor: "rgba(255,255,255,0.6)", border: "1px solid #f0d8f0" }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: "#bbb", fontFamily: "var(--font-mono)" }}
            >
              Based in
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
              Seoul, South Korea<br />
              Open to projects worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
