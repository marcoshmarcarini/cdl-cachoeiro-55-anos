"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, ShieldCheck, Award, Heart, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [store, setStore] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setFormSent(true);
  };

  return (
    <footer id="contact" className="bg-[#050d1c] border-t border-slate-800 text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand & Address info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#08152e] rounded-[10px] flex items-center justify-center font-black text-amber-400 text-xl">
                  55
                </div>
              </div>
              <div>
                <span className="font-extrabold text-white text-xl block tracking-wider">
                  CDL CACHOEIRO
                </span>
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-widest">
                  Câmara de Dirigentes Lojistas de Cachoeiro de Itapemirim - ES
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Desde 10 de novembro de 1969 fortalecendo os empresários do varejo, comércio e serviços no Sul do Estado do Espírito Santo. Unidade, inovação tecnológica, consultas de crédito SPC e representatividade.
            </p>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Av. Beira Rio, Centro, Cachoeiro de Itapemirim - ES, CEP 29300-000
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>(28) 3526-1600 | WhatsApp: (28) 99985-0055</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>atendimento@cdlcachoeiro.com.br</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">Início & Apresentação</a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-amber-400 transition-colors">Linha do Tempo (5 Décadas)</a>
              </li>
              <li>
                <a href="#impact" className="hover:text-amber-400 transition-colors">Impacto Regional</a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-amber-400 transition-colors">Diretoria & Ex-Presidentes</a>
              </li>
              <li>
                <a href="#events" className="hover:text-amber-400 transition-colors">Agenda dos 55 Anos</a>
              </li>
              <li>
                <a href="#tribute" className="hover:text-amber-400 transition-colors">Gerador de Homenagem ao Lojista</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">Galeria de Fotos Históricas</a>
              </li>
            </ul>
          </div>

          {/* Affiliation / Contact Form */}
          <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Filie a Sua Loja à CDL Cachoeiro
            </h4>
            <p className="text-xs text-slate-400">
              Receba atendimento exclusivo sobre consultas SPC, certificado digital e cursos para sua equipe.
            </p>

            {formSent ? (
              <div className="p-4 bg-emerald-950/80 border border-emerald-800 text-emerald-200 text-xs rounded-xl space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Solicitação Enviada!
                </div>
                <p>Nossa equipe de atendimento entrará em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                />
                <input
                  type="text"
                  required
                  placeholder="Nome do seu comércio/empresa"
                  value={store}
                  onChange={(e) => setStore(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                />
                <input
                  type="tel"
                  required
                  placeholder="Telefone / WhatsApp"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-lg shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  Quero Fazer Parte da CDL
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 1969 - 2024 / 2025 CDL Cachoeiro de Itapemirim - ES. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2">
            <span>55 Anos de União, Protagonismo e Inovação Varejista no Sul do ES</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
