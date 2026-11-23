export const company = {
  name: "Nopa Agro Processing",
  legalName: "Nopa Agro Processing S.C.",
  short: "Nopa",
  tagline: "Processing Ethiopia’s harvest with quality and care",
  address: {
    street: "Around Gambela Square",
    city: "Gambela",
    region: "Gambela Region",
    country: "Ethiopia",
  },
  email: "info@nopaagri.com",
  url: "https://nopaagro.com",
  // Pin for the head office (central junction / square, Gambela town).
  geo: { lat: 8.250247, lng: 34.587815 },
};

export type ArtKind = "oil" | "flour" | "csb" | "feed" | "honey";

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  summary: string;
  lead: string;
  body: string[];
  packs: { size: string; note: string }[];
  packLine: string;
  specs: { label: string; value: string }[];
  uses: { title: string; text: string }[];
  buyers: string[];
  art: ArtKind;
};

export const products: Product[] = [
  {
    slug: "edible-oil",
    name: "Refined Edible Cooking Oil",
    shortName: "Edible Oil",
    category: "Cooking oil",
    summary:
      "Clear, odour-neutral refined oil for the home kitchen, restaurants and food manufacturers.",
    lead: "A clean, light oil that behaves the same way every time, from a one-litre bottle on a kitchen shelf to a twenty-litre jerrycan in a hotel kitchen.",
    body: [
      "Our cooking oil is made from oilseeds we buy from local farmers. It is refined to remove impurities, free fatty acids, colour and odour. What remains is a pale, neutral oil that lets food taste of itself and holds up to everyday frying, sautéing and baking.",
      "Every batch is checked before filling, and every container carries a batch code. That means wholesalers and institutional buyers can trace a delivery back to the day it was packed.",
    ],
    packs: [
      { size: "1 L", note: "Household bottle" },
      { size: "3 L", note: "Family size" },
      { size: "5 L", note: "Family & small catering" },
      { size: "20 L", note: "Jerrycan for hotels, restaurants & resale" },
    ],
    packLine: "1L, 3L, 5L & 20L jerrycans",
    specs: [
      { label: "Type", value: "Refined edible vegetable oil" },
      { label: "Appearance", value: "Clear, pale yellow liquid" },
      { label: "Odour & taste", value: "Neutral" },
      { label: "Packaging", value: "Sealed PET bottles and HDPE jerrycans" },
      { label: "Traceability", value: "Batch-coded on every container" },
    ],
    uses: [
      { title: "Households", text: "Everyday cooking, frying and baking." },
      { title: "Hotels & restaurants", text: "20L jerrycans for high-volume kitchens." },
      { title: "Food processors", text: "A consistent ingredient for bakeries and snack producers." },
    ],
    buyers: ["Distributors & wholesalers", "Supermarkets & retail", "Hotels, restaurants & caterers"],
    art: "oil",
  },
  {
    slug: "maize-sorghum-flour",
    name: "Maize & Sorghum Flour",
    shortName: "Maize & Sorghum Flour",
    category: "Milled grain",
    summary:
      "Cleaned, milled maize and sorghum flour in 25kg and 50kg sacks for bakers, millers and food programmes.",
    lead: "Maize and sorghum are staples across Ethiopia. We clean, mill and sack them so that customers get even, dependable flour in every bag.",
    body: [
      "We buy our maize and sorghum from local farmers and cooperatives. The grain is cleaned to remove stones, dust and foreign matter before it is milled. The flour is sifted to an even texture, which matters for injera, porridge, bread and the many other foods made from it.",
      "We pack in strong 25kg and 50kg sacks. Each sack is stitched, labelled and batch-coded, ready for warehouses, bakeries and distribution programmes.",
    ],
    packs: [
      { size: "25 kg", note: "Sack for bakeries & retail resale" },
      { size: "50 kg", note: "Sack for bulk & institutional buyers" },
    ],
    packLine: "25kg & 50kg sacks",
    specs: [
      { label: "Grains", value: "Maize, sorghum" },
      { label: "Processing", value: "Cleaned, milled & sifted" },
      { label: "Texture", value: "Even, fine flour" },
      { label: "Packaging", value: "Stitched woven polypropylene sacks" },
      { label: "Traceability", value: "Batch-coded on every sack" },
    ],
    uses: [
      { title: "Bakeries & food makers", text: "Bread, injera blends, porridge and snacks." },
      { title: "Wholesale & retail", text: "Sacks for onward sale in local markets." },
      { title: "Food programmes", text: "Bulk supply for schools and institutions." },
    ],
    buyers: ["Bakeries & food processors", "Distributors & wholesalers", "Schools & institutions"],
    art: "flour",
  },
  {
    slug: "fortified-blended-food",
    name: "Fortified Corn-Soya Blend",
    shortName: "Corn-Soya Blend",
    category: "Fortified blended food",
    summary:
      "CSB / Faffa-style Super Cereal: a pre-cooked blend of maize and soya, fortified with vitamins and minerals.",
    lead: "A pre-cooked blend of maize and soya, fortified with vitamins and minerals. It is made for porridge that feeds children, mothers and communities well.",
    body: [
      "Corn-Soya Blend (CSB), also known in Ethiopia as Faffa-style Super Cereal, is one of the most widely used fortified foods in nutrition programmes. Maize and soya beans, bought from local farmers, are cleaned, roasted or extruded, milled together and fortified with a vitamin and mineral premix.",
      "Because the blend is pre-cooked, it prepares quickly into a smooth porridge. We produce to the formulation and packing specification of each buyer, and we share batch documentation with every delivery.",
    ],
    packs: [
      { size: "25 kg", note: "Multi-wall bag for programme distribution" },
      { size: "Custom", note: "Pack size & marking to buyer specification" },
    ],
    packLine: "Bulk bags & buyer-specified packs",
    specs: [
      { label: "Base", value: "Maize & soya beans" },
      { label: "Fortification", value: "Vitamin & mineral premix" },
      { label: "Preparation", value: "Pre-cooked; prepares quickly as porridge" },
      { label: "Formulation", value: "To buyer & programme specification" },
      { label: "Documentation", value: "Batch records supplied with delivery" },
    ],
    uses: [
      { title: "Nutrition programmes", text: "Supplementary feeding for children and mothers." },
      { title: "School feeding", text: "A filling, fortified breakfast porridge." },
      { title: "Humanitarian response", text: "Reliable local supply for relief operations." },
    ],
    buyers: ["Humanitarian & UN agencies", "NGOs & nutrition programmes", "Government & school feeding"],
    art: "csb",
  },
  {
    slug: "animal-feed",
    name: "Compound Animal & Poultry Feed",
    shortName: "Animal & Poultry Feed",
    category: "Compound feed",
    summary:
      "Balanced compound feed for poultry, dairy and fattening livestock, made with by-products of our own milling and oil lines.",
    lead: "Balanced rations for poultry and livestock, made partly from the bran and oilseed cake left over from our milling and oil lines. Nothing useful goes to waste.",
    body: [
      "Healthy animals need a ration with the right balance of energy, protein, minerals and vitamins. Our compound feeds bring together cereals, oilseed cake, bran and premixes in measured proportions, mixed evenly so every bag delivers the same nutrition.",
      "Using by-products from our own lines keeps quality under our control and keeps costs reasonable for farmers. Rations for specific animals and growth stages can be produced on request.",
    ],
    packs: [
      { size: "25 kg", note: "Bag for smallholders & small farms" },
      { size: "50 kg", note: "Bag for commercial farms & feedlots" },
    ],
    packLine: "25kg & 50kg bags",
    specs: [
      { label: "Rations", value: "Poultry (layer, broiler), dairy, fattening" },
      { label: "Ingredients", value: "Cereals, oilseed cake, bran, premix" },
      { label: "Form", value: "Mash; other forms on request" },
      { label: "Packaging", value: "Stitched woven polypropylene bags" },
      { label: "Traceability", value: "Batch-coded on every bag" },
    ],
    uses: [
      { title: "Poultry farms", text: "Layer and broiler rations for steady growth and lay." },
      { title: "Dairy farms", text: "Supplementary concentrate for milking cows." },
      { title: "Feedlots", text: "Fattening rations for cattle and small ruminants." },
    ],
    buyers: ["Poultry & dairy farms", "Feedlots & fatteners", "Agro-dealers & cooperatives"],
    art: "feed",
  },
  {
    slug: "honey",
    name: "Natural Honey",
    shortName: "Honey",
    category: "Honey",
    summary: "Pure honey from Nopa’s own honey farm, strained and packed with nothing added.",
    lead: "Our newest product comes from our own hives. We harvest the honey, strain it, and pack it with nothing added.",
    body: [
      "Unlike our other products, honey doesn’t come from outside growers. It comes from Nopa’s own honey farm, where we keep the hives, manage the colonies and harvest the comb ourselves.",
      "After harvest the honey is strained to remove wax and comb, then filled into clean, sealed containers. Each container carries a batch code that links it to its harvest, like everything else we make.",
    ],
    packs: [
      { size: "Jars", note: "Retail jars for shops & homes" },
      { size: "Bulk", note: "Larger containers for hotels, bakeries & resale" },
    ],
    packLine: "Retail jars & bulk containers",
    specs: [
      { label: "Source", value: "Nopa’s own honey farm" },
      { label: "Processing", value: "Strained; nothing added" },
      { label: "Appearance", value: "Natural colour, which varies with the season" },
      { label: "Packaging", value: "Sealed food-grade jars & containers" },
      { label: "Traceability", value: "Batch-coded to its harvest" },
    ],
    uses: [
      { title: "Households", text: "On bread, in tea, or by the spoon." },
      { title: "Hotels & cafés", text: "Breakfast tables and kitchens." },
      { title: "Bakers & food makers", text: "A natural sweetener for baking and recipes." },
    ],
    buyers: ["Supermarkets & retail", "Hotels & cafés", "Distributors & wholesalers"],
    art: "honey",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const nav = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/sourcing", label: "Sourcing" },
  { href: "/quality", label: "Quality" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

export const partners = [
  { name: "USAID", src: "/partners/usaid.svg", width: 512, height: 153, className: "h-14 sm:h-16" },
  { name: "UK Department for International Development (DFID)", src: "/partners/dfid.svg", width: 300, height: 207, className: "h-16 sm:h-20" },
  { name: "Mastercard Foundation", src: "/partners/mastercard-foundation.jpg", width: 400, height: 400, className: "h-24 sm:h-28" },
];
