import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Deck Building", slug: "deck-building", desc: "Custom deck construction with premium materials and expert craftsmanship." },
  { title: "Deck Repair", slug: "deck-repair", desc: "Professional deck repair services to restore your deck to perfect condition." },
  { title: "Deck Replacement", slug: "deck-replacement", desc: "Complete deck replacement services with modern materials and designs." },
  { title: "Deck Remodeling", slug: "deck-remodeling", desc: "Transform your existing deck with our professional remodeling services." },
  { title: "Covered Decks", slug: "covered-decks", desc: "Beautiful covered deck solutions for year-round outdoor enjoyment." },
  { title: "Screened Porches", slug: "screened-porches", desc: "Custom screened porches that keep bugs out and let the fresh air in." },
  { title: "Patio Building", slug: "patio-building", desc: "Expert patio construction to create your perfect outdoor living space." },
  { title: "Outdoor Kitchens", slug: "outdoor-kitchens", desc: "Custom outdoor kitchen design and installation for the ultimate entertainment space." },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="https://ldndecks.com/wp-content/uploads/elementor/thumbs/composite-patio-floor-installation-2023-11-27-05-00-07-utc-scaled-qxam0bxrndk97yox77udflut5b1mvjjwukzth2le6o.webp"
          alt="Premier Deck Builder in Northern Virginia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Premier Deck Builder in Northern Virginia</h1>
          <p className="text-xl mb-8 text-gray-200">Transform your outdoor living space with LDN Decks. Expert craftsmanship, premium materials, and unmatched customer service.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/contacts" className="bg-primary text-white px-8 py-4 font-semibold hover:bg-orange-700 transition rounded">GET FREE ESTIMATE</Link>
            <Link href="/services" className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-dark transition rounded">OUR SERVICES</Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-dark text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><p className="text-4xl font-bold text-primary">15K+</p><p className="text-gray-400 mt-2">Sq Ft Decks Built</p></div>
          <div><p className="text-4xl font-bold text-primary">10+</p><p className="text-gray-400 mt-2">Years Experience</p></div>
          <div><p className="text-4xl font-bold text-primary">7+</p><p className="text-gray-400 mt-2">Service Areas</p></div>
          <div><p className="text-4xl font-bold text-primary">100%</p><p className="text-gray-400 mt-2">Customer Satisfaction</p></div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-10">
          <Image src="https://ldndecks.com/wp-content/uploads/2025/12/top-pro-2018-1024x635.webp" alt="Top Pro 2018" width={120} height={74} className="opacity-70 hover:opacity-100 transition" />
          <Image src="https://ldndecks.com/wp-content/uploads/2025/12/logo192.png" alt="Thumbtack" width={60} height={60} className="opacity-70 hover:opacity-100 transition" />
          <Image src="https://ldndecks.com/wp-content/uploads/2025/12/images.png" alt="Home Advisor" width={120} height={60} className="opacity-70 hover:opacity-100 transition" />
          <Image src="https://ldndecks.com/wp-content/uploads/2024/12/t-rex-logo.png" alt="Trex" width={100} height={50} className="opacity-70 hover:opacity-100 transition" />
          <Image src="https://ldndecks.com/wp-content/uploads/2024/12/fiberon-logo.png" alt="Fiberon" width={100} height={50} className="opacity-70 hover:opacity-100 transition" />
          <Image src="https://ldndecks.com/wp-content/uploads/2024/12/timbertech-logo.png" alt="TimberTech" width={100} height={50} className="opacity-70 hover:opacity-100 transition" />
          <Image src="https://ldndecks.com/wp-content/uploads/2024/12/veka-logo.png" alt="VEKA" width={80} height={50} className="opacity-70 hover:opacity-100 transition" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image src="https://ldndecks.com/wp-content/uploads/2024/10/father-with-toddler-son-building-wooden-frame-hous-2023-11-27-05-10-44-utc-300x200.webp" alt="Deck builder in Virginia" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-dark mb-6">Your Trusted Deck Building Partner</h2>
            <p className="text-dark-text mb-4">At LDN Decks, we specialize in creating beautiful, durable outdoor living spaces for homeowners across Northern Virginia. With over 10 years of experience, our team of skilled craftsmen delivers exceptional results on every project.</p>
            <p className="text-dark-text mb-6">From custom deck designs to complete outdoor transformations, we use only the highest quality materials and proven construction techniques to ensure your investment lasts for years to come.</p>
            <Link href="/about-loudoun-deck-company" className="text-primary font-semibold hover:underline">Learn More About Us →</Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark text-center mb-4">Our Services</h2>
          <p className="text-dark-text text-center mb-12 max-w-2xl mx-auto">We offer a comprehensive range of deck building and outdoor living services to transform your home.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link key={s.slug} href={"/services/" + s.slug} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition group">
                <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-primary transition">{s.title}</h3>
                <p className="text-dark-text text-sm mb-3">{s.desc}</p>
                <span className="text-primary text-sm font-semibold">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Dream Deck?</h2>
          <p className="text-lg mb-8 opacity-90">Contact us today for a free estimate. Our team is ready to bring your vision to life.</p>
          <Link href="/contacts" className="bg-white text-primary px-8 py-4 font-semibold hover:bg-gray-100 transition rounded inline-block">GET FREE ESTIMATE</Link>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">Recent Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-lg overflow-hidden shadow-lg group">
              <Image src="https://ldndecks.com/wp-content/uploads/2024/11/outdoor-seating-area-with-sofas-and-a-coffee-table-2024-05-10-16-42-04-utc-1-300x200.webp" alt="Decks" fill className="object-cover group-hover:scale-105 transition duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent flex items-end p-6"><p className="text-white font-semibold">Custom Composite Deck</p></div>
            </div>
            <div className="relative h-72 rounded-lg overflow-hidden shadow-lg group">
              <Image src="https://ldndecks.com/wp-content/uploads/2024/10/cozy-terrace-with-wooden-floor-2023-11-27-05-30-57-utc-300x200.webp" alt="Deck building" fill className="object-cover group-hover:scale-105 transition duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent flex items-end p-6"><p className="text-white font-semibold">Covered Deck Addition</p></div>
            </div>
            <div className="relative h-72 rounded-lg overflow-hidden shadow-lg group">
              <Image src="https://ldndecks.com/wp-content/uploads/2024/09/patio-deck-floor-installation-close-up-2023-11-27-05-32-45-utc-768x523.webp" alt="Deck installing" fill className="object-cover group-hover:scale-105 transition duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent flex items-end p-6"><p className="text-white font-semibold">Premium Deck Installation</p></div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/deck-projects-showcase" className="text-primary font-semibold hover:underline text-lg">View All Projects →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
