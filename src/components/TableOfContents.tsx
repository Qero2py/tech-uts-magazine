'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const chapters = [
  { num: "01", title: "Pesan Redaksi", category: "Editorial", href: "#editorial" },
  { num: "02", title: "Aliansi Chip AI", category: "Artikel Utama 1", href: "/artikel/infrastruktur-ai" },
  { num: "03", title: "Era Baru Canva 2.0", category: "Artikel Utama 2", href: "/artikel/canva-ai" },
  { num: "04", title: "AI di Ruang Kuliah", category: "Feature Utama", href: "/artikel/evolusi-digital" },
  { num: "05", title: "Sistem Informasi & AI", category: "Rubrik Opini", href: "/artikel/opini-si" },
  { num: "06", title: "Team Redaksi", category: "Team", href: "#team" },
];

export default function TableOfContents() {

  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-20 py-28 md:py-40">

      <div className="max-w-5xl mx-auto">

        {}
        <div className="mb-20 md:mb-28">
          <p className="font-mono text-[10px] tracking-[0.4em] text-white/40 uppercase mb-6">
            Index
          </p>

          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tight leading-[0.9]">
            Daftar Isi
          </h2>
        </div>

        {}
        <div className="flex flex-col divide-y divide-white/10">

          {chapters.map((chapter, i) => (
            <a href={chapter.href} key={i} className="group py-8 md:py-10">

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className="flex items-end justify-between"
              >

                {}
                <div className="flex items-baseline gap-6 md:gap-12">

                  <span className="font-mono text-xs text-white/30">
                    {chapter.num}
                  </span>

                  <div className="relative overflow-hidden">

                    <h3 className="text-2xl md:text-4xl font-semibold uppercase tracking-tight transition-all duration-300 group-hover:translate-y-[-4px]">
                      {chapter.title}
                    </h3>

                    {}
                    <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white/30 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                  </div>

                </div>

                {}
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