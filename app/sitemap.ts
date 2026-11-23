import type { MetadataRoute } from "next";
import { company, products } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/products", "/sourcing", "/quality", "/partners", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${company.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...products.map((p) => ({ url: `${company.url}/products/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
  ];
}
