import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Features } from "@/components/sections/Features";
import { Staff } from "@/components/sections/Staff";
import { Menu } from "@/components/sections/Menu";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { Access } from "@/components/sections/Access";
import { Footer } from "@/components/sections/Footer";
import { StickyFooter } from "@/components/sections/StickyFooter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problems />
      <Features />
      <Staff />
      <Menu />
      <Reviews />
      <FAQ />
      <Access />
      <Footer />
      
      {/* 
        Spacing to prevent content from being hidden by StickyFooter on mobile
      */}
      <div className="h-20 md:hidden" />
      <StickyFooter />
    </main>
  );
}
