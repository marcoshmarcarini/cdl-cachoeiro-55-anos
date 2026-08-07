"use client";

import React from "react";
import { LEADERSHIP_DATA } from "@/app/data/cdlData";
import { ShieldCheck, Target, Heart, Award, Quote, Users, Check } from "lucide-react";

export default function PillarsAndLeaders() {
  const pillars = [
    {
      title: "Defesa e Representatividade",
      desc: "Voz ativa do comércio e serviços junto ao poder público municipal e estadual, defendendo a simplificação tributária e a desburocratização.",
      icon: ShieldCheck
    },
    {
      title: "Inteligência & Serviços SPC",
      desc: "Fornecimento de dados analíticos, proteção ao crédito, emissão de Certificado Digital e consultas instantâneas para segurança nas vendas.",
      icon: Target
    },
    {
      title: "Inovação & Capacitação",
      desc: "Cursos, fóruns e mentorias em vendas digitais, e-commerce, gestão financeira e adoção de inteligência artificial no comércio local.",
      icon: Award
    },
    {
      title: "Desenvolvimento Social & Mulher",
      desc: "Engajamento com causas comunitárias, fortalecimento do CDL Mulher e estímulo ao primeiro emprego para jovens de Cachoeiro.",
      icon: Heart
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-[#08152e] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
            Pilares Institucionais & Governança
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Liderança Comprometida com o Futuro
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Diretoria voluntária, conselhos e colaboradores dedicados a construir um ambiente de negócios próspero e seguro em Cachoeiro de Itapemirim.
          </p>
        </div>

        {/* President Message Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-[#071328] to-slate-900 border border-amber-500/30 rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-amber-400">
            <Quote className="w-32 h-32" />
          </div>

          <div className="relative z-10 space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
              Mensagem do Presidente
            </div>

            <p className="text-slate-100 text-lg sm:text-2xl font-serif italic leading-relaxed">
              "Celebrar 55 anos da CDL Cachoeiro de Itapemirim é honrar a coragem dos comerciantes que desbravaram o nosso centro urbano no século XX e projetar as lojas de Cachoeiro para a era digital. O comércio é o coração pulsante da nossa cidade, gerando oportunidades para milhares de famílias."
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center font-black text-amber-400 text-lg">
                  CL
                </div>
              </div>
              <div>
                <div className="font-extrabold text-white text-base">Celso Luiz Costa</div>
                <div className="text-xs text-amber-400 font-medium">Presidente da CDL Cachoeiro de Itapemirim</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 space-y-4 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Leadership Directory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEADERSHIP_DATA.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 bg-slate-800 text-amber-300 rounded-md">
                    {item.period}
                  </span>
                  <Users className="w-4 h-4 text-slate-500" />
                </div>
                <h4 className="text-lg font-bold text-white">{item.name}</h4>
                <div className="text-xs text-amber-400 font-semibold">{item.role}</div>
                {item.quote && (
                  <p className="text-xs text-slate-300 italic pt-2 border-t border-slate-800">
                    "{item.quote}"
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
