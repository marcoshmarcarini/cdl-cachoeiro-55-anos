"use client";

import React from "react";
import { NOSSOS_PRESIDENTES } from "@/app/data/cdlData";


export default function NossosPresidentes() {

  return (
    <section id="timeline" className="py-20 bg-[#071328] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Timeline Cards */}
        <div className="relative border-l-2 border-amber-500/30 ml-4 sm:ml-32 space-y-8 pl-6 sm:pl-10">
          {NOSSOS_PRESIDENTES.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#071328] border-2 border-amber-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-md">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
              </div>

              {/* Mobile / Desktop Year Label on Left */}
              <div className="sm:absolute sm:-left-32 sm:top-1 font-black text-2xl text-amber-400 sm:w-24 sm:text-right">
                {item.term}
              </div>

              {/* Card Content */}
              <div className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 space-y-4 shadow-xl transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs text-slate-400 font-mono">
                    {item.term}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.name}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
