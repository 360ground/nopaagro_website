import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/Blocks";
import NewsCard from "@/components/NewsCard";
import { news } from "@/lib/news";

export const metadata: Metadata = {
  title: "News",
  description: "News and updates from Nopa Agro Processing: our people, our products and new businesses.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        crumbs={[{ label: "News" }]}
        title={
          <>
            News from <em className="text-leaf">Nopa.</em>
          </>
        }
        intro="Updates on our people, our products and the new businesses we are building."
      />
      <section className="container-x py-16 md:py-24">
        <div className="grid gap-5 md:grid-cols-2">
          {news.map((n) => (
            <NewsCard key={n.slug} item={n} asPageHeading />
          ))}
        </div>
      </section>
      <CtaBand title="Media or partnership enquiry? We’d be glad to hear from you." />
    </>
  );
}
