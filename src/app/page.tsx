import { Hero } from "@/components/sections/hero/Hero";
import { SectionTeasers } from "@/components/sections/home/SectionTeasers";
import { Industries } from "@/components/sections/industries/Industries";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { FAQ } from "@/components/sections/faq/FAQ";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <SectionTeasers />
      <Industries />
      <FAQ />
    </main>
  );
}