import { LogoMark } from "./Logo";

const rows = [
  ["Product", "Maize flour"],
  ["Pack", "50 kg sack"],
  ["Intake inspection", "Passed"],
  ["Moisture & texture", "Within spec"],
  ["Packed & sealed", "Line 2"],
];

/** An illustrative batch record, showing what traceability means without real data. */
export default function BatchCard() {
  return (
    <div className="relative mx-auto max-w-lg">
      <div className="absolute -left-4 top-10 h-full w-full -rotate-3 rounded-[1.5rem] bg-sprout/70 sm:-left-8" aria-hidden="true" />
      <figure className="relative rotate-1 rounded-[1.5rem] border border-line bg-bone p-7 shadow-[0_30px_60px_-30px_rgb(24_33_26/0.35)] sm:p-9">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LogoMark className="h-8 w-8" />
            <span className="eyebrow text-ink-soft">Batch record</span>
          </div>
          <span className="rounded-full bg-leaf/12 px-3 py-1 text-xs font-semibold text-leaf">Released</span>
        </div>
        <p className="mt-8 text-xs uppercase tracking-[0.16em] text-ink-soft">Batch code</p>
        <p className="mt-1 font-mono text-2xl tracking-wider sm:text-3xl">NP·MF·0000·A</p>
        <dl className="mt-8 divide-y divide-dashed divide-line border-y border-dashed border-line">
          {rows.map(([k, v]) => (
            <div key={k} className="flex items-center justify-between py-3 text-sm">
              <dt className="text-ink-soft">{k}</dt>
              <dd className="flex items-center gap-2 font-medium">
                {(v === "Passed" || v === "Within spec") && <span className="h-1.5 w-1.5 rounded-full bg-leaf" aria-hidden="true" />}
                {v}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 flex h-10 items-end gap-[3px]" aria-hidden="true">
          {Array.from({ length: 46 }).map((_, i) => (
            <span key={i} className="bg-ink" style={{ width: i % 3 === 0 ? 3 : i % 5 === 0 ? 1 : 2, height: "100%", opacity: i % 7 === 0 ? 0.35 : 0.9 }} />
          ))}
        </div>
        <figcaption className="mt-4 text-xs text-ink-soft">Illustrative example of the record behind every pack.</figcaption>
      </figure>
    </div>
  );
}
