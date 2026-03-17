import type { Metadata } from "next";

export const metadata: Metadata = { title: "FAQ - LDN Decks" };

const faqs = [{q:"How long does it take to build a deck?",a:"A typical deck build takes 1-3 weeks."},{q:"Do I need a permit?",a:"Yes, we handle all permits with 100% approval rate."},{q:"What materials do you use?",a:"We work with Trex, TimberTech, Azek, and pressure-treated lumber."},{q:"How much does a new deck cost?",a:"Costs vary by size and materials. Contact us for a free estimate."},{q:"Do you offer warranties?",a:"Yes, we provide workmanship warranties on all projects."},{q:"What areas do you serve?",a:"Loudoun, Fairfax, and Prince William Counties."}];

export default function FAQPage() {
  return (
    <>
      <section className="bg-dark text-white py-16"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl md:text-5xl font-semibold">FAQ</h1></div></section>
      <section className="py-20"><div className="max-w-4xl mx-auto px-4 space-y-6">{faqs.map((faq,i)=>(<details key={i} className="border border-gray-200 p-6 group"><summary className="font-semibold text-dark cursor-pointer text-lg group-open:text-primary">{faq.q}</summary><p className="text-dark-text mt-4">{faq.a}</p></details>))}</div></section>
    </>
  );
}
