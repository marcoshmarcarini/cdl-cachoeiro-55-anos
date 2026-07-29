"use client";

import React from "react";
import { Award, ChevronDown, Sparkles, Building2, TrendingUp, ShieldCheck, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#071328]">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid line pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Jubileu Emblem / Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold shadow-xl shadow-amber-500/10">
          <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span>Jubileu de Ouro & 55 Anos da CDL Cachoeiro de Itapemirim (1969 - 2024)</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none max-w-5xl mx-auto">
          55 Anos de <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">Protagonismo</span>, Inovação e Força do Comércio
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
          Desde 10 de novembro de 1969, a <strong className="text-amber-300 font-semibold">Câmara de Dirigentes Lojistas de Cachoeiro de Itapemirim</strong> é o pilar de defesa do empresariado, impulsionando milhares de lojistas, gerando empregos e liderando a economia do Sul do Espírito Santo.
        </p>

        {/* Quick Highlights / Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4 text-left">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex items-center gap-3">
            <Building2 className="w-8 h-8 text-amber-400 shrink-0" />
            <div>
              <div className="text-xs text-slate-400 font-medium">Desde 1969</div>
              <div className="text-sm font-bold text-white">Tradição & Ética</div>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-emerald-400 shrink-0" />
            <div>
              <div className="text-xs text-slate-400 font-medium">+1.200 Associados</div>
              <div className="text-sm font-bold text-white">Comércio & Serviços</div>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-blue-400 shrink-0" />
            <div>
              <div className="text-xs text-slate-400 font-medium">Soluções SPC</div>
              <div className="text-sm font-bold text-white">Segurança de Crédito</div>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-amber-400 shrink-0" />
            <div>
              <div className="text-xs text-slate-400 font-medium">5 Décadas</div>
              <div className="text-sm font-bold text-white">Campanhas Marcantes</div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a
            href="#timeline"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-slate-950 font-black text-sm rounded-xl shadow-xl shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Nossas 5 Décadas de História
          </a>

          <a
            href="#tribute"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold text-sm rounded-xl border border-amber-500/40 transition-all hover:border-amber-400 cursor-pointer"
          >
            <Award className="w-4 h-4 text-amber-400" />
            Gerar Homenagem ao Lojista
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="pt-12 flex justify-center">
          <a href="#impact" className="text-slate-500 hover:text-amber-400 transition-colors animate-bounce">
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
