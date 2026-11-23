import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, SectionHead } from "@/components/Blocks";
import ProductArt from "@/components/ProductArt";
import { ArrowRight, Pin } from "@/components/Icons";
import { company, products } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Nopa Agro Processing S.C. is an Ethiopian agro-manufacturing company in Gambela. We buy crops from local farmers and manufacture edible oil, flour, fortified blended food and animal feed, and produce honey on our own farm.",
};

const values = [
  { t: "No shortcuts on quality", d: "If a batch doesn’t meet its specification, it isn’t packed. That rule doesn’t change for deadlines or volumes." },
  { t: "Traceable by default", d: "Every pack carries a code that leads back to its batch record, raw materials and checks." },
  { t: "Value stays local", d: "We buy Ethiopian crops and process them here, so more of the value and the jobs stay in the country." },
  { t: "Long-term partnerships", d: "We plan supply with our customers and growers, so both sides know what to expect." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Nopa"
        crumbs={[{ label: "About" }]}
        title={
          <>
            Rooted in Ethiopian <em className="text-leaf">agriculture.</em>
          </>
        }
        intro={`Established in ${company.founded}, ${company.legalName} is an agro-manufacturing company. We buy crops from local farmers and manufacture them into food and feed for households, institutions and farms across Ethiopia.`}
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="grain sticky top-32 overflow-hidden rounded-[2rem] bg-leaf p-8 text-paper sm:p-10">
              <p className="eyebrow text-sprout">Our purpose</p>
              <p className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
                To make safe, nourishing and affordable food and feed from Ethiopia’s harvest, the same way every time.
              </p>
              <div className="-mx-4 mt-10 grid grid-cols-2 gap-2">
                <ProductArt kind="oil" className="w-full" />
                <ProductArt kind="csb" className="w-full" />
              </div>
            </div>
          </div>
          <div className="space-y-16 lg:col-span-6 lg:col-start-7">
            <div className="reveal">
              <h2 className="display text-4xl sm:text-5xl">Who we are</h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
                <p>
                  Founded in {company.founded}, Nopa Agro Processing is an agro-manufacturing share company headquartered in Gambela, the capital of Gambela Region in western Ethiopia, near Gambela Square. We sit between the farm and the market. We buy maize, sorghum, soya and oilseeds from smallholder farmers and cooperatives, and manufacture them into finished, packed products ready for shops, kitchens, programmes and farms.
                </p>
                <p>
                  We make five product lines: refined edible cooking oil, maize and sorghum flour, fortified corn-soya blend, compound animal and poultry feed, and natural honey. The first four are manufactured on separate lines from farmers’ crops, and the by-products of our oil and milling work, oilseed cake and bran, go into our animal feed. Our honey comes from our own honey farm, where we keep the hives ourselves.
                </p>
              </div>
            </div>
            <div className="reveal grid gap-6 border-t border-line pt-10 sm:grid-cols-2">
              <div>
                <h3 className="eyebrow text-leaf">Mission</h3>
                <p className="mt-4 leading-relaxed">
                  To process Ethiopian crops into food and feed that meet a clear standard in every batch, and to deliver them reliably to the people who depend on them.
                </p>
              </div>
              <div>
                <h3 className="eyebrow text-leaf">Vision</h3>
                <p className="mt-4 leading-relaxed">
                  To be the first processor that Ethiopian distributors, institutions and farmers think of when they need quality they can trust.
                </p>
              </div>
            </div>
            <div className="reveal border-t border-line pt-10">
              <h2 className="display text-4xl sm:text-5xl">What we make</h2>
              <ul className="mt-8 border-t border-ink/70">
                {products.map((p, i) => (
                  <li key={p.slug} className="border-b border-line">
                    <Link href={`/products/${p.slug}`} className="group flex items-center justify-between gap-6 py-5">
                      <span className="flex items-baseline gap-5">
                        <span className="text-sm tabular-nums text-ink-soft">0{i + 1}</span>
                        <span className="font-display text-2xl transition-colors group-hover:text-leaf">{p.name}</span>
                      </span>
                      <ArrowRight className="h-5 w-5 shrink-0 text-leaf transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28">
        <div className="container-x">
          <SectionHead eyebrow="What we stand for" title="Four commitments behind every pack." />
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.t} className="reveal border-t border-ink/70 pt-6" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="font-display text-5xl text-leaf">{i + 1}</span>
                <h3 className="mt-6 font-display text-2xl leading-tight">{v.t}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-10 overflow-hidden rounded-[2rem] border border-line md:grid-cols-2">
          <div className="p-8 sm:p-12">
            <p className="eyebrow flex items-center gap-3 text-leaf">
              <Pin /> Where we are
            </p>
            <h2 className="display mt-6 text-4xl sm:text-5xl">Gambela, Ethiopia</h2>
            <address className="mt-6 text-lg not-italic leading-relaxed text-ink-soft">
              {company.legalName}
              <br />
              {company.address.street}
              <br />
              {company.address.city}, {company.address.region}, {company.address.country}
            </address>
            <Link href="/contact" className="group mt-8 inline-flex items-center gap-2 text-leaf">
              <span className="link-underline">Contact details & directions</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="relative min-h-[18rem] bg-forest">
            <MapSketch />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function MapSketch() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <rect width="400" height="300" fill="#1b3320" />
      <g fill="none" stroke="#f6f3ea" strokeOpacity="0.12" strokeWidth="1">
        {Array.from({ length: 14 }).map((_, i) => (
          <path key={i} d={`M-20 ${30 + i * 22} C 100 ${10 + i * 22}, 220 ${60 + i * 20}, 420 ${20 + i * 22}`} />
        ))}
      </g>
      <g fill="none" stroke="#b7d39a" strokeOpacity="0.55" strokeWidth="2.5" strokeLinecap="round">
        <path d="M40 260 C 120 210, 170 190, 230 150 S 340 70, 380 40" />
        <path d="M60 40 C 130 100, 170 130, 230 150 S 300 230, 360 280" />
      </g>
      <circle cx="230" cy="150" r="34" fill="#538135" opacity="0.35" />
      <circle cx="230" cy="150" r="9" fill="#d9a637" />
      <circle cx="230" cy="150" r="3.5" fill="#1b3320" />
      <text x="248" y="134" fill="#f6f3ea" style={{ font: "600 11px var(--font-sans)", letterSpacing: "0.16em" }}>
        GAMBELA
      </text>
    </svg>
  );
}
