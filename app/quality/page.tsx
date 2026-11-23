import type { Metadata } from "next";
import BatchCard from "@/components/BatchCard";
import { CtaBand, PageHero, SectionHead } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Quality & food safety",
  description: "How Nopa Agro Processing controls quality from raw material intake to batch release and delivery.",
};

const stages = [
  {
    t: "Intake",
    d: "Incoming oilseeds and grain are sampled and inspected for moisture, foreign matter and visible damage. Loads that fail inspection are rejected at the gate.",
  },
  {
    t: "Cleaning",
    d: "Stones, dust, chaff and foreign material are removed before processing. Clean raw material is the most important step for clean product.",
  },
  {
    t: "Processing",
    d: "Refining, milling, blending or mixing happens on the line for that product. Food and feed lines are kept apart.",
  },
  {
    t: "In-process checks",
    d: "Operators check key parameters during each run, such as texture, colour, mix and fortification dosing, and record them against the batch.",
  },
  {
    t: "Packing",
    d: "Product is filled into clean, sealed containers and sacks. Every unit is printed or labelled with its batch code.",
  },
  {
    t: "Release & dispatch",
    d: "A batch is released only when its record is complete and its checks pass. Documentation travels with institutional orders.",
  },
];

const pillars = [
  { t: "Separate lines", d: "Oil, flour, fortified food and feed each run on their own line, which limits cross-contact." },
  { t: "Hygiene routines", d: "Scheduled cleaning, pest control and personal hygiene rules on the production floor." },
  { t: "Batch traceability", d: "From a code on the pack back to raw material lots, processing date and checks." },
  { t: "Documents on request", d: "Specifications, test results and batch records are shared with buyers who need them." },
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & food safety"
        crumbs={[{ label: "Quality" }]}
        title={
          <>
            Quality is a habit, <em className="text-leaf">checked in writing.</em>
          </>
        }
        intro="Food that families eat, children are fed and animals are raised on has to be right. We control quality step by step and record every step."
      />

      <section className="container-x py-20 md:py-28">
        <SectionHead eyebrow="From intake to dispatch" title="Six checkpoints between the field and your warehouse." />
        <ol className="relative mt-16 grid gap-0 md:grid-cols-2 md:gap-x-16">
          {stages.map((s, i) => (
            <li key={s.t} className="reveal grid grid-cols-[3.5rem_1fr] gap-5 border-t border-line py-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-leaf font-display text-xl text-leaf">{i + 1}</span>
              <div>
                <h3 className="font-display text-2xl">{s.t}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="grain bg-forest py-20 text-paper md:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHead tone="light" eyebrow="How we keep it consistent" title="Four things we don’t compromise on." />
            <dl className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {pillars.map((p) => (
                <div key={p.t} className="border-t border-line-light pt-5">
                  <dt className="font-display text-2xl">{p.t}</dt>
                  <dd className="mt-2 leading-relaxed text-paper/70">{p.d}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <BatchCard />
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <h2 className="display text-4xl sm:text-5xl md:col-span-5">Standards and certificates</h2>
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft md:col-span-6 md:col-start-7">
            <p>
              We produce to the specifications our buyers set and to the requirements of Ethiopian food and feed regulations. For institutional and humanitarian programmes we work to the buyer’s product specification and supply the documentation it asks for.
            </p>
            <p>
              Copies of our licences, certificates and recent test reports are available to buyers on request.
            </p>
          </div>
        </div>
      </section>

      <CtaBand title="Need specifications or test reports before you order? Ask our team." />
    </>
  );
}
