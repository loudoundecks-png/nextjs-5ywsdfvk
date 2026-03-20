import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "LDN Decks - Premier Deck Builder in Northern Virginia",
  description: "LDN Decks is Northern Virginia's premier deck building company. Custom deck construction, repair, replacement, and remodeling services in Loudoun County and surrounding areas.",
  keywords: "deck builder, deck building, Northern Virginia, Loudoun County, custom decks, deck repair, deck replacement",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {/* Top Bar */}
        <div className="bg-dark text-white text-sm py-2">
          <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
            <div className="flex gap-6">
              <a href="tel:+17038850190" className="hover:text-primary transition">☎ (703) 885-0190</a>
              <a href="mailto:info@ldndecks.com" className="hover:text-primary transition">✉ info@ldndecks.com</a>
            </div>
            <div className="hidden md:flex gap-4">
              <span className="text-gray-400">Mon-Fri: 7AM - 6PM | Sat: 8AM - 4PM</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <Image src="https://ldndecks.com/wp-content/uploads/2024/09/ldndecks-logo.png" alt="LDN Decks Logo" width={180} height={50} priority />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-dark font-medium hover:text-primary transition">Home</Link>
              <Link href="/services" className="text-dark font-medium hover:text-primary transition">Services</Link>
              <Link href="/about-loudoun-deck-company" className="text-dark font-medium hover:text-primary transition">About</Link>
              <Link href="/deck-projects-showcase" className="text-dark font-medium hover:text-primary transition">Gallery</Link>
              <Link href="/our-process" className="text-dark font-medium hover:text-primary transition">Our Process</Link>
              <Link href="/why-choose-us" className="text-dark font-medium hover:text-primary transition">Why Us</Link>
              <Link href="/blog" className="text-dark font-medium hover:text-primary transition">Blog</Link>
              <Link href="/contacts" className="bg-primary text-white px-5 py-2.5 font-semibold hover:bg-orange-700 transition rounded">FREE ESTIMATE</Link>
            </div>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="bg-dark text-white">
          <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-4 gap-8">
            <div>
              <Image src="https://ldndecks.com/wp-content/uploads/2024/09/ldndecks-logo.png" alt="LDN Decks" width={180} height={50} />
              <p className="text-gray-400 mt-4 text-sm">Northern Virginia's premier deck building company. Quality craftsmanship and exceptional service since 2014.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/services/deck-building" className="hover:text-primary transition">Deck Building</Link></li>
                <li><Link href="/services/deck-repair" className="hover:text-primary transition">Deck Repair</Link></li>
                <li><Link href="/services/deck-replacement" className="hover:text-primary transition">Deck Replacement</Link></li>
                <li><Link href="/services/covered-decks" className="hover:text-primary transition">Covered Decks</Link></li>
                <li><Link href="/services/screened-porches" className="hover:text-primary transition">Screened Porches</Link></li>
                <li><Link href="/services/patio-building" className="hover:text-primary transition">Patio Building</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about-loudoun-deck-company" className="hover:text-primary transition">About Us</Link></li>
                <li><Link href="/our-process" className="hover:text-primary transition">Our Process</Link></li>
                <li><Link href="/why-choose-us" className="hover:text-primary transition">Why Choose Us</Link></li>
                <li><Link href="/deck-projects-showcase" className="hover:text-primary transition">Project Gallery</Link></li>
                <li><Link href="/faq-deck-building" className="hover:text-primary transition">FAQ</Link></li>
                <li><Link href="/blog" className="hover:text-primary transition">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>☎ <a href="tel:+17038850190" className="hover:text-primary transition">(703) 885-0190</a></li>
                <li>✉ <a href="mailto:info@ldndecks.com" className="hover:text-primary transition">info@ldndecks.com</a></li>
                <li>📍 Leesburg, VA 20176</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <a href="https://www.facebook.com/ldndecks" target="_blank" rel="noopener" className="text-gray-400 hover:text-primary transition">Facebook</a>
                <a href="https://www.instagram.com/ldndecks" target="_blank" rel="noopener" className="text-gray-400 hover:text-primary transition">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 py-6">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>© 2024 LDN Decks. All Rights Reserved.</p>
              <div className="flex gap-4 mt-2 md:mt-0">
                <Link href="#" className="hover:text-primary transition">Privacy Policy</Link>
                <Link href="#" className="hover:text-primary transition">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
