"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useState } from "react";
import QuoteForm, { field, label } from "./QuoteForm";
import { ArrowUpRight } from "./Icons";
import { company } from "@/lib/site";

type Tab = "message" | "quote";

const tabs: { id: Tab; label: string; eyebrow: string; title: string; intro: string }[] = [
  {
    id: "message",
    label: "Send a message",
    eyebrow: "Contact form",
    title: "Send us a message.",
    intro: "Questions about Nopa, our products, partnerships or supplying us with grain and oilseeds. We read every message.",
  },
  {
    id: "quote",
    label: "Request a quote",
    eyebrow: "Request a quote",
    title: "Tell us what you need.",
    intro: "The more detail you share (product, pack size, quantity and delivery location), the faster we can come back with a firm price.",
  },
];

/** Switches to the quote tab when the URL asks for it (?type=quote, ?product=…, or #quote). */
function TabFromUrl({ onQuote }: { onQuote: () => void }) {
  const params = useSearchParams();
  useEffect(() => {
    if (params.get("type") === "quote" || params.get("product") || window.location.hash === "#quote") onQuote();
  }, [params, onQuote]);
  return null;
}

export default function ContactPanel() {
  const [tab, setTab] = useState<Tab>("message");
  const showQuote = useCallback(() => setTab("quote"), []);
  const active = tabs.find((t) => t.id === tab)!;

  return (
    <div className="rounded-[2rem] bg-forest p-7 text-paper sm:p-10 md:p-12">
      <Suspense fallback={null}>
        <TabFromUrl onQuote={showQuote} />
      </Suspense>

      <div role="tablist" aria-label="Choose a form" className="inline-flex rounded-full bg-paper/8 p-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls={`panel-${t.id}`}
            onClick={() => setTab(t.id)}
            className={`rounded-full px-4 py-2.5 text-sm font-medium transition-colors sm:px-5 ${
              tab === t.id ? "bg-paper text-forest" : "text-paper/70 hover:text-paper"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <p className="eyebrow mt-10 text-sprout">{active.eyebrow}</p>
      <h2 className="display mt-4 text-4xl sm:text-5xl">{active.title}</h2>
      <p className="mt-4 max-w-xl text-paper/70">{active.intro}</p>

      <div role="tabpanel" id="panel-message" aria-labelledby="tab-message" hidden={tab !== "message"}>
        <MessageForm />
      </div>
      <div role="tabpanel" id="panel-quote" aria-labelledby="tab-quote" hidden={tab !== "quote"}>
        <QuoteForm />
      </div>
    </div>
  );
}

const subjects = ["General question", "Product information", "Partnership", "Supplying grain or oilseeds", "Other"];

function MessageForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [
      `Name: ${d.get("m-name")}`,
      `Organisation: ${d.get("m-company") || "-"}`,
      `Email: ${d.get("m-email")}`,
      `Phone: ${d.get("m-phone") || "-"}`,
      "",
      `${d.get("m-message")}`,
    ].join("\n");
    const subject = `${d.get("m-subject")}: message from ${d.get("m-name")}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="m-name" className={label}>
          Full name *
        </label>
        <input id="m-name" name="m-name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="m-email" className={label}>
          Email *
        </label>
        <input id="m-email" name="m-email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="m-company" className={label}>
          Company / organisation
        </label>
        <input id="m-company" name="m-company" autoComplete="organization" className={field} />
      </div>
      <div>
        <label htmlFor="m-phone" className={label}>
          Phone
        </label>
        <input id="m-phone" name="m-phone" type="tel" autoComplete="tel" placeholder="+251" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="m-subject" className={label}>
          Subject
        </label>
        <select
          id="m-subject"
          name="m-subject"
          defaultValue={subjects[0]}
          className={`${field} appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='m3 4.5 3 3 3-3' stroke='%23f6f3ea' stroke-width='1.4' fill='none'/%3E%3C/svg%3E\")",
          }}
        >
          {subjects.map((s) => (
            <option key={s} value={s} className="text-ink">
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="m-message" className={label}>
          Message *
        </label>
        <textarea id="m-message" name="m-message" required rows={6} className={`${field} resize-y`} placeholder="How can we help?" />
      </div>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-paper/55" aria-live="polite">
          {sent ? "Your email app should open with the message ready to send." : "Sending opens your email app with the message filled in."}
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-paper px-7 py-4 font-medium text-forest transition-colors hover:bg-sprout"
        >
          Send message <ArrowUpRight />
        </button>
      </div>
    </form>
  );
}
