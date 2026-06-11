'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [isTop, setIsTop] = useState(true);

  // Deteksi rute saat ini untuk logika Edisi
  const isEdisi2 = pathname === '/edisi-2';

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    setIsTop(latest < 50);
  });

  // Tautan yang dinamis menyesuaikan halaman yang sedang dibuka
  const basePath = isEdisi2 ? '/edisi-2' : '/';
  const navLinks = [
    { name: 'Beranda', href: basePath },
    { name: 'Artikel', href: `${basePath}#artikel` },
    { name: 'Proses', href: `${basePath}#workflow` },
    { name: 'Team', href: `${basePath}#team` },
  ];

  return (
    <>
      {/* Latar Belakang Blur Transparan (Terpisah dari teks agar mix-blend berfungsi) */}
      <motion.div
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 inset-x-0 z-[90] pointer-events-none transition-all duration-500 ${
          isTop 
            ? 'h-24 opacity-0' 
            : `h-[72px] opacity-100 backdrop-blur-lg shadow-sm border-b ${
                isEdisi2 
                  ? 'bg-black/70 border-white/10' // Tema Gelap untuk Edisi 2
                  : 'bg-white/70 border-black/10' // Tema Terang untuk Edisi 1
              }`
        }`}
      />

      {/* Navigasi Utama */}
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 inset-x-0 z-[100] mix-blend-difference text-white transition-all duration-500 flex items-center ${
          isTop ? 'h-24' : 'h-[72px]'
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm group-hover:rotate-90 transition-transform duration-500">
              <span className="text-black font-black text-xs">T</span>
            </div>
            <span className="text-xl font-black uppercase italic tracking-tighter">
              TECH<span className="opacity-60">.</span>UTS
            </span>
          </Link>

          {/* Tautan Desktop */}
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

          {/* Tombol Pindah Edisi */}
          <div className="flex items-center gap-6">
            {isEdisi2 ? (
              <Link href="/" className="px-5 py-2 border border-white bg-white text-black font-mono text-[10px] uppercase tracking-widest rounded-none hover:bg-transparent hover:text-white transition-all duration-300">
                Edisi 1
              </Link>
            ) : (
              <Link href="/edisi-2" className="px-5 py-2 border border-white font-mono text-[10px] uppercase tracking-widest rounded-none hover:bg-white hover:text-black transition-all duration-300">
                Edisi 2
              </Link>
            )}
          </div>
        </div>
      </motion.nav>
    </>
  );
}