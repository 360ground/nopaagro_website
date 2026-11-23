import Link from "next/link";
import ProductArt from "@/components/ProductArt";
import { ButtonLink, CtaBand, SectionHead } from "@/components/Blocks";
import { ArrowRight, ArrowUpRight, Check } from "@/components/Icons";
import BatchCard from "@/components/BatchCard";
import PartnerLogos from "@/components/PartnerLogos";
import { company, products } from "@/lib/site";

const tiles = [
  { slug: "edible-oil", bg: "bg-forest", text: "text-paper", h: "h-[19rem] sm:h-[26rem]", art: "w-[88%] -translate-y-[52%]" },
  { slug: "maize-sorghum-flour", bg: "bg-paper-2", text: "text-ink", h: "h-[13rem] sm:h-[17rem]", art: "w-[68%] -translate-y-[62%]" },
  { slug: "animal-feed", bg: "bg-maize", text: "text-forest", h: "h-[13rem] sm:h-[17rem]", art: "w-[68%] -translate-y-[62%]" },
  { slug: "fortified-blended-food", bg: "bg-sprout", text: "text-forest", h: "h-[19rem] sm:h-[26rem]", art: "w-[88%] -translate-y-[52%]" },
];

const steps = [
  {
    t: "Buy from farmers",
    d: "We buy maize, sorghum, soya and oilseeds from local farmers and cooperatives. Every load is weighed and inspected when it arrives.",
  },
  {
    t: "Clean & process",
    d: "Each product has its own line for cleaning, refining, milling, blending or mixing, so products never mix.",
  },
  {
    t: "Check",
    d: "Samples from every batch are checked against the product specification before anything is packed.",
  },
  {
    t: "Pack & deliver",
    d: "Packs are sealed and batch-coded, then delivered to your warehouse or distribution point.",
  },
];

const sourcing = [
  { crop: "Maize", into: "Flour · corn-soya blend · animal feed" },
  { crop: "Sorghum", into: "Flour · animal feed" },
  { crop: "Soya beans", into: "Corn-soya blend · animal feed" },
  { crop: "Oilseeds", into: "Cooking oil · oilseed cake for feed" },
];

const segments = [
  {
    t: "Distributors & retail",
    d: "Steady supply of oil and flour in the pack sizes Ethiopian shoppers buy.",
    p: "Edible oil · Flour · Honey",
  },
  {
    t: "Institutions & programmes",
    d: "Fortified blended food and flour for nutrition, school feeding and relief operations, with batch documentation.",
    p: "Corn-soya blend · Flour",
  },
  {
    t: "Farms & feedlots",
    d: "Compound rations for poultry, dairy and fattening, delivered in 25kg and 50kg bags.",
    p: "Animal & poultry feed",
  },
];

export default function Home() {
  const bySlug = Object.fromEntries(products.map((p, i) => [p.slug, { ...p, n: i + 1 }]));
  const col = (a: number, b: number) =>
    [tiles[a], tiles[b]].map((t) => {
      const p = bySlug[t.slug];
      return (
        <Link
          key={t.slug}
          href={`/products/${t.slug}`}
          className={`group relative flex ${t.h} flex-col justify-between overflow-hidden rounded-[1.5rem] ${t.bg} ${t.text} p-5`}
        >
          <div className="flex items-start justify-between text-xs">
            <span className="tabular-nums opacity-70">0{p.n}</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current/25 transition-all duration-300 group-hover:rotate-45 group-hover:bg-paper group-hover:text-forest">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
          <ProductArt
            kind={p.art}
            className={`pointer-events-none absolute inset-x-0 top-1/2 mx-auto ${t.art} transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]`}
          />
          <p className="relative font-display text-lg leading-tight sm:text-xl">{p.shortName}</p>
        </Link>
      );
    });

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x grid gap-12 pb-16 pt-10 md:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-24">
          <div className="flex flex-col justify-between lg:col-span-6 lg:py-6">
            <div>
              <p className="eyebrow flex items-center gap-3 text-leaf">
                <span className="h-px w-8 bg-leaf" aria-hidden="true" />
                Agro-manufacturing · Gambela, Ethiopia
              </p>
              <h1 className="display mt-8 text-[3.1rem] sm:text-7xl xl:text-[6.4rem]">
                Processing Ethiopia’s harvest <em className="text-leaf" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>with quality and care.</em>
              </h1>
            </div>
            <div className="mt-10 max-w-xl">
              <p className="text-lg leading-relaxed text-ink-soft sm:text-xl">
                Nopa is an Ethiopian agro-manufacturing company. We buy crops from local farmers and manufacture them into cooking oil, flour, fortified food and animal feed. We also produce honey on our own farm.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/products">Explore our products</ButtonLink>
                <ButtonLink href="/contact?type=quote#quote" variant="outline">
                  Request a quote
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-6">
            <div className="flex flex-col gap-3 sm:gap-4">{col(0, 2)}</div>
            <div className="flex flex-col gap-3 pt-10 sm:gap-4 sm:pt-16">{col(1, 3)}</div>
          </div>
        </div>

        <div className="border-y border-line">
          <dl className="container-x grid grid-cols-2 md:grid-cols-4">
            {[
              ["Established", String(company.founded)],
              ["Raw materials", "From local farmers"],
              ["Product lines", "Five, incl. honey"],
              ["Head office", "Gambela, Ethiopia"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="border-line py-7 pr-4 even:border-l even:pl-5 [&:nth-child(n+3)]:border-t md:border-l md:pl-8 md:first:border-l-0 md:first:pl-0 md:[&:nth-child(n+3)]:border-t-0"
              >
                <dt className="text-sm text-ink-soft">{k}</dt>
                <dd className="mt-1 font-display text-2xl md:text-3xl">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="container-x py-24 md:py-36">
        <div className="grid gap-10 md:grid-cols-12">
          <p className="eyebrow flex items-center gap-3 self-start text-leaf md:col-span-3 md:pt-4">
            <span className="h-px w-8 bg-leaf" aria-hidden="true" />
            Who we are
          </p>
          <div className="reveal md:col-span-9">
            <p className="font-display text-3xl leading-[1.18] tracking-tight sm:text-[2.6rem] lg:text-5xl">
              We are an agro-manufacturing company. We buy crops from the farmers who grow them and manufacture{" "}
              <span className="text-leaf">food and feed that people can rely on</span>: in the kitchen, in a school feeding programme, or on a poultry farm outside the city.
            </p>
            <div className="mt-12 grid gap-8 border-t border-line pt-8 sm:grid-cols-2">
              <p className="leading-relaxed text-ink-soft">
                Farmers grow the maize, sorghum, soya and oilseeds; we turn them into finished products. We clean, refine, mill, blend and pack, and we check every batch along the way. Whether you buy one pallet or a full programme’s supply, you should get the same product every time.
              </p>
              <div className="flex items-end">
                <Link href="/about" className="group inline-flex items-center gap-3 text-lg">
                  <span className="link-underline">More about Nopa</span>
                  <ArrowRight className="h-5 w-5 text-leaf transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-bone py-24 md:py-32">
        <div className="container-x">
          <SectionHead eyebrow="Our products" title={<>Five product lines. <br className="hidden sm:block" />One standard.</>}>
            Four are manufactured from farmers’ crops on their own lines. The fifth, honey, comes from our own farm.
          </SectionHead>

          <ul className="mt-16 border-t border-ink/80">
            {products.map((p, i) => (
              <li key={p.slug} className="reveal border-b border-line">
                <Link
                  href={`/products/${p.slug}`}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 gap-y-3 py-7 sm:grid-cols-[3.5rem_1fr_9rem_3rem] md:grid-cols-[4.5rem_1.4fr_1fr_11rem_3rem] md:gap-x-8"
                >
                  <span className="self-start pt-1.5 font-display text-xl tabular-nums text-ink-soft md:text-2xl">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl leading-tight transition-colors group-hover:text-leaf sm:text-3xl md:text-[2.1rem]">{p.name}</h3>
                    <p className="mt-1.5 text-ink-soft">{p.category}</p>
                  </div>
                  <p className="col-start-2 text-ink-soft md:col-start-auto">{p.packLine}</p>
                  <div className="hidden h-24 overflow-hidden rounded-xl bg-paper transition-colors duration-500 group-hover:bg-sprout/60 sm:col-start-3 sm:row-start-1 sm:block md:col-start-auto md:row-start-auto md:h-28">
                    <ProductArt kind={p.art} className="h-full w-full translate-y-1 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <span className="col-start-3 row-start-1 flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-line transition-all duration-300 group-hover:border-forest group-hover:bg-forest group-hover:text-paper sm:col-start-4 md:col-start-auto md:row-start-auto">
                    <ArrowRight />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SOURCING */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow flex items-center gap-3 text-leaf">
              <span className="h-px w-8 bg-leaf" aria-hidden="true" />
              Sourcing
            </p>
            <h2 className="display mt-5 text-4xl sm:text-5xl">Grown by local farmers. Manufactured by Nopa.</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              We don’t grow the crops we manufacture. We buy them from smallholder farmers and cooperatives, which gives farmers a steady buyer for their harvest and gives us inputs we know the origin of.
            </p>
            <div className="mt-9">
              <ButtonLink href="/sourcing" variant="outline">
                How we source
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="reveal overflow-hidden rounded-[1.5rem] border border-line bg-bone">
              {sourcing.map((s) => (
                <li key={s.crop} className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-line px-6 py-5 last:border-b-0 sm:grid-cols-[10rem_1fr]">
                  <span className="font-display text-2xl">{s.crop}</span>
                  <span className="text-right text-sm text-ink-soft sm:text-left sm:text-base">{s.into}</span>
                </li>
              ))}
              <li className="grid grid-cols-[1fr_auto] items-center gap-4 bg-honey px-6 py-5 sm:grid-cols-[10rem_1fr]">
                <span className="font-display text-2xl text-forest">Honey</span>
                <span className="text-right text-sm text-forest sm:text-left sm:text-base">From our own honey farm</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="grain bg-forest py-24 text-paper md:py-32">
        <div className="container-x">
          <SectionHead tone="light" eyebrow="How we work" title={<>From the field <em className="text-sprout">to the sack.</em></>}>
            Four steps, and we check the product after every one of them.
          </SectionHead>
          <ol className="mt-16 grid gap-px overflow-hidden rounded-[1.5rem] bg-line-light sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.t} className="reveal flex min-h-[17rem] flex-col gap-12 bg-forest p-7" style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="font-display text-6xl text-sprout/90">{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl">{s.t}</h3>
                  <p className="mt-3 leading-relaxed text-paper/70">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHO WE SUPPLY */}
      <section className="container-x py-24 md:py-32">
        <SectionHead eyebrow="Who we supply" title="Built for buyers who need it right every time.">
          From a wholesaler restocking oil to an agency planning months of supply.
        </SectionHead>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {segments.map((s, i) => (
            <article key={s.t} className="reveal flex flex-col justify-between rounded-[1.5rem] border border-line bg-bone p-8" style={{ transitionDelay: `${i * 90}ms` }}>
              <div>
                <p className="eyebrow text-ink-soft">{s.p}</p>
                <h3 className="mt-10 font-display text-3xl leading-tight">{s.t}</h3>
                <p className="mt-4 leading-relaxed text-ink-soft">{s.d}</p>
              </div>
              <Link href="/partners" className="group mt-10 inline-flex items-center gap-2 text-leaf">
                <span className="link-underline">How we work with you</span> <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="container-x pb-24 md:pb-32">
        <div className="grid gap-6 border-t border-line pt-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow flex items-center gap-3 text-leaf">
              <span className="h-px w-8 bg-leaf" aria-hidden="true" />
              Our partners
            </p>
            <h2 className="display mt-5 text-3xl sm:text-4xl">Working alongside organisations that invest in Ethiopia’s food system.</h2>
          </div>
        </div>
        <div className="reveal mt-10">
          <PartnerLogos />
        </div>
      </section>

      {/* QUALITY */}
      <section className="bg-paper-2/60 py-24 md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-12">
          <div className="reveal lg:col-span-6">
            <BatchCard />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow flex items-center gap-3 text-leaf">
              <span className="h-px w-8 bg-leaf" aria-hidden="true" />
              Quality & food safety
            </p>
            <h2 className="display mt-5 text-4xl sm:text-5xl">Every bag can be traced back to its batch.</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Every pack carries a batch code, and each code links to a record of when the batch was made, what went into it and who checked it.
            </p>
            <ul className="mt-8 space-y-3">
              {["Raw materials inspected at intake", "Separate lines for food and feed", "Batch checks before packing", "Sealed, coded packaging"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-leaf text-paper">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <ButtonLink href="/quality" variant="outline">
                Our approach to quality
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
