"use client";

import React from "react";
import { Users, Briefcase, Trophy, Building, Shield, HeartHandshake } from "lucide-react";

export default function ImpactStats() {
  const stats = [
    {
      label: "Anos de História e Protagonismo",
      value: "55",
      suffix: "Anos",
      description: "Fundada em 1969 como o pilar do varejo no Sul do ES",
      icon: Trophy,
      color: "text-amber-400"
    },
    {
      label: "Empresas e Lojistas Associados",
      value: "+1.200",
      suffix: "Lojas",
      description: "Do pequeno empreendedor às grandes redes varejistas",
      icon: Building,
      color: "text-blue-400"
    },
    {
      label: "Empregos Mantidos pelo Comércio",
      value: "+15.000",
      suffix: "Postos",
      description: "Motor da economia e geração de renda em Cachoeiro",
      icon: Briefcase,
      color: "text-emerald-400"
    },
    {
      label: "Soluções de Crédito e Proteção (SPC)",
      value: "+500 mil",
      suffix: "Consultas/Ano",
      description: "Segurança financeira e apoio à concessão de crédito",
      icon: Shield,
      color: "text-purple-400"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-[#08152e] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
            Impacto no Desenvolvimento Regional
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Força que Move Cachoeiro de Itapemirim
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Numeros que refletem 55 anos de dedicação ininterrupta da CDL em prol do fortalecimento do comércio, dos serviços e da comunidade capixaba.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-slate-950 border border-slate-800 ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    CDL ES
                  </span>
                </div>

                <div>
                  <div className={`text-4xl font-black text-white flex items-baseline gap-1`}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-3">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Banner de Compromisso */}
        <div className="bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <HeartHandshake className="w-5 h-5 text-amber-400" />
              Compromisso de Lojista para Lojista
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              Nossa missão é promover soluções inovadoras, capacitação contínua, representatividade governamental e incentivos constantes ao consumo no comércio de Cachoeiro de Itapemirim.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-transform active:scale-95 shrink-0"
          >
            Seja um Associado CDL
          </a>
        </div>
      </div>
    </section>
  );
}
