export type NewsArtKind = "coffee" | "people";

export type NewsBlock = { type: "p"; text: string } | { type: "h"; text: string };

export type NewsItem = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  category: string;
  excerpt: string;
  body: NewsBlock[];
  art: NewsArtKind;
};

// Newest first.
export const news: NewsItem[] = [
  {
    slug: "preparing-to-export-ethiopian-coffee",
    title: "Nopa is preparing to launch a coffee export business",
    date: "2026-11-23",
    category: "Company news",
    excerpt:
      "After building its food, feed and honey lines, Nopa is now working to bring Ethiopian coffee to buyers abroad.",
    art: "coffee",
    body: [
      {
        type: "p",
        text: "Nopa Agro Processing is working to launch a coffee export business. It will be our first business selling outside Ethiopia, and our first step beyond the domestic food and feed market.",
      },
      { type: "h", text: "Why coffee" },
      {
        type: "p",
        text: "Ethiopia is the birthplace of arabica coffee and one of the world’s best-known origins. Coffee fits the way we already work: we buy from farmers, we handle and check produce carefully, and we keep a record of where every batch came from. Buyers of specialty coffee ask for exactly that.",
      },
      { type: "h", text: "What happens next" },
      {
        type: "p",
        text: "We are now preparing what the business needs before the first shipment, including sourcing, handling and quality control, and finding export partners. We will share more, including how coffee growers and international buyers can work with us, as the launch gets closer.",
      },
      {
        type: "p",
        text: "If you are a coffee buyer or importer and would like to hear from us when we are ready, get in touch through our contact page.",
      },
    ],
  },
  {
    slug: "fair-pay-for-our-employees",
    title: "Fair pay for the people who make our products",
    date: "2026-11-23",
    category: "Our people",
    excerpt:
      "Quality starts with the people on our production lines. That is why Nopa is committed to paying every employee fairly.",
    art: "people",
    body: [
      {
        type: "p",
        text: "Every pack that leaves Nopa has passed through the hands of our team, from the people who receive and grade crops at intake to the operators, lab staff and drivers who get products to our customers. We are committed to paying each of them fairly for that work.",
      },
      { type: "h", text: "What fair pay means at Nopa" },
      {
        type: "p",
        text: "For us, fair pay means wages that reflect the skill and responsibility of each role, paid in full and on time, with the same pay for the same work. It is a standard we hold ourselves to across the company.",
      },
      { type: "h", text: "Why it matters" },
      {
        type: "p",
        text: "People who are treated and paid fairly stay longer, learn their work well and take pride in it. In a business where consistency is everything, that experience shows up in every batch. Fair pay for our employees goes hand in hand with fair dealing with the farmers we buy from.",
      },
    ],
  },
];

export const getNews = (slug: string) => news.find((n) => n.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
