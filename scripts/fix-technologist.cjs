const opentype = require('opentype.js');
const fs = require('fs');
const font = opentype.loadSync('public/fonts/NotoEmoji-Regular.ttf');
const size = font.unitsPerEm;
const path = font.getPath(String.fromCodePoint(0x1F468), 0, size, size);
const d = path.toPathData(2);
const bb = path.getBoundingBox();
const pad = size * 0.03;
const vb = [Math.floor(bb.x1-pad), Math.floor(bb.y1-pad), Math.ceil(bb.x2-bb.x1+pad*2), Math.ceil(bb.y2-bb.y1+pad*2)].join(' ');

// Update emoji-data.js
let data = fs.readFileSync('src/emoji-data.js','utf8');
const mod = JSON.parse(data.match(/emojiPaths = ({.*?});/s)[1]);
mod.technologist = { d, vb };
data = data.replace(/emojiPaths = {.*?};/s, 'emojiPaths = ' + JSON.stringify(mod) + ';');
fs.writeFileSync('src/emoji-data.js', data);

console.log('Updated technologist glyph to single man emoji');
console.log('New viewBox:', vb);
