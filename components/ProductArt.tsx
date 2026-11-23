import type { ArtKind } from "@/lib/site";

const C = {
  leaf: "#538135",
  leafDark: "#3f6628",
  forest: "#1b3320",
  paper: "#f6f3ea",
  paper2: "#ece6d6",
  bone: "#fbfaf5",
  maize: "#d9a637",
  ink: "#18211a",
  sprout2: "#d6e8c2",
};

const sackPath =
  "M120 120 Q130 104 146 112 Q210 96 274 112 Q290 104 300 120 Q292 134 296 150 Q318 240 304 320 Q300 342 276 344 H144 Q120 342 116 320 Q102 240 124 150 Q128 134 120 120 Z";

function Weave({ id, color }: { id: string; color: string }) {
  return (
    <pattern id={id} width="6" height="6" patternUnits="userSpaceOnUse">
      <rect width="6" height="6" fill={color} />
      <path d="M0 3 H6 M3 0 V6" stroke={C.ink} strokeOpacity="0.06" strokeWidth="1" />
    </pattern>
  );
}

function Shadow({ cx = 210, rx = 130 }: { cx?: number; rx?: number }) {
  return <ellipse cx={cx} cy="346" rx={rx} ry="9" fill={C.ink} opacity="0.13" />;
}

function Sack({
  fill,
  label,
  labelText,
  title,
  sub,
  weight,
  id,
}: {
  fill: string;
  label: string;
  labelText: string;
  title: string;
  sub?: string;
  weight: string;
  id: string;
}) {
  return (
    <g>
      <defs>
        <Weave id={id} color={fill} />
        <linearGradient id={`${id}-shade`} x1="0" x2="1">
          <stop offset="0" stopColor={C.ink} stopOpacity="0.12" />
          <stop offset="0.35" stopColor={C.ink} stopOpacity="0" />
          <stop offset="0.8" stopColor={C.ink} stopOpacity="0" />
          <stop offset="1" stopColor={C.ink} stopOpacity="0.14" />
        </linearGradient>
      </defs>
      <path d={sackPath} fill={`url(#${id})`} />
      <path d={sackPath} fill={`url(#${id}-shade)`} />
      <path d="M134 136 Q210 122 286 136" fill="none" stroke={C.ink} strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 4" />
      <rect x="148" y="180" width="124" height="118" rx="4" fill={label} />
      <text x="210" y="214" textAnchor="middle" fill={labelText} style={{ font: "500 24px var(--font-display)", letterSpacing: "0.02em" }}>
        Nopa
      </text>
      <line x1="170" x2="250" y1="226" y2="226" stroke={labelText} strokeOpacity="0.4" />
      <text x="210" y="246" textAnchor="middle" fill={labelText} style={{ font: "600 10px var(--font-sans)", letterSpacing: "0.14em" }}>
        {title}
      </text>
      {sub && (
        <text x="210" y="262" textAnchor="middle" fill={labelText} opacity="0.8" style={{ font: "500 8.5px var(--font-sans)", letterSpacing: "0.12em" }}>
          {sub}
        </text>
      )}
      <text x="210" y="288" textAnchor="middle" fill={labelText} style={{ font: "600 13px var(--font-sans)", letterSpacing: "0.08em" }}>
        {weight}
      </text>
    </g>
  );
}

function Oil() {
  return (
    <>
      <defs>
        <linearGradient id="oil-fill" x1="0" x2="1">
          <stop offset="0" stopColor="#c98f1f" />
          <stop offset="0.3" stopColor="#efcb6c" />
          <stop offset="1" stopColor="#d49a2a" />
        </linearGradient>
        <linearGradient id="oil-bottle" x1="0" x2="1">
          <stop offset="0" stopColor="#d39a28" />
          <stop offset="0.35" stopColor="#f4d77f" />
          <stop offset="1" stopColor="#d6a032" />
        </linearGradient>
      </defs>
      <Shadow cx={205} rx={150} />
      {/* jerrycan */}
      <rect x="176" y="92" width="80" height="44" rx="10" fill="#e2b74f" />
      <rect x="192" y="102" width="48" height="20" rx="6" fill={C.paper} opacity="0.9" />
      <rect x="268" y="100" width="26" height="30" rx="4" fill={C.leafDark} />
      <rect x="264" y="122" width="34" height="10" rx="2" fill={C.forest} />
      <rect x="150" y="128" width="160" height="216" rx="20" fill="url(#oil-fill)" />
      <rect x="160" y="140" width="10" height="190" rx="5" fill="#fff" opacity="0.28" />
      <path d="M150 170 H310" stroke={C.ink} strokeOpacity="0.08" />
      <rect x="166" y="196" width="128" height="104" rx="6" fill={C.leaf} />
      <text x="230" y="232" textAnchor="middle" fill={C.paper} style={{ font: "500 26px var(--font-display)" }}>
        Nopa
      </text>
      <line x1="190" x2="270" y1="244" y2="244" stroke={C.paper} strokeOpacity="0.4" />
      <text x="230" y="264" textAnchor="middle" fill={C.paper} style={{ font: "600 10px var(--font-sans)", letterSpacing: "0.16em" }}>
        REFINED OIL
      </text>
      <text x="230" y="288" textAnchor="middle" fill={C.sprout2} style={{ font: "600 13px var(--font-sans)", letterSpacing: "0.08em" }}>
        20 L
      </text>
      {/* bottle */}
      <rect x="95" y="128" width="26" height="16" rx="3" fill={C.leafDark} />
      <path d="M78 344 Q72 344 72 336 V218 Q72 198 94 184 V144 H122 V184 Q144 198 144 218 V336 Q144 344 138 344 Z" fill="url(#oil-bottle)" />
      <rect x="80" y="206" width="6" height="124" rx="3" fill="#fff" opacity="0.35" />
      <rect x="72" y="248" width="72" height="58" fill={C.bone} />
      <text x="108" y="274" textAnchor="middle" fill={C.leaf} style={{ font: "500 17px var(--font-display)" }}>
        Nopa
      </text>
      <text x="108" y="294" textAnchor="middle" fill={C.ink} style={{ font: "600 8px var(--font-sans)", letterSpacing: "0.14em" }}>
        1 LITRE
      </text>
    </>
  );
}

function Flour() {
  return (
    <>
      <Shadow cx={200} rx={160} />
      <g transform="translate(-58 34) scale(0.86)">
        <Sack id="sack-sorghum" fill={C.paper2} label={C.maize} labelText={C.forest} title="SORGHUM FLOUR" weight="25 KG" />
      </g>
      <g transform="translate(40 0)">
        <Sack id="sack-maize" fill={C.bone} label={C.leaf} labelText={C.paper} title="MAIZE FLOUR" sub="CLEANED · MILLED · SIFTED" weight="50 KG" />
      </g>
    </>
  );
}

function Csb() {
  const bag = "M128 104 H292 L300 330 Q300 344 286 344 H134 Q120 344 120 330 Z";
  return (
    <>
      <Shadow cx={215} rx={150} />
      <defs>
        <linearGradient id="csb-shade" x1="0" x2="1">
          <stop offset="0" stopColor={C.ink} stopOpacity="0.1" />
          <stop offset="0.3" stopColor={C.ink} stopOpacity="0" />
          <stop offset="1" stopColor={C.ink} stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <path d={bag} fill={C.bone} />
      <path d={bag} fill="url(#csb-shade)" />
      <path d="M128 104 H292 L293 124 H127 Z" fill={C.paper2} />
      <path d="M127 124 H293" stroke={C.ink} strokeOpacity="0.25" strokeDasharray="4 3" />
      <rect x="124" y="146" width="173" height="48" fill={C.leaf} />
      <text x="210" y="179" textAnchor="middle" fill={C.paper} style={{ font: "500 26px var(--font-display)" }}>
        Nopa
      </text>
      <text x="210" y="226" textAnchor="middle" fill={C.forest} style={{ font: "700 13px var(--font-sans)", letterSpacing: "0.1em" }}>
        CORN-SOYA BLEND
      </text>
      <text x="210" y="244" textAnchor="middle" fill={C.ink} opacity="0.7" style={{ font: "500 9px var(--font-sans)", letterSpacing: "0.16em" }}>
        SUPER CEREAL
      </text>
      <rect x="168" y="258" width="84" height="20" rx="10" fill={C.maize} />
      <text x="210" y="272" textAnchor="middle" fill={C.forest} style={{ font: "700 8.5px var(--font-sans)", letterSpacing: "0.16em" }}>
        FORTIFIED
      </text>
      <text x="210" y="318" textAnchor="middle" fill={C.ink} style={{ font: "600 13px var(--font-sans)", letterSpacing: "0.08em" }}>
        25 KG
      </text>
      {/* bowl */}
      <ellipse cx="322" cy="346" rx="56" ry="6" fill={C.ink} opacity="0.12" />
      <ellipse cx="322" cy="300" rx="52" ry="10" fill="#f0e0b4" />
      <path d="M270 300 H374 Q370 344 322 346 Q274 344 270 300 Z" fill={C.leafDark} />
      <path d="M278 312 Q322 322 366 312" stroke={C.paper} strokeOpacity="0.35" fill="none" />
      <path d="M308 284 q-8 -12 0 -22 q8 -10 0 -22 M326 282 q-8 -12 0 -22 q8 -10 0 -22" fill="none" stroke={C.ink} strokeOpacity="0.22" strokeWidth="2" strokeLinecap="round" />
    </>
  );
}

function Feed() {
  const pellets = [
    [70, 336], [84, 330], [98, 337], [78, 324], [92, 320], [106, 328], [64, 328], [86, 312], [100, 314], [112, 338], [72, 316],
  ];
  return (
    <>
      <Shadow cx={215} rx={150} />
      <g transform="translate(26 0)">
        <Sack id="sack-feed" fill="#e6dcc3" label={C.forest} labelText={C.paper} title="ANIMAL & POULTRY" sub="COMPOUND FEED" weight="50 KG" />
        <rect x="128" y="166" width="164" height="6" fill={C.maize} />
      </g>
      {pellets.map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="13" height="8" rx="4" transform={`rotate(${(i * 37) % 70 - 35} ${x + 6} ${y + 4})`} fill={i % 3 === 0 ? "#8c6a35" : "#a9844a"} />
      ))}
    </>
  );
}

function Honey() {
  const hex = (cx: number, cy: number, r: number) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i + Math.PI / 6;
      return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
    }).join(" ");
  const comb = [
    [64, 300], [92, 300], [78, 276], [106, 276], [50, 276], [64, 252], [92, 252], [78, 324], [50, 324],
  ];
  return (
    <>
      <defs>
        <linearGradient id="honey-fill" x1="0" x2="1">
          <stop offset="0" stopColor="#b8650c" />
          <stop offset="0.32" stopColor="#f2b53c" />
          <stop offset="0.7" stopColor="#e19a22" />
          <stop offset="1" stopColor="#a85a0a" />
        </linearGradient>
      </defs>
      <Shadow cx={215} rx={150} />
      {/* honeycomb */}
      {comb.map(([x, y], i) => (
        <polygon key={i} points={hex(x, y, 15)} fill={i % 3 === 0 ? "#e8a72e" : "#f3c45c"} stroke="#c9861a" strokeWidth="2" />
      ))}
      {/* jar */}
      <rect x="158" y="112" width="124" height="34" rx="6" fill={C.leafDark} />
      <path d="M158 124 H282" stroke={C.forest} strokeOpacity="0.4" />
      <path d="M158 130 H282" stroke={C.forest} strokeOpacity="0.4" />
      <rect x="166" y="144" width="108" height="12" fill="#e2c890" opacity="0.7" />
      <path d="M150 168 Q150 154 166 154 H274 Q290 154 290 168 V326 Q290 344 272 344 H168 Q150 344 150 326 Z" fill="url(#honey-fill)" />
      <rect x="160" y="172" width="9" height="150" rx="4.5" fill="#fff" opacity="0.3" />
      <rect x="150" y="206" width="140" height="96" fill={C.bone} />
      <text x="220" y="240" textAnchor="middle" fill={C.leaf} style={{ font: "500 25px var(--font-display)" }}>
        Nopa
      </text>
      <line x1="184" x2="256" y1="252" y2="252" stroke={C.leaf} strokeOpacity="0.35" />
      <text x="220" y="270" textAnchor="middle" fill={C.forest} style={{ font: "700 11px var(--font-sans)", letterSpacing: "0.16em" }}>
        PURE HONEY
      </text>
      <text x="220" y="288" textAnchor="middle" fill={C.ink} opacity="0.65" style={{ font: "500 8px var(--font-sans)", letterSpacing: "0.14em" }}>
        FROM OUR OWN FARM
      </text>
      {/* dipper */}
      <g transform="rotate(24 330 250)">
        <rect x="324" y="150" width="9" height="150" rx="4.5" fill="#b07a42" />
        <rect x="316" y="276" width="25" height="44" rx="10" fill="#c48a4d" />
        <path d="M316 286 H341 M316 297 H341 M316 308 H341" stroke="#8a5a2b" strokeWidth="2.5" />
        <path d="M322 320 q6 14 0 22 q-3 6 2 10" fill="none" stroke="#e7a52b" strokeWidth="5" strokeLinecap="round" />
      </g>
    </>
  );
}

export default function ProductArt({ kind, className }: { kind: ArtKind; className?: string }) {
  return (
    <svg viewBox="0 0 420 380" className={className} role="img" aria-hidden="true">
      {kind === "oil" && <Oil />}
      {kind === "flour" && <Flour />}
      {kind === "csb" && <Csb />}
      {kind === "feed" && <Feed />}
      {kind === "honey" && <Honey />}
    </svg>
  );
}
