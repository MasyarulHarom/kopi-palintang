// app/page.tsx (Next.js 13+ dengan App Router)
import { CatalogHomePage } from "@/components/homepage/Catalog";
import { FooterHomepage } from "@/components/homepage/Footer";
import { HeaderHomePage } from "@/components/homepage/Header";
import { HeroSectionHomePage } from "@/components/homepage/HoreSection";

export default function HomePage() {
  return (
    <div className="min-h-screen container bg-background text-foreground">
      <HeaderHomePage />
      <HeroSectionHomePage />
      <CatalogHomePage />
      <FooterHomepage />
    </div>
  );
}
