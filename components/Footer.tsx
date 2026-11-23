import Link from "next/link";
import Logo from "./Logo";
import { company, nav, products } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-forest text-paper">
      <div className="container-x grid gap-12 pb-10 pt-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo tone="light" />
          <p className="mt-8 max-w-sm font-display text-3xl leading-tight text-paper/90">{company.tagline}.</p>
        </div>

        <div className="md:col-span-3">
          <h2 className="eyebrow text-sprout">Products</h2>
          <ul className="mt-5 space-y-3 text-paper/80">
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} className="link-underline hover:text-paper">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="eyebrow text-sprout">Company</h2>
          <ul className="mt-5 space-y-3 text-paper/80">
            <li>
              <Link href="/" className="link-underline hover:text-paper">
                Home
              </Link>
            </li>
            {nav
              .filter((n) => n.href !== "/products")
              .map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-underline hover:text-paper">
                    {n.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="eyebrow text-sprout">Reach us</h2>
          <address className="mt-5 space-y-3 not-italic text-paper/80">
            <p>
              {company.address.street}
              <br />
              {company.address.city}, {company.address.region}
              <br />
              {company.address.country}
            </p>
            <a href={`mailto:${company.email}`} className="link-underline block w-fit hover:text-paper">
              {company.email}
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-line-light">
        <div className="container-x flex flex-col gap-2 py-6 text-sm text-paper/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p>Gambela, Ethiopia</p>
        </div>
      </div>
    </footer>
  );
}
