'use client';
import Link from 'next/link';
import { motion, easeOut } from 'framer-motion';

interface FooterProps {
  edition?: number;
}

export default function Footer({ edition = 1 }: FooterProps) {
  const currentYear = 2026;

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: easeOut
      }
    })
  };

  // Tautan yang dinamis menyesuaikan edisi
  const basePath = edition === 2 ? '/edisi-2' : '';
  const navLinks = [
    { name: 'Beranda', href: edition === 2 ? '/edisi-2' : '/' },
    { name: 'Artikel', href: `${basePath}#artikel` },
    { name: 'Proses', href: `${basePath}#workflow` },
    { name: 'Team Redaksi', href: `${basePath}#team` },
  ];

  // Susunan Tim Dinamis
  const team1 = [
    ['Ketua', 'Ahmeth'],
    ['Penulis', 'Givan'],
    ['Editor', 'Alintar'],
    ['Layout', 'Dicky'],
    ['Docs', 'Wahdan'],
  ];

  const team2 = [
    ['Ketua', 'Dicky'],
    ['Penulis', 'Ahmeth'],
    ['Editor', 'Alintar'],
    ['Layout', 'Givan'],
    ['Docs', 'Wahdan'],
  ];

  const activeTeam = edition === 2 ? team2 : team1;
  const accentColor = edition === 2 ? "text-emerald-400" : "text-green-400";
  const hoverAccent = edition === 2 ? "hover:text-emerald-400" : "hover:text-white";

  return (
    <footer id="footer" className={`relative text-white pt-32 pb-10 px-6 md:px-12 overflow-hidden ${edition === 2 ? 'bg-zinc-950' : 'bg-gradient-to-br from-zinc-900 via-neutral-900 to-black'}`}>

      {/* Garis Pembatas Atas */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />

      {/* Cahaya Pendar (Radial Gradient) */}
      <div className={`absolute inset-0 pointer-events-none ${edition === 2 ? 'bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.05),transparent_60%)]' : 'bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]'}`} />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
      />

      <div className="relative max-w-[1400px] mx-auto z-10">
        
        {/* Header Footer */}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-white/10 pb-12 gap-8"
        >
          <h2 className={`text-6xl md:text-[8vw] font-black uppercase italic tracking-tighter leading-[0.8] text-white transition-colors duration-700 cursor-default ${edition === 2 ? 'hover:text-emerald-500/50' : 'hover:text-white/50'}`}>
            TECH<span className="text-white/20">.</span>UTS
          </h2>

          {/* Status Sistem */}
          <div className="text-left md:text-right">
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/40 mb-2">
              End_Of_Document // Archive_0{edition}
            </p>
            <p className={`font-mono text-xs uppercase font-bold ${accentColor}`}>
              System_Status: Online
            </p>
          </div>
        </motion.div>

        {/* Grid Informasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Tentang */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h4 className={`font-mono text-[10px] uppercase tracking-[0.3em] mb-6 border-l-2 pl-3 ${edition === 2 ? 'text-emerald-500/60 border-emerald-500/30' : 'text-white/40 border-white/20'}`}>
              Tentang Publikasi
            </h4>
            <p className="font-serif text-white/70 text-sm leading-relaxed italic">
              Platform publikasi digital independen yang merekam jejak inovasi, teknologi, dan pemikiran kritis melalui pendekatan editorial modern dan arsitektur visual kelas atas.
            </p>
          </motion.div>

          {/* Navigasi */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h4 className={`font-mono text-[10px] uppercase tracking-[0.3em] mb-6 ${edition === 2 ? 'text-emerald-500/60' : 'text-white/40'}`}>
              Indeks Halaman
            </h4>
            <ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-white/60">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className={`${hoverAccent} hover:translate-x-2 transition-all inline-block`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tim Redaksi */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h4 className={`font-mono text-[10px] uppercase tracking-[0.3em] mb-6 ${edition === 2 ? 'text-emerald-500/60' : 'text-white/40'}`}>
              Team Redaksi Ed.0{edition}
            </h4>
            <ul className="space-y-4 font-mono text-[10px] uppercase tracking-widest text-white/60">
              {activeTeam.map(([role, name], i) => (
                <li key={i} className="flex justify-between border-b border-white/10 pb-1">
                  <span className="text-white/40">{role}</span>
                  <span className={`font-bold ${edition === 2 && role === 'Ketua' ? 'text-emerald-400' : 'text-white'}`}>{name}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Kontak */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h4 className={`font-mono text-[10px] uppercase tracking-[0.3em] mb-6 ${edition === 2 ? 'text-emerald-500/60' : 'text-white/40'}`}>
              Kontak
            </h4>
            <ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-white/60">
              <li><a href="mailto:redaksi@tech.uts" className={`${hoverAccent} transition-all`}>redaksi@tech.uts</a></li>
              <li><a href="#" className={`${hoverAccent} transition-all`}>Instagram</a></li>
              <li><a href="#" className={`${hoverAccent} transition-all`}>LinkedIn</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Hak Cipta & Tombol Ke Atas */}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[9px] font-mono uppercase tracking-[0.3em] text-white/40"
        >
          <p>© {currentYear} Tech.UTS Editorial System</p>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`mt-6 md:mt-0 flex items-center gap-4 transition-colors group ${hoverAccent}`}
          >
            <span>Return_To_Top</span>
            <div className={`w-8 h-8 rounded-full border flex items-center justify-center group-hover:-translate-y-1 transition-all ${edition === 2 ? 'border-emerald-500/30 group-hover:border-emerald-400' : 'border-white/20 group-hover:border-white'}`}>
              ↑
            </div>
          </button>
        </motion.div>

      </div>
    </footer>
  );
}