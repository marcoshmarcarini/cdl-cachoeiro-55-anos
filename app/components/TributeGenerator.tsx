"use client";

import React, { useState } from "react";
import { TributeResponse } from "@/app/types/cdl";
import { Award, Sparkles, Building2, Download, Share2, CheckCircle2, RefreshCw, Printer, Shield } from "lucide-react";

export default function TributeGenerator() {
  const [storeName, setStoreName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [segment, setSegment] = useState("Vestuário & Moda");
  const [yearsInCachoeiro, setYearsInCachoeiro] = useState("15");
  const [specialMemory, setSpecialMemory] = useState("");

  const [tribute, setTribute] = useState<TributeResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateTribute = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!storeName.trim() || !ownerName.trim()) {
      setError("Preencha o nome do estabelecimento e do lojista.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/tribute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          storeName,
          ownerName,
          segment,
          yearsInCachoeiro,
          specialMemory,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Erro ao gerar mensagem de homenagem.");
      }

      setTribute(data);
    } catch (err: any) {
      setError(err.message || "Falha na geração do diploma.");
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="tribute" className="py-20 bg-[#071328] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
            Homenagem Interativa I.A. 55 Anos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Espaço de Reconhecimento ao Lojista Capixaba
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Gere um Certificado de Homenagem Oficial personalizado para o seu comércio ou empresa de Cachoeiro de Itapemirim em celebração aos 55 anos da CDL.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Side */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Dados da Sua Empresa</h3>
                <p className="text-xs text-slate-400">Personalize o seu diploma de 55 Anos</p>
              </div>
            </div>

            {error && (
              <div className="p-3 bg-rose-950/80 border border-rose-800 text-rose-200 text-xs rounded-xl">
                {error}
              </div>
            )}

            <form onSubmit={handleGenerateTribute} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Nome do Estabelecimento / Loja *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Comercial Rezende"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Nome do Proprietário / Responsável *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Sebastião Rezende"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Ramo de Atuação
                  </label>
                  <select
                    value={segment}
                    onChange={(e) => setSegment(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Vestuário & Moda">Vestuário & Moda</option>
                    <option value="Calçados & Acessórios">Calçados & Acessórios</option>
                    <option value="Supermercado & Alimentação">Supermercado & Alimentação</option>
                    <option value="Construção & Reformas">Construção & Reformas</option>
                    <option value="Saúde & Farmácias">Saúde & Farmácias</option>
                    <option value="Serviços & Tecnologia">Serviços & Tecnologia</option>
                    <option value="Outros Setores">Outros Setores</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Anos em Cachoeiro
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 20 anos"
                    value={yearsInCachoeiro}
                    onChange={(e) => setYearsInCachoeiro(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Mensagem ou Diferencial Marcante (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Tradição no atendimento familiar e apoio ao desenvolvimento do bairro..."
                  value={specialMemory}
                  onChange={(e) => setSpecialMemory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-slate-950 font-black text-sm rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                    Gerando Diploma de Homenagem...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-slate-950 fill-current" />
                    Gerar Certificado de Homenagem 55 Anos
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Certificate Output Side */}
          <div className="lg:col-span-7">
            {tribute ? (
              <div className="bg-gradient-to-b from-[#0c1e3d] via-[#091730] to-[#061022] border-4 border-amber-500/40 rounded-3xl p-8 sm:p-12 space-y-8 relative shadow-2xl print:border-amber-600">
                {/* Certificate Decorative Border Lines */}
                <div className="absolute inset-3 border border-amber-500/20 rounded-2xl pointer-events-none" />

                {/* Header */}
                <div className="text-center space-y-4 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 p-0.5 mx-auto shadow-xl">
                    <div className="w-full h-full bg-[#071328] rounded-full flex items-center justify-center font-black text-amber-400 text-xl">
                      55
                    </div>
                  </div>

                  <div className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    Câmara de Dirigentes Lojistas de Cachoeiro de Itapemirim - ES
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {tribute.headline}
                  </h3>
                </div>

                {/* Content */}
                <div className="space-y-6 text-slate-200 text-sm sm:text-base leading-relaxed relative z-10 bg-slate-950/40 p-6 rounded-2xl border border-amber-500/20">
                  <p>{tribute.message}</p>

                  <div className="pt-4 border-t border-amber-500/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                    <div>
                      <strong className="text-white block">Sede CDL Cachoeiro de Itapemirim</strong>
                      Av. Beira Rio, Centro, Cachoeiro - ES
                    </div>

                    <div className="text-right">
                      <span className="text-amber-400 font-mono block">Código: {tribute.certificateCode}</span>
                      Data de Emissão: {tribute.dateGenerated}
                    </div>
                  </div>
                </div>

                {/* Print & Share CTAs */}
                <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 print:hidden">
                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition-colors cursor-pointer"
                  >
                    <Printer className="w-4 h-4 text-amber-400" />
                    Imprimir / Salvar PDF
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-12 text-center space-y-4 flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-amber-400 border border-slate-700">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Preencha o formulário para gerar o Diploma</h3>
                <p className="text-slate-400 text-sm max-w-md">
                  Seu estabelecimento receberá um certificado institucional comemorativo de 55 Anos da CDL Cachoeiro de Itapemirim assinado pela I.A. oficial do jubileu.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
