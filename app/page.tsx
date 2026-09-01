/**
 * Arzoo Restaurant Home Page (route: /)
 *
 * Single-page layout composing all restaurant sections.
 * Content is managed inside the individual components.
 * MapDynamic loads the Lahore location map on the client.
 */

import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MapDynamic from "@/components/MapDynamic";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <About />
      <MapDynamic />
      <Footer />
    </main>
  );
}