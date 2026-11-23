import { ButtonLink } from "@/components/Blocks";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="eyebrow text-leaf">Error 404</p>
      <h1 className="display mt-6 text-6xl sm:text-7xl">This page isn’t in the harvest.</h1>
      <p className="mt-6 max-w-lg text-lg text-ink-soft">The page you’re looking for may have moved. Try our products, or go back to the home page.</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/products" variant="outline">View products</ButtonLink>
      </div>
    </section>
  );
}
