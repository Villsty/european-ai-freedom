import { BuildMotivationSection } from "@/components/BuildMotivationSection";
import { CategorySection } from "@/components/CategorySection";
import { HeroSection } from "@/components/HeroSection";
import { PrinciplesSection } from "@/components/PrinciplesSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BuildMotivationSection />
      <CategorySection />
      <PrinciplesSection />
    </>
  );
}
