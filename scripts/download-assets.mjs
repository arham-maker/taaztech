import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const urls = JSON.parse(
  fs.readFileSync(path.join(__dirname, "asset-urls.json"), "utf8")
);

const imageUrls = urls.filter(
  (u) =>
    /\.(png|jpg|jpeg|webp|gif|svg|ico)(\?|$)/i.test(u) &&
    !u.includes("/elementor/css/") &&
    !u.includes("/google-fonts/") &&
    !u.includes(".js")
);

const outDir = path.join(__dirname, "..", "public", "images");

async function download(url) {
  const urlPath = new URL(url).pathname;
  const rel = urlPath.replace("/wp-content/uploads/", "");
  const dest = path.join(outDir, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });

  if (fs.existsSync(dest)) {
    return { url, dest, skipped: true };
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return { url, dest, size: buf.length };
}

console.log(`Downloading ${imageUrls.length} images...`);
let ok = 0;
let fail = 0;

for (const url of imageUrls) {
  try {
    const result = await download(url);
    ok++;
    if (!result.skipped) {
      console.log(`OK ${result.dest.replace(/\\/g, "/")} (${result.size} bytes)`);
    }
  } catch (e) {
    fail++;
    console.error(`FAIL ${url}: ${e.message}`);
  }
}

console.log(`Done: ${ok} ok, ${fail} failed`);
