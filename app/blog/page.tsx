import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Blog - LDN Decks" };

export default function BlogPage() {
  const posts = [{slug:"best-deck-materials",title:"Best Deck Materials",ex:"Discover top deck materials."},{slug:"deck-maintenance",title:"Deck Maintenance Guide",ex:"Keep your deck looking great."},{slug:"composite-vs-wood",title:"Composite vs Wood",ex:"Compare decking materials."}];
  return (
    <>
      <section className="bg-dark text-white py-16"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl md:text-5xl font-semibold">Blog</h1></div></section>
      <section className="py-20"><div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">{posts.map(p=>(<Link key={p.slug} href={"/blog/"+p.slug} className="group"><div className="bg-gray-200 h-48 rounded-lg mb-4"></div><h2 className="text-xl font-semibold text-dark group-hover:text-primary">{p.title}</h2><p className="text-dark-text mt-2">{p.ex}</p></Link>))}</div></section>
    </>
  );
}
