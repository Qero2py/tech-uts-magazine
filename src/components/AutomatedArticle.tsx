'use client';
import React, { useState, useEffect, useRef } from 'react';
import mammoth from 'mammoth';
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import { ARTICLES_DATA } from '@/data/articles'; 

interface RedaksiRoles {
  ketua: string;
  penulis: string;
  editor: string;
  layout: string;
  dokumenter: string;
}

interface ArticleProps {
  data: {
    slug: string;
    title: string;
    type: string;
    date: string;
    insight: string;
    tags: string[];
    roles: RedaksiRoles;
    img: string;
  };
}

export default function AutomatedArticle({ data }: ArticleProps) {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const currentIndex = ARTICLES_DATA.findIndex(a => a.slug === data.slug);
  const nextArticle = ARTICLES_DATA[(currentIndex + 1) % ARTICLES_DATA.length];

  
  useEffect(() => {
    async function loadFile() {
      try {
        const response = await fetch(`/content/${data.slug}.docx`);
        const arrayBuffer = await response.arrayBuffer();
        const result = await mammoth.convertToHtml({ arrayBuffer });
        setContent(result.value);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }
    loadFile();
  }, [data.slug]);

  
  useEffect(() => {
    if (!loading) {
      
      const timeoutId = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        
        window.dispatchEvent(new Event('resize')); 
      }, 50);

      return () => clearTimeout(timeoutId);
    }
  }, [loading]);

  if (loading) return <div className="bg-black h-screen w-full fixed inset-0 z-50" />;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <article ref={containerRef} className="bg-[#0a0a0a] text-white min-h-screen pt-32 pb-10 selection:bg-white-500">

        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          {}
          <header className="mb-16 border-b border-white/10 pb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="px-3 py-1 border border-white/20 rounded-full text-[10px] font-mono tracking-widest uppercase text-white-500">
                Tech_Archive 
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-[7vw] font-black leading-[0.9] mb-10 max-w-5xl tracking-tighter italic uppercase"
            >
              {data.title}
            </motion.h1>
            
            <div className="flex flex-wrap gap-12 text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">
              <div><p className="mb-2 text-white/40">Publikasi</p><p>{data.date}</p></div>
              <div><p className="mb-2 text-white/40">Lead Writer</p><p>{data.roles.penulis}</p></div>
            </div>
          </header>

          <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative w-full h-[50vh] md:h-[70vh] mb-20 overflow-hidden rounded-[2rem] border border-white/10"
        >
          <img 
            src={data.img} 
            alt={data.title}
            className="w-full h-full object-cover scale-105"
          />
          {}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          
          {}
          <div className="absolute bottom-8 left-8 hidden md:block">
            <p className="font-mono text-[10px] text-white/40 tracking-[0.5em] uppercase">
              Visual_Asset 
            </p>
          </div>
        </motion.div>

          {}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="lg:col-span-8"
            >
              <div 
                className="prose-magazine"
                dangerouslySetInnerHTML={{ __html: content }} 
              />
            </motion.div>

            {}
            <aside className="lg:col-span-4 space-y-16 lg:sticky lg:top-32 h-fit border-l border-white/5 pl-0 lg:pl-12">
              <section>
                <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] mb-8 text-white/30 border-b border-white/10 pb-2">Editorial Team</h4>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-y-6 gap-x-4">
                  {[
                    { label: "Ketua Redaksi", name: data.roles.ketua },
                    { label: "Editor", name: data.roles.editor },
                    { label: "Layout Designer", name: data.roles.layout },
                    { label: "Dokumenter", name: data.roles.dokumenter }
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="text-[9px] font-mono text-white/20 uppercase mb-1">// {item.label}</p>
                      <p className="text-sm font-bold italic">{item.name}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-white/[0.03] p-8 border-l-2 border-white-500">
                <span className="text-[10px] font-mono uppercase tracking-widest block mb-4 text-white/20 italic">" Insight "</span>
                <p className="text-lg italic font-medium leading-relaxed text-white/80 italic font-serif">
                  {data.insight}
                </p>
              </section>
            </aside>
          </div>

          {}
          <footer className="mt-32 pt-20 border-t border-white/10">
            <p className="text-center font-mono text-[10px] uppercase tracking-[1em] mb-12 opacity-20">Up Next</p>
            <a href={`/artikel/${nextArticle.slug}`} className="group block text-center">
               <span className="text-white/40 font-mono text-xs uppercase italic group-hover:text-white-500 transition-colors">Continue Reading —</span>
               <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter mt-4 group-hover:skew-x-[-10deg] transition-transform duration-500">
                 {nextArticle.title}
               </h2>
               <div className="flex justify-center mt-10">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <span className="text-3xl">↓</span>
                  </div>
               </div>
            </a>
          </footer>

        </div>
      </article>
    </motion.div>
  );
}