import Hero from "@/components/Hero";
import TableOfContents from "@/components/TableOfContents";
import Editorial from "@/components/Editorial";
import ArticleGrid from "@/components/ArticleGrid";
import Workflow from "@/components/Workflow"; 
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <main className="relative bg-black w-full">
      
      {}
      <div className="sticky top-0 h-screen w-full relativez-10 overflow-hidden">
        <Hero />
      </div>

      {}
      <div className="relative z-10 bg-black">
        <TableOfContents />
      </div>

      {}
      <div className="relative z-20">
        <Editorial />
      </div>

      {}
      {}
      <div className="relative z-30">
        <ArticleGrid />
      </div>

      {}
      {}
      <div className="relative z-5">
        <Workflow />
      </div>
      <div className="relative z-10">
        <TeamSection />
      </div>
    </main>
  );
}