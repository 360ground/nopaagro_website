import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import { company } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} | Agro-manufacturing in Gambela, Ethiopia`,
    template: `%s | ${company.name}`,
  },
  description:
    "Nopa Agro Processing S.C. is an Ethiopian agro-manufacturing company in Gambela. We buy crops from local farmers and manufacture refined edible oil, maize and sorghum flour, fortified corn-soya blend and animal feed, and produce honey on our own farm.",
  openGraph: {
    type: "website",
    siteName: company.name,
    locale: "en_US",
  },
};

// Runs before React hydrates, so content never waits on the JS bundle to become visible.
const revealScript = `document.documentElement.classList.add('js');
document.addEventListener('DOMContentLoaded',function(){
  var els=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)||location.search.indexOf('static')>-1){els.forEach(function(e){e.classList.add('is-in')});return;}
  var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target);}})},{rootMargin:'0px 0px -8% 0px',threshold:0.08});
  els.forEach(function(e){io.observe(e)});
});`;

export const viewport: Viewport = {
  themeColor: "#1b3320",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrument.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
      </head>
      <body className="antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-paper">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
