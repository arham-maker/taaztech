const res = await fetch("https://www.crosswayconsulting.com/google-ppc/");
const html = await res.text();
const i = html.indexOf("Why work with a Google Ads agency");
console.log(html.slice(i, i + 1200).replace(/<[^>]+>/g, " ").replace(/\s+/g, " "));
