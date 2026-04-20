'use client';
import Link from 'next/link';
import { motion, easeOut } from 'framer-motion';

export default function Footer() {
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

  
  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Artikel', href: '/#artikel' },
    { name: 'Proses', href: '/#workflow' },
    { name: 'Team Redaksi', href: '/#team' },
  ];

  return (
    <footer id="footer" className="relative bg-gradient-to-br from-zinc-900 via-neutral-900 to-black text-white pt-32 pb-10 px-6 md:px-12 overflow-hidden">

      {}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />

      {}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

      {}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
      />

      <div className="relative max-w-[1400px] mx-auto">
        
        {}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-white/10 pb-12 gap-8"
        >
          <h2 className="text-6xl md:text-[8vw] font-black uppercase italic tracking-tighter leading-[0.8] text-white hover:text-white/50 transition-colors duration-700 cursor-default">
            TECH<span className="text-white/20">.</span>UTS
          </h2>

          {}
          <div className="text-left md:text-right">
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/40 mb-2">
              End_Of_Document // Archive
            </p>
            <p className="font-mono text-xs uppercase text-green-400 font-bold">
              System_Status: Online
            </p>
          </div>
        </motion.div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {}
          <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6 border-l-2 border-white/20 pl-3">
              Tentang Publikasi
            </h4>
            <p className="font-serif text-white/70 text-sm leading-relaxed italic">
              Platform publikasi digital independen yang merekam jejak inovasi, teknologi, dan pemikiran kritis melalui pendekatan editorial modern dan arsitektur visual kelas atas.
            </p>
          </motion.div>

          {}
          <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">
              Indeks Halaman
            </h4>
            <ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-white/60">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="hover:text-white hover:translate-x-2 transition-all inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {}
          <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">
              Team Redaksi
            </h4>
            <ul className="space-y-4 font-mono text-[10px] uppercase tracking-widest text-white/60">
              {[
                ['Ketua','Ahmeth'],
                ['Penulis','Givan'],
                ['Editor','Alintar'],
                ['Layout','Dicky'],
                ['Docs','Wahdan'],
              ].map(([role,name],i)=>(
                <li key={i} className="flex justify-between border-b border-white/10 pb-1">
                  <span className="text-white/40">{role}</span>
                  <span className="text-white font-bold">{name}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {}
          <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">
              Kontak
            </h4>
            <ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-white/60">
              <li><a href="mailto:redaksi@tech.uts" className="hover:text-white transition-all">redaksi@tech.uts</a></li>
              <li><a href="#" className="hover:text-white transition-all">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-all">LinkedIn</a></li>
            </ul>
          </motion.div>
        </div>

        {}
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
            className="mt-6 md:mt-0 flex items-center gap-4 hover:text-white transition-colors group"
          >
            <span>Return_To_Top</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:-translate-y-1 transition-all">
              ↑
            </div>
          </button>
        </motion.div>

      </div>
    </footer>
  );
}