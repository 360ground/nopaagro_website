"use client";

import { useEffect, useRef, useState } from "react";
import { company, products } from "@/lib/site";
import { ArrowUpRight } from "./Icons";

const field =
  "w-full rounded-xl border border-paper/20 bg-paper/5 px-4 py-3.5 text-paper placeholder:text-paper/40 outline-none transition-colors focus:border-sprout focus:bg-paper/10";
const label = "mb-2 block text-sm text-paper/75";

/**
 * Static-hosting friendly: composes the enquiry into an email to the sales inbox.
 * Swap handleSubmit for an API/form-service call when a backend is available.
 */
export default function QuoteForm() {
  const productRef = useRef<HTMLSelectElement>(null);
  const [sent, setSent] = useState(false);

  // Preselect the product when arriving from a product page (?product=slug).
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("product");
    if (slug && productRef.current && products.some((p) => p.slug === slug)) productRef.current.value = slug;
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const product = products.find((p) => p.slug === d.get("product"))?.name ?? "General enquiry";
    const lines = [
      `Name: ${d.get("name")}`,
      `Organisation: ${d.get("company") || "-"}`,
      `Phone: ${d.get("phone") || "-"}`,
      `Email: ${d.get("email")}`,
      `Product: ${product}`,
      `Pack size & quantity: ${d.get("quantity") || "-"}`,
      `Delivery location: ${d.get("location") || "-"}`,
      "",
      `${d.get("message") || ""}`,
    ];
    const subject = `Quote request: ${product} (${d.get("company") || d.get("name")})`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={label}>
          Full name *
        </label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="company" className={label}>
          Company / organisation
        </label>
        <input id="company" name="company" autoComplete="organization" className={field} />
      </div>
      <div>
        <label htmlFor="email" className={label}>
          Email *
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="phone" className={label}>
          Phone
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+251" className={field} />
      </div>
      <div>
        <label htmlFor="product" className={label}>
          Product
        </label>
        <select ref={productRef} id="product" name="product" defaultValue="" className={`${field} appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat`} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='m3 4.5 3 3 3-3' stroke='%23f6f3ea' stroke-width='1.4' fill='none'/%3E%3C/svg%3E\")" }}>
          <option value="" className="text-ink">
            General enquiry
          </option>
          {products.map((p) => (
            <option key={p.slug} value={p.slug} className="text-ink">
              {p.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="quantity" className={label}>
          Pack size & quantity
        </label>
        <input id="quantity" name="quantity" placeholder="e.g. 500 × 20L jerrycans" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="location" className={label}>
          Delivery location
        </label>
        <input id="location" name="location" placeholder="City / region" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={label}>
          Message
        </label>
        <textarea id="message" name="message" rows={5} className={`${field} resize-y`} placeholder="Timing, specification, anything else we should know" />
      </div>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-paper/55" aria-live="polite">
          {sent ? "Your email app should open with the enquiry ready to send." : "Sending opens your email app with the details filled in."}
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-paper px-7 py-4 font-medium text-forest transition-colors hover:bg-sprout"
        >
          Send enquiry <ArrowUpRight />
        </button>
      </div>
    </form>
  );
}
