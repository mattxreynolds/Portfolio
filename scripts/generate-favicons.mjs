import { deflateSync } from 'node:zlib';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const svg = readFileSync(resolve(root, 'public/favicon.svg'), 'utf8');
const viewBoxSize = 64;

const attribute = (source, name) => {
  const match = source.match(new RegExp(`${name}="([^"]+)"`));
  return match?.[1];
};

const colour = (hex) => {
  const value = Number.parseInt(hex.slice(1), 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255, 255];
};

const parsePath = (data) => {
  const tokens = data.match(/[A-Za-z]|-?(?:\d+\.?\d*|\.\d+)/g) ?? [];
  const paths = [];
  let path = [];
  let x = 0;
  let y = 0;
  let command = '';
  let index = 0;

  const number = () => Number(tokens[index++]);
  while (index < tokens.length) {
    if (/^[A-Za-z]$/.test(tokens[index])) command = tokens[index++];
    const relative = command === command.toLowerCase();
    switch (command.toLowerCase()) {
      case 'm': {
        if (path.length) paths.push(path);
        const nextX = number();
        const nextY = number();
        x = relative ? x + nextX : nextX;
        y = relative ? y + nextY : nextY;
        path = [[x, y]];
        command = relative ? 'l' : 'L';
        break;
      }
      case 'l': {
        const nextX = number();
        const nextY = number();
        x = relative ? x + nextX : nextX;
        y = relative ? y + nextY : nextY;
        path.push([x, y]);
        break;
      }
      case 'h': {
        const nextX = number();
        x = relative ? x + nextX : nextX;
        path.push([x, y]);
        break;
      }
      case 'v': {
        const nextY = number();
        y = relative ? y + nextY : nextY;
        path.push([x, y]);
        break;
      }
      case 'z':
        paths.push(path);
        path = [];
        command = '';
        break;
      default:
        throw new Error(`Unsupported SVG path command: ${command}`);
    }
  }
  if (path.length) paths.push(path);
  return paths;
};

const insidePolygon = (x, y, points) => {
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const [xi, yi] = points[i];
    const [xj, yj] = points[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
};

const shapes = [...svg.matchAll(/<(rect|polygon|path)\b([^>]*)\/>/g)].map((match) => {
  const [, type, attrs] = match;
  const fill = colour(attribute(attrs, 'fill'));
  if (type === 'rect') {
    const x = Number(attribute(attrs, 'x') ?? 0);
    const y = Number(attribute(attrs, 'y') ?? 0);
    const width = Number(attribute(attrs, 'width'));
    const height = Number(attribute(attrs, 'height'));
    const radius = Number(attribute(attrs, 'rx') ?? 0);
    return {
      fill,
      contains(px, py) {
        if (px < x || px >= x + width || py < y || py >= y + height) return false;
        const cx = Math.max(x + radius, Math.min(px, x + width - radius));
        const cy = Math.max(y + radius, Math.min(py, y + height - radius));
        return (px - cx) ** 2 + (py - cy) ** 2 <= radius ** 2;
      },
    };
  }

  const paths = type === 'polygon'
    ? [attribute(attrs, 'points').trim().split(/\s+/).map((point) => point.split(',').map(Number))]
    : parsePath(attribute(attrs, 'd'));
  return {
    fill,
    contains(px, py) {
      return paths.reduce((inside, points) => inside !== insidePolygon(px, py, points), false);
    },
  };
});

const crcTable = Array.from({ length: 256 }, (_, value) => {
  let crc = value;
  for (let bit = 0; bit < 8; bit += 1) crc = (crc & 1) ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1;
  return crc >>> 0;
});

const crc32 = (buffer) => {
  let crc = 0xffffffff;
  for (const byte of buffer) crc = crcTable[(crc ^ byte) & 255] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
};

const pngChunk = (name, data) => {
  const type = Buffer.from(name);
  const chunk = Buffer.alloc(data.length + 12);
  chunk.writeUInt32BE(data.length, 0);
  type.copy(chunk, 4);
  data.copy(chunk, 8);
  chunk.writeUInt32BE(crc32(Buffer.concat([type, data])), data.length + 8);
  return chunk;
};

const renderPng = (size) => {
  const samples = size <= 32 ? 8 : size <= 192 ? 4 : 2;
  const rows = Buffer.alloc((size * 4 + 1) * size);
  for (let py = 0; py < size; py += 1) {
    const rowStart = py * (size * 4 + 1);
    for (let px = 0; px < size; px += 1) {
      const totals = [0, 0, 0, 0];
      for (let sy = 0; sy < samples; sy += 1) {
        for (let sx = 0; sx < samples; sx += 1) {
          const x = ((px + (sx + 0.5) / samples) / size) * viewBoxSize;
          const y = ((py + (sy + 0.5) / samples) / size) * viewBoxSize;
          let sample = [0, 0, 0, 0];
          for (const shape of shapes) if (shape.contains(x, y)) sample = shape.fill;
          for (let channel = 0; channel < 4; channel += 1) totals[channel] += sample[channel];
        }
      }
      const offset = rowStart + 1 + px * 4;
      const divisor = samples ** 2;
      for (let channel = 0; channel < 4; channel += 1) rows[offset + channel] = Math.round(totals[channel] / divisor);
    }
  }

  const header = Buffer.alloc(13);
  header.writeUInt32BE(size, 0);
  header.writeUInt32BE(size, 4);
  header[8] = 8;
  header[9] = 6;
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    pngChunk('IHDR', header),
    pngChunk('IDAT', deflateSync(rows, { level: 9 })),
    pngChunk('IEND', Buffer.alloc(0)),
  ]);
};

const pngs = new Map();
for (const [size, filename] of [
  [16, 'favicon-16x16.png'],
  [32, 'favicon-32x32.png'],
  [180, 'apple-touch-icon.png'],
  [192, 'android-chrome-192x192.png'],
  [512, 'android-chrome-512x512.png'],
]) {
  const png = renderPng(size);
  pngs.set(size, png);
  writeFileSync(resolve(root, 'public', filename), png);
}

pngs.set(48, renderPng(48));
const icoSizes = [16, 32, 48];
const directory = Buffer.alloc(6 + icoSizes.length * 16);
directory.writeUInt16LE(0, 0);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(icoSizes.length, 4);
let offset = directory.length;
icoSizes.forEach((size, index) => {
  const png = pngs.get(size);
  const entry = 6 + index * 16;
  directory[entry] = size;
  directory[entry + 1] = size;
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(png.length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += png.length;
});
writeFileSync(resolve(root, 'public/favicon.ico'), Buffer.concat([directory, ...icoSizes.map((size) => pngs.get(size))]));
