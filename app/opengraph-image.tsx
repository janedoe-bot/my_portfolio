import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const imagesDir = path.join(process.cwd(), "public/images");

  let latestFile = "";
  let latestMtime = 0;

  function walk(dir: string) {
    try {
      for (const file of fs.readdirSync(dir)) {
        if (file.startsWith(".")) continue;
        const full = path.join(dir, file);
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
          walk(full);
        } else if (/\.(png|jpe?g|gif|webp)$/i.test(file) && stat.size < 1024 * 512) {
          if (stat.mtimeMs > latestMtime) {
            latestMtime = stat.mtimeMs;
            latestFile = full;
          }
        }
      }
    } catch {}
  }

  walk(imagesDir);

  const ext = path.extname(latestFile).toLowerCase();
  const mime = ext === ".png" ? "image/png" : ext === ".gif" ? "image/gif" : "image/jpeg";
  const buf = fs.readFileSync(latestFile);
  const src = `data:${mime};base64,${buf.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "rgb(255,243,254)" }}>
        <img src={src} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
