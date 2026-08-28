// Generates monochrome placeholder SVGs for projects that don't have real
// imagery yet. Safe to re-run; existing files are overwritten. Once real
// photography/screenshots are supplied for a project, replace the files in
// public/projects/<slug>/ directly (webp/jpg/png all work with next/image)
// and update that project's data file to point at the new filenames.
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public", "projects");

const projects = [
  { slug: "bmw", label: "BMW AI Companion" },
  { slug: "cohop", label: "Co-Hop" },
  { slug: "sort", label: "Sort!" },
  { slug: "asl", label: "ASL Lens Concept Design" },
];

const variants = [
  { name: "thumbnail", width: 900, height: 1125 }, // 4:5
  { name: "hero", width: 1600, height: 1000 }, // 16:10
];

function svg(label, name, width, height) {
  const stroke = "rgba(244,243,239,0.16)";
  const text = "rgba(244,243,239,0.55)";
  // Next.js's built-in image optimizer only recognizes a file as SVG when it
  // sniffs a leading `<?xml` declaration — without it, requests through
  // `next/image` 400 with "not a valid image", so this must stay first.
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="#17171550"/>
  <rect x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" fill="none" stroke="${stroke}" stroke-width="1"/>
  <line x1="0" y1="0" x2="${width}" y2="${height}" stroke="${stroke}" stroke-width="1"/>
  <line x1="${width}" y1="0" x2="0" y2="${height}" stroke="${stroke}" stroke-width="1"/>
  <text x="${width * 0.04}" y="${height - height * 0.05}" font-family="Helvetica, Arial, sans-serif" font-size="${Math.max(14, width * 0.018)}" letter-spacing="1" fill="${text}">${label.toUpperCase()} — ${name.toUpperCase()} PLACEHOLDER</text>
</svg>`;
}

for (const project of projects) {
  const dir = path.join(publicDir, project.slug);
  mkdirSync(dir, { recursive: true });
  for (const variant of variants) {
    const file = path.join(dir, `${variant.name}.svg`);
    writeFileSync(
      file,
      svg(project.label, variant.name, variant.width, variant.height),
      "utf8"
    );
    console.log("wrote", path.relative(process.cwd(), file));
  }
}
