'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ARTICLES_DATA } from '@/data/articles';

interface ArticleSectionProps {
  edition?: number;
}

export default function ArticleGrid({ edition = 1 }: ArticleSectionProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const scaleUtama = useTransform(scrollYProgress, [0.1, 0.3], [0.95, 1]);

  // 1. Ambil artikel sesuai Edisi (1 atau 2)
  const currentEditionData = ARTICLES_DATA.filter(article => article.edition === edition);

  // 2. Kecualikan artikel "EDITORIAL" karena sudah punya section sendiri di atas
  const gridArticles = currentEditionData.filter(a => !a.type.includes("EDITORIAL"));

  // 3. Bagi artikel berdasarkan urutan indeks agar dinamis dan tidak bergantung pada teks "type"
  const utama = gridArticles.slice(0, 3); // 3 Artikel Pertama untuk Grid Besar
  const tambahan = gridArticles.slice(3, 5); // 2 Artikel Selanjutnya untuk Insight
  const sisa = gridArticles.slice(5, 8); // Sisa Artikel (Feature & Opini) untuk bagian bawah

  return (
    <section ref={ref} id="artikel" className={`min-h-[100vh] px-6 md:px-20 py-32 ${edition === 2 ? 'bg-zinc-950 text-white' : 'bg-black text-white'}`}>

      <h2 className="text-4xl md:text-[6vw] font-[1000] uppercase italic leading-[0.8] tracking-tighter gap-6 mb-20">
        Artikel {edition === 2 ? "Edisi 02" : ""}
      </h2>
        
      {/* ARTIKEL UTAMA GRID (3 Artikel Pertama) */}
      <motion.div
        style={{ scale: scaleUtama }}
        className="grid md:grid-cols-3 gap-8 mb-12"
      >
        {utama.map((item, i) => (
          <a href={`/artikel/${item.slug}`} key={i}>
            <motion.div className="relative h-[65vh] rounded-[2.5rem] overflow-hidden group">
              <img 
                src={item.img} 
                className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:scale-105 transition duration-700" 
                alt={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <p className={`font-mono text-[10px] tracking-[0.4em] mb-3 uppercase ${edition === 2 ? 'text-emerald-400' : 'text-white/50'}`}>
                  {item.type}
                </p>
                <h2 className="text-3xl md:text-4xl font-black italic leading-none">{item.title}</h2>
                <p className="mt-3 text-white/70 text-sm line-clamp-2">{item.insight}</p>
              </div>
            </motion.div>
          </a>
        ))}
      </motion.div>

      {/* LATEST INSIGHT / ARTIKEL TAMBAHAN (2 Artikel Selanjutnya) */}
      <div className="grid md:grid-cols-2 gap-6 mb-32">
        {tambahan.map((item, i) => (
          <a href={`/artikel/${item.slug}`} key={i}>
            <motion.div 
              whileHover={{ y: -5 }}
              className={`bg-white/5 border p-10 rounded-[2rem] hover:bg-white/[0.08] transition-all duration-500 group relative overflow-hidden h-full ${edition === 2 ? 'border-emerald-500/20 hover:border-emerald-500/50' : 'border-white/10 hover:border-white/30'}`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                 <span className="text-6xl font-black italic">0{i+1}</span>
              </div>
              <p className="text-gray-400 font-bold text-[10px] tracking-[0.3em] mb-4 flex items-center gap-2 uppercase">
                <span className={`w-2 h-2 rounded-full animate-pulse ${edition === 2 ? 'bg-emerald-500' : 'bg-gray-400'}`} />
                {item.type} / {item.tags[0].replace("#", "")}
              </p>
              <h3 className="text-3xl font-black italic mb-4 group-hover:translate-x-2 transition-transform duration-500">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm max-w-md leading-relaxed">
                {item.insight}
              </p>
            </motion.div>
          </a>
        ))}
      </div>

      {/* FEATURE & OPINI LAINNYA (Sisa Artikel) */}
      <div className="border-t border-white/10 pt-16 grid md:grid-cols-2 gap-16">
        {sisa.map((item, i) => (
          <a href={`/artikel/${item.slug}`} key={i}>
            <motion.div className="cursor-pointer group">
              <p className={`text-xs tracking-[0.4em] mb-4 uppercase font-bold ${edition === 2 ? 'text-emerald-500/50' : 'text-white/20'}`}>
                {item.type}
              </p>
              <h4 className="text-2xl md:text-3xl font-black group-hover:text-white/70 transition">
                {item.title}
              </h4>
              <p className="text-white/40 mt-3 text-sm max-w-sm">{item.insight}</p>
            </motion.div>
          </a>
        ))}
      </div>

    </section>
  );
}