import fs from "fs";
import path from "path";

const clientDir = path.resolve("dist/client");
const distDir = path.resolve("dist");
const assetsDir = path.join(clientDir, "assets");

if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  const cssFile = files.find((f) => f.endsWith(".css"));
  const jsFiles = files.filter((f) => f.endsWith(".js"));

  const cssTags = cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}">` : "";
  const jsTags = jsFiles
    .map((f) => `<script type="module" src="/assets/${f}"></script>`)
    .join("\n    ");

  const html = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Jayaveer Nallapati — Software Engineer & AI/ML Developer</title>
    <meta name="description" content="Portfolio of Jayaveer Nallapati, a software engineer focused on backend systems, full-stack products, and applied AI." />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
    ${cssTags}
    <script>
      (function(){try{var t=localStorage.getItem('portfolio-theme');var d=t?t==='dark':true;document.documentElement.dataset.theme=d?'dark':'light';document.documentElement.style.colorScheme=d?'dark':'light';}catch(e){document.documentElement.dataset.theme='dark';document.documentElement.style.colorScheme='dark';}})();
    </script>
  </head>
  <body>
    <div id="root"></div>
    ${jsTags}
  </body>
</html>`;

  fs.writeFileSync(path.join(clientDir, "index.html"), html);
  fs.writeFileSync(path.join(distDir, "index.html"), html);
  fs.cpSync(clientDir, distDir, { recursive: true });
  console.log("Successfully generated static index.html for Vercel deployment!");
}
