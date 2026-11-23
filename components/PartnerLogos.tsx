import Image from "next/image";
import { partners } from "@/lib/site";

export default function PartnerLogos() {
  return (
    <ul className="grid gap-px overflow-hidden rounded-[1.5rem] border border-line bg-line sm:grid-cols-3">
      {partners.map((p) => (
        <li key={p.name} className="flex h-40 items-center justify-center bg-white px-8 sm:h-48">
          <Image src={p.src} alt={p.name} width={p.width} height={p.height} className={`${p.className} w-auto max-w-full object-contain`} />
        </li>
      ))}
    </ul>
  );
}
