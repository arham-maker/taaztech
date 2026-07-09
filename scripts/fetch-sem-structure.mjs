import fs from "fs";
import path from "path";

const urls = [
  "https://www.crosswayconsulting.com/wp-content/uploads/2025/03/imgpsh_fullsize_anim-2025-03-06T050557.572.png",
  "https://www.crosswayconsulting.com/wp-content/uploads/2025/03/imgpsh_fullsize_anim-2025-03-06T050606.509.png",
];

for (const url of urls) {
  const name = path.basename(url);
  const dest = path.join("public", "images", "2025", "03", name);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (!fs.existsSync(dest)) {
    const r = await fetch(url);
    const buf = Buffer.from(await r.arrayBuffer());
    fs.writeFileSync(dest, buf);
    console.log("Downloaded", dest, buf.length);
  } else {
    console.log("Exists", dest);
  }
}

const res = await fetch("https://www.crosswayconsulting.com/services/sem-services/");
const html = await res.text();
const i = html.indexOf("Amazon");
console.log(html.slice(i, i + 450).replace(/\s+/g, " "));
