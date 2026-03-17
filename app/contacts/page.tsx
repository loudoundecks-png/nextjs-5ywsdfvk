import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact Us - LDN Decks", description: "Get a free deck building estimate." };

export default function ContactPage() {
  return (
    <>
      <section className="bg-dark text-white py-16"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl md:text-5xl font-semibold">Contact Us</h1><p className="text-gray-300 mt-4 text-lg">Get your free estimate today</p></div></section>
      <section className="py-20"><div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
        <div><h2 className="text-2xl font-semibold text-dark mb-6">Send Us a Message</h2>
          <form className="space-y-4"><div className="grid md:grid-cols-2 gap-4"><input type="text" placeholder="First Name" className="border border-gray-300 p-3 w-full"/><input type="text" placeholder="Last Name" className="border border-gray-300 p-3 w-full"/></div><input type="email" placeholder="Email" className="border border-gray-300 p-3 w-full"/><input type="tel" placeholder="Phone" className="border border-gray-300 p-3 w-full"/><textarea placeholder="Tell us about your project" rows={5} className="border border-gray-300 p-3 w-full"></textarea><button type="submit" className="bg-primary text-white px-8 py-4 font-semibold hover:bg-orange-700 transition w-full">SUBMIT REQUEST</button></form>
        </div>
        <div><h2 className="text-2xl font-semibold text-dark mb-6">Get in Touch</h2>
          <div className="space-y-6"><div><h3 className="font-semibold text-dark">Address</h3><p className="text-dark-text">13704 Winding Oak Cir, Centreville, VA 20121</p></div><div><h3 className="font-semibold text-dark">Phone</h3><a href="tel:+15715354116" className="text-primary font-semibold">+1 (571) 535-4116</a></div><div><h3 className="font-semibold text-dark">Email</h3><a href="mailto:office@ldndecks.com" className="text-primary">office@ldndecks.com</a></div></div>
        </div>
      </div></section>
    </>
  );
}
