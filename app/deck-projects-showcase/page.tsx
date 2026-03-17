import type { Metadata } from "next";

export const metadata: Metadata = { title: "Deck Projects Showcase - LDN Decks" };

export default function ShowcasePage() {
  return (
    <>
      <section className="bg-dark text-white py-16"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl md:text-5xl font-semibold">Our Projects</h1><p className="text-gray-300 mt-4 text-lg">Browse our portfolio of completed deck projects</p></div></section>
      <section className="py-20"><div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{[1,2,3,4,5,6].map(i=>(<div key={i} className="group"><div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-400 group-hover:shadow-lg transition">[Project {i}]</div><h3 className="mt-4 font-semibold text-dark">Deck Project {i}</h3><p className="text-dark-text text-sm">Custom composite deck in Northern Virginia</p></div>))}</div></section>
    </>
  );
}
