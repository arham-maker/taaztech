import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images");

const urls = [
  "https://www.crosswayconsulting.com/wp-content/uploads/2024/12/web-image-crop.png",
  "https://www.crosswayconsulting.com/wp-content/uploads/web-faq.png",
  "https://www.crosswayconsulting.com/wp-content/uploads/2024/12/heartbeat.png",
  "https://www.crosswayconsulting.com/wp-content/uploads/2024/12/automotive.png",
  "https://www.crosswayconsulting.com/wp-content/uploads/2024/12/investments.png",
  "https://www.crosswayconsulting.com/wp-content/uploads/2024/12/graduation-cap.png",
  "https://www.crosswayconsulting.com/wp-content/uploads/2024/12/agreement.png",
  "https://www.crosswayconsulting.com/wp-content/uploads/2024/12/pin-1.png",
];

async function download(url) {
  const rel = new URL(url).pathname.replace("/wp-content/uploads/", "");
  const dest = path.join(outDir, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (fs.existsSync(dest)) {
    console.log("SKIP", rel);
    return;
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  console.log("OK", rel, buf.length);
}

for (const url of urls) {
  await download(url);
}
