"use client";

import React from "react";
import { EVENTS_DATA, TESTIMONIALS_DATA } from "@/app/data/cdlData";
import { Calendar, MapPin, Clock, Award, Star, Quote } from "lucide-react";

export default function EventsAndNews() {
  return (
    <section id="events" className="py-20 bg-[#08152e] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
            Programação do Jubileu & Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Agenda Comemorativa & Vozes do Comércio
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Participe dos encontros solenes, fóruns de inovação e veja o relato de quem constrói o varejo de Cachoeiro há gerações.
          </p>
        </div>

        {/* Events Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-amber-400" />
            Eventos da Agenda de 55 Anos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EVENTS_DATA.map((evt) => (
              <div
                key={evt.id}
                className={`bg-slate-900 border rounded-2xl p-6 space-y-4 shadow-xl transition-all hover:border-amber-500/40 ${
                  evt.featured ? "border-amber-500/50 bg-gradient-to-br from-slate-900 to-[#07152b]" : "border-slate-800"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {evt.category}
                  </span>
                  {evt.featured && (
                    <span className="text-[11px] font-extrabold text-amber-400 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> Destaque
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-bold text-white">{evt.title}</h4>

                <p className="text-xs text-slate-300 leading-relaxed">{evt.description}</p>

                <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{evt.date} às {evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="truncate">{evt.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-6 pt-8 border-t border-slate-800/80">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Quote className="w-5 h-5 text-amber-400" />
            Depoimentos dos Associados de Cachoeiro
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 flex flex-col justify-between"
              >
                <p className="text-xs text-slate-200 italic leading-relaxed">
                  "{item.message}"
                </p>

                <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 p-0.5 flex items-center justify-center font-bold text-slate-950 text-xs shrink-0">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white text-xs">{item.author}</div>
                    <div className="text-[11px] text-amber-400 font-medium">
                      {item.company} • Associado há {item.yearsAssociated} anos
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
