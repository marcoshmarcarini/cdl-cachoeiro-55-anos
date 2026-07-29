"use client";

import React, { useState } from "react";
import { TIMELINE_DATA } from "@/app/data/cdlData";
import { Clock, CheckCircle2, Award, Calendar, Sparkles, ChevronRight } from "lucide-react";

export default function TimelineSection() {
  const [selectedDecade, setSelectedDecade] = useState<string>("Todas");

  const decades = ["Todas", "1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"];

  const filteredTimeline = selectedDecade === "Todas"
    ? TIMELINE_DATA
    : TIMELINE_DATA.filter((item) => item.decade === selectedDecade);

  return (
    <section id="timeline" className="py-20 bg-[#071328] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
            5 Décadas de História (1969 - 2024)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Linha do Tempo da CDL Cachoeiro
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Navegue pelos momentos marcantes da fundação, expansão, digitalização e inovação que transformaram o comércio de Cachoeiro de Itapemirim.
          </p>
        </div>

        {/* Decade Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {decades.map((decade) => (
            <button
              key={decade}
              onClick={() => setSelectedDecade(decade)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105 `
            }> 
            
              {decade === "Todas" ? "Todas as Décadas" : decade}
            </button>
          ))}
        </div>

        {/* Timeline Cards */}
        <div className="relative border-l-2 border-amber-500/30 ml-4 sm:ml-32 space-y-8 pl-6 sm:pl-10">
          {filteredTimeline.map((item, index) => (
            <div key={item.year} className="relative group">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#071328] border-2 border-amber-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-md">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
              </div>

              {/* Mobile / Desktop Year Label on Left */}
              <div className="sm:absolute sm:-left-32 sm:top-1 font-black text-2xl text-amber-400 sm:w-24 sm:text-right">
                {item.year}
              </div>

              {/* Card Content */}
              <div className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 space-y-4 shadow-xl transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold px-2.5 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 rounded-md">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Década de {item.decade}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights list */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Marcos Alcançados:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                      {item.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
