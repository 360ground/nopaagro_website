import type { Metadata } from "next";
import { PageHero } from "@/components/Blocks";
import QuoteForm from "@/components/QuoteForm";
import { Mail, Pin } from "@/components/Icons";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & request a quote",
  description: `Contact ${company.legalName} in Bole, Addis Ababa. Email ${company.email} or send a quote request.`,
};

const mapQuery = encodeURIComponent("Bole, Addis Ababa, Ethiopia");

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        crumbs={[{ label: "Contact" }]}
        title={
          <>
            Let’s talk about <em className="text-leaf">your order.</em>
          </>
        }
        intro="Questions, quotations, samples or specifications. Email us or send the form and our sales team will reply."
      />

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="space-y-4 lg:col-span-4">
            <a href={`mailto:${company.email}`} className="group block rounded-[1.5rem] border border-line bg-bone p-7 transition-colors hover:border-forest">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-leaf text-paper">
                <Mail className="h-5 w-5" />
              </span>
              <p className="mt-8 text-sm text-ink-soft">Email</p>
              <p className="mt-1 font-display text-2xl group-hover:text-leaf">{company.email}</p>
            </a>
            <div className="rounded-[1.5rem] border border-line bg-bone p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-leaf text-paper">
                <Pin className="h-5 w-5" />
              </span>
              <p className="mt-8 text-sm text-ink-soft">Head office</p>
              <address className="mt-1 font-display text-xl not-italic leading-snug">
                {company.address.line1}, {company.address.line2}
                <br />
                {company.address.city}, {company.address.country}
              </address>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-4 inline-block text-sm text-leaf"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </aside>

          <div id="quote" className="scroll-mt-32 lg:col-span-8">
            <div className="rounded-[2rem] bg-forest p-7 text-paper sm:p-10 md:p-12">
              <p className="eyebrow text-sprout">Request a quote</p>
              <h2 className="display mt-4 text-4xl sm:text-5xl">Tell us what you need.</h2>
              <p className="mt-4 max-w-xl text-paper/70">
                The more detail you share (product, pack size, quantity and delivery location), the faster we can come back with a firm price.
              </p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="overflow-hidden rounded-[2rem] border border-line">
          <iframe
            title="Map showing Bole, Addis Ababa"
            src={`https://maps.google.com/maps?q=${mapQuery}&z=13&output=embed`}
            className="h-[22rem] w-full grayscale-[0.4] md:h-[28rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
