export function LogoMark({ className = "h-9 w-9", tone = "leaf" }: { className?: string; tone?: "leaf" | "light" }) {
  const bg = tone === "leaf" ? "#538135" : "#f6f3ea";
  const fg = tone === "leaf" ? "#f6f3ea" : "#1b3320";
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="11" fill={bg} />
      {/* a grain head: stalk with paired kernels */}
      <path d="M20 33 V12" stroke={fg} strokeWidth="1.6" strokeLinecap="round" />
      <g fill={fg}>
        <ellipse cx="20" cy="9.5" rx="2.4" ry="3.6" />
        <ellipse cx="16.2" cy="15" rx="2.2" ry="3.4" transform="rotate(-32 16.2 15)" />
        <ellipse cx="23.8" cy="15" rx="2.2" ry="3.4" transform="rotate(32 23.8 15)" />
        <ellipse cx="16.2" cy="21.5" rx="2.2" ry="3.4" transform="rotate(-32 16.2 21.5)" />
        <ellipse cx="23.8" cy="21.5" rx="2.2" ry="3.4" transform="rotate(32 23.8 21.5)" />
      </g>
      <path d="M20 30 Q14 29 11 25" stroke={fg} strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const text = tone === "dark" ? "text-ink" : "text-paper";
  return (
    <span className={`flex items-center gap-3 ${text}`}>
      <LogoMark tone={tone === "dark" ? "leaf" : "light"} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.55rem] tracking-tight" style={{ fontVariationSettings: '"opsz" 72' }}>
          Nopa
        </span>
        <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.22em] opacity-70">Agro Processing</span>
      </span>
    </span>
  );
}
