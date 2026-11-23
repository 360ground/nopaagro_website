"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { ArrowRight, ArrowUpRight } from "./Icons";
import { company, nav, products } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`sticky top-0 z-50 transition-[background,box-shadow] duration-300 ${
        // No backdrop-filter while the mobile menu is open: it would become the containing block for the fixed overlay.
        open
          ? "bg-paper shadow-[0_1px_0_var(--color-line)]"
          : scrolled
            ? "bg-paper/92 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md"
            : "bg-paper"
      }`}
    >
      <div className="hidden border-b border-line md:block">
        <div className="container-x flex h-9 items-center justify-between text-[0.78rem] text-ink-soft">
          <p>{company.tagline}</p>
          <div className="flex items-center gap-6">
            <a href={company.phoneHref} className="link-underline hover:text-ink">
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="link-underline hover:text-ink">
              {company.email}
            </a>
          </div>
        </div>
      </div>

      <div className="container-x flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/" aria-label="Nopa Agro Processing, home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) =>
            item.href === "/products" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setMenu(true)}
                onMouseLeave={() => setMenu(false)}
              >
                <Link
                  href={item.href}
                  aria-expanded={menu}
                  onFocus={() => setMenu(true)}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.95rem] transition-colors hover:text-leaf ${
                    isActive(item.href) ? "text-leaf" : ""
                  }`}
                >
                  {item.label}
                  <svg viewBox="0 0 12 12" className={`h-3 w-3 transition-transform ${menu ? "rotate-180" : ""}`} aria-hidden="true">
                    <path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.4" fill="none" />
                  </svg>
                </Link>
                <div
                  className={`absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3 transition-all duration-200 ${
                    menu ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border border-line bg-bone shadow-[0_24px_60px_-20px_rgb(24_33_26/0.25)]">
                    <ul className="grid grid-cols-2 gap-px bg-line">
                      {products.map((p, i) => (
                        <li key={p.slug} className="bg-bone">
                          <Link
                            href={`/products/${p.slug}`}
                            onBlur={(e) => {
                              if (!e.currentTarget.closest("nav")?.contains(e.relatedTarget as Node)) setMenu(false);
                            }}
                            className="group flex h-full flex-col gap-1 p-5 transition-colors hover:bg-paper"
                          >
                            <span className="text-xs tabular-nums text-ink-soft">0{i + 1}</span>
                            <span className="font-display text-lg leading-snug group-hover:text-leaf">{p.name}</span>
                            <span className="text-sm text-ink-soft">{p.packLine}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href="/products" className="flex items-center justify-between bg-forest px-5 py-3.5 text-sm text-paper hover:bg-forest-2">
                      View all products <ArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-[0.95rem] transition-colors hover:text-leaf ${isActive(item.href) ? "text-leaf" : ""}`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact#quote"
            className="hidden items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-leaf sm:inline-flex"
          >
            Request a quote <ArrowUpRight />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-[1.5px] w-5 bg-ink transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-[1.5px] w-5 bg-ink transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto bg-paper transition-opacity duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="container-x flex flex-col py-6" aria-label="Mobile">
          {nav.map((item) => (
            <div key={item.href} className="border-b border-line">
              <Link href={item.href} className="flex items-center justify-between py-4 font-display text-3xl">
                {item.label}
                <ArrowRight className="h-5 w-5 text-leaf" />
              </Link>
              {item.href === "/products" && (
                <ul className="-mt-1 mb-4 space-y-2 pl-1">
                  {products.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/products/${p.slug}`} className="text-ink-soft hover:text-leaf">
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <Link href="/contact#quote" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-4 text-paper">
            Request a quote <ArrowUpRight />
          </Link>
          <div className="mt-8 space-y-1 text-sm text-ink-soft">
            <a href={company.phoneHref} className="block">
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="block">
              {company.email}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
