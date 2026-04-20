'use client';
import React, { useState } from 'react';
import mammoth from 'mammoth';

export default function WordArticle() {
  const [content, setContent] = useState<string>('');

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      const arrayBuffer = e.target?.result as ArrayBuffer;
      
      
      const result = await mammoth.convertToHtml({ arrayBuffer });
      setContent(result.value); 
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <section className="bg-[#f4f4f4] text-black py-20 px-6 md:px-40 min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        {}
        <div className="mb-12 p-6 border-2 border-dashed border-black/20 rounded-xl">
          <label className="block font-mono text-xs uppercase mb-4">Upload Artikel (.docx)</label>
          <input 
            type="file" 
            accept=".docx" 
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
          />
        </div>

        {}
        {content && (
          <article 
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: content }} 
          />
        )}
      </div>
    </section>
  );
}