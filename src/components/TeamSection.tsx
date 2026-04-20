'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';

const team = [
  { id: '01', role: "Ketua Redaksi", name: "Ahmeth", code: "LEAD", desc: "Arsitek Visi Editorial" },
  { id: '02', role: "Penulis", name: "Givan", code: "TEXT", desc: "Narator Utama" },
  { id: '03', role: "Editor", name: "Alintar", code: "EDIT", desc: "Penjaga Akurasi" },
  { id: '04', role: "Layout Designer", name: "Dicky", code: "VISL", desc: "Arsitek Visual" },
  { id: '05', role: "Dokumenter", name: "Wahdan", code: "DOCS", desc: "Pengelola Arsip" },
];

export default function TeamSection() {
  const [active, setActive] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const rotateX = useTransform(smoothY, [0, 800], [6, -6]);
  const rotateY = useTransform(smoothX, [0, 1200], [-6, 6]);

  return (
    <motion.section
      id="team"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
      className="min-h-screen bg-black text-white relative flex items-center justify-start md:pl-20 px-6 overflow-hidden"
    >

      {}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
      />

      {}
      <div className="absolute left-[30%] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-white-500/10 blur-[140px] rounded-full" />

      {}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-10 left-6 md:left-10 z-10"
      >
        <h2 className="text-4xl md:text-[6vw] font-[1000] uppercase italic leading-[0.8] tracking-tighter">
          Team<br />Redaksi
        </h2>
      </motion.div>

      {}
      <motion.div
        style={{ rotateX, rotateY }}
        className="hidden md:block relative w-full max-w-[1100px] h-[80vh]"
      >
        {team.map((member, i) => {
          const isActive = active === i;

          return (
            <motion.div
              key={i}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="absolute cursor-pointer select-none"
              animate={{
                opacity: active === null || isActive ? 1 : 0.2,
                scale: isActive ? 1.12 : 1,
                zIndex: isActive ? 50 : i,
              }}
              style={{
                top: `${20 + i * 14}%`,
                left: `${10 + i * 14}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >

              {}
              <motion.h2
                className="font-black uppercase leading-none"
                style={{ fontSize: 'clamp(42px, 7vw, 110px)' }}
                animate={{
                  x: isActive ? 18 : 0,
                  letterSpacing: isActive ? '0.05em' : '0em',
                }}
              >
                {member.name}
              </motion.h2>

              {}
              {isActive && (
                <>
                  <motion.h2
                    className="absolute top-0 left-0 font-black text-white-400 opacity-20 blur-[1px]"
                    style={{ fontSize: 'clamp(42px, 7vw, 110px)' }}
                    animate={{ x: -5 }}
                  >
                    {member.name}
                  </motion.h2>

                  <motion.h2
                    className="absolute top-0 left-0 font-black text-purple-500 opacity-20 blur-[1px]"
                    style={{ fontSize: 'clamp(42px, 7vw, 110px)' }}
                    animate={{ x: 5 }}
                  >
                    {member.name}
                  </motion.h2>
                </>
              )}

              {}
              <motion.div
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 10,
                }}
                className="mt-4"
              >
                <p className="text-xs tracking-widest text-white">
                  {member.role}
                </p>
                <p className="text-sm text-white mt-1 max-w-xs">
                  {member.desc}
                </p>
              </motion.div>

            </motion.div>
          );
        })}
      </motion.div>

      {}
      <div className="md:hidden w-full mt-32 space-y-10">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="border-b border-white/10 pb-6"
          >
            <h3 className="text-3xl font-black uppercase">
              {member.name}
            </h3>

            <p className="text-xs tracking-widest text-white/40 mt-2">
              [{member.code}] — {member.role}
            </p>

            <p className="text-sm text-white/60 mt-2">
              {member.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </motion.section>
  );
}