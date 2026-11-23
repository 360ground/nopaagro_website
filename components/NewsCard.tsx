import Link from "next/link";
import NewsArt, { newsTone } from "./NewsArt";
import { ArrowRight } from "./Icons";
import { formatDate, type NewsItem } from "@/lib/news";

export default function NewsCard({ item, asPageHeading = false }: { item: NewsItem; asPageHeading?: boolean }) {
  return (
    <Link href={`/news/${item.slug}`} className="reveal group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-bone">
      <div className={`relative aspect-[16/10] overflow-hidden ${newsTone[item.art]}`}>
        <NewsArt kind={item.art} className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]" />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-8 p-7 sm:p-8">
        <div>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-soft">
            <span className="eyebrow text-leaf">{item.category}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={item.date}>{formatDate(item.date)}</time>
          </p>
          {asPageHeading ? (
            <h2 className="mt-4 font-display text-3xl leading-tight transition-colors group-hover:text-leaf">{item.title}</h2>
          ) : (
            <h3 className="mt-4 font-display text-3xl leading-tight transition-colors group-hover:text-leaf">{item.title}</h3>
          )}
          <p className="mt-3 leading-relaxed text-ink-soft">{item.excerpt}</p>
        </div>
        <span className="inline-flex items-center gap-2 text-leaf">
          <span className="link-underline">Read more</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
