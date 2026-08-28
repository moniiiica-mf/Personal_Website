// Hand-builds a minimal 32x32 .ico (BMP-in-ICO, no external deps/network
// needed) so browsers requesting /favicon.ico directly don't 404. A simple
// abstract mark — white square on black — matching the monochrome brand;
// swap for real branding whenever you like.
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const size = 32;

const bg = [0x0a, 0x0a, 0x0a]; // #0a0a0a
const fg = [0xef, 0xf3, 0xf4]; // #f4f3ef (stored BGR)

const pixels = [];
for (let y = 0; y < size; y++) {
  const row = [];
  for (let x = 0; x < size; x++) {
    const inMark = x >= 11 && x < 21 && y >= 11 && y < 21;
    row.push(inMark ? fg : bg);
  }
  pixels.push(row);
}

// BMP pixel data is bottom-up, 32bpp BGRA, no padding needed at 32bpp.
const pixelData = Buffer.alloc(size * size * 4);
let offset = 0;
for (let y = size - 1; y >= 0; y--) {
  for (let x = 0; x < size; x++) {
    const [b, g, r] = pixels[y][x];
    pixelData[offset++] = b;
    pixelData[offset++] = g;
    pixelData[offset++] = r;
    pixelData[offset++] = 0xff; // alpha
  }
}

const dibHeaderSize = 40;
const dibHeader = Buffer.alloc(dibHeaderSize);
dibHeader.writeUInt32LE(dibHeaderSize, 0);
dibHeader.writeInt32LE(size, 4); // width
dibHeader.writeInt32LE(size * 2, 8); // height *2 for ICO (XOR + AND masks)
dibHeader.writeUInt16LE(1, 12); // planes
dibHeader.writeUInt16LE(32, 14); // bits per pixel
dibHeader.writeUInt32LE(0, 16); // no compression
dibHeader.writeUInt32LE(pixelData.length, 20);

const andMask = Buffer.alloc(size * (size / 8), 0); // fully opaque

const imageData = Buffer.concat([dibHeader, pixelData, andMask]);

const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0); // reserved
icoHeader.writeUInt16LE(1, 2); // type: icon
icoHeader.writeUInt16LE(1, 4); // 1 image

const dirEntry = Buffer.alloc(16);
dirEntry.writeUInt8(size, 0); // width
dirEntry.writeUInt8(size, 1); // height
dirEntry.writeUInt8(0, 2); // color palette
dirEntry.writeUInt8(0, 3); // reserved
dirEntry.writeUInt16LE(1, 4); // color planes
dirEntry.writeUInt16LE(32, 6); // bits per pixel
dirEntry.writeUInt32LE(imageData.length, 8);
dirEntry.writeUInt32LE(icoHeader.length + dirEntry.length, 12); // offset

const ico = Buffer.concat([icoHeader, dirEntry, imageData]);

const outPath = path.join(__dirname, "..", "src", "app", "favicon.ico");
writeFileSync(outPath, ico);
console.log("wrote", path.relative(process.cwd(), outPath));
