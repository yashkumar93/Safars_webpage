"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValueProp } from "@/components/ValueProp";
import { TechStack } from "@/components/TechStack";
import { Flexibility } from "@/components/Flexibility";
import { Services } from "@/components/Services";
import { OurDifference } from "@/components/OurDifference";
import { Testimonials } from "@/components/Testimonials";
import { WorkWithBest } from "@/components/WorkWithBest";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--dust-grey)] text-[var(--pine-teal)] selection:bg-[var(--dry-sage)] selection:text-[var(--pine-teal)]">
      <Header />
      <Hero />
      <ValueProp />
      <TechStack />
      <Flexibility />
      <Services />
      <OurDifference />
      <Testimonials />
      <WorkWithBest />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}
