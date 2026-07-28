import Image from "next/image";

export default function Home() {
  return (
    <body className="bg-primary-container text-on-background min-h-screen relative flex flex-col justify-between selection:bg-secondary-brand selection:text-primary-container antialiased">
      {/* <!-- HEADER & NAVBAR --> */}
      <header className="fixed top-0 left-0 w-full z-40 bg-primary-container/85 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
          {/* <!-- Logo Brand --> */}
          <div className="flex items-center gap-3">
            <Image
              src="/public/img/cdlcachoeiro.png"
              alt="CDL Cachoeiro 55 Anos"
              className="w-50"
              width={200}
              height={50}
            />
          </div>

          {/* <!-- Desktop Navigation Menu --> */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#historia"
              className="text-on-background/85 hover:text-secondary-brand transition-colors text-sm font-medium"
            >
              {`História`}
            </a>
            <a
              href="#manifesto"
              className="text-on-background/85 hover:text-secondary-brand transition-colors text-sm font-medium"
            >
              {`Manifesto`}
            </a>
            <a
              href="#galeria"
              className="text-on-background/85 hover:text-secondary-brand transition-colors text-sm font-medium"
            >
              {`Galeria`}
            </a>
            <a
              href="#presidentes"
              className="text-on-background/85 hover:text-secondary-brand transition-colors text-sm font-medium"
            >
              {`Ex-Presidentes`}
            </a>
            <a
              href="#servicos"
              className="text-on-background/85 hover:text-secondary-brand transition-colors text-sm font-medium"
            >
              {`Serviços`}
            </a>

            <button
              id="open-contact-btn"
              className="bg-secondary-brand hover:bg-secondary-brand/90 text-primary-container font-extrabold text-sm px-6 py-2.5 rounded-lg hover:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-secondary-brand/15"
            >
              {`Seja Associado`}
            </button>
          </nav>

          {/* <!-- Mobile Menu Toggle Button --> */}
          <div className="flex lg:hidden items-center">
            <button
              id="mobile-menu-toggle"
              className="text-on-background hover:text-secondary-brand transition-colors p-2"
              aria-label="Toggle menu"
            >
              <i data-lucide="menu" className="w-6 h-6"></i>
            </button>
          </div>
        </div>

        {/* <!-- Mobile Dropdown Navigation --> */}
        <div
          id="mobile-dropdown"
          className="hidden lg:hidden bg-primary-container border-b border-white/10 px-6 py-6 space-y-4"
        >
          <div className="flex flex-col gap-4">
            <a
              href="#historia"
              className="mobile-nav-link text-on-background/90 hover:text-secondary-brand transition-colors text-base font-medium"
            >
              {`História`}
            </a>
            <a
              href="#manifesto"
              className="mobile-nav-link text-on-background/90 hover:text-secondary-brand transition-colors text-base font-medium"
            >
              {`Manifesto`}
            </a>
            <a
              href="#galeria"
              className="mobile-nav-link text-on-background/90 hover:text-secondary-brand transition-colors text-base font-medium"
            >
              {`Galeria`}
            </a>
            <a
              href="#presidentes"
              className="mobile-nav-link text-on-background/90 hover:text-secondary-brand transition-colors text-base font-medium"
            >
              {`Ex-Presidentes`}
            </a>
            <a
              href="#servicos"
              className="mobile-nav-link text-on-background/90 hover:text-secondary-brand transition-colors text-base font-medium"
            >
              {`Serviços`}
            </a>
            <button
              id="open-contact-mobile-btn"
              className="w-full bg-secondary-brand hover:bg-secondary-brand/90 text-primary-container font-extrabold text-sm py-3 rounded-lg text-center transition-all cursor-pointer"
            >
              {`Seja Associado`}
            </button>
          </div>
        </div>
      </header>

      {/* <!-- HERO SECTION --> */}
      <main className="flex-grow">
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 md:px-12 overflow-hidden">
          {/* <!-- Dynamic ambient backgrounds --> */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div
              className="w-full h-full bg-cover bg-center opacity-10 scale-105"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_qFSSuxQgKnMoUcht5lFwaUMKGlfUuSqjPotMgKTbFGtvTLg8ouiesLfIb3Y3bnp_KBS1WOvBE-c4XF8PP9-hmQZhhXQ05FsTBQOpUzWnso61vPWpcy4rZBgIXoaeLSKv__O_uhjQ96mTPsuDrMEuLpAoKhnXAGt0N14QO2G4b6C4GNW4r53Xh_hBZFgUOwS1nc0S9Nz9XRqFBwi2p2rGMSdAjx044wGHQrDnW2njkTxlKikbHdNWeCVnxy4Bv736ROF7IyyTYyD5')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-primary-container via-transparent to-[#001430]"></div>
          </div>

          <div className="relative z-10 w-full max-w-6xl mx-auto text-center flex flex-col items-center">
            {/* <!-- Tag & Anniversary badge --> */}
            <div
              className="flex flex-col items-center mb-6"
              data-aos="fade-down"
            >
              <span className="bg-secondary-brand/10 border border-secondary-brand/20 text-secondary-brand text-xs font-bold px-4 py-1.5 rounded-full tracking-[0.2em] uppercase flex items-center gap-2">
                <i
                  data-lucide="sparkles"
                  className="w-3.5 h-3.5 animate-pulse"
                ></i>
                {`1971 - 2026 • 55 ANOS DE HISTÓRIA`}
              </span>
            </div>

            <h1
              className="font-headline text-4xl sm:text-5xl md:text-7xl font-black mb-6 text-gradient tracking-tight max-w-4xl leading-none"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {`55 Anos de Protagonismo e Inovação`}
            </h1>

            <p
              className="font-sans text-sm sm:text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Conheça a história da{" "}
              <strong className="text-white">CDL Cachoeiro</strong>, uma
              trajetória sólida que revolucionou o comércio do Sul do Espírito
              Santo e continua impulsionando o futuro tecnológico de nossas
              empresas.
            </p>

            {/* <!-- Simple Elegant Video Player Cover --> */}
            <div
              id="play-video-trigger"
              className="video-placeholder-container relative aspect-video w-full max-w-4xl rounded-2xl overflow-hidden group cursor-pointer transition-all hover:scale-[1.01] hover:border-secondary-brand/60"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Image
                alt="Capa do Vídeo Institucional 55 Anos"
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transhtmlForm duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu71kY_yHTwR-O6Kg1qzY_766dTStBbPs9vYHdmT5nHq--RDpDFH7qVYYXCeaEBprlDjB2f4j8ovzv9NDGkwjgN91VxFlD5HgK8rp9HvCdSalssW_fDRMF4bew2lAYCwoVTe7_ewXugCR1EkOcpaH-r1y8jEdDdr_G1Dh7-_pAr_qZLy4uBn2X3UXRHWnAGE2BeDIeaqqqFFNwQR3onFGFW61ZKsFhO6iRXdA5-nRclmfFkDJCahUI14JGjuARd_EJkXOxHGCwFEio"
                width={100}
                height={100}
              />
              {/* <!-- Play Button Overlay --> */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/25 transition-colors">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-secondary-brand text-primary-container rounded-full flex items-center justify-center shadow-2xl group-hover:scale-115 active:scale-95 transition-all">
                  <i
                    data-lucide="play"
                    className="w-8 h-8 md:w-12 md:h-12 ml-1.5 fill-current"
                  ></i>
                </div>
              </div>

              {/*  <!-- Bottom HUD overlay --> */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-left z-10 bg-linear-to-t from-black/85 via-black/20 to-transparent p-4 rounded-xl">
                <div>
                  <p className="font-headline text-lg sm:text-xl font-bold text-white drop-shadow-lg">
                    {`Documentário: 55 Anos CDL Cachoeiro`}
                  </p>
                  <p className="text-secondary-brand text-xs font-semibold tracking-wider">
                    {`NARRADO POR PIONEIROS • HISTÓRIA INTEGRAL`}
                  </p>
                </div>
                <span className="hidden sm:inline-flex bg-white/10 text-white text-[10px] font-bold px-3 py-1 rounded-md tracking-wider">
                  {`ASSISTIR AGORA`}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- TRANSITION RIBBON --> */}
        <div className="geometric-ribbon w-full shadow-inner relative z-10"></div>

        {/* <!-- MANIFESTO SECTION --> */}
        <section
          id="manifesto"
          className="py-24 md:py-32 bg-primary-container relative"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center overflow-hidden">
              {/* <!-- Left Side: Copywriting --> */}
              <div className="lg:col-span-7 space-y-8" data-aos="fade-right">
                <span className="text-secondary-brand font-bold text-xs tracking-[0.2em] uppercase block">
                  {`O Manifesto Coletivo`}
                </span>
                <h2 className="font-headline text-3xl md:text-5xl font-black text-white leading-tight">
                  {`Força local com `} <br />
                  <span className="text-secondary-brand">
                    {`visão de vanguarda.`}
                  </span>
                </h2>
                <div className="space-y-6 text-on-surface-variant font-sans text-sm md:text-base leading-relaxed">
                  <p>
                    {`Não somos apenas um banco de dados de proteção ao crédito.
                    Somos a união de voluntários, lojistas, prestadores de
                    serviços e industriais de Cachoeiro de Itapemirim que
                    decidiram escrever o destino econômico de nossa região.`}
                  </p>
                  <p className="border-l-2 border-secondary-brand pl-4 italic text-white/90">
                    {`"Há 55 anos, saímos da era das transações baseadas no 'fio
                    do bigode' para estruturar uma economia moderna, sustentável
                    e plenamente digitalizada no sul capixaba."`}
                  </p>
                  <p>
                    {`Da histórica comissão pioneira de 1971 até os modernos
                      emissores de certificação digital de hoje, a CDL Cachoeiro
                      mantém o mesmo propósito original: apoiar o comerciante,
                      aproximar parceiros e impulsionar o faturamento regional.`}
                  </p>
                </div>
              </div>

              {/* <!-- Right Side: Stats & Key Achievements --> */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div
                  className="bg-white/5 border border-white/5 p-6 rounded-xl hover:border-secondary-brand/25 transition-all text-center"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <div className="w-12 h-12 bg-secondary-brand/10 rounded-lg flex items-center justify-center mb-4 mx-auto text-secondary-brand">
                    <i data-lucide="users"></i>
                  </div>
                  <h3 className="font-headline font-black text-3xl text-white mb-1">
                    {`+800`}
                  </h3>
                  <p className="text-xs text-on-surface-variant uppercase font-semibold">
                    {`Associados Ativos`}
                  </p>
                </div>

                <div
                  className="bg-white/5 border border-white/5 p-6 rounded-xl hover:border-secondary-brand/25 transition-all text-center"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <div className="w-12 h-12 bg-secondary-brand/10 rounded-lg flex items-center justify-center mb-4 mx-auto text-secondary-brand">
                    <i data-lucide="award"></i>
                  </div>
                  <h3 className="font-headline font-black text-3xl text-white mb-1">
                    {`5º Lugar`}
                  </h3>
                  <p className="text-xs text-on-surface-variant uppercase font-semibold">
                    {`Ranking Emissões Nacionais`}
                  </p>
                </div>

                <div
                  className="bg-white/5 border border-white/5 p-6 rounded-xl hover:border-secondary-brand/25 transition-all text-center sm:col-span-2"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <div className="w-12 h-12 bg-secondary-brand/10 rounded-lg flex items-center justify-center mb-4 mx-auto text-secondary-brand">
                    <i data-lucide="calendar"></i>
                  </div>
                  <h3 className="font-headline font-black text-3xl text-white mb-1">
                    {`55 Anos`}
                  </h3>
                  <p className="text-xs text-on-surface-variant uppercase font-semibold">
                    {`De Progresso & Conquistas`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- TIMELINE / LINHA DO TEMPO SECTION --> */}
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
                  {`Linha do Tempo`}
                </span>
                <h2 className="font-headline text-3xl md:text-4xl font-black text-white leading-tight">
                  {`Evolução do Comércio do Sul do ES`}
                </h2>
              </div>

              {/* <!-- Timeline scroll buttons --> */}
              <div className="flex gap-3">
                <button
                  id="timeline-prev-btn"
                  className="bg-white/5 hover:bg-secondary-brand hover:text-primary-container text-white p-3 rounded-full border border-white/10 transition-all cursor-pointer"
                  aria-label="Anterior"
                >
                  <i data-lucide="arrow-left" className="w-5 h-5"></i>
                </button>
                <button
                  id="timeline-next-btn"
                  className="bg-white/5 hover:bg-secondary-brand hover:text-primary-container text-white p-3 rounded-full border border-white/10 transition-all cursor-pointer"
                  aria-label="Próximo"
                >
                  <i data-lucide="arrow-right" className="w-5 h-5"></i>
                </button>
              </div>
            </div>

            {/* <!-- Horizontal scrolling container --> */}
            <div
              id="timeline-carousel"
              className="timeline-scroll flex gap-8 overflow-x-auto pb-8 scroll-smooth snap-x"
            >
              {/* <!-- Milestones Cards --> */}
              <div
                className="min-w-[300px] sm:min-w-[360px] snap-start bg-[#0b132b]/40 border border-white/5 p-8 rounded-2xl relative flex flex-col justify-between hover:border-secondary-brand/20 transition-all group"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div>
                  <span className="text-4xl sm:text-5xl font-headline font-black text-secondary-brand/20 block mb-4 group-hover:text-secondary-brand/40 transition-colors">
                    {`1971`}
                  </span>
                  <h3 className="font-headline font-bold text-lg sm:text-xl text-white mb-3">
                    {`O Nascimento da Entidade`}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {`Fundada em 30 de julho, surge da união de empresários que
                    trouxeram o SPC, revolucionando a venda a prazo e trazendo
                    credibilidade e agilidade para o varejo de Cachoeiro.`}
                  </p>
                </div>
                <div className="border-t border-white/5 pt-4 mt-6">
                  <span className="text-[10px] text-secondary-brand font-bold uppercase tracking-wider block">
                    {`CONQUISTA HISTÓRICA`}
                  </span>
                </div>
              </div>

              <div
                className="min-w-[300px] sm:min-w-[360px] snap-start bg-[#0b132b]/40 border border-white/5 p-8 rounded-2xl relative flex flex-col justify-between hover:border-secondary-brand/20 transition-all group"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div>
                  <span className="text-4xl sm:text-5xl font-headline font-black text-secondary-brand/20 block mb-4 group-hover:text-secondary-brand/40 transition-colors">
                    {`1978`}
                  </span>
                  <h3 className="font-headline font-bold text-lg sm:text-xl text-white mb-3">
                    {`Patrimônio Institucional`}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {`A entidade conquista sua primeira sede administrativa com a
                    aquisição de sua primeira sala no Edifício Hércules,
                    consolidando um space físico próprio de atendimento.`}
                  </p>
                </div>
                <div className="border-t border-white/5 pt-4 mt-6">
                  <span className="text-[10px] text-secondary-brand font-bold uppercase tracking-wider block">
                    {`SEDE PRÓPRIA`}
                  </span>
                </div>
              </div>

              <div
                className="min-w-[300px] sm:min-w-[360px] snap-start bg-[#0b132b]/40 border border-white/5 p-8 rounded-2xl relative flex flex-col justify-between hover:border-secondary-brand/20 transition-all group"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div>
                  <span className="text-4xl sm:text-5xl font-headline font-black text-secondary-brand/20 block mb-4 group-hover:text-secondary-brand/40 transition-colors">
                    {`1988`}
                  </span>
                  <h3 className="font-headline font-bold text-lg sm:text-xl text-white mb-3">
                    {`InhtmlFormatização & Agilidade`}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {`Aceleração da transhtmlFormação digital e início da
                    adaptação de processos internos de busca manual em papel
                    para as consultas velozes digitais.`}
                  </p>
                </div>
                <div className="border-t border-white/5 pt-4 mt-6">
                  <span className="text-[10px] text-secondary-brand font-bold uppercase tracking-wider block">
                    {`ERA DOS COMPUTADORES`}
                  </span>
                </div>
              </div>

              <div
                className="min-w-[300px] sm:min-w-[360px] snap-start bg-[#0b132b]/40 border border-white/5 p-8 rounded-2xl relative flex flex-col justify-between hover:border-secondary-brand/20 transition-all group"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div>
                  <span className="text-4xl sm:text-5xl font-headline font-black text-secondary-brand/20 block mb-4 group-hover:text-secondary-brand/40 transition-colors">
                    {`1990`}
                  </span>
                  <h3 className="font-headline font-bold text-lg sm:text-xl text-white mb-3">
                    {`Grandes Campanhas de Natal`}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {`Lançamento de campanhas promocionais com sorteio de
                    automóveis na Praça Jerônimo Monteiro, atraindo consumidores
                    de todo o sul capixaba.`}
                  </p>
                </div>
                <div className="border-t border-white/5 pt-4 mt-6">
                  <span className="text-[10px] text-secondary-brand font-bold uppercase tracking-wider block">
                    {`PROPAGAÇÃO ECONÔMICA`}
                  </span>
                </div>
              </div>

              <div
                className="min-w-[300px] sm:min-w-[360px] snap-start bg-[#0b132b]/40 border border-white/5 p-8 rounded-2xl relative flex flex-col justify-between hover:border-secondary-brand/20 transition-all group"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div>
                  <span className="text-4xl sm:text-5xl font-headline font-black text-secondary-brand/20 block mb-4 group-hover:text-secondary-brand/40 transition-colors">
                    {`1996`}
                  </span>
                  <h3 className="font-headline font-bold text-lg sm:text-xl text-white mb-3">
                    {`Digitalização do SPC`}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {`Substituição do atendimento via rádio por servidores
                    centrais dedicados de alta perhtmlFormance conectados à rede
                    nacional do SPC Brasil.`}
                  </p>
                </div>
                <div className="border-t border-white/5 pt-4 mt-6">
                  <span className="text-[10px] text-secondary-brand font-bold uppercase tracking-wider block">
                    {`SISTEMAS EM REDE`}
                  </span>
                </div>
              </div>

              <div
                className="min-w-[300px] sm:min-w-[360px] snap-start bg-secondary-brand/5 border border-secondary-brand/35 p-8 rounded-2xl relative flex flex-col justify-between hover:border-secondary-brand/50 transition-all group"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div>
                  <div className="absolute top-8 right-8 text-secondary-brand">
                    <i data-lucide="star" className="w-6 h-6 fill-current"></i>
                  </div>
                  <span className="text-4xl sm:text-5xl font-headline font-black text-secondary-brand block mb-4">
                    {`2018`}
                  </span>
                  <h3 className="font-headline font-bold text-lg sm:text-xl text-white mb-3">
                    {`Referência Digital & Convenções`}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {`Inauguração da moderna sede administrativa contendo
                    auditório completo de convenções e consolidação nacional
                    como uma das maiores emissoras de certificações digitais.`}
                  </p>
                </div>
                <div className="border-t border-secondary-brand/20 pt-4 mt-6">
                  <span className="text-[10px] text-secondary-brand font-black uppercase tracking-wider block">
                    {`DESTAQUE NACIONAL`}
                  </span>
                </div>
              </div>

              <div
                className="min-w-[300px] sm:min-w-[360px] snap-start bg-secondary-brand/5 border border-secondary-brand/35 p-8 rounded-2xl relative flex flex-col justify-between hover:border-secondary-brand/50 transition-all group"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div>
                  <div className="absolute top-8 right-8 text-secondary-brand">
                    <i
                      data-lucide="sparkles"
                      className="w-6 h-6 animate-pulse"
                    ></i>
                  </div>
                  <span className="text-4xl sm:text-5xl font-headline font-black text-secondary-brand block mb-4">
                    {`2026`}
                  </span>
                  <h3 className="font-headline font-bold text-lg sm:text-xl text-white mb-3">
                    {`55 Anos de Liderança`}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {`Consolidação multissetorial e fomento financeiro acelerado.
                    Hub completo ligando mais de 800 empresas associadas ao
                    fomento estadual e modernização via IA.`}
                  </p>
                </div>
                <div className="border-t border-secondary-brand/20 pt-4 mt-6">
                  <span className="text-[10px] text-secondary-brand font-black uppercase tracking-wider block">
                    {`PRESENTE & FUTURO`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- IMAGE GALLERY SECTION (NEW) --> */}
        <section
          id="galeria"
          className="py-24 md:py-32 bg-primary-container relative"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div
              className="text-center max-w-2xl mx-auto mb-16"
              data-aos="fade-up"
            >
              <span className="text-secondary-brand font-bold text-xs tracking-[0.2em] uppercase mb-3 block">
                {`Acervo Visual`}
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-4">
                {`Galeria de Imagens`}
              </h2>
              <p className="text-on-surface-variant text-sm md:text-base">
                {`Acompanhe os momentos históricos, reuniões e eventos que
                ajudaram a pavimentar os 55 anos de progresso do comércio de
                Cachoeiro de Itapemirim.`}
              </p>
            </div>

            {/* <!-- Responsive bento-like grid of photos --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* <!-- Gallery Item 1 --> */}
              <div
                className="gallery-item group relative h-72 rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-secondary-brand/30 transition-all"
                data-Image-idx="0"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu71kY_yHTwR-O6Kg1qzY_766dTStBbPs9vYHdmT5nHq--RDpDFH7qVYYXCeaEBprlDjB2f4j8ovzv9NDGkwjgN91VxFlD5HgK8rp9HvCdSalssW_fDRMF4bew2lAYCwoVTe7_ewXugCR1EkOcpaH-r1y8jEdDdr_G1Dh7-_pAr_qZLy4uBn2X3UXRHWnAGE2BeDIeaqqqFFNwQR3onFGFW61ZKsFhO6iRXdA5-nRclmfFkDJCahUI14JGjuARd_EJkXOxHGCwFEio"
                  alt="Encontro Histórico dos Fundadores da CDL"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transhtmlForm duration-500"
                  width={100}
                  height={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-5">
                  <span className="text-[10px] font-bold text-secondary-brand uppercase tracking-wider mb-1">
                    {`Fundadores (1971)`}
                  </span>
                  <p className="text-white text-sm font-semibold">
                    {`Encontro Histórico e Origens`}
                  </p>
                </div>
              </div>

              {/* <!-- Gallery Item 2 --> */}
              <div
                className="gallery-item group relative h-72 rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-secondary-brand/30 transition-all"
                data-Image-idx="1"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaN5UdOfqkweoDnP3_Vuci0qFwC8oeYUcznf4pnqlh3kxVBiPlqw3fsb1P2HPyiBcRLSaRLCOGzRnnEIUUGXxmCxa1lFS2edb58X8oLwIHghfsni9if_HBJBrsil6YRQ8qCwsy0lpzAFNHUXQaHP1l2OHGvAMyrEYqQJD_gRXZj2fuzIWvhRFpUWgrg9i7xTSuuehQoNAEGwg2B5UeRAN-eIXpiRvxAlGosjBgL3a1DjxORKEFKtFom3BRT0MWaHs5u4SUNzk9UcTr"
                  alt="Inauguração da Moderna Sede CDL Cachoeiro"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transhtmlForm duration-500"
                  width={100}
                  height={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-5">
                  <span className="text-[10px] font-bold text-secondary-brand uppercase tracking-wider mb-1">
                    {`Estrutura Física`}
                  </span>
                  <p className="text-white text-sm font-semibold">
                    {`Inauguração da Moderna Sede`}
                  </p>
                </div>
              </div>

              {/* <!-- Gallery Item 3 --> */}
              <div
                className="gallery-item group relative h-72 rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-secondary-brand/30 transition-all"
                data-Image-idx="2"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_qFSSuxQgKnMoUcht5lFwaUMKGlfUuSqjPotMgKTbFGtvTLg8ouiesLfIb3Y3bnp_KBS1WOvBE-c4XF8PP9-hmQZhhXQ05FsTBQOpUzWnso61vPWpcy4rZBgIXoaeLSKv__O_uhjQ96mTPsuDrMEuLpAoKhnXAGt0N14QO2G4b6C4GNW4r53Xh_hBZFgUOwS1nc0S9Nz9XRqFBwi2p2rGMSdAjx044wGHQrDnW2njkTxlKikbHdNWeCVnxy4Bv736ROF7IyyTYyD5"
                  alt="Convenção e Networking Empresarial Capixaba"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transhtmlForm duration-500"
                  width={100}
                  height={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-5">
                  <span className="text-[10px] font-bold text-secondary-brand uppercase tracking-wider mb-1">
                    {`Convenção e Fórum`}
                  </span>
                  <p className="text-white text-sm font-semibold">
                    {`Grandes Reuniões com Lojistas`}
                  </p>
                </div>
              </div>

              {/* <!-- Gallery Item 4 --> */}
              <div
                className="gallery-item group relative h-72 rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-secondary-brand/30 transition-all"
                data-Image-idx="3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=htmlFormat&fit=crop&w=800&q=80"
                  alt="Equipe Técnica de Certificação Digital"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transhtmlForm duration-500"
                  width={100}
                  height={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-5">
                  <span className="text-[10px] font-bold text-secondary-brand uppercase tracking-wider mb-1">
                    {`Tecnologia`}
                  </span>
                  <p className="text-white text-sm font-semibold">
                    {`Referência em Certificação Digital`}
                  </p>
                </div>
              </div>

              {/* <!-- Gallery Item 5 --> */}
              <div
                className="gallery-item group relative h-72 rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-secondary-brand/30 transition-all"
                data-Image-idx="4"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <Image
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=htmlFormat&fit=crop&w=800&q=80"
                  alt="Prêmio Mérito Lojista e Reconhecimentos"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transhtmlForm duration-500"
                  width={100}
                  height={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-5">
                  <span className="text-[10px] font-bold text-secondary-brand uppercase tracking-wider mb-1">
                    {`Comunidade`}
                  </span>
                  <p className="text-white text-sm font-semibold">
                    {`Convenções e Premiações Locais`}
                  </p>
                </div>
              </div>

              {/* <!-- Gallery Item 6 --> */}
              <div
                className="gallery-item group relative h-72 rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-secondary-brand/30 transition-all"
                data-Image-idx="5"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Image
                  src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=htmlFormat&fit=crop&w=800&q=80"
                  alt="Varejo de Cachoeiro htmlFortalecido pela CDL"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transhtmlForm duration-500"
                  width={100}
                  height={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-5">
                  <span className="text-[10px] font-bold text-secondary-brand uppercase tracking-wider mb-1">
                    {`Ponto Comercial`}
                  </span>
                  <p className="text-white text-sm font-semibold">
                    {`Estímulo Direto ao Varejo Sul ES`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- PRESIDENTS GALLERY SECTION --> */}
        <section
          id="presidentes"
          className="py-24 md:py-32 bg-gradient-to-b from-[#00193c] to-[#002351] relative"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div
              className="max-w-2xl mx-auto text-center mb-20"
              data-aos="fade-up"
            >
              <span className="text-secondary-brand font-bold text-xs tracking-[0.2em] uppercase mb-3 block">
                {`Galeria de Lideranças`}
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-4">
                {`Presidentes que Marcaram Época`}
              </h2>
              <p className="text-on-surface-variant text-sm md:text-base">
                {`Homenagem aos voluntários do desenvolvimento econômico que
                dedicaram suas gestões ao htmlFortalecimento de nossa união
                corporativa.`}
              </p>
            </div>

            {/* <!-- Presidents Grid with biographies --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* <!-- Carlos Luiz Pinto --> */}
              <div
                className="bg-[#0b132b]/45 border border-white/5 rounded-2xl overflow-hidden p-6 sm:p-8 hover:border-secondary-brand/20 transition-all flex flex-col sm:flex-row gap-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image
                  alt="Carlos Luiz Pinto"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover border border-white/10 shrink-0 mx-auto"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzh1HKML9l1ITfTNGCdP4GDsN1sDQ1KyWqAqUyeMV77UZMQWSCTLyD4i22aUz_qBF4g4JEotmpl_6YDs_bJcts9HOFckXStTc751B6jvAevxxsaj7RY-2dg9zmgSpf78SJfNo7C3wqzEdfDZe_YpAzSXgk_66C68UKk7n9f9nVWB20NN6wyZF7RErUHjk3L2GyVByUorz2AbPJro-DKX7PhBxxq52-7s45wZtojIafzA4m1PdgsinU9qf9p-XDYMgLeohmQzabFpJC"
                  width={100}
                  height={100}
                />
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-secondary-brand bg-secondary-brand/10 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
                    {`GESTÃO 1971 - 1972`}
                  </span>
                  <h3 className="font-headline font-bold text-lg text-white">
                    {`Carlos Luiz Pinto`}
                  </h3>
                  <p className="text-xs text-secondary-brand/85 font-medium leading-relaxed">
                    {`Primeiro presidente, liderou a comissão para trazer o SPC.`}
                  </p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {`Empresário visionário e proprietário da tradicional Modas
                    Elite, Carlos Luiz Pinto liderou a primeira comissão de
                    lojistas locais, estabelecendo os pilares que norteiam a CDL
                    Cachoeiro até hoje.`}
                  </p>
                </div>
              </div>

              {/* <!-- Cezar Missi --> */}
              <div
                className="bg-[#0b132b]/45 border border-white/5 rounded-2xl overflow-hidden p-6 sm:p-8 hover:border-secondary-brand/20 transition-all flex flex-col sm:flex-row gap-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Image
                  alt="Cezar Missi"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover border border-white/10 shrink-0 mx-auto"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxgVq6MA54eKSAjwFdjSTTmkK73FXH4kzHcDH4h3GF026gixM9HRdVBnlWF7z1Iff-oT-m1K96oS7qmxsRfPHa1Ek53Ppw9CGGkQCUfk_D-2NDihpFox2gf91XojIcTgcQ5qivaYtChBrMLmZjN0ZMGmQK8emPhT4JxpbiNDIE10Mv6pVnzFFp_gJXTUU_b79Ab3lxqjkb0fL-l5r7Bxu5LdRekqQSdQCmcGqlOXmksKIY6rZ4JhR6AWBETxhE9Yxc4_TpQjrWCNZa"
                  width={100}
                  height={100}
                />
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-secondary-brand bg-secondary-brand/10 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
                    {`GESTÃO 1986 - 1988`}
                  </span>
                  <h3 className="font-headline font-bold text-lg text-white">
                    {`Cezar Missi`}
                  </h3>
                  <p className="text-xs text-secondary-brand/85 font-medium leading-relaxed">
                    {`Iniciou os estudos para a inhtmlFormatização do banco de
                    dados.`}
                  </p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {`À frente da loja "A Mestiça" — ícone do comércio local
                    operante por mais de 60 anos — Cezar compreendeu cedo que a
                    inhtmlFormatização e automação seriam indispensáveis para
                    acelerar os crediários.`}
                  </p>
                </div>
              </div>

              {/* <!-- João Kléber de Massena --> */}
              <div
                className="bg-[#0b132b]/45 border border-white/5 rounded-2xl overflow-hidden p-6 sm:p-8 hover:border-secondary-brand/20 transition-all flex flex-col sm:flex-row gap-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image
                  alt="João Kléber de Massena"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover border border-white/10 shrink-0 mx-auto"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZg6CpxUVHw8cqz-FVnQ9PdiMcfpULRmiWGn0_9iAlqtZV9VN5xD7C59FWy1Gs7mvK-7cnPySycQI-6PlJ-tD-gu2i9WDKclXUOZBDNF5CxWEkE5PR60uWeuQnw8OnZYJGuZ91TgrXkGwQjl7uo8eKKd0iC62ggQh-kLF3YgvAzk5izPO4_qENH3j6fBJqYPUQ2yVRbKK6kCWL68Pw22M-04mul4VzanliT8QlmCDfVNAdQuSvGCfCMn4hnc0Ung092XeA7cggEhWC"
                  width={100}
                  height={100}
                />
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-secondary-brand bg-secondary-brand/10 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
                    {`GESTÃO 1996 - 2000`}
                  </span>
                  <h3 className="font-headline font-bold text-lg text-white">
                    {`João Kléber de Massena`}
                  </h3>
                  <p className="text-xs text-secondary-brand/85 font-medium leading-relaxed">
                    {`Impulsionou o Natal na Praça Jerônimo Monteiro.`}
                  </p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {`João marcou sua gestão pela proximção com os cidadãos,
                    levando promoções de fim de ano com sorteios de veículos em
                    eventos públicos na praça central, integrando a cidade e o
                    comércio.`}
                  </p>
                </div>
              </div>

              {/* <!-- Celso Luiz Costa --> */}
              <div
                className="bg-[#0b132b]/45 border border-white/5 rounded-2xl overflow-hidden p-6 sm:p-8 hover:border-secondary-brand/20 transition-all flex flex-col sm:flex-row gap-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Image
                  alt="Celso Luiz Costa"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover border border-white/10 shrink-0 mx-auto"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV0mL6MFeogNWW2jNijdIgdqpXipNW4OsHdlnhvq8krJmaZrwEyKwh6kdHRSe0zQv97lXJg_6Q5wE4yHn7Mu-g8z1tKRXZTMmlp5vL96PkqrMBTz-dEp98GYfFbdQ2CDNTS5-Xsqo7zpDOPM7-w81wFo-ImageBy3VXcbjNbUBcR9D0LkPBrv5kTC-BOLSY1tt4iuSNdnyRyp5IOUYTEcXoc8qQhALPpRdhBXEKWiiO0kgkF2TQGghVFXkJg-haWYK8_heQ5oDXVc5ob"
                  width={100}
                  height={100}
                />
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-secondary-brand bg-secondary-brand/10 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
                    {`GESTÃO ATUAL`}
                  </span>
                  <h3 className="font-headline font-bold text-lg text-white">
                    {`Celso Luiz Costa`}
                  </h3>
                  <p className="text-xs text-secondary-brand/85 font-medium leading-relaxed">
                    {`Liderou a grande expansão e ergueu o Centro de Convenções.`}
                  </p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {`Focado em inovação, Celso ergueu a sede atual com auditório
                    de convenções moderno, expandiu o catálogo de soluções
                    tecnológicas e consolidou a representatividade da CDL
                    estadualmente.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- SERVICES / SOLUTIONS SECTION --> */}
        <section
          id="servicos"
          className="py-24 md:py-32 bg-primary-container relative"
        >
          {/* <!-- Visual background pattern --> */}
          <div className="absolute bottom-0 left-0 w-full h-32 opacity-5 pointer-events-none">
            <Image
              alt="Geometric pattern background"
              className="w-full object-cover h-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaN5UdOfqkweoDnP3_Vuci0qFwC8oeYUcznf4pnqlh3kxVBiPlqw3fsb1P2HPyiBcRLSaRLCOGzRnnEIUUGXxmCxa1lFS2edb58X8oLwIHghfsni9if_HBJBrsil6YRQ8qCwsy0lpzAFNHUXQaHP1l2OHGvAMyrEYqQJD_gRXZj2fuzIWvhRFpUWgrg9i7xTSuuehQoNAEGwg2B5UeRAN-eIXpiRvxAlGosjBgL3a1DjxORKEFKtFom3BRT0MWaHs5u4SUNzk9UcTr"
              width={100}
              height={100}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-xl mb-20" data-aos="fade-up">
              <span className="text-secondary-brand font-bold text-xs tracking-[0.2em] uppercase mb-3 block">
                {`Ecossistema de Soluções`}
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                {`Muito além do crédito`}
              </h2>
              <p className="text-on-surface-variant text-sm md:text-base">
                {`Oferecemos um portfólio tecnológico completo voltado ao
                desenvolvimento empresarial de Cachoeiro, mitigando riscos e
                simplificando rotinas de faturamento.`}
              </p>
            </div>

            {/* <!-- 3 Columns of Solutions --> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* <!-- Solution 1: SPC --> */}
              <div
                className="bg-[#0b132b]/45 border border-white/5 p-8 rounded-xl flex flex-col justify-between hover:border-secondary-brand/30 transition-all group"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div>
                  <div className="w-14 h-14 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transhtmlForm border border-white/5 text-secondary-brand">
                    <i data-lucide="shield" className="w-7 h-7"></i>
                  </div>
                  <h3 className="font-headline font-bold text-xl text-white mb-3">
                    SPC & Inteligência
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed mb-6">
                    {`Consultas ao SPC Brasil e Serasa, monitoramento contínuo SPC
                    Avisa e profunda análise de risco para concessões de crédito
                    com segurança cirúrgica.`}
                  </p>
                </div>

                <div>
                  {/* <!-- Expandable features section --> */}
                  <button
                    data-target="benefits-spc"
                    className="accordion-btn flex items-center gap-2 text-xs font-bold text-secondary-brand mb-4 hover:underline cursor-pointer"
                  >
                    <span className="accordion-text">
                      {`Ver benefícios específicos`}
                    </span>
                    <i
                      data-lucide="chevron-down"
                      className="w-3.5 h-3.5 accordion-icon"
                    ></i>
                  </button>

                  <ul
                    id="benefits-spc"
                    className="hidden space-y-2.5 mb-6 border-t border-white/5 pt-4"
                  >
                    <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                      <i
                        data-lucide="check-circle-2"
                        className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0"
                      ></i>
                      <span>{`Consultas PF e PJ Integradas`}</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                      <i
                        data-lucide="check-circle-2"
                        className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0"
                      ></i>
                      <span>
                        {`Monitoramento SPC Avisa (Alertas em tempo real)`}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                      <i
                        data-lucide="check-circle-2"
                        className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0"
                      ></i>
                      <span>{`Recuperação de Crédito facilitada`}</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                      <i
                        data-lucide="check-circle-2"
                        className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0"
                      ></i>
                      <span>{`Histórico de Comportamento de Pagamento`}</span>
                    </li>
                  </ul>

                  <div className="border-t border-white/5 pt-4">
                    <span className="text-[10px] text-white/40 block">
                      {`SERVIÇO INTEGRADO`}
                    </span>
                    <span className="text-xs font-semibold text-white/95">
                      {`CDL Cachoeiro`}
                    </span>
                  </div>
                </div>
              </div>

              {/* <!-- Solution 2: Certificado --> */}
              <div
                className="bg-[#0b132b]/45 border border-white/5 p-8 rounded-xl flex flex-col justify-between hover:border-secondary-brand/30 transition-all group"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div>
                  <div className="w-14 h-14 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transhtmlForm border border-white/5 text-secondary-brand">
                    <i data-lucide="award" className="w-7 h-7"></i>
                  </div>
                  <h3 className="font-headline font-bold text-xl text-white mb-3">
                    {`Protagonismo Digital`}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed mb-6">
                    {`Líder regional e referência no Espírito Santo em
                    Certificação Digital, ocupando o 5º lugar nacional em
                    emissões seguras pelo sistema SPC Brasil.`}
                  </p>
                </div>

                <div>
                  {/* <!-- Expandable features section --> */}
                  <button
                    data-target="benefits-digital"
                    className="accordion-btn flex items-center gap-2 text-xs font-bold text-secondary-brand mb-4 hover:underline cursor-pointer"
                  >
                    <span className="accordion-text">
                      {`Ver benefícios específicos`}
                    </span>
                    <i
                      data-lucide="chevron-down"
                      className="w-3.5 h-3.5 accordion-icon"
                    ></i>
                  </button>

                  <ul
                    id="benefits-digital"
                    className="hidden space-y-2.5 mb-6 border-t border-white/5 pt-4"
                  >
                    <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                      <i
                        data-lucide="check-circle-2"
                        className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0"
                      ></i>
                      <span>{`Certificado Digital e-CPF e e-CNPJ`}</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                      <i
                        data-lucide="check-circle-2"
                        className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0"
                      ></i>
                      <span>
                        {`Emissão Presencial na Sede ou Remota por
                        videoconferência`}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                      <i
                        data-lucide="check-circle-2"
                        className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0"
                      ></i>
                      <span>{`Instalação e Suporte Técnico especializado`}</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                      <i
                        data-lucide="check-circle-2"
                        className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0"
                      ></i>
                      <span>
                        {`Validade e Segurança Jurídica nacional garantida`}
                      </span>
                    </li>
                  </ul>

                  <div className="border-t border-white/5 pt-4">
                    <span className="text-[10px] text-white/40 block">
                      {`SERVIÇO INTEGRADO`}
                    </span>
                    <span className="text-xs font-semibold text-white/95">
                      {`CDL Cachoeiro`}
                    </span>
                  </div>
                </div>
              </div>

              {/* <!-- Solution 3: Estrutura --> */}
              <div
                className="bg-[#0b132b]/45 border border-white/5 p-8 rounded-xl flex flex-col justify-between hover:border-secondary-brand/30 transition-all group"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div>
                  <div className="w-14 h-14 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transhtmlForm border border-white/5 text-secondary-brand">
                    <i data-lucide="building" className="w-7 h-7"></i>
                  </div>
                  <h3 className="font-headline font-bold text-xl text-white mb-3">
                    {`Estrutura & Parcerias`}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed mb-6">
                    {`Centro de Convenções próprio altamente equipado para
                    capacitações e fomento financeiro acelerado em parceria
                    direta como correspondente BANDES.`}
                  </p>
                </div>

                <div>
                  {/* <!-- Expandable features section --> */}
                  <button
                    data-target="benefits-structure"
                    className="accordion-btn flex items-center gap-2 text-xs font-bold text-secondary-brand mb-4 hover:underline cursor-pointer"
                  >
                    <span className="accordion-text">
                      {`Ver benefícios específicos`}
                    </span>
                    <i
                      data-lucide="chevron-down"
                      className="w-3.5 h-3.5 accordion-icon"
                    ></i>
                  </button>

                  <ul
                    id="benefits-structure"
                    className="hidden space-y-2.5 mb-6 border-t border-white/5 pt-4"
                  >
                    <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                      <i
                        data-lucide="check-circle-2"
                        className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0"
                      ></i>
                      <span>
                        {`Centro de Convenções Multiuso com som e projeção`}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                      <i
                        data-lucide="check-circle-2"
                        className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0"
                      ></i>
                      <span>{`Correspondente oficial BANDES (Microcrédito)`}</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                      <i
                        data-lucide="check-circle-2"
                        className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0"
                      ></i>
                      <span>{`Salas de treinamento para equipes associadas`}</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                      <i
                        data-lucide="check-circle-2"
                        className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0"
                      ></i>
                      <span>{`Networking qualificado entre empresários`}</span>
                    </li>
                  </ul>

                  <div className="border-t border-white/5 pt-4">
                    <span className="text-[10px] text-white/40 block">
                      {`SERVIÇO INTEGRADO`}
                    </span>
                    <span className="text-xs font-semibold text-white/95">
                      {`CDL Cachoeiro`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- CLOSING HERO BANNER --> */}
        <section className="py-28 md:py-36 relative bg-on-background text-primary-container text-center overflow-hidden">
          {/* <!-- Subtitle watermark --> */}
          <span className="font-headline font-black text-6xl md:text-[110px] opacity-[0.03] absolute left-1/2 -top-10 -translate-x-1/2 select-none tracking-widest leading-none pointer-events-none">
            {`COLETIVO`}
          </span>

          <div
            className="max-w-4xl mx-auto px-6 relative z-10"
            data-aos="fade-up"
          >
            <span className="text-[#884f00] font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
              {`PENSANDO NO AMANHÃ`}
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black text-primary-container mb-8 leading-tight">
              {`Uma história construída`} <br />
              <span className="text-secondary-container relative">
                {`por muitos, para todos.`}
                <span className="absolute left-0 bottom-0 w-full h-[4px] bg-secondary-container/10 -z-10"></span>
              </span>
            </h2>
            <p className="font-sans text-sm md:text-lg max-w-2xl mx-auto mb-12 text-[#2d1b00]/80 leading-relaxed">
              {`Há 55 anos, acreditamos que o sucesso de um comerciante é o
              progresso de toda a nossa comunidade. O futuro nos aguarda com
              novos desafios digitais, e a CDL Cachoeiro estará lá, apoiando sua
              empresa.`}
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                id="cta-contact-btn"
                className="w-full sm:w-auto bg-[#db7f00] hover:bg-[#c26e00] text-white font-extrabold px-8 py-3.5 rounded-lg text-sm transition-all cursor-pointer shadow-lg shadow-[#db7f00]/20 flex items-center justify-center gap-1.5"
              >
                {`Quero me Associar Hoje`}
                <i data-lucide="arrow-right" className="w-4 h-4"></i>
              </button>
              <a
                href="#servicos"
                className="w-full sm:w-auto border border-primary-container/30 hover:bg-primary-container/5 text-primary-container font-bold px-8 py-3.5 rounded-lg text-sm transition-all flex items-center justify-center"
              >
                {`Explorar Soluções`}
              </a>
            </div>

            {/* <!-- Jubilee Medallion Icon --> */}
            <div className="mt-16 flex justify-center">
              <div className="w-20 h-20 rounded-full border border-secondary-container/30 bg-secondary-container/5 flex items-center justify-center shadow-inner">
                <span className="font-headline font-black text-secondary-container text-2xl">
                  {`55`}
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <!-- FOOTER --> */}
      <footer className="bg-primary-container border-t border-white/5 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          {/* <!-- Logo Brand --> */}
          <div>
            <div className="font-headline text-lg md:text-xl font-black text-white flex items-center gap-2">
              <Image
                src="/Image/cdlcachoeiro.png"
                alt="CDL Cachoeiro 55 Anos"
                className="w-50"
              />
            </div>
          </div>

          {/* <!-- Navigation links --> */}
          <div className="flex gap-6 md:gap-8 text-xs font-semibold text-on-surface-variant">
            <a
              href="#historia"
              className="hover:text-secondary-brand transition-colors"
            >
              {`História`}
            </a>
            <a
              href="#manifesto"
              className="hover:text-secondary-brand transition-colors"
            >
              {`Manifesto`}
            </a>
            <a
              href="#galeria"
              className="hover:text-secondary-brand transition-colors"
            >
              {`Galeria`}
            </a>
            <a
              href="#servicos"
              className="hover:text-secondary-brand transition-colors"
            >
              {`Serviços`}
            </a>
          </div>

          {/* <!-- Copyright --> */}
          <p className="text-xs text-on-surface-variant text-center md:text-right">
            {`© 2026 CDL Cachoeiro. 55 anos impulsionando o desenvolvimento
            regional.`}
          </p>
        </div>
      </footer>

      {/* <!-- INTERACTIVE OVERLAYS & MODALS --> */}

      {/* <!-- 1. VIDEO MODAL (SIMPLE & ELEGANT HTML5 VIDEO PLAYER) --> */}
      <div
        id="video-modal"
        className="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      >
        <div className="bg-[#0b132b] border border-white/10 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col relative">
          {/* <!-- Close Button at top-right --> */}
          <button
            id="close-video-modal"
            className="absolute top-4 right-4 z-20 bg-black/60 text-white hover:bg-white/20 p-2.5 rounded-full transition-colors cursor-pointer"
            aria-label="Fechar vídeo"
          >
            <i data-lucide="x" className="w-6 h-6"></i>
          </button>

          {/* <!-- Dynamic Header --> */}
          <div className="p-5 border-b border-white/5 bg-[#001430]/65 flex items-center gap-2.5">
            <i data-lucide="film" className="text-secondary-brand w-5 h-5"></i>
            <div>
              <h3 className="text-white font-headline font-bold text-base leading-none">
                {`Documentário: 55 Anos CDL Cachoeiro`}
              </h3>
              <span className="text-[10px] text-on-surface-variant font-medium">
                {`NARRADO POR PIONEIROS • HISTÓRIA INTEGRAL`}
              </span>
            </div>
          </div>

          {/* <!-- Actual HTML5 video container --> */}
          <div className="bg-black relative aspect-video w-full">
            <video
              id="institutional-video"
              className="w-full h-full object-contain"
              controls
              poster="https://lh3.googleusercontent.com/aida-public/AB6AXuCu71kY_yHTwR-O6Kg1qzY_766dTStBbPs9vYHdmT5nHq--RDpDFH7qVYYXCeaEBprlDjB2f4j8ovzv9NDGkwjgN91VxFlD5HgK8rp9HvCdSalssW_fDRMF4bew2lAYCwoVTe7_ewXugCR1EkOcpaH-r1y8jEdDdr_G1Dh7-_pAr_qZLy4uBn2X3UXRHWnAGE2BeDIeaqqqFFNwQR3onFGFW61ZKsFhO6iRXdA5-nRclmfFkDJCahUI14JGjuARd_EJkXOxHGCwFEio"
            >
              {/* <!-- High quality corporate / office workflow ambient video --> */}
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-businesswoman-working-at-her-office-desk-39956-large.mp4"
                type="video/mp4"
              />
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </div>
      </div>

      {/* <!-- 2. "SEJA ASSOCIADO" CONTACT MODAL --> */}
      <div
        id="contact-modal"
        className="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      >
        <div className="bg-primary-container border border-white/10 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col relative max-h-[90vh]">
          {/* <!-- Close Button --> */}
          <button
            id="close-contact-modal"
            className="absolute top-4 right-4 z-10 text-on-background/70 hover:text-white p-1 rounded-full hover:bg-white/5 transition-all cursor-pointer"
            aria-label="Fechar"
          >
            <i data-lucide="x" className="w-5 h-5"></i>
          </button>

          {/* <!-- Modal Header --> */}
          <div className="p-6 md:p-8 border-b border-white/5 bg-white/2">
            <span className="text-secondary-brand font-bold text-[10px] tracking-widest block uppercase mb-1">
              {`Cresça Conosco`}
            </span>
            <h3 className="font-headline font-black text-2xl text-white">
              {`Solicitar Associação`}
            </h3>
            <p className="text-xs text-on-surface-variant mt-1">
              {`Preencha os dados e entraremos em contato rapidamente para
              oficializar sua entrada.`}
            </p>
          </div>

          {/* <!-- htmlForm and Success Container --> */}
          <div className="p-6 md:p-8 overflow-y-auto">
            {/* <!-- Submission htmlForm --> */}
            <form id="association-htmlForm" className="space-y-4">
              <div>
                <label
                  htmlFor="company-name"
                  className="block text-xs font-semibold text-white/95 mb-1.5"
                >
                  {`Razão Social / Nome da Empresa *`}
                </label>
                <input
                  type="text"
                  id="company-name"
                  required
                  placeholder="Ex: Comercial Cachoeiro Ltda"
                  className="w-full bg-black/20 border border-white/10 focus:border-secondary-brand rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="cnpj"
                    className="block text-xs font-semibold text-white/95 mb-1.5"
                  >
                    {`CNPJ *`}
                  </label>
                  <input
                    type="text"
                    id="cnpj"
                    required
                    placeholder="00.000.000/0000-00"
                    className="w-full bg-black/20 border border-white/10 focus:border-secondary-brand rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold text-white/95 mb-1.5"
                  >
                    {`Telefone de Contato *`}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="(28) 99999-9999"
                    className="w-full bg-black/20 border border-white/10 focus:border-secondary-brand rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="owner-name"
                  className="block text-xs font-semibold text-white/95 mb-1.5"
                >
                  {`Nome do Proprietário / Responsável *`}
                </label>
                <input
                  type="text"
                  id="owner-name"
                  required
                  placeholder="Ex: Carlos Silva"
                  className="w-full bg-black/20 border border-white/10 focus:border-secondary-brand rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-white/95 mb-1.5"
                >
                  {`E-mail Corporativo *`}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Ex: contato@empresa.com.br"
                  className="w-full bg-black/20 border border-white/10 focus:border-secondary-brand rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary-brand hover:bg-secondary-brand/90 text-primary-container font-black py-3 rounded-lg text-sm tracking-wide hover:scale-[0.99] transition-all cursor-pointer mt-4"
              >
                {`Enviar Solicitação de Adesão`}
              </button>
            </form>

            {/* <!-- Success Alert Card --> */}
            <div
              id="htmlForm-success-card"
              className="hidden text-center py-6 space-y-4"
            >
              <div className="w-16 h-16 bg-secondary-brand/10 border-2 border-secondary-brand/40 rounded-full flex items-center justify-center mx-auto text-secondary-brand">
                <i data-lucide="check-circle-2" className="w-10 h-10"></i>
              </div>
              <div className="space-y-1.5">
                <h4 className="font-headline font-bold text-xl text-white">
                  {`Solicitação Recebida!`}
                </h4>
                <p className="text-xs text-on-surface-variant px-2 leading-relaxed">
                  {`Excelente! Os dados da sua empresa htmlForam encaminhados com
                  sucesso ao nosso departamento de novos associados. Em poucas
                  horas, um de nossos especialistas entrará em contato via
                  WhatsApp ou e-mail.`}
                </p>
              </div>
              <button
                id="success-close-btn"
                className="border border-white/10 hover:bg-white/5 text-white text-xs font-semibold px-6 py-2.5 rounded-lg cursor-pointer transition-all"
              >
                {`Fechar Janela`}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 3. PHOTO LIGHTBOX MODAL --> */}
      <div
        id="lightbox-modal"
        className="fixed inset-0 z-50 hidden flex-col justify-between p-4 bg-black/95 backdrop-blur-md"
      >
        {/* <!-- Lightbox Header (close / counter) --> */}
        <div className="flex justify-between items-center p-4 z-10">
          <span
            id="lightbox-counter"
            className="text-xs font-semibold text-white/60 uppercase tracking-widest font-mono"
          >
            {`1 de 6`}
          </span>
          <button
            id="close-lightbox"
            className="text-white hover:text-secondary-brand bg-white/5 hover:bg-white/15 p-2 rounded-full transition-all cursor-pointer"
          >
            <i data-lucide="x" className="w-6 h-6"></i>
          </button>
        </div>

        {/* <!-- Main Display --> */}
        <div className="flex-grow flex items-center justify-center relative px-12">
          {/* <!-- Prev Button --> */}
          <button
            id="lightbox-prev"
            className="absolute left-4 bg-white/5 hover:bg-secondary-brand hover:text-primary-container text-white p-3 rounded-full border border-white/10 transition-all cursor-pointer"
          >
            <i data-lucide="chevron-left" className="w-6 h-6"></i>
          </button>

          {/* <!-- Dynamic Image --> */}
          <Image
            id="lightbox-Image"
            className="max-w-full max-h-[70vh] rounded-lg object-contain shadow-2xl transition-all duration-300"
            src=""
            alt=""
          />

          {/* <!-- Next Button --> */}
          <button
            id="lightbox-next"
            className="absolute right-4 bg-white/5 hover:bg-secondary-brand hover:text-primary-container text-white p-3 rounded-full border border-white/10 transition-all cursor-pointer"
          >
            <i data-lucide="chevron-right" className="w-6 h-6"></i>
          </button>
        </div>

        {/* <!-- Lightbox Caption Footer --> */}
        <div className="p-6 text-center max-w-xl mx-auto z-10 bg-black/30 backdrop-blur-sm rounded-xl mb-4 border border-white/5">
          <p
            id="lightbox-caption"
            className="text-white font-headline text-base font-bold"
          ></p>
          <p
            id="lightbox-category"
            className="text-secondary-brand text-xs font-semibold tracking-wider mt-1 uppercase"
          ></p>
        </div>
      </div>

      {/* <!-- SCROLL TO TOP BUTTON --> */}
      <button
        id="scroll-top-btn"
        className="fixed bottom-6 right-6 bg-secondary-brand hover:bg-secondary-brand/90 text-primary-container p-3 rounded-full transition-all cursor-pointer shadow-lg shadow-black/30 z-30 scale-0 opacity-0"
        title="Voltar ao início"
      >
        <i data-lucide="chevron-up" className="w-5 h-5"></i>
      </button>
    </body>
  );
}
