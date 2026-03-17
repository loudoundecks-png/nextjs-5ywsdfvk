import Link from "next/link";
export const metadata = { title: "Why Choose Us - LDN Decks" };
export default function WhyChooseUsPage() {
  const r = [{t:"Trex Certified",d:"Certified Trex Pro Platinum installer."},{t:"100% Permit Approval",d:"Perfect approval record."},{t:"15,000+ Decks",d:"Years of experience."},{t:"Licensed & Insured",d:"Fully licensed and bonded."},{t:"Free Estimates",d:"No-obligation estimates."},{t:"Premium Materials",d:"Only the finest materials."}];
  return (<><section className="bg-dark text-white py-16"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl md:text-5xl font-semibold">Why Choose LDN Decks?</h1></div></section><section className="py-20"><div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{r.map((x,i)=>(<div key={i} className="border p-8"><h3 className="text-xl font-semibold text-dark mb-3">{x.t}</h3><p className="text-dark-text">{x.d}</p></div>))}</div><div className="text-center mt-12"><Link href="/contacts" className="bg-primary text-white px-8 py-4 font-semibold hover:bg-orange-700 transition inline-block">GET FREE ESTIMATE</Link></div></section></>);
}
