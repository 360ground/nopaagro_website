import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink, Crumbs } from "@/components/Blocks";
import NewsArt, { newsTone } from "@/components/NewsArt";
import NewsCard from "@/components/NewsCard";
import { ArrowLeft } from "@/components/Icons";
import { formatDate, getNews, news } from "@/lib/news";

export const dynamicParams = false;

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const n = getNews(slug);
  if (!n) return {};
  return { title: n.title, description: n.excerpt, openGraph: { type: "article", publishedTime: n.date } };
}

export default async function NewsArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const n = getNews(slug);
  if (!n) notFound();
  const others = news.filter((x) => x.slug !== slug).slice(0, 2);

  return (
    <>
      <article>
        <header className="container-x pt-10 md:pt-14">
          <Crumbs items={[{ href: "/news", label: "News" }, { label: n.title }]} />
          <div className="mx-auto mt-14 max-w-3xl md:mt-20">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-ink-soft">
              <span className="eyebrow text-leaf">{n.category}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={n.date}>{formatDate(n.date)}</time>
            </p>
            <h1 className="display mt-6 text-[2.6rem] sm:text-6xl">{n.title}</h1>
            <p className="mt-8 text-xl leading-relaxed text-ink-soft">{n.excerpt}</p>
          </div>
          <div className={`relative mx-auto mt-12 aspect-[16/8] max-w-5xl overflow-hidden rounded-[2rem] ${newsTone[n.art]}`}>
            <NewsArt kind={n.art} className="absolute inset-0 h-full w-full" />
          </div>
        </header>

        <div className="container-x py-16 md:py-20">
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-ink-soft">
            {n.body.map((b, i) =>
              b.type === "h" ? (
                <h2 key={i} className="pt-6 font-display text-3xl text-ink">
                  {b.text}
                </h2>
              ) : (
                <p key={i}>{b.text}</p>
              ),
            )}
            <div className="flex flex-wrap gap-3 border-t border-line pt-10">
              <ButtonLink href="/contact">Get in touch</ButtonLink>
              <Link href="/news" className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-ink hover:text-leaf">
                <ArrowLeft /> All news
              </Link>
            </div>
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className="border-t border-line bg-bone py-16 md:py-24">
          <div className="container-x">
            <h2 className="eyebrow text-leaf">More news</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {others.map((o) => (
                <NewsCard key={o.slug} item={o} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
