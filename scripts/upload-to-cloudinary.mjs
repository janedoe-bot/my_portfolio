import { v2 as cloudinary } from "cloudinary";
import { readdirSync, statSync } from "fs";
import { join, relative, extname } from "path";

cloudinary.config({
  cloud_name: "do9avzucm",
  api_key: "881911946952161",
  api_secret: "e_v5e37j8kxbMj64NJjLDhcmmX0",
});

const IMAGES_DIR = new URL("../public/images", import.meta.url).pathname;
const IMAGE_EXTS = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"]);

function getAllFiles(dir) {
  const files = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      files.push(...getAllFiles(full));
    } else if (IMAGE_EXTS.has(extname(name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

const files = getAllFiles(IMAGES_DIR);
console.log(`Found ${files.length} images. Uploading...`);

let done = 0;
for (const file of files) {
  const rel = relative(IMAGES_DIR, file); // e.g. "02. mureung/DSC02697.jpg"
  const publicId = `portfolio/${rel.replace(/\.[^.]+$/, "")}`; // strip extension

  try {
    await cloudinary.uploader.upload(file, {
      public_id: publicId,
      use_filename: false,
      overwrite: true,
      resource_type: "image",
    });
    done++;
    process.stdout.write(`\r${done}/${files.length} uploaded`);
  } catch (e) {
    console.error(`\nFailed: ${rel} — ${e.message}`);
  }
}

console.log(`\nDone! ${done}/${files.length} images uploaded to Cloudinary.`);
