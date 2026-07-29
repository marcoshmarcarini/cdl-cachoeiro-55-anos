"use client";

import React, { useState } from "react";
import { GALLERY_ITEMS } from "@/app/data/cdlData";
import { Image as ImageIcon, Sparkles } from "lucide-react";

export default function GallerySection() {

  return (
    <section id="gallery" className="py-20 bg-[#071328]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
            Galeria de Memórias 55 Anos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Registros do Nosso Comércio
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Imagens que retratam o dinamismo da Beira Rio, do Centro de Cachoeiro de Itapemirim e das grandes realizações da CDL.
          </p>
        </div>

        

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40"
            >
              <div className="relative h-48 overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
              </div>

              <div className="p-4 space-y-2">
                <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
