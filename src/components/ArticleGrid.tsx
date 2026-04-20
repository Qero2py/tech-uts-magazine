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
    }
  ],
  feature: {
    title: "AI di Ruang Kuliah",
    desc: "AI bukan sekadar mesin pencetak jawaban, melainkan mentor dan rekan kolaborasi strategis mahasiswa.",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800",
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

  const scaleHeadline = useTransform(scrollYProgress, [0, 0.2], [1, 0.92]);
  const yHeadline = useTransform(scrollYProgress, [0, 0.3], ["0%", "-10%"]);
  const scaleUtama = useTransform(scrollYProgress, [0.2, 0.5], [0.95, 1]);

  return (
    <section ref={ref} id="artikel" className="min-h-[100vh] bg-black text-white px-6 md:px-20 py-32">

      <h2 className="text-4xl md:text-[6vw] font-[1000] uppercase italic leading-[0.8] tracking-tighter gap-6 mb-20">
        Artikel
      </h2>
        
      {}
      <motion.div
        style={{ scale: scaleUtama }}
        className="grid md:grid-cols-2 gap-12 mb-40"
      >
        {articles.utama.map((item, i) => (
          <a href={`/artikel/${item.slug}`} key={i}>
            <motion.div className="relative h-[60vh] rounded-[2.5rem] overflow-hidden group">
              <img 
                src={item.img} 
                className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:scale-105 transition duration-700" 
                alt={item.title}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-end p-10">
                <p className="font-mono text-white-400 text-xs tracking-[0.4em] mb-3">
                  ARTIKEL UTAMA {String(i + 1).padStart(2, '0')}
                </p>

                <h2 className="text-4xl md:text-5xl font-black italic">
                  {item.title}
                </h2>

                <p className="top-left mt-3 text-white/70">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          </a>
        ))}
      </motion.div>

      <div className="border-t border-white/10 pt-16 grid md:grid-cols-2 gap-12">

        {}
        {}
        <a href={`/artikel/${articles.feature.slug}`}>
          <motion.div className="cursor-pointer group">
            <p className="text-white/30 text-xs tracking-[0.4em] mb-4">
              FEATURE
            </p>

            <h4 className="text-3xl md:text-4xl font-black group-hover:text-white-400 transition">
              {articles.feature.title}
            </h4>

            <p className="text-white/50 mt-3 max-w-md">
              {articles.feature.desc}
            </p>
          </motion.div>
        </a>

        {}
        {}
        <a href={`/artikel/${articles.opini.slug}`}>
          <motion.div className="cursor-pointer group md:ml-auto">
            <p className="text-white/30 text-xs tracking-[0.4em] mb-4">
              OPINI
            </p>

            <h4 className="text-3xl md:text-4xl font-black group-hover:text-white-400 transition">
              {articles.opini.title}
            </h4>

            <p className="text-white/50 mt-3 max-w-md">
              {articles.opini.desc}
            </p>
          </motion.div>
        </a>

      </div>
    </section>
  );
}