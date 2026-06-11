// src/components/Workflow.tsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface WorkflowProps {
  edition?: number;
}

export default function Workflow({ edition = 1 }: WorkflowProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const scaleY = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  const steps = edition === 1 ? [
    { num: "01", title: "Brainstorming & Concepting", desc: "Penentuan tema sentral 'Ekosistem AI' dan kurasi konsep UI/UX Glassmorphism.", tags: ["Ideation", "Research"] },
    { num: "02", title: "Drafting & Content Creation", desc: "Penulisan naskah mendalam mengenai infrastruktur Google-Broadcom dan otonomi Canva.", tags: ["Copywriting", "Drafting"] },
    { num: "03", title: "Peer Review & Editing", desc: "Proses penyuntingan lintas anggota team untuk memastikan akurasi data dan narasi.", tags: ["Validation", "QC"] },
    { num: "04", title: "Visual Design & Layouting", desc: "Transformasi naskah ke dalam komponen React dengan estetika Brutalist-Minimalis.", tags: ["Frontend", "UI/UX"] },
    { num: "05", title: "Final Validation", desc: "Audit performa animasi, responsivitas, dan pengecekan akhir seluruh metadata.", tags: ["Testing", "Optimization"] },
    { num: "06", title: "Deployment & Launch", desc: "Publikasi resmi melalui server Vercel dan penyerahan portofolio digital.", tags: ["Publishing", "Live"] }
  ] : [
    { num: "01", title: "Tema & Eksplorasi", desc: "Merumuskan wacana kritis seputar 'Internet of Things' dan dampaknya terhadap privasi masyarakat modern.", tags: ["Research", "IoT"] },
    { num: "02", title: "Penulisan Opini & Feature", desc: "Penyusunan kerangka naskah mengenai urgensi regulasi siber dan etika di balik algoritma pintar.", tags: ["Drafting", "Editorial"] },
    { num: "03", title: "Kurasi Narasi", desc: "Penyelarasan intonasi akademik dan bahasa jurnalistik antar penulis dalam satu edisi.", tags: ["Review", "Editing"] },
    { num: "04", title: "Desain Antarmuka Siber", desc: "Merombak visual Edisi 2 dengan sentuhan estetika 'Cyber Nexus' dan interaksi 3D dinamis.", tags: ["Frontend", "Framer Motion"] },
    { num: "05", title: "Integrasi Komponen", desc: "Penyatuan data dinamis untuk menggabungkan Edisi 1 dan 2 dalam satu arsitektur kode yang efisien.", tags: ["Refactoring", "React"] },
    { num: "06", title: "Rilis Edisi 02", desc: "Pembaruan arsitektur di *production server* untuk dapat diakses oleh publik secara langsung.", tags: ["Deploy", "Live"] }
  ];

  const bgStyle = edition === 2 ? "bg-black text-white" : "bg-white text-black";
  const accentBorder = edition === 2 ? "border-emerald-500" : "border-black";
  const accentText = edition === 2 ? "text-emerald-500" : "text-black";

  return (
    <section id="workflow" ref={containerRef} className={`relative z-30 py-40 px-6 md:px-20 overflow-hidden ${bgStyle}`}>
      <div className={`absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(${edition === 2 ? '#fff' : '#000'}_1px,transparent_1px)] [background-size:30px_30px]`} />
      
      <div className="absolute right-[-5%] top-1/4 opacity-[0.03] pointer-events-none hidden lg:block">
        <h2 className="text-[300px] font-black leading-none uppercase rotate-90 origin-center tracking-tighter">
          METHODS
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mb-32 border-l-4 pl-8 ${accentBorder}`}
        >
          <h2 className="text-6xl md:text-9xl font-[1000] leading-[0.8] tracking-tighter uppercase italic">
            ALUR<br /><span className="opacity-10">KERJA.</span>
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div style={{ scaleY }} className={`absolute left-0 md:left-1/2 top-0 w-[2px] h-full origin-top hidden md:block ${edition === 2 ? 'bg-emerald-500/50' : 'bg-black'}`} />

          <div className="space-y-40">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                <div className={`absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 border-[3px] rounded-full z-10 hidden md:block ${edition === 2 ? 'bg-black border-emerald-500 shadow-[0_0_15px_#10b981]' : 'bg-white border-black shadow-[4px_4px_0px_rgba(0,0,0,0.1)]'}`} />

                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:pr-24' : 'md:pl-24'} text-left`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`font-mono text-[10px] px-2 py-1 font-bold ${edition === 2 ? 'bg-emerald-500 text-black' : 'bg-black text-white'}`}>{step.num}</span>
                    <div className="flex gap-2">
                      {step.tags.map((tag, idx) => (
                        <span key={idx} className={`text-[9px] font-mono border px-2 py-0.5 uppercase tracking-tighter ${edition === 2 ? 'border-white/20 text-white/50' : 'border-black/10 text-black/50'}`}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className={`text-4xl md:text-5xl font-black uppercase italic leading-none mb-6 ${accentText}`}>
                    {step.title}
                  </h3>
                  
                  <p className={`text-sm md:text-base leading-relaxed font-medium max-w-md ${edition === 2 ? 'text-zinc-400' : 'text-gray-600'}`}>
                    {step.desc}
                  </p>
                </div>

                <div className={`hidden md:flex w-1/2 ${i % 2 === 0 ? 'justify-start pl-20' : 'justify-end pr-20'} items-center`}>
                   <span className="text-[12vw] font-black text-transparent select-none opacity-10" style={{ WebkitTextStroke: `2px ${edition === 2 ? '#10b981' : 'black'}` }}>
                     {step.num}
                   </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className={`mt-40 pt-10 border-t flex justify-between items-center opacity-30 font-mono text-[9px] uppercase tracking-[0.3em] ${edition === 2 ? 'border-white/10' : 'border-black/5'}`}>
        <p>[ System_Methodology_v{edition}.0 ]</p>
        <p>Verified by Tech.Uhamka</p>
      </div>
    </section>
  );
}