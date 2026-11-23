import type { Metadata } from "next";
import Link from "next/link";
import ProductArt from "@/components/ProductArt";
import { CtaBand, PageHero } from "@/components/Blocks";
import { ArrowRight } from "@/components/Icons";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Refined edible cooking oil, maize and sorghum flour, fortified corn-soya blend and compound animal and poultry feed from Nopa Agro Processing.",
};

const tones = ["bg-forest text-paper", "bg-paper-2 text-ink", "bg-sprout text-forest", "bg-maize text-forest", "bg-honey text-forest"];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        crumbs={[{ label: "Products" }]}
        title={
          <>
            Food and feed, <em className="text-leaf">made in Ethiopia.</em>
          </>
        }
        intro="Five product lines, manufactured from crops we buy from local farmers and honey from our own farm. Every pack is sealed and batch-coded."
      />

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-5 md:grid-cols-2">
          {products.map((p, i) => {
            const wide = i === products.length - 1 && products.length % 2 === 1;
            return (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className={`reveal group flex flex-col overflow-hidden rounded-[1.75rem] border border-line bg-bone ${wide ? "md:col-span-2 md:grid md:grid-cols-2" : ""}`}
              style={{ transitionDelay: `${(i % 2) * 90}ms` }}
            >
              <div className={`relative aspect-[4/3] overflow-hidden ${tones[i % tones.length]}`}>
                <span className="absolute left-6 top-5 font-display text-2xl tabular-nums opacity-70">0{i + 1}</span>
                <span className="eyebrow absolute right-6 top-6 opacity-70">{p.category}</span>
                <ProductArt kind={p.art} className="absolute inset-x-0 bottom-0 mx-auto w-[80%] transition-transform duration-700 ease-out-soft group-hover:-translate-y-2 group-hover:scale-[1.03]" />
              </div>
              <div className="flex flex-1 flex-col justify-between gap-8 p-7 sm:p-9">
                <div>
                  <h2 className="font-display text-3xl leading-tight transition-colors group-hover:text-leaf sm:text-4xl">{p.name}</h2>
                  <p className="mt-3 max-w-md leading-relaxed text-ink-soft">{p.summary}</p>
                </div>
                <div className="flex items-end justify-between gap-6 border-t border-line pt-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-ink-soft">Pack sizes</p>
                    <p className="mt-1">{p.packLine}</p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line transition-all group-hover:border-forest group-hover:bg-forest group-hover:text-paper">
                    <ArrowRight />
                  </span>
                </div>
              </div>
            </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-line bg-bone">
        <div className="container-x py-16 md:py-20">
          <h2 className="eyebrow text-leaf">At a glance</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[40rem] text-left">
              <thead>
                <tr className="border-b border-ink/70 text-sm text-ink-soft">
                  <th className="py-3 pr-6 font-medium">Product</th>
                  <th className="py-3 pr-6 font-medium">Category</th>
                  <th className="py-3 pr-6 font-medium">Pack sizes</th>
                  <th className="py-3 font-medium">Typical buyers</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.slug} className="border-b border-line align-top">
                    <td className="py-5 pr-6">
                      <Link href={`/products/${p.slug}`} className="link-underline font-display text-xl">
                        {p.name}
                      </Link>
                    </td>
                    <td className="py-5 pr-6 text-ink-soft">{p.category}</td>
                    <td className="py-5 pr-6 text-ink-soft">{p.packs.map((x) => x.size).join(" · ")}</td>
                    <td className="py-5 text-ink-soft">{p.buyers.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBand title="Need a product, pack or formulation you don’t see here? Ask us." />
    </>
  );
}
