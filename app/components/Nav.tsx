"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-sm border-b border-pink-100" : ""
      }`}
      style={{ backgroundColor: scrolled ? "rgba(255,243,254,0.88)" : "transparent" }}
    >
      <nav className="h-16 flex items-center justify-between" style={{ paddingLeft: "30px", paddingRight: "30px" }}>
        <a
          href="#"
          className="font-medium tracking-tight hover:opacity-50 transition-opacity"
          style={{ fontFamily: "var(--font-mono)", fontSize: "16px" }}
        >
          .☘︎ ݁˖ janedoejanes .☘︎ ݁˖
        </a>
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm hover:opacity-50 transition-opacity"
                style={{ color: "#888", fontFamily: "var(--font-mono)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
