import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductArt from "@/components/ProductArt";
import { ButtonLink, Crumbs, CtaBand } from "@/components/Blocks";
import { ArrowLeft, ArrowRight } from "@/components/Icons";
import { getProduct, products } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return { title: p.name, description: p.summary };
}

const heroTone: Record<string, string> = {
  oil: "bg-forest text-paper",
  flour: "bg-paper-2 text-ink",
  csb: "bg-sprout text-forest",
  feed: "bg-maize text-forest",
};

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const idx = products.findIndex((x) => x.slug === slug);
  const prev = products[(idx - 1 + products.length) % products.length];
  const next = products[(idx + 1) % products.length];

  return (
    <>
      <section className="container-x pb-16 pt-10 md:pt-14">
        <Crumbs items={[{ href: "/products", label: "Products" }, { label: p.name }]} />
        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-14">
          <div className="flex flex-col justify-between lg:col-span-6 lg:py-4">
            <div>
              <p className="eyebrow flex items-center gap-3 text-leaf">
                <span className="font-display text-base normal-case tracking-normal">0{idx + 1}</span>
                <span className="h-px w-8 bg-leaf" aria-hidden="true" />
                {p.category}
              </p>
              <h1 className="display mt-6 text-5xl sm:text-6xl xl:text-7xl">{p.name}</h1>
              <p className="mt-8 max-w-xl text-xl leading-relaxed text-ink-soft">{p.lead}</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href={`/contact?product=${p.slug}#quote`}>Request a quote</ButtonLink>
              <ButtonLink href="#specification" variant="outline">
                Specification
              </ButtonLink>
            </div>
          </div>
          <div className={`grain relative aspect-[5/4] overflow-hidden rounded-[2rem] lg:col-span-6 ${heroTone[p.art]}`}>
            <svg className="absolute inset-0 h-full w-full opacity-[0.12]" aria-hidden="true">
              <defs>
                <pattern id="rings" width="56" height="56" patternUnits="userSpaceOnUse">
                  <circle cx="28" cy="28" r="1.4" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#rings)" />
            </svg>
            <ProductArt kind={p.art} className="absolute inset-x-0 bottom-[4%] mx-auto w-[86%]" />
            <span className="eyebrow absolute left-6 top-6 opacity-70">{p.packLine}</span>
          </div>
        </div>
      </section>

      {/* Pack sizes */}
      <section className="border-y border-line bg-bone">
        <div className="container-x py-14">
          <div className="grid gap-8 md:grid-cols-12">
            <h2 className="eyebrow text-leaf md:col-span-3 md:pt-2">Pack sizes</h2>
            <ul className={`grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:col-span-9 ${p.packs.length > 2 ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2"}`}>
              {p.packs.map((pk) => (
                <li key={pk.size} className="bg-bone p-6">
                  <p className="font-display text-4xl">{pk.size}</p>
                  <p className="mt-2 text-sm text-ink-soft">{pk.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* About + spec */}
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="eyebrow text-leaf">About the product</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
              {p.body.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </div>
          <div id="specification" className="scroll-mt-32 lg:col-span-5 lg:col-start-8">
            <h2 className="eyebrow text-leaf">Specification</h2>
            <dl className="mt-6 border-t border-ink/70">
              {p.specs.map((s) => (
                <div key={s.label} className="grid grid-cols-[9rem_1fr] gap-4 border-b border-line py-4">
                  <dt className="text-sm text-ink-soft">{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm text-ink-soft">Full technical data sheets are available on request.</p>
          </div>
        </div>
      </section>

      {/* Uses */}
      <section className="grain bg-forest py-20 text-paper md:py-28">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <h2 className="display text-4xl sm:text-5xl md:col-span-7">Where it’s used</h2>
            <div className="md:col-span-4 md:col-start-9">
              <p className="eyebrow text-sprout">Typical buyers</p>
              <p className="mt-2 text-paper/75">{p.buyers.join(" · ")}</p>
            </div>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] bg-line-light md:grid-cols-3">
            {p.uses.map((u, i) => (
              <div key={u.title} className="reveal bg-forest p-8" style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="text-sm tabular-nums text-sprout">0{i + 1}</span>
                <h3 className="mt-10 font-display text-2xl">{u.title}</h3>
                <p className="mt-3 text-paper/70">{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prev / next */}
      <nav aria-label="More products" className="container-x grid gap-4 pt-20 sm:grid-cols-2">
        {[
          { item: prev, label: "Previous product", dir: "prev" },
          { item: next, label: "Next product", dir: "next" },
        ].map(({ item, label, dir }) => (
          <Link
            key={dir}
            href={`/products/${item.slug}`}
            className={`group flex items-center gap-6 rounded-[1.5rem] border border-line p-6 transition-colors hover:bg-bone ${dir === "next" ? "sm:flex-row-reverse sm:text-right" : ""}`}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-paper-2 transition-colors group-hover:bg-forest group-hover:text-paper">
              {dir === "prev" ? <ArrowLeft /> : <ArrowRight />}
            </span>
            <span>
              <span className="block text-sm text-ink-soft">{label}</span>
              <span className="mt-1 block font-display text-2xl">{item.name}</span>
            </span>
          </Link>
        ))}
      </nav>

      <CtaBand title={`Ordering ${p.shortName.toLowerCase()}? Tell us the pack size and volume.`} />
    </>
  );
}
