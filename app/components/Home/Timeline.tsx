import { ArrowLeft, ArrowRight, Star, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function Timeline() {
    
    const timelineRef = useRef<HTMLDivElement>(null);
    
    const scrollTimeline = (direction: "left" | "right") => {
    if (timelineRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      timelineRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <section
      id="historia"
      className="py-24 bg-gradient-to-b from-[#002351] to-[#00193c] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4"
          data-aos="fade-up"
        >
          <div>
            <span className="text-secondary-brand font-bold text-xs tracking-[0.2em] uppercase mb-3 block">
              Linha do Tempo
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-white leading-tight">
              Evolução do Comércio do Sul do ES
            </h2>
          </div>

          {/* Timeline scroll buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => scrollTimeline("left")}
              className="bg-white/5 hover:bg-secondary-brand hover:text-primary-container text-white p-3 rounded-full border border-white/10 transition-all cursor-pointer"
              aria-label="Anterior"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTimeline("right")}
              className="bg-white/5 hover:bg-secondary-brand hover:text-primary-container text-white p-3 rounded-full border border-white/10 transition-all cursor-pointer"
              aria-label="Próximo"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal scrolling container */}
        <div
          ref={timelineRef}
          className="timeline-scroll flex gap-8 overflow-x-auto pb-8 scroll-smooth snap-x"
        >
          {/* Milestone 1971 */}
          <div
            className="min-w-[300px] sm:min-w-[360px] snap-start bg-[#0b132b]/40 border border-white/5 p-8 rounded-2xl relative flex flex-col justify-between hover:border-secondary-brand/20 transition-all group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <span className="text-4xl sm:text-5xl font-headline font-black text-secondary-brand/20 block mb-4 group-hover:text-secondary-brand/40 transition-colors">
                1971
              </span>
              <h3 className="font-headline font-bold text-lg sm:text-xl text-white mb-3">
                O Nascimento da Entidade
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Fundada em 30 de julho, surge da união de empresários que
                trouxeram o SPC, revolucionando a venda a prazo e trazendo
                credibilidade e agilidade para o varejo de Cachoeiro.
              </p>
            </div>
            <div className="border-t border-white/5 pt-4 mt-6">
              <span className="text-[10px] text-secondary-brand font-bold uppercase tracking-wider block">
                CONQUISTA HISTÓRICA
              </span>
            </div>
          </div>

          {/* Milestone 1978 */}
          <div
            className="min-w-[300px] sm:min-w-[360px] snap-start bg-[#0b132b]/40 border border-white/5 p-8 rounded-2xl relative flex flex-col justify-between hover:border-secondary-brand/20 transition-all group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div>
              <span className="text-4xl sm:text-5xl font-headline font-black text-secondary-brand/20 block mb-4 group-hover:text-secondary-brand/40 transition-colors">
                1978
              </span>
              <h3 className="font-headline font-bold text-lg sm:text-xl text-white mb-3">
                Patrimônio Institucional
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                A entidade conquista sua primeira sede administrativa com a
                aquisição de sua primeira sala no Edifício Hércules,
                consolidando um espaço físico próprio de atendimento.
              </p>
            </div>
            <div className="border-t border-white/5 pt-4 mt-6">
              <span className="text-[10px] text-secondary-brand font-bold uppercase tracking-wider block">
                SEDE PRÓPRIA
              </span>
            </div>
          </div>

          {/* Milestone 1988 */}
          <div
            className="min-w-[300px] sm:min-w-[360px] snap-start bg-[#0b132b]/40 border border-white/5 p-8 rounded-2xl relative flex flex-col justify-between hover:border-secondary-brand/20 transition-all group"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div>
              <span className="text-4xl sm:text-5xl font-headline font-black text-secondary-brand/20 block mb-4 group-hover:text-secondary-brand/40 transition-colors">
                1988
              </span>
              <h3 className="font-headline font-bold text-lg sm:text-xl text-white mb-3">
                Informatização & Agilidade
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Aceleração da transformação digital e início da adaptação de
                processos internos de busca manual em papel para as consultas
                velozes digitais.
              </p>
            </div>
            <div className="border-t border-white/5 pt-4 mt-6">
              <span className="text-[10px] text-secondary-brand font-bold uppercase tracking-wider block">
                ERA DOS COMPUTADORES
              </span>
            </div>
          </div>

          {/* Milestone 1990 */}
          <div
            className="min-w-[300px] sm:min-w-[360px] snap-start bg-[#0b132b]/40 border border-white/5 p-8 rounded-2xl relative flex flex-col justify-between hover:border-secondary-brand/20 transition-all group"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div>
              <span className="text-4xl sm:text-5xl font-headline font-black text-secondary-brand/20 block mb-4 group-hover:text-secondary-brand/40 transition-colors">
                1990
              </span>
              <h3 className="font-headline font-bold text-lg sm:text-xl text-white mb-3">
                Grandes Campanhas de Natal
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Lançamento de campanhas promocionais com sorteio de automóveis
                na Praça Jerônimo Monteiro, atraindo consumidores de todo o sul
                capixaba.
              </p>
            </div>
            <div className="border-t border-white/5 pt-4 mt-6">
              <span className="text-[10px] text-secondary-brand font-bold uppercase tracking-wider block">
                PROPAGAÇÃO ECONÔMICA
              </span>
            </div>
          </div>

          {/* Milestone 1996 */}
          <div
            className="min-w-[300px] sm:min-w-[360px] snap-start bg-[#0b132b]/40 border border-white/5 p-8 rounded-2xl relative flex flex-col justify-between hover:border-secondary-brand/20 transition-all group"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div>
              <span className="text-4xl sm:text-5xl font-headline font-black text-secondary-brand/20 block mb-4 group-hover:text-secondary-brand/40 transition-colors">
                1996
              </span>
              <h3 className="font-headline font-bold text-lg sm:text-xl text-white mb-3">
                Digitalização do SPC
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Substituição do atendimento via rádio por servidores centrais
                dedicados de alta performance conectados à rede nacional do SPC
                Brasil.
              </p>
            </div>
            <div className="border-t border-white/5 pt-4 mt-6">
              <span className="text-[10px] text-secondary-brand font-bold uppercase tracking-wider block">
                SISTEMAS EM REDE
              </span>
            </div>
          </div>

          {/* Milestone 2018 */}
          <div
            className="min-w-[300px] sm:min-w-[360px] snap-start bg-secondary-brand/5 border border-secondary-brand/35 p-8 rounded-2xl relative flex flex-col justify-between hover:border-secondary-brand/50 transition-all group"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div>
              <div className="absolute top-8 right-8 text-secondary-brand">
                <Star className="w-6 h-6 fill-current text-secondary-brand" />
              </div>
              <span className="text-4xl sm:text-5xl font-headline font-black text-secondary-brand block mb-4">
                2018
              </span>
              <h3 className="font-headline font-bold text-lg sm:text-xl text-white mb-3">
                Referência Digital & Convenções
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Inauguração da moderna sede administrativa contendo auditório
                completo de convenções e consolidação nacional como uma das
                maiores emissoras de certificações digitais.
              </p>
            </div>
            <div className="border-t border-secondary-brand/20 pt-4 mt-6">
              <span className="text-[10px] text-secondary-brand font-black uppercase tracking-wider block">
                DESTAQUE NACIONAL
              </span>
            </div>
          </div>

          {/* Milestone 2026 */}
          <div
            className="min-w-[300px] sm:min-w-[360px] snap-start bg-secondary-brand/5 border border-secondary-brand/35 p-8 rounded-2xl relative flex flex-col justify-between hover:border-secondary-brand/50 transition-all group"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div>
              <div className="absolute top-8 right-8 text-secondary-brand">
                <Sparkles className="w-6 h-6 animate-pulse text-secondary-brand" />
              </div>
              <span className="text-4xl sm:text-5xl font-headline font-black text-secondary-brand block mb-4">
                2026
              </span>
              <h3 className="font-headline font-bold text-lg sm:text-xl text-white mb-3">
                55 Anos de Liderança
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Consolidação multissetorial e fomento financeiro acelerado. Hub
                completo ligando mais de 800 empresas associadas ao fomento
                estadual e modernização via IA.
              </p>
            </div>
            <div className="border-t border-secondary-brand/20 pt-4 mt-6">
              <span className="text-[10px] text-secondary-brand font-black uppercase tracking-wider block">
                PRESENTE & FUTURO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
