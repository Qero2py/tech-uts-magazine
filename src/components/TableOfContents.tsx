// src/components/TableOfContents.tsx
'use client';
import { motion } from 'framer-motion';
import { ARTICLES_DATA } from '@/data/articles';

interface TOCProps {
  edition?: number;
}

export default function TableOfContents({ edition = 1 }: TOCProps) {
  // Ambil artikel sesuai edisi
  const editionArticles = ARTICLES_DATA.filter(a => a.edition === edition);

  // Buat daftar menu dinamis (Pesan Redaksi di awal, Team di akhir)
  const chapters = [
    { num: "01", title: "Pesan Redaksi", category: "Editorial", href: "#editorial" },
    ...editionArticles.map((article, index) => ({
      num: String(index + 2).padStart(2, '0'),
      title: article.title,
      category: article.type,
      href: `/artikel/${article.slug}`
    })),
    { 
      num: String(editionArticles.length + 2).padStart(2, '0'), 
      title: "Team Redaksi", 
      category: "Team", 
      href: "#team" 
    },
  ];

  return (
    <section id="toc" className={`min-h-screen px-6 md:px-20 py-28 md:py-40 ${edition === 2 ? 'bg-zinc-950 text-white' : 'bg-black text-white'}`}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 md:mb-28">
          <p className={`font-mono text-[10px] tracking-[0.4em] uppercase mb-6 ${edition === 2 ? 'text-emerald-500' : 'text-white/40'}`}>
            Index Edisi 0{edition}
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tight leading-[0.9]">
            Daftar Isi
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-white/10">
          {chapters.map((chapter, i) => (
            <a href={chapter.href} key={i} className="group py-8 md:py-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className="flex items-end justify-between"
              >
                <div className="flex items-baseline gap-6 md:gap-12">
                  <span className={`font-mono text-xs ${edition === 2 ? 'text-emerald-500/50' : 'text-white/30'}`}>
                    {chapter.num}
                  </span>
                  <div className="relative overflow-hidden">
                    <h3 className="text-2xl md:text-4xl font-semibold uppercase tracking-tight transition-all duration-300 group-hover:translate-y-[-4px]">
                      {chapter.title}
                    </h3>
                    <span className={`absolute left-0 bottom-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ${edition === 2 ? 'bg-emerald-500' : 'bg-white/30'}`} />
                  </div>
                </div>
                <div className="text-right hidden md:block">
                  <p className="text-xs font-mono uppercase tracking-widest text-white/30 group-hover:text-white/60 transition">
                    {chapter.category}
                  </p>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}