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
  "Small Branding", "Web Design", "Graphic Design",
  "Type Design", "Print", "Package Design", "Brand Identity", "Signage",
];

const links = [
  { label: "Email", value: "jane.yk.doe@gmail.com", href: "mailto:jane.yk.doe@gmail.com" },
  { label: "Phone", value: "+82 10. 9439. 6830", href: "tel:+821094396830" },
  { label: "Instagram", value: "@janedoejanes", href: "https://instagram.com/janedoejanes" },
];

const mono = { fontFamily: "var(--font-mono)" };

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" style={{ paddingTop: "110px", paddingBottom: "110px", paddingLeft: "30px", paddingRight: "30px", borderTop: "1px solid #000" }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-[10px]"
        style={{ borderBottom: "1px solid #f0d8f0", paddingBottom: "24px" }}
      >
        <h2 className="text-3xl font-semibold" style={mono}>About</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        {/* Left col */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-sm leading-relaxed mb-4" style={{ ...mono, color: "#555" }}>
            Seoul-based graphic designer working across branding, web design, and typography.
          </p>
          <p className="text-sm leading-relaxed" style={{ ...mono, color: "#aaa", marginBottom: "100px" }}>
            I create visual identities that carry a clear voice — from small studios to independent brands.
            My practice is rooted in careful attention to form, material, and context.
          </p>

          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest mb-5" style={{ ...mono, color: "#ccc" }}>
              Exhibitions
            </p>
            <div className="space-y-5">
              {exhibitions.map((ex) => (
                <div key={ex.work} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm" style={{ ...mono, color: "#1a1a1a" }}>{ex.work}</p>
                    <p className="text-xs mt-0.5" style={{ ...mono, color: "#aaa" }}>{ex.event}</p>
                  </div>
                  <span className="text-xs shrink-0 mt-0.5" style={{ ...mono, color: "#ccc" }}>
                    {ex.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest mb-5" style={{ ...mono, color: "#ccc" }}>
              Press
            </p>
            <div className="space-y-5">
              {press.map((item) => (
                <div key={item.title} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm" style={{ ...mono, color: "#1a1a1a" }}>{item.title}</p>
                    {item.outlet && <p className="text-xs mt-0.5" style={{ ...mono, color: "#aaa" }}>{item.outlet}</p>}
                  </div>
                  <span className="text-xs shrink-0 mt-0.5" style={{ ...mono, color: "#ccc" }}>
                    {item.year}
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
          <p className="text-xs font-bold uppercase tracking-widest" style={{ ...mono, color: "#000", marginBottom: "8px" }}>
            Services
          </p>
          <div className="flex flex-wrap gap-2 mb-12">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs rounded-full cursor-default hover:opacity-70 transition-opacity"
                style={{ ...mono, background: "#fce8fc", color: "#c084c8", padding: "4px 8px" }}
              >
                {skill}
              </span>
            ))}
          </div>

          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ ...mono, color: "#000", marginTop: "20px" }}>
            Contact
          </p>
          <div>
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -8 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.07 }}
                className="flex items-center justify-between group"
                style={{ padding: "12px 0", borderBottom: "1px solid #f0d8f0" }}
              >
                <span className="text-xs group-hover:opacity-50 transition-opacity" style={{ ...mono, color: "#aaa" }}>
                  {link.label}
                </span>
                <span className="text-xs flex items-center gap-2 group-hover:opacity-50 transition-opacity" style={{ ...mono, color: "#1a1a1a" }}>
                  {link.value}
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"
                    className="opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 duration-200">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-24 pt-8 flex items-center justify-between"
        style={{ borderTop: "1px solid #f0d8f0" }}
      >
        <span className="text-xs" style={{ ...mono, color: "#ccc" }}>© 2026 Jane Doe</span>
        <span className="text-xs" style={{ ...mono, color: "#ccc" }}>Seoul, KR</span>
      </motion.footer>
    </section>
  );
}
