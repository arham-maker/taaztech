import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images");

const urls = [
  "https://www.crosswayconsulting.com/wp-content/uploads/2025/03/imgpsh_fullsize_anim-2025-03-06T050407.268.png",
  "https://www.crosswayconsulting.com/wp-content/uploads/2025/03/imgpsh_fullsize_anim-2025-03-06T050410.716.png",
  "https://www.crosswayconsulting.com/wp-content/uploads/2026/01/open-book.png",
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

for (const url of urls) await download(url);
