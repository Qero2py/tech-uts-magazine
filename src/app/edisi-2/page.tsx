// src/app/edisi-2/page.tsx
import HeroEdisi2 from "@/components/HeroEdisi2";
import Editorial from "@/components/Editorial";
import ArticleGrid from "@/components/ArticleGrid";
import TableOfContents from "@/components/TableOfContents";
import Workflow from "@/components/Workflow";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function EdisiDua() {
  return (
    <main className="bg-zinc-950 w-full min-h-screen">
      <HeroEdisi2 />
      <TableOfContents edition={2} />
      <Editorial edition={2} />
      <ArticleGrid edition={2} />
      <Workflow edition={2} />
      <TeamSection edition={2} />
      <Footer edition={2} />
    </main>
  );
}