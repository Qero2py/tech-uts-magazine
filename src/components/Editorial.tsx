'use client';
import { motion } from 'framer-motion';

export default function Editorial() {
  return (
    <section
      id="editorial"
      className="relative z-20 bg-[#f4f4f4] text-black pt-32 md:pt-40 pb-40 md:pb-60 px-6 md:px-20 overflow-hidden"
    >

      {}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

      {}
      <div className="absolute left-[10%] top-0 h-full w-[1px] bg-black/5 hidden md:block" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">

        {}
        <div className="md:col-span-7">

          {}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 border border-black/20 font-mono text-[10px] uppercase tracking-[0.4em] mb-10"
          >
            Manifesto Redaksi
          </motion.span>

          {}
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-5xl md:text-[110px] font-black leading-[0.8] tracking-tighter uppercase"
            >
              EDITORIAL <br />
            </motion.h2>

            {}
            <div className="absolute top-2 left-2 text-5xl md:text-[110px] font-black leading-[0.8] tracking-tighter uppercase text-black/5 pointer-events-none">
              EDITORIAL <br />
            </div>
          </div>

          {}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex gap-6 items-start"
          >
            <div className="w-2 bg-black h-20 md:h-28 shrink-0" />
            <p className="text-xl md:text-3xl font-medium leading-tight max-w-md italic">
              "AI mungkin mampu mengolah data dengan kecepatan cahaya, namun hanya manusialah yang memiliki kebijaksanaan untuk menentukan arah kemajuan."
            </p>
          </motion.div>

        </div>

        {}
        <div className="md:col-span-5 flex flex-col justify-end">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8 border-t border-black/10 pt-10"
          >
            {}
            <p className="text-lg leading-relaxed font-serif italic">
              Kecerdasan buatan telah meruntuhkan dinding antara belajar konvensional dan inovasi digital. Ia kini bertransformasi dari sekadar alat pasif menjadi rekan kolaborasi strategis yang otonom.
            </p>

            {}
            <p className="text-sm md:text-base leading-relaxed text-black/70">
              Mulai dari visi aliansi infrastruktur silikon 2031 hingga era baru kreativitas Canva 2.0, teknologi bergerak masif. Namun, sebagai mahasiswa Sistem Informasi, kita tidak boleh menjadi pengguna pasif. Kita dituntut menjadi "konduktor" dari orkestra teknologi ini, menggunakan AI secara kritis tanpa menggantikan daya analisis mandiri.
            </p>

            {}
            <div className="pt-8 flex justify-between items-center border-t border-black/5">

              <div className="font-mono text-[10px] uppercase tracking-widest">
                <p className="font-bold text-black text-xs mb-1">AHMETH</p>
                <p className="text-black/50">Ketua Redaksi // Tech.UTS</p>
              </div>

              {}
              <motion.div
                whileHover={{ rotate: 0, scale: 1.05 }}
                className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center rotate-12 font-black text-[10px]"
              >
                Edisi.1
              </motion.div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}