import fs from "fs";

const html = fs.readFileSync("temp-homepage.html", "utf8");
const urls = [
  ...new Set(
    html.match(
      /https:\/\/www\.crosswayconsulting\.com\/wp-content\/uploads\/[^"'\s)]+/g
    ) ?? []
  ),
];

fs.writeFileSync("scripts/asset-urls.json", JSON.stringify(urls, null, 2));
console.log(`Found ${urls.length} unique asset URLs`);
urls.forEach((u) => console.log(u));
