'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroEdisi2() {
  const { scrollY } = useScroll();
  const [h, setH] = useState(800);

  useEffect(() => {
    setH(window.innerHeight);
  }, []);

  // Animasi scroll yang sama dengan Edisi 1
  const scale = useTransform(scrollY, [0, h], [1, 0.92]);
  const opacity = useTransform(scrollY, [0, h * 0.9], [1, 0]);
  const y = useTransform(scrollY, [0, h], [0, 60]);

  return (
    <section className="relative h-screen w-full bg-zinc-950 text-white overflow-hidden [perspective:1000px]">

      {/* Bingkai Border (Mewarisi gaya Edisi 1, tapi versi gelap) */}
      <div className="absolute inset-0 border-[10px] md:border-[10px] border-zinc-900 z-50 pointer-events-none" />

      {/* Latar Belakang: Celah Dimensi (The Rift) */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "100%", opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-[2px] bg-emerald-500 shadow-[0_0_50px_10px_rgba(16,185,129,0.3)]"
        />
      </div>

      {/* Partikel Melayang */}
      <div className="absolute inset-0 z-0 opacity-40">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 1, 0], x: Math.sin(i) * 100 }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, delay: Math.random() * 5 }}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full blur-[1px]"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* Jendela Sistem Kiri (Melayang 3D) */}
      <motion.div
        initial={{ opacity: 0, x: -100, rotateY: 45 }}
        animate={{ opacity: 1, x: 0, rotateY: 25 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="hidden md:flex absolute left-12 top-1/3 flex-col gap-2 bg-black/60 backdrop-blur-md border border-emerald-500/30 p-6 shadow-[0_0_30px_rgba(16,185,129,0.1)] z-20"
      >
        <p className="font-mono text-emerald-400 text-[10px] tracking-widest">[ SYSTEM.AWAKE ]</p>
        <h3 className="font-black text-white text-lg leading-none">Robot AI bertransisi<br/>menjadi infrastruktur</h3>
      </motion.div>

      {/* Jendela Sistem Kanan (Melayang 3D) */}
      <motion.div
        initial={{ opacity: 0, x: 100, rotateY: -45 }}
        animate={{ opacity: 1, x: 0, rotateY: -25 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="hidden md:flex absolute right-12 bottom-1/3 flex-col gap-2 bg-black/60 backdrop-blur-md border border-red-500/30 p-6 shadow-[0_0_30px_rgba(239,68,68,0.1)] z-20 text-right items-end"
      >
        <p className="font-mono text-red-400 text-[10px] tracking-widest">[ WARNING ]</p>
        <h3 className="font-black text-white text-lg leading-none">Etika di Balik<br/>Algoritma</h3>
      </motion.div>

      <motion.div
        style={{ scale, opacity, y }}
        className="relative h-full flex flex-col justify-center px-6 md:px-16 z-30"
      >
        {/* Typografi Mobile */}
        <div className="md:hidden space-y-6 text-center mt-10">
          <h1 className="text-[18vw] font-black leading-[0.8] tracking-tight">
            CYBER
          </h1>
          <h1
            className="text-[16vw] font-black italic leading-[0.8] tracking-tight text-transparent"
            style={{
              WebkitTextStroke: '1px rgba(255,255,255,0.8)',
              WebkitBackgroundClip: 'text',
            }}
          >
            NEXUS<span className="text-emerald-500 not-italic">.</span>
          </h1>
          <div className="mt-6 border-2 border-emerald-500 bg-black/50 backdrop-blur-sm inline-block px-4 py-2">
            <p className="font-mono text-emerald-400 text-[10px] uppercase tracking-widest">
              Internet of Things
            </p>
          </div>
        </div>

        {/* Typografi Desktop (Mewarisi gaya Edisi 1) */}
        <div className="hidden md:flex items-center justify-center text-center">
          <div className="relative">
            <h1 className="text-[14vw] font-black leading-[0.75] tracking-tighter drop-shadow-2xl">
              CYBER
            </h1>
            <h1
              className="text-[13vw] font-black italic leading-[0.75] tracking-tighter text-transparent"
              style={{
                WebkitTextStroke: '1.5px rgba(255,255,255,0.8)',
                backgroundImage: 'linear-gradient(to bottom, white, transparent)',
                WebkitBackgroundClip: 'text',
              }}
            >
              NEXUS<span className="text-emerald-500 not-italic drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]">.</span>
            </h1>

            {/* Badge offset-shadow (Gaya Brutalist) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black border-4 border-zinc-800 px-8 py-4 shadow-[12px_12px_0px_#10b981]">
              <p className="font-mono text-white text-sm uppercase tracking-[0.3em]">
                Internet of Things
              </p>
            </div>
          </div>
        </div>

        {/* Metadata Sudut Bawah (Mewarisi Edisi 1) */}
        <div className="absolute bottom-12 left-0 w-full px-6 md:px-20 flex justify-between text-[10px] font-mono uppercase">
          <div>
            <p className="text-zinc-600">Source</p>
            <p className="font-bold text-emerald-400">FTII UHAMKA</p>
          </div>
          <div className="text-right">
            <p className="text-zinc-600">Issue</p>
            <p className="font-bold italic text-white">2026 / EDISI.02</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-600"
        >
          System Override
        </motion.div>

      </motion.div>
    </section>
  );
}