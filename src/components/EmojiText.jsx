import { emojiPaths, emojiCharToName } from '../emoji-data';

// Build regex from all known emoji chars, longest first (ZWJ sequences before single codepoints)
const escapedKeys = Object.keys(emojiCharToName)
  .sort((a, b) => b.length - a.length);

const emojiRegex = new RegExp(`(${escapedKeys.map(k => [...k].map(c => {
  const cp = c.codePointAt(0);
  if (cp > 0xffff) {
    const hi = Math.floor((cp - 0x10000) / 0x400) + 0xd800;
    const lo = (cp - 0x10000) % 0x400 + 0xdc00;
    return `\\u${hi.toString(16).padStart(4,'0')}\\u${lo.toString(16).padStart(4,'0')}`;
  }
  return `\\u${cp.toString(16).padStart(4,'0')}`;
}).join('')).join('|')})`, 'g');

export default function EmojiText({ children, size = '1.2em' }) {
  if (typeof children !== 'string') return children;

  const parts = [];
  let lastIdx = 0;
  let m;
  emojiRegex.lastIndex = 0;

  while ((m = emojiRegex.exec(children)) !== null) {
    if (m.index > lastIdx) parts.push(children.slice(lastIdx, m.index));
    const name = emojiCharToName[m[0]];
    const p = name && emojiPaths[name];
    if (p) {
      const vbParts = p.vb.split(' ').map(Number);
      const aspect = vbParts[2] / vbParts[3];
      const w = aspect > 1.3 ? `calc(${size} * ${aspect.toFixed(2)})` : size;
      parts.push(
        <svg key={m.index} className="emoji-svg" width={w} height={size} viewBox={p.vb} fill="currentColor" role="img" aria-label={m[0]}>
          <path d={p.d} />
        </svg>
      );
    } else {
      parts.push(m[0]);
    }
    lastIdx = m.index + m[0].length;
  }

  if (lastIdx < children.length) parts.push(children.slice(lastIdx));
  if (parts.length === 0) return children;
  return <>{parts}</>;
}
