import type { Metadata } from "next";
import Link from "next/link";
import ProductArt from "@/components/ProductArt";
import { ButtonLink, PageHero, SectionHead } from "@/components/Blocks";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Sourcing: our farmers & honey farm",
  description:
    "Nopa Agro Processing buys maize, sorghum, soya and oilseeds from local smallholder farmers and cooperatives, and produces honey on its own farm.",
};

const crops = [
  {
    crop: "Maize",
    note: "Our biggest input. Milled into flour, blended into corn-soya blend and mixed into animal feed.",
    into: [
      { label: "Maize & Sorghum Flour", slug: "maize-sorghum-flour" },
      { label: "Corn-Soya Blend", slug: "fortified-blended-food" },
      { label: "Animal Feed", slug: "animal-feed" },
    ],
  },
  {
    crop: "Sorghum",
    note: "A drought-hardy staple, cleaned and milled into flour. Bran goes into feed.",
    into: [
      { label: "Maize & Sorghum Flour", slug: "maize-sorghum-flour" },
      { label: "Animal Feed", slug: "animal-feed" },
    ],
  },
  {
    crop: "Soya beans",
    note: "The protein in our corn-soya blend, and a valuable feed ingredient.",
    into: [
      { label: "Corn-Soya Blend", slug: "fortified-blended-food" },
      { label: "Animal Feed", slug: "animal-feed" },
    ],
  },
  {
    crop: "Oilseeds",
    note: "Pressed and refined into cooking oil. The oilseed cake left behind feeds livestock.",
    into: [
      { label: "Edible Cooking Oil", slug: "edible-oil" },
      { label: "Animal Feed", slug: "animal-feed" },
    ],
  },
];

const commitments = [
  { t: "Clear grading", d: "Produce is weighed and graded openly, so farmers can see how the price is worked out." },
  { t: "Fair, agreed prices", d: "Prices and payment terms are agreed before delivery, not changed at the gate." },
  { t: "A steady buyer", d: "Our lines run all year, so farmers can count on a buyer season after season." },
  { t: "Feedback on quality", d: "We tell farmers why a load did or didn’t make grade, so the next harvest sells better." },
];

export default function SourcingPage() {
  return (
    <>
      <PageHero
        eyebrow="Sourcing"
        crumbs={[{ label: "Sourcing" }]}
        title={
          <>
            Grown by local farmers. <em className="text-leaf">Manufactured by Nopa.</em>
          </>
        }
        intro="We are an agro-manufacturing company, not a plantation. The crops we manufacture are grown by smallholder farmers and cooperatives, and we buy from them directly."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="display text-4xl sm:text-5xl">Why we buy from farmers</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-7">
            <p>
              Ethiopia’s maize, sorghum, soya and oilseeds are mostly grown on small family farms. Selling raw grain at harvest often means low prices and long trips to market. A manufacturer nearby that buys steadily changes that.
            </p>
            <p>
              For us, buying directly means we know where our inputs come from and how they were handled. That is the starting point for every quality check we run later.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28">
        <div className="container-x">
          <SectionHead eyebrow="What we buy" title="Four crops, five products.">
            Each crop goes into more than one product, and the by-products go into animal feed, so nothing useful is wasted.
          </SectionHead>
          <ul className="mt-14 border-t border-ink/70">
            {crops.map((c, i) => (
              <li key={c.crop} className="reveal grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-8">
                <span className="font-display text-xl tabular-nums text-ink-soft md:col-span-1">0{i + 1}</span>
                <h3 className="font-display text-3xl md:col-span-3">{c.crop}</h3>
                <p className="leading-relaxed text-ink-soft md:col-span-4">{c.note}</p>
                <div className="flex flex-wrap content-start gap-2 md:col-span-4">
                  {c.into.map((x) => (
                    <Link
                      key={x.slug}
                      href={`/products/${x.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm transition-colors hover:border-forest hover:bg-forest hover:text-paper"
                    >
                      {x.label} <ArrowRight className="h-3 w-3" />
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grain bg-forest py-20 text-paper md:py-28">
        <div className="container-x">
          <SectionHead tone="light" eyebrow="Working with farmers" title="What farmers can expect from us." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] bg-line-light sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c, i) => (
              <div key={c.t} className="reveal bg-forest p-8" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="font-display text-5xl text-sprout/90">{i + 1}</span>
                <h3 className="mt-8 font-display text-2xl">{c.t}</h3>
                <p className="mt-3 leading-relaxed text-paper/70">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="grid overflow-hidden rounded-[2rem] bg-honey md:grid-cols-2">
          <div className="p-8 sm:p-12">
            <p className="eyebrow text-forest/70">New · Our honey farm</p>
            <h2 className="display mt-5 text-4xl text-forest sm:text-5xl">The one thing we grow ourselves.</h2>
            <p className="mt-6 text-lg leading-relaxed text-forest/80">
              Our honey doesn’t come from outside suppliers. We keep our own hives on Nopa’s honey farm, harvest the comb ourselves, and strain and pack the honey with nothing added.
            </p>
            <div className="mt-9">
              <ButtonLink href="/products/honey">Discover our honey</ButtonLink>
            </div>
          </div>
          <div className="relative min-h-[18rem]">
            <ProductArt kind="honey" className="absolute inset-x-0 bottom-0 mx-auto w-[88%]" />
          </div>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-8 rounded-[2rem] border border-line bg-bone p-8 sm:p-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <p className="eyebrow text-leaf">For farmers & cooperatives</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">Do you grow maize, sorghum, soya or oilseeds? Talk to us about selling your harvest.</h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <ButtonLink href="/contact?subject=supply#message">Contact our buying team</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
