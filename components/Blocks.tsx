import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail } from "./Icons";
import { company } from "@/lib/site";

export function Crumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ink-soft">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-leaf">
            Home
          </Link>
        </li>
        {items.map((it) => (
          <li key={it.label} className="flex items-center gap-2">
            <span aria-hidden="true" className="opacity-40">
              /
            </span>
            {it.href ? (
              <Link href={it.href} className="hover:text-leaf">
                {it.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {it.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  aside,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  crumbs: { href?: string; label: string }[];
  aside?: React.ReactNode;
}) {
  return (
    <section className="border-b border-line">
      <div className="container-x pb-16 pt-10 md:pb-24 md:pt-14">
        <Crumbs items={crumbs} />
        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="eyebrow flex items-center gap-3 text-leaf">
              <span className="h-px w-8 bg-leaf" aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 className="display mt-6 text-[2.75rem] sm:text-6xl lg:text-[5.25rem]">{title}</h1>
          </div>
          {(intro || aside) && (
            <div className="md:col-span-4">
              {intro && <p className="text-lg leading-relaxed text-ink-soft">{intro}</p>}
              {aside}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  children,
  tone = "dark",
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <div className="grid gap-6 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">
        <p className={`eyebrow flex items-center gap-3 ${tone === "dark" ? "text-leaf" : "text-sprout"}`}>
          <span className={`h-px w-8 ${tone === "dark" ? "bg-leaf" : "bg-sprout"}`} aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
      </div>
      {children && (
        <div className={`md:col-span-4 md:col-start-9 ${tone === "dark" ? "text-ink-soft" : "text-paper/75"} text-lg leading-relaxed`}>
          {children}
        </div>
      )}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "light" | "ghost-light";
}) {
  const styles = {
    solid: "bg-forest text-paper hover:bg-leaf",
    outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
    light: "bg-paper text-forest hover:bg-sprout",
    "ghost-light": "border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-forest",
  }[variant];
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[0.95rem] font-medium transition-colors duration-300 ${styles}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </Link>
  );
}

export function CtaBand({
  title = "Tell us what you need. We’ll come back with a price and a delivery date.",
}: {
  title?: string;
}) {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="grain overflow-hidden rounded-[2rem] bg-leaf text-paper">
        <div className="grid gap-12 p-8 sm:p-12 md:grid-cols-12 md:p-16">
          <div className="md:col-span-7">
            <p className="eyebrow text-sprout">Request a quote</p>
            <h2 className="display mt-5 text-4xl sm:text-5xl">{title}</h2>
          </div>
          <div className="flex flex-col justify-end gap-6 md:col-span-4 md:col-start-9">
            <p className="text-paper/80">
              Wholesale, institutional and programme orders. Tell us the product, pack size and volume.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?type=quote#quote"
                className="group inline-flex items-center gap-2.5 rounded-full bg-paper px-6 py-3.5 font-medium text-forest transition-colors hover:bg-sprout"
              >
                Start an enquiry <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="space-y-2 border-t border-paper/20 pt-6 text-sm">
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-paper/85 hover:text-paper">
                <Mail /> {company.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
