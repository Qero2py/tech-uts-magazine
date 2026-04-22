'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const articles = {
  utama: [
    {
      title: "Aliansi Chip AI",
      desc: "Kedaulatan teknologi AI di masa depan bergantung pada kemandirian infrastruktur silikon khusus.",
      img: "https://plus.unsplash.com/premium_photo-1681426690743-1a2f26db94fa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "infrastruktur-ai"
    },
    {
      title: "Era Baru Canva 2.0",
      desc: "Transisi paradigma dari 'melakukan desain' menjadi 'mengarahkan desain' melalui kolaborasi AI.",
      img: "https://images.unsplash.com/photo-1649091245823-18be815da4f7?q=80&w=862&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "canva-ai"
    },
    {
      title: "Menuju Era Industri 5.0",
      desc: "Konvergensi AI, IoT, dan Machine Learning mendorong revolusi Industri 4.0 menuju Industri 5.0[cite: 2].",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200",
      slug: "revolusi-50"
    }
  ],
  tambahan: [
    {
      title: "AI dan Masa Depan Robotika",
      desc: "Robot humanoid kini mampu belajar dan beradaptasi di lingkungan nyata yang tidak terstruktur[cite: 28].",
      slug: "ai-robotika",
      tag: "ROBOTICS"
    },
    {
      title: "AI dalam Keseharian Modern",
      desc: "AI membantu aktivitas manusia melalui asisten virtual, diagnosis medis, hingga sistem pembelajaran personal[cite: 43, 48, 50, 52].",
      slug: "perkembangan-ai",
      tag: "MODERN LIFE"
    }
  ],
  feature: {
    title: "AI di Ruang Kuliah",
    desc: "AI bukan sekadar mesin pencetak jawaban, melainkan mentor dan rekan kolaborasi strategis mahasiswa.",
    slug: "evolusi-digital"
  },
  opini: {
    title: "Sistem Informasi & AI",
    desc: "Kecerdasan buatan adalah alat bantu eksplorasi, bukan pengganti daya analisis dan berpikir kritis manusia.",
    slug: "opini-si"
  }
};

export default function ArticleSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const scaleUtama = useTransform(scrollYProgress, [0.1, 0.3], [0.95, 1]);

  return (
    <section ref={ref} id="artikel" className="min-h-[100vh] bg-black text-white px-6 md:px-20 py-32">

      <h2 className="text-4xl md:text-[6vw] font-[1000] uppercase italic leading-[0.8] tracking-tighter gap-6 mb-20">
        Artikel
      </h2>
        
      {/* ARTIKEL UTAMA GRID */}
      <motion.div
        style={{ scale: scaleUtama }}
        className="grid md:grid-cols-3 gap-8 mb-12"
      >
        {articles.utama.map((item, i) => (
          <a href={`/artikel/${item.slug}`} key={i}>
            <motion.div className="relative h-[65vh] rounded-[2.5rem] overflow-hidden group">
              <img 
                src={item.img} 
                className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:scale-105 transition duration-700" 
                alt={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <p className="font-mono text-white/50 text-[10px] tracking-[0.4em] mb-3 uppercase">
                  ARTIKEL UTAMA {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="text-3xl md:text-4xl font-black italic leading-none">{item.title}</h2>
                <p className="mt-3 text-white/70 text-sm line-clamp-2">{item.desc}</p>
              </div>
            </motion.div>
          </a>
        ))}
      </motion.div>

      {/* LATEST INSIGHT (TAMBAHAN) - DIBUAT LEBIH MENCOLOK */}
      <div className="grid md:grid-cols-2 gap-6 mb-32">
        {articles.tambahan.map((item, i) => (
          <a href={`/artikel/${item.slug}`} key={i}>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:bg-white/[0.08] hover:border-white/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                 <span className="text-6xl font-black italic">0{i+1}</span>
              </div>
              <p className="text-white-400 font-bold text-[10px] tracking-[0.3em] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-white-400 rounded-full animate-pulse" />
                LATEST INSIGHT / {item.tag}
              </p>
              <h3 className="text-3xl font-black italic mb-4 group-hover:translate-x-2 transition-transform duration-500">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm max-w-md leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          </a>
        ))}
      </div>

      {/* FEATURE & OPINI (MINIMALIS) */}
      <div className="border-t border-white/10 pt-16 grid md:grid-cols-2 gap-16">
        <a href={`/artikel/${articles.feature.slug}`}>
          <motion.div className="cursor-pointer group">
            <p className="text-white/20 text-xs tracking-[0.4em] mb-4 uppercase font-bold">Feature</p>
            <h4 className="text-2xl md:text-3xl font-black group-hover:text-white/70 transition">
              {articles.feature.title}
            </h4>
            <p className="text-white/40 mt-3 text-sm max-w-sm">{articles.feature.desc}</p>
          </motion.div>
        </a>

        <a href={`/artikel/${articles.opini.slug}`}>
          <motion.div className="cursor-pointer group">
            <p className="text-white/20 text-xs tracking-[0.4em] mb-4 uppercase font-bold">Opini</p>
            <h4 className="text-2xl md:text-3xl font-black group-hover:text-white/70 transition">
              {articles.opini.title}
            </h4>
            <p className="text-white/40 mt-3 text-sm max-w-sm">{articles.opini.desc}</p>
          </motion.div>
        </a>
      </div>
    </section>
  );
}