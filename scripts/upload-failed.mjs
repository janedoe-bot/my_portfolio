import { v2 as cloudinary } from "cloudinary";
import { join } from "path";

cloudinary.config({
  cloud_name: "do9avzucm",
  api_key: "881911946952161",
  api_secret: "e_v5e37j8kxbMj64NJjLDhcmmX0",
});

const BASE = new URL("../public/images", import.meta.url).pathname;

// Failed files with sanitized public_ids
const failed = [
  // Large files — upload with quality reduction
  { file: "02. mureung/screenshot1.png",          id: "portfolio/02. mureung/screenshot1",          large: true },
  { file: "10. Mapping the City/mapping the city2.png", id: "portfolio/10. Mapping the City/mapping the city2", large: true },
  // Trailing-space folder "18. " → "18"
  { file: "18. /IMG_5376.jpeg",                   id: "portfolio/18/IMG_5376" },
  { file: "18. /IMG_5393.jpeg",                   id: "portfolio/18/IMG_5393" },
  { file: "18. /KakaoTalk_Photo_2020-12-11-13-40-34.jpeg", id: "portfolio/18/KakaoTalk_Photo_2020-12-11-13-40-34" },
  // & in folder name → "and"
  { file: "19. Flow&Bloom/-2019-02-24--11.20.36.png",  id: "portfolio/19. FlowAndBloom/-2019-02-24--11.20.36" },
  { file: "19. Flow&Bloom/20190226_111230.jpg",        id: "portfolio/19. FlowAndBloom/20190226_111230" },
  { file: "19. Flow&Bloom/DSC01335.jpeg",              id: "portfolio/19. FlowAndBloom/DSC01335" },
  { file: "19. Flow&Bloom/KakaoTalk_Photo_2019-11-15-13-36-02.jpeg", id: "portfolio/19. FlowAndBloom/KakaoTalk_Photo_2019-11-15-13-36-02" },
];

for (const { file, id, large } of failed) {
  const fullPath = join(BASE, file);
  const opts = {
    public_id: id,
    use_filename: false,
    overwrite: true,
    resource_type: "image",
    ...(large ? { transformation: [{ width: 2000, crop: "limit", quality: "auto" }] } : {}),
  };
  try {
    await cloudinary.uploader.upload(fullPath, opts);
    console.log(`✓ ${file}`);
  } catch (e) {
    console.error(`✗ ${file} — ${e.message}`);
  }
}

console.log("Done.");
