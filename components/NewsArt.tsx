import type { NewsArtKind } from "@/lib/news";

const C = {
  leaf: "#538135",
  leafDark: "#3f6628",
  forest: "#1b3320",
  sprout: "#b7d39a",
  paper: "#f6f3ea",
  maize: "#d9a637",
  cherry: "#b3322a",
  cherryDark: "#7e1f1a",
  bean: "#6b4426",
};

/** Coffee branch with ripe cherries, and a few roasted beans. */
function Coffee() {
  const cherries = [
    [236, 150], [254, 162], [240, 176], [300, 196], [318, 206], [306, 222], [182, 222], [166, 236], [186, 246],
  ];
  const leaves = [
    { x: 262, y: 120, r: -30 }, { x: 350, y: 168, r: 30 }, { x: 140, y: 196, r: -150 }, { x: 214, y: 268, r: 160 }, { x: 330, y: 250, r: 70 },
  ];
  const beans = [
    [96, 300, -20], [124, 318, 30], [70, 326, 10],
  ];
  return (
    <>
      <path d="M80 120 C 170 150, 260 180, 400 260" stroke="#6b4a2b" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M210 168 C 200 200, 190 220, 176 250" stroke="#6b4a2b" strokeWidth="4" fill="none" strokeLinecap="round" />
      {leaves.map((l, i) => (
        <g key={i} transform={`translate(${l.x} ${l.y}) rotate(${l.r})`}>
          <path d="M0 0 C 20 -22, 62 -22, 84 0 C 62 22, 20 22, 0 0 Z" fill={i % 2 ? C.leaf : C.leafDark} />
          <path d="M4 0 H80" stroke={C.sprout} strokeOpacity="0.5" strokeWidth="1.5" />
        </g>
      ))}
      {cherries.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="13" fill={i % 4 === 3 ? C.maize : i % 3 === 0 ? C.cherryDark : C.cherry} />
          <circle cx={x - 4} cy={y - 4} r="3.5" fill="#fff" opacity="0.35" />
        </g>
      ))}
      {beans.map(([x, y, r], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
          <ellipse rx="15" ry="11" fill={C.bean} />
          <path d="M-12 0 Q 0 -5, 12 0" stroke="#3e2615" strokeWidth="2.5" fill="none" />
        </g>
      ))}
    </>
  );
}

/** A row of figures under one roof line: the team. */
function People() {
  const people = [
    { x: 120, s: 0.9, c: C.leaf },
    { x: 190, s: 1.05, c: C.maize },
    { x: 260, s: 1, c: C.sprout },
    { x: 330, s: 0.92, c: C.leafDark },
  ];
  return (
    <>
      <path d="M70 150 L225 70 L380 150" stroke={C.paper} strokeOpacity="0.5" strokeWidth="6" fill="none" strokeLinejoin="round" strokeLinecap="round" />
      {people.map((p, i) => (
        <g key={i} transform={`translate(${p.x} 300) scale(${p.s})`}>
          <circle cx="0" cy="-118" r="24" fill={p.c} />
          <path d="M-40 0 V-50 Q-40 -86 0 -86 Q40 -86 40 -50 V0 Z" fill={p.c} />
        </g>
      ))}
      <rect x="70" y="300" width="310" height="6" rx="3" fill={C.paper} opacity="0.5" />
    </>
  );
}

export default function NewsArt({ kind, className }: { kind: NewsArtKind; className?: string }) {
  return (
    <svg viewBox="0 0 450 360" className={className} aria-hidden="true">
      {kind === "coffee" && <Coffee />}
      {kind === "people" && <People />}
    </svg>
  );
}

export const newsTone: Record<NewsArtKind, string> = {
  coffee: "bg-paper-2",
  people: "bg-forest",
};
