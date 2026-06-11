'use client';
import { motion } from 'framer-motion';

interface EditorialProps {
  edition?: number;
}

export default function Editorial({ edition = 1 }: EditorialProps) {
  const content = edition === 1 ? {
    bg: "bg-[#f4f4f4] text-black",
    accent: "bg-black",
    quote: "AI mungkin mampu mengolah data dengan kecepatan cahaya, namun hanya manusialah yang memiliki kebijaksanaan untuk menentukan arah kemajuan.",
    p1: "Kecerdasan buatan telah meruntuhkan dinding antara belajar konvensional dan inovasi digital. Ia kini bertransformasi dari sekadar alat pasif menjadi rekan kolaborasi strategis yang otonom.",
    p2: "Mulai dari visi aliansi infrastruktur silikon 2031 hingga era baru kreativitas Canva 2.0, teknologi bergerak masif. Namun, sebagai mahasiswa Sistem Informasi, kita tidak boleh menjadi pengguna pasif. Kita dituntut menjadi 'konduktor' dari orkestra teknologi ini."
  } : {
    bg: "bg-zinc-900 text-zinc-100 border-y border-white/10",
    accent: "bg-emerald-500",
    quote: "Di era di mana setiap benda memiliki 'detak jantung' digital, batasan antara privasi dan kenyamanan tak lagi kasat mata.",
    p1: "Internet of Things (IoT) telah mengevolusi cara kita berinteraksi dengan ruang fisik. Rumah, kendaraan, hingga perangkat yang melekat di tubuh kita kini menjadi mata rantai sirkulasi data yang tak pernah tidur.",
    p2: "Dari ancaman komodifikasi data hingga urgensi regulasi keamanan siber, edisi ini membedah wajah ganda dari konektivitas absolut. Sebagai agen teknologi, tugas kita bukan sekadar menghubungkan, melainkan memastikan keterhubungan tersebut aman dan beretika."
  };

  return (
    <section id="editorial" className={`relative z-20 pt-32 md:pt-40 pb-40 md:pb-60 px-6 md:px-20 overflow-hidden ${content.bg}`}>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
      <div className={`absolute left-[10%] top-0 h-full w-[1px] opacity-10 hidden md:block ${content.accent}`} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        <div className="md:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`inline-block px-3 py-1 border font-mono text-[10px] uppercase tracking-[0.4em] mb-10 ${edition === 2 ? 'border-emerald-500/30 text-emerald-400' : 'border-black/20'}`}
          >
            Manifesto Redaksi
          </motion.span>

          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-5xl md:text-[110px] font-black leading-[0.8] tracking-tighter uppercase"
            >
              EDITORIAL <br />
            </motion.h2>
            <div className={`absolute top-2 left-2 text-5xl md:text-[110px] font-black leading-[0.8] tracking-tighter uppercase pointer-events-none ${edition === 2 ? 'text-white/5' : 'text-black/5'}`}>
              EDITORIAL <br />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex gap-6 items-start"
          >
            <div className={`w-2 h-20 md:h-28 shrink-0 ${content.accent}`} />
            <p className="text-xl md:text-3xl font-medium leading-tight max-w-md italic">
              "{content.quote}"
            </p>
          </motion.div>
        </div>

        <div className="md:col-span-5 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`space-y-8 border-t pt-10 ${edition === 2 ? 'border-white/10' : 'border-black/10'}`}
          >
            <p className="text-lg leading-relaxed font-serif italic">
              {content.p1}
            </p>
            <p className={`text-sm md:text-base leading-relaxed ${edition === 2 ? 'text-zinc-400' : 'text-black/70'}`}>
              {content.p2}
            </p>

            <div className={`pt-8 flex justify-between items-center border-t ${edition === 2 ? 'border-white/10' : 'border-black/5'}`}>
              <div className="font-mono text-[10px] uppercase tracking-widest">
                {/* PENGECEKAN KETUA REDAKSI DINAMIS */}
                <p className={`font-bold text-xs mb-1 ${edition === 2 ? 'text-emerald-400' : 'text-black'}`}>
                  {edition === 2 ? 'DICKY' : 'AHMETH'}
                </p>
                <p className={edition === 2 ? 'text-zinc-500' : 'text-black/50'}>Ketua Redaksi // Tech.UTS</p>
              </div>

              <motion.div
                whileHover={{ rotate: 0, scale: 1.05 }}
                className={`w-16 h-16 border-2 rounded-full flex items-center justify-center rotate-12 font-black text-[10px] ${edition === 2 ? 'border-emerald-500 text-emerald-500' : 'border-black text-black'}`}
              >
                Edisi.{edition}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}