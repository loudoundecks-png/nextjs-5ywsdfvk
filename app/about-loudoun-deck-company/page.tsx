import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About Us - LDN Decks", description: "Learn about LDN Decks." };

export default function AboutPage() {
  return (
    <>
      <section className="bg-dark text-white py-16"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl md:text-5xl font-semibold">About LDN Decks</h1><p className="text-gray-300 mt-4 text-lg">Northern Virginia Premier Deck Building Company</p></div></section>
      <section className="py-20"><div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-dark mb-6">Who We Are</h2>
        <p className="text-dark-text mb-4 leading-relaxed">LDN Decks is a premier deck-building company based in Northern Virginia, serving Loudoun County, Fairfax County, and Prince William County.</p>
        <p className="text-dark-text mb-8 leading-relaxed">Our team brings over 7 years of expertise and has completed more than 15,000 deck projects with a 100% permit approval rate.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-12">{[{n:"15K+",l:"Decks Built"},{n:"10+",l:"Services"},{n:"7+",l:"Years"},{n:"100%",l:"Permit Approval"}].map(b=>(<div key={b.l} className="text-center"><div className="text-3xl font-bold text-primary">{b.n}</div><div className="text-dark-text mt-1 text-sm">{b.l}</div></div>))}</div>
        <Link href="/contacts" className="bg-primary text-white px-8 py-4 font-semibold hover:bg-orange-700 transition inline-block">GET FREE ESTIMATE</Link>
      </div></section>
    </>
  );
}
