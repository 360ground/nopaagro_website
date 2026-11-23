import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, SectionHead } from "@/components/Blocks";
import { ArrowRight } from "@/components/Icons";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who we supply",
  description:
    "Nopa Agro Processing supplies distributors, retailers, hotels, humanitarian and government programmes, farms and agro-dealers across Ethiopia.",
};

const name = (slug: string) => products.find((p) => p.slug === slug)!;

const segments = [
  {
    t: "Distributors & wholesalers",
    d: "Regular, scheduled supply of cooking oil and flour in the pack sizes that move fastest in Ethiopian markets. Consistent quality means fewer returns and repeat customers.",
    items: ["edible-oil", "maize-sorghum-flour"],
    how: ["Volume pricing", "Scheduled deliveries", "Mixed loads across pack sizes"],
  },
  {
    t: "Hotels, restaurants & food makers",
    d: "20-litre oil jerrycans and 25–50 kg flour sacks for kitchens and bakeries that cook at volume and need the same result every service.",
    items: ["edible-oil", "maize-sorghum-flour"],
    how: ["Bulk packs", "Repeat-order supply", "Product specs on request"],
  },
  {
    t: "Humanitarian, NGO & government programmes",
    d: "Fortified corn-soya blend and flour for nutrition, school feeding and emergency response, produced to programme specification and supplied with batch documentation.",
    items: ["fortified-blended-food", "maize-sorghum-flour"],
    how: ["Formulation to specification", "Batch records with delivery", "Buyer-specified marking"],
  },
  {
    t: "Farms, feedlots & agro-dealers",
    d: "Compound rations for poultry, dairy and fattening. Agro-dealers and cooperatives can stock them, and commercial farms can order them direct.",
    items: ["animal-feed"],
    how: ["Rations by animal & stage", "25 kg and 50 kg bags", "Direct farm delivery"],
  },
];

const steps = [
  { t: "Enquiry", d: "Tell us the product, pack size, volume and delivery location." },
  { t: "Quotation", d: "We confirm price, lead time and any specification details." },
  { t: "Samples & specs", d: "For new buyers and programmes we share samples and documentation." },
  { t: "Delivery", d: "Orders are packed, batch-coded and delivered on the agreed schedule." },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we supply"
        crumbs={[{ label: "Partners" }]}
        title={
          <>
            A dependable supplier <em className="text-leaf">for every link in the chain.</em>
          </>
        }
        intro="We supply businesses, institutions and farms that need the right product, in the right pack, on the right day."
      />

      <section className="container-x py-16 md:py-24">
        <div className="space-y-4">
          {segments.map((s, i) => (
            <article key={s.t} className="reveal grid gap-8 rounded-[1.75rem] border border-line bg-bone p-7 sm:p-10 lg:grid-cols-12">
              <div className="lg:col-span-1">
                <span className="font-display text-3xl tabular-nums text-leaf">0{i + 1}</span>
              </div>
              <div className="lg:col-span-6">
                <h2 className="font-display text-3xl leading-tight sm:text-4xl">{s.t}</h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">{s.d}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.items.map((slug) => (
                    <Link
                      key={slug}
                      href={`/products/${slug}`}
                      className="group inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-sm transition-colors hover:border-forest hover:bg-forest hover:text-paper"
                    >
                      {name(slug).name}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <h3 className="eyebrow text-ink-soft">What you can expect</h3>
                <ul className="mt-4 border-t border-line">
                  {s.how.map((h) => (
                    <li key={h} className="border-b border-line py-3">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper-2/60 py-20 md:py-28">
        <div className="container-x">
          <SectionHead eyebrow="Working with us" title="From first enquiry to regular supply.">
            Most first orders go through four simple steps.
          </SectionHead>
          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.t} className="reveal relative rounded-[1.5rem] bg-bone p-7" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf font-display text-lg text-paper">{i + 1}</span>
                <h3 className="mt-10 font-display text-2xl">{s.t}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand title="Looking for a reliable supplier? Let’s talk about volumes and timing." />
    </>
  );
}
