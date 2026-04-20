'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    setIsTop(latest < 50);
  });

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Artikel', href: '/#artikel' },
    { name: 'Proses', href: '/#workflow' },
    { name: 'Team', href: '/#team' },
  ];

  return (
    <>
      {}
      {}
      <motion.div
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 inset-x-0 z-[90] pointer-events-none transition-all duration-500 ${
          isTop 
            ? 'h-24 opacity-0' 
            : 'h-[72px] opacity-100 backdrop-blur-lg bg-white/70 border-b border-black/10 shadow-sm'
        }`}
      />

      {}
      {}
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 inset-x-0 z-[100] mix-blend-difference text-white transition-all duration-500 flex items-center ${
          isTop ? 'h-24' : 'h-[72px]'
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {}
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm group-hover:rotate-90 transition-transform duration-500">
              {}
              <span className="text-black font-black text-xs">T</span>
            </div>
            <span className="text-xl font-black uppercase italic tracking-tighter">
              TECH<span className="opacity-60">.</span>UTS
            </span>
          </Link>

          {}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="font-mono text-[10px] uppercase tracking-[0.3em] hover:font-bold transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {}
          <div className="flex items-center gap-6">
            <a href="#footer" className="px-5 py-2 border border-white font-mono text-[10px] uppercase tracking-widest rounded-none hover:bg-white hover:text-black transition-all duration-300">
              KONTAK
            </a>
          </div>
        </div>
      </motion.nav>
    </>
  );
}