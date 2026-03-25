"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const CLOUD = "https://res.cloudinary.com/do9avzucm/image/upload";

function p(folder: string, file: string) {
  const f = folder.trim().replace(/&/g, "and");
  const name = file.replace(/\.[^.]+$/, "");
  return `${CLOUD}/portfolio/${encodeURIComponent(f)}/${encodeURIComponent(name)}`;
}

// folder "18. " has trailing space → mapped to "18"
function p18(file: string) {
  const name = file.replace(/\.[^.]+$/, "");
  return `${CLOUD}/portfolio/18/${encodeURIComponent(name)}`;
}

const projects = [
  {
    id: "01", title: "Filmographs font", tags: ["Type Design", "Typography"],
    desc: "A display typeface inspired by the visual language of film credits and motion picture typography.",
    images: ["Web-1.png","Web-2.png","Web-3.png","Web-4.png","Web-5.png","Web-7.png","Web-9.png","Web-10.png"].map(f => p("01. Filmographs font", f)),
  },
  {
    id: "02", title: "mureung", tags: ["Branding", "Print", "Package"],
    desc: "Brand identity and packaging design for a tea label rooted in natural materials and Korean craft tradition.",
    images: [
      p("02. mureung", "DSC02697.jpg"),
      p("02. mureung", "DSC02702.jpg"),
      p("02. mureung", "DSC02716.jpg"),
      p("02. mureung", "DSC02728.jpg"),
      p("02. mureung", "DSC02735.jpg"),
      p("02. mureung", "DSC02739.jpg"),
      p("02. mureung", "-2024-02-19--6.54.09.png"),
      p("02. mureung", "-2024-02-19--6.56.13.png"),
      p("02. mureung", "-2025-04-24--6.14.30.png"),
      p("02. mureung", "screenshot1.png"),
      p("02. mureung", "screenshot2.png"),
      p("02. mureung", "screenshot3.png"),
      p("02. mureung", "instagram-1.jpg"),
    ],
  },
  {
    id: "03", title: "ttaa", tags: ["Brand Identity", "Label Design"],
    desc: "Identity and label design for an independent textile brand exploring quiet, tactile aesthetics.",
    images: [
      p("03. ttaa", "43434.png"),
      p("03. ttaa", "IMG_79302313dasdas.png"),
      p("03. ttaa", "-2023-10-13--3.42.45.png"),
      p("03. ttaa", "IMG_9957-.jpg"),
    ],
  },
  {
    id: "04", title: "Vase Around", tags: ["Branding", "Business Card"],
    desc: "Branding for a ceramic studio that celebrates the everyday object — restrained, warm, and considered.",
    images: [
      p("04. Vase Around", "-1--133x.png"),
      p("04. Vase Around", "-1--153x.png"),
      p("04. Vase Around", "KakaoTalk_Photo_2022-04-20-12-41-50-3.jpeg"),
      p("04. Vase Around", "KakaoTalk_Photo_2022-04-20-12-41-50-4.jpeg"),
    ],
  },
  {
    id: "05", title: "Picasso Love", tags: ["Graphic Design"],
    desc: "A graphic work exploring the relationship between love and abstraction through Picasso's visual lexicon.",
    images: [
      p("05. Picasso Love", "-1--53x-100-1.jpg"),
      p("05. Picasso Love", "000019.jpg"),
    ],
  },
  {
    id: "06", title: "Eve", tags: ["Graphic Design", "Type Design"],
    desc: "Visual work examining the mythological figure of Eve — femininity, origin, and the gaze.",
    images: [
      p("06. Eve", "1.png"),
      p("06. Eve", "IMG_40712png.png"),
      p("06. Eve", "IMG_40713-.png"),
    ],
  },
  {
    id: "07", title: "Gwilee", tags: ["Branding"],
    desc: "Web design for an independent brand — clean layout with careful attention to typography and white space.",
    images: ["Frame 1.png","Frame 2.png","Frame 3.png","Frame 4.png","Frame 5.png","Frame 6.png"].map(f => p("07. Gwilee", f)),
  },
  {
    id: "08", title: "VART", tags: ["UX Design"],
    desc: "Graphic design for a visual arts platform, balancing editorial clarity with expressive form.",
    images: [
      p("08. VART", "---7 (1).png"),
      p("08. VART", "---8.png"),
      p("08. VART", "---9 (1).png"),
      p("08. VART", "---10.png"),
    ],
  },
  {
    id: "09", title: "Wearing", tags: ["Graphic Design", "Poster Design", "Leaflet Design"],
    desc: "Poster and leaflet design for a fashion exhibition exploring the body as a site of expression.",
    images: [
      p("09. Wearing", "poster.png"),
      p("09. Wearing", "leaflet.png"),
      p("09. Wearing", "leaflet2.png"),
    ],
  },
  {
    id: "10", title: "Mapping the City", tags: ["Graphic Design"],
    desc: "A graphic interpretation of urban space — overlaying personal memory onto the structure of the city.",
    images: [p("10. Mapping the City", "mapping the city2.png")],
  },
  {
    id: "11", title: "Take", tags: ["Branding", "Business Card"],
    desc: "A series of graphic works exploring the act of taking — possession, image-making, and appropriation.",
    images: [
      p("11. Take", "IMG_6431.jpeg"),
      p("11. Take", "6E508161-F866-40C1-B10B-6EF9E8090E50.jpeg"),
      p("11. Take", "B9169A2F-378A-4B43-B68D-91D3296D6BEE.jpeg"),
    ],
  },
  {
    id: "12", title: "Time Travel Post Cards", tags: ["Print", "Graphic Design"],
    desc: "A set of printed postcards designed as objects of time — each card holds a different moment, real or imagined.",
    images: [
      p("12. Time Travel Post Cards", "DSC01672.jpeg"),
      p("12. Time Travel Post Cards", "DSC01725.png"),
      p("12. Time Travel Post Cards", "DSC01745.png"),
      p("12. Time Travel Post Cards", "DSC01747.png"),
      p("12. Time Travel Post Cards", "DSC01823_web.jpg"),
    ],
  },
  {
    id: "13", title: "prectxe", tags: ["Graphic Design", "Print"],
    desc: "Full visual identity for an independent creative practice — mark, system, and application across media.",
    images: ["_.png","_ 복사본.png","__2.png","__3.png","__4.png","__5.png","__6.png","__7.png","__9.png","__10.png","-2019-11-15--1.42.41.png"].map(f => p("13. prectxe", f)),
  },
  {
    id: "14", title: "SeaSandSalt", tags: ["Branding"],
    desc: "Brand identity for a coastal lifestyle label — textures of sea, sand, and salt translated into visual language.",
    images: [
      p("14. SeaSandSalt", "-2023-08-01--3.07.13.png"),
      p("14. SeaSandSalt", "-2023-08-01--3.09.16.png"),
      p("14. SeaSandSalt", "-2023-08-01--3.10.58.png"),
      p("14. SeaSandSalt", "-2023-08-01--3.14.55.png"),
      p("14. SeaSandSalt", "KakaoTalk_Photo_2023-08-28-21-12-25-008.jpeg"),
      p("14. SeaSandSalt", "KakaoTalk_Photo_2023-08-28-21-12-27-016.jpeg"),
    ],
  },
  {
    id: "15", title: "unfold", tags: ["Graphic Design"],
    desc: "A graphic project that unfolds in layers — form revealing form, meaning arriving slowly.",
    images: [
      p("15. unfold", "_1.jpg"),
      p("15. unfold", "_5.jpg"),
      p("15. unfold", "_6.jpg"),
      p("15. unfold", "insta_unfold_3.png"),
    ],
  },
  {
    id: "16", title: "B39 Visitor Guide", tags: ["Editorial", "Print"],
    desc: "Visitor guide for B39, a cultural space in Bucheon — editorial design that navigates space through print.",
    images: [
      p("16. B39 Visitor Guide", "DSC00486-.jpeg"),
      p("16. B39 Visitor Guide", "DSC00502_small (1).jpg"),
      p("16. B39 Visitor Guide", "DSC00507-.jpeg"),
      p("16. B39 Visitor Guide", "-2019-02-24--11.20.24.png"),
      p("16. B39 Visitor Guide", "-2019-02-24--12.00.48.png"),
    ],
  },
  {
    id: "17", title: "boundary", tags: ["Exhibition", "Graphic Design"],
    desc: "An installation shown at Jeonju International Film Festival — exploring the boundary between image and space.",
    images: [
      p("17. boundary", "_1.jpg"),
      p("17. boundary", "_3.jpg"),
      p("17. boundary", "_4.png"),
      p("17. boundary", "_5.png"),
    ],
  },
  {
    id: "18", title: "Frameground", tags: ["Branding"],
    desc: "Identity for a photography and moving image studio — a mark built around framing and negative space.",
    images: [
      p18("IMG_5376.jpeg"),
      p18("IMG_5393.jpeg"),
      p18("KakaoTalk_Photo_2020-12-11-13-40-34.jpeg"),
    ],
  },
  {
    id: "19", title: "Flow & Bloom", tags: ["Print", "Graphic Design"],
    desc: "Branding for a floral studio — organic forms, soft color, and the quiet poetry of flowers in print.",
    images: [
      p("19. Flow&Bloom", "DSC01335.jpeg"),
      p("19. Flow&Bloom", "-2019-02-24--11.20.36.png"),
      p("19. Flow&Bloom", "20190226_111230.jpg"),
      p("19. Flow&Bloom", "KakaoTalk_Photo_2019-11-15-13-36-02.jpeg"),
    ],
  },
  {
    id: "20", title: "filmographs", tags: ["Type Design", "Package"],
    desc: "Early research and development work for the Filmographs typeface — sketches, spacing, and structure.",
    images: [
      p("20. filmographs", "filmograph3.png"),
      p("20. filmographs", "-1--2.png"),
      p("20. filmographs", "-1--3.png"),
      p("20. filmographs", "_7.jpeg"),
    ],
  },
  {
    id: "21", title: "Hammers", tags: ["Graphic Design"],
    desc: "Graphic work built around the symbolic weight of the hammer — labor, construction, and the poetic tool.",
    images: [
      p("21. Hammers", "-42x.png"),
      p("21. Hammers", "-52x.png"),
      p("21. Hammers", "-62x.png"),
      p("21. Hammers", "-72x.png"),
      p("21. Hammers", "-2023-03-17--5.19.09-.png"),
    ],
  },
  {
    id: "22", title: "innehome", tags: ["Branding"],
    desc: "Web design for a home interior brand — minimal interface with a focus on material and atmosphere.",
    images: [
      p("22. innehome", "innehome3.png"),
      p("22. innehome", "innehome4.png"),
      p("22. innehome", "innehome6.png"),
      p("22. innehome", "_8.png"),
      p("22. innehome", "_10.png"),
    ],
  },
  {
    id: "23", title: "Mimosa Salon", tags: ["Branding"],
    desc: "Brand identity for an independent hair salon — feminine, botanical, and quietly confident.",
    images: [
      p("23. Mimosa Salon", "IMG_1445.jpeg"),
      p("23. Mimosa Salon", "KakaoTalk_Photo_2019-02-24-13-53-36.png"),
      p("23. Mimosa Salon", "_8.jpg"),
    ],
  },
  {
    id: "24", title: "moonsturck", tags: ["Lettering"],
    desc: "A graphic piece drawn from the state of being moonstruck — enchanted, off-balance, luminous.",
    images: [p("24. moonsturck", "moonsturck-1.png")],
  },
  {
    id: "25", title: "note of youth", tags: ["Graphic Design", "Exhibition"],
    desc: "A publication documenting the voices of young creators — featured in Chosun Ilbo, 2018.",
    images: [p("25. note of youth", "_2.jpeg")],
  },
  {
    id: "26", title: "Origin of Originality", tags: ["Web Design", "Exhibition"],
    desc: "A graphic exploration of originality itself — what it means to make something new from what already exists.",
    images: [
      p("26. Origin of Originality", "-2022-03-11--7.21.17.png"),
      p("26. Origin of Originality", "-2022-03-11--7.21.34.png"),
      p("26. Origin of Originality", "-2022-03-11--7.22.46.png"),
      p("26. Origin of Originality", "-2022-03-11--7.23.00.png"),
    ],
  },
  {
    id: "27", title: "outlines", tags: ["Graphic Design"],
    desc: "A study in outline and contour — form stripped to its essential edge, shape without fill.",
    images: [
      p("27. outlines", "_2.png"),
      p("27. outlines", "-2019-07-13--8.20.37.png"),
    ],
  },
  {
    id: "28", title: "Biff Forum", tags: ["Print", "Editorial"],
    desc: "Print design for the BIFF Forum program at Busan International Film Festival — editorial and promotional materials.",
    images: Array.from({length: 7}, (_, i) => p("28. Biff Forum", `biff-forum-${i+1}.png`)),
  },
  {
    id: "29", title: "alina", tags: ["Branding"],
    desc: "Brand identity for a small personal label — mark and visual system built around simplicity and care.",
    images: [p("29. alina", "alina111.png"), p("29. alina", "alina112.png")],
  },
  {
    id: "30", title: "B39 spacebook", tags: ["Editorial", "Print"],
    desc: "A printed spacebook documenting B39 — an industrial heritage site turned cultural venue in Bucheon.",
    images: ["0","2","3","4","5","6","7","8","9","10","11","12"].map(f => p("30. B39 spacebook", `${f}.png`)).concat([p("30. B39 spacebook", "DSC00502_small.jpg")]),
  },
  {
    id: "31", title: "mimesis of mimesis", tags: ["Editorial"],
    desc: "A layered graphic work on imitation and repetition — copying the copy, tracing the trace.",
    images: ["_2","_3","_4","_5","_7"].map(f => p("31. mimesis of mimesis", `${f}.png`)),
  },
  {
    id: "32", title: "graduation", tags: ["Exhibition", "Book Design"],
    desc: "Graduation exhibition — a culminating body of work presented as an installation in the university gallery.",
    images: ["JWCH5884_1181.JPG.jpg","JWCH5885_1181.JPG.jpg","JWCH5886_1250.JPG.jpg","JWCH5888_1181.JPG.jpg","JWCH5891_1181.JPG.jpg","JWCH5892_1181.JPG.jpg","JWCH5895_1181.JPG.jpg","JWCH5897_1181.JPG.jpg","JWCH5898_1181.JPG.jpg"].map(f => p("32. graduation", f)),
  },
  {
    id: "33", title: "bigriver", tags: ["Graphic Design", "Exhibition"],
    desc: "A graphic series inspired by the river as metaphor — flow, sediment, and the passage of time.",
    images: ["_2","_3","_4","_5","_6"].map(f => p("33. bigriver", `${f}.jpeg`)),
  },
  {
    id: "34", title: "Walus Film", tags: ["Envelope Design"],
    desc: "Visual identity and graphic materials for an independent film production company.",
    images: [
      p("34. Walus Film", "KakaoTalk_Photo_2023-09-12-19-17-59-007.jpeg"),
      p("34. Walus Film", "KakaoTalk_Photo_2023-09-12-19-17-59-009.jpeg"),
    ],
  },
  {
    id: "35", title: "PILE", tags: ["Branding"],
    desc: "Graphic work built through accumulation — layers piling into texture, density becoming image.",
    images: [p("35. PILE", "pile1.png"), p("35. PILE", "pile2.png")],
  },
  {
    id: "36", title: "interferences", tags: ["Graphic Design"],
    desc: "A visual study of interference patterns — signal noise, overlap, and the beauty of disruption.",
    images: [p("36. interferences", "02.png"), p("36. interferences", "022.png")],
  },
  {
    id: "37", title: "Pilm", tags: ["Editorial"],
    desc: "Web design for Pilm, an independent film platform — cinematic interface with a focus on atmosphere.",
    images: [
      p("37. Pilm", "pilm_1.png"),
      p("37. Pilm", "pilm_2.png"),
      p("37. Pilm", "pilm_3.png"),
      p("37. Pilm", "pilm_4.png"),
      p("37. Pilm", "pilm_5.png"),
      p("37. Pilm", "pilm_6.png"),
      p("37. Pilm", "pilm_ipad-1.gif"),
      p("37. Pilm", "pilm_10.png"),
      p("37. Pilm", "pilm_11.jpg"),
    ],
  },
];

function Lightbox({ images, startIndex, onClose }: { images: string[]; startIndex: number; onClose: () => void }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = () => setCurrent(i => (i - 1 + images.length) % images.length);
  const next = () => setCurrent(i => (i + 1) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.85)" }}
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full mx-6" onClick={e => e.stopPropagation()}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={images[current]}
            alt=""
            width={0}
            height={0}
            className="w-full h-auto rounded-2xl"
            sizes="100vw"
            unoptimized
          />
        </motion.div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:opacity-70 transition-opacity"
          style={{ background: "rgba(255,255,255,0.15)", color: "#fff", fontFamily: "var(--font-mono)", fontSize: "16px" }}
        >
          ✕
        </button>

        {/* Prev / Next */}
        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full hover:opacity-70 transition-opacity" style={{ background: "rgba(255,255,255,0.2)", color: "#fff", fontSize: "20px", fontWeight: 300 }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full hover:opacity-70 transition-opacity" style={{ background: "rgba(255,255,255,0.2)", color: "#fff", fontSize: "20px", fontWeight: 300 }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </>
        )}

        {/* Counter */}
        {images.length > 1 && (
          <p className="text-center mt-3 text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-mono)" }}>
            {current + 1} / {images.length}
          </p>
        )}
      </div>
    </motion.div>
  );
}

function Gallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <div style={{ marginBottom: "14px" }}>
        <div
          style={{ borderRadius: "36px", background: "#f5eef5", marginBottom: "8px", overflow: "hidden", cursor: "zoom-in" }}
          onClick={() => setLightbox(true)}
        >
          <Image
            src={images[active]}
            alt=""
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-auto transition-opacity duration-300"
            unoptimized
          />
        </div>
        {images.length > 1 && (
          <div className="flex gap-1.5 flex-wrap">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative w-10 h-10 rounded-md overflow-hidden transition-all duration-200 ${
                  i === active ? "ring-2 ring-pink-300 opacity-100" : "opacity-35 hover:opacity-60"
                }`}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="40px" unoptimized />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightbox && (
        <Lightbox images={images} startIndex={active} onClose={() => setLightbox(false)} />
      )}
    </>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
      <Gallery images={project.images} />
      <h3 className="text-base font-semibold" style={{ color: "#1a1a1a", fontFamily: "var(--font-mono)", marginBottom: "6px" }}>
        {project.title}
      </h3>
      {project.desc && (
        <p className="text-xs leading-relaxed" style={{ color: "#777", fontFamily: "var(--font-mono)", marginBottom: "12px" }}>
          {project.desc}
        </p>
      )}
      {"tags" in project && (project as {tags: string[]}).tags && (
        <div className="flex flex-wrap gap-1.5">
          {(project as {tags: string[]}).tags.map(tag => (
            <span key={tag} className="text-xs rounded-full" style={{ background: "#fce8fc", color: "#c084c8", fontFamily: "var(--font-mono)", padding: "5px 11px" }}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
}

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" style={{ paddingTop: "100px", paddingBottom: "100px", paddingLeft: "30px", paddingRight: "30px" }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
