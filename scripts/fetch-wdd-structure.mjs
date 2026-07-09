const res = await fetch(
  "https://www.crosswayconsulting.com/services/website-design-and-development/"
);
const html = await res.text();

const idx = html.indexOf("web-faq.png");
console.log(html.slice(idx, idx + 3000).replace(/\s+/g, " "));
