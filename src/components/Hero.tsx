'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { scrollY } = useScroll();
  const [h, setH] = useState(800);

  useEffect(() => {
    setH(window.innerHeight);
  }, []);

  const scale = useTransform(scrollY, [0, h], [1, 0.92]);
  const opacity = useTransform(scrollY, [0, h * 0.9], [1, 0]);
  const y = useTransform(scrollY, [0, h], [0, 60]);

  return (
    <section id="hero" className="relative h-screen w-full bg-white text-black overflow-hidden">

      {}
      <div className="absolute inset-0 border-[10px] md:border-[10px] border-white z-50 pointer-events-none" />

      {}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.15))]" />

      {}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
      />

      <motion.div
        style={{ scale, opacity, y }}
        className="relative h-full flex flex-col justify-center px-6 md:px-16"
      >

        {}
        <div className="md:hidden space-y-6">

          <h1 className="text-[18vw] font-black leading-[0.8] tracking-tight">
            TECH
          </h1>

          <h1
            className="text-[16vw] font-black italic leading-[0.8] tracking-tight text-transparent"
            style={{
              WebkitTextStroke: '1px black',
              WebkitBackgroundClip: 'text',
            }}
          >
            INSIGHT<span className="text-red-600 not-italic">.</span>
          </h1>

          <div className="mt-6 border-2 border-black inline-block px-4 py-2">
            <p className="font-mono text-[10px] uppercase tracking-widest">
              Future AI Ecosystem
            </p>
          </div>

        </div>

        {}
        <div className="hidden md:flex items-center justify-center text-center">
          <div className="relative">

            <h1 className="text-[14vw] font-black leading-[0.75] tracking-tighter">
              TECH
            </h1>

            <h1
              className="text-[13vw] font-black italic leading-[0.75] tracking-tighter text-transparent"
              style={{
                WebkitTextStroke: '1.5px black',
                backgroundImage: 'linear-gradient(to bottom, black, transparent)',
                WebkitBackgroundClip: 'text',
              }}
            >
              INSIGHT<span className="text-red-600 not-italic">.</span>
            </h1>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-black px-8 py-4 shadow-[12px_12px_0px_black]">
              <p className="font-mono text-sm uppercase tracking-[0.3em]">
                Future AI Ecosystem
              </p>
            </div>

          </div>
        </div>

        {}
        <div className="absolute bottom-12 left w-full px-6 md:px-20 flex justify-between text-[10px] font-mono uppercase">

          <div>
            <p className="text-black/40">Source</p>
            <p className="font-bold">FTII UHAMKA</p>
          </div>

          <div className="text-right">
            <p className="text-black/40">Issue</p>
            <p className="font-bold italic">2026 / EIDISI.01</p>
          </div>

        </div>

        {}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-mono text-black/40"
        >
          Scroll
        </motion.div>

      </motion.div>
    </section>
  );
}