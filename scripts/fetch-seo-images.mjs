const res = await fetch("https://www.crosswayconsulting.com/services/seo-services/");
const html = await res.text();

const matches = [
  ...html.matchAll(/wp-content\/uploads\/[^"'\s>]+\.(webp|png|jpg|jpeg)/gi),
];
const unique = [...new Set(matches.map((m) => m[0]))];
unique.forEach((u) => console.log(u));
