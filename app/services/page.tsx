import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Deck Building", slug: "deck-building", desc: "Custom deck construction with premium materials.", img: "https://ldndecks.com/wp-content/uploads/2024/11/men-building-wooden-deck-on-his-backyard-2023-11-27-05-32-39-utc-1024x683.webp" },
  { title: "Deck Repair", slug: "deck-repair", desc: "Professional deck repair to restore your deck.", img: "https://ldndecks.com/wp-content/uploads/2024/10/cozy-terrace-with-wooden-floor-2023-11-27-05-30-57-utc-300x200.webp" },
  { title: "Deck Replacement", slug: "deck-replacement", desc: "Complete deck replacement with modern materials.", img: "https://ldndecks.com/wp-content/uploads/2024/09/patio-deck-floor-installation-close-up-2023-11-27-05-32-45-utc-768x523.webp" },
  { title: "Deck Remodeling", slug: "deck-remodeling", desc: "Transform your existing deck.", img: "https://ldndecks.com/wp-content/uploads/2024/12/loudoun-deck-deck-builders.jpeg" },
  { title: "Covered Decks", slug: "covered-decks", desc: "Beautiful covered deck solutions.", img: "https://ldndecks.com/wp-content/uploads/2025/12/green-bay-deck-pros-new-deck-installation-1_orig-1024x778.jpg" },
  { title: "Screened Porches", slug: "screened-porches", desc: "Custom screened porches for bug-free living.", img: "https://ldndecks.com/wp-content/uploads/2025/12/Decks-Unlimited-KY-Services-Deck-Design-Build-Composite-Decks-02.jpg" },
  { title: "Patio Building", slug: "patio-building", desc: "Expert patio construction.", img: "https://ldndecks.com/wp-content/uploads/2025/12/deck_002-edited-1-1024x640.webp" },
  { title: "Outdoor Kitchens", slug: "outdoor-kitchens", desc: "Custom outdoor kitchen design.", img: "https://ldndecks.com/wp-content/uploads/2025/11/8c294606-196f-433c-a918-e2fa2f6debab-1024x683.jpeg" },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-dark text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Comprehensive deck building and outdoor living services across Northern Virginia.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link key={s.slug} href={"/services/" + s.slug} className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="relative h-56"><Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition duration-300" /></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition">{s.title}</h3>
                <p className="text-dark-text text-sm mb-3">{s.desc}</p>
                <span className="text-primary font-semibold text-sm">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
