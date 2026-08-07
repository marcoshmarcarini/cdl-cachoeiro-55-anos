"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  Sparkles,
  Play,
  Users,
  Award,
  Calendar,
  Shield,
  Building,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Star,
  Film,
  ChevronUp,
} from "lucide-react";
import NossosPresidentes from "./components/Home/NossosPresidentes";
import AtualDiretoria from "./components/Home/AtualDiretoria";
import Link from "next/link";
import LinksEvento from "./components/Home/LinksEvento";
import Header from "./components/theme/Header";
import Footer from "./components/theme/Footer";
import Timeline from "./components/Home/Timeline";
import Video from "./components/Home/Video";
import Galeria from "./components/Home/Galeria";

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9IiMwMDE5M2MiLz48L3N2Zz4=";

export default function HomePage() {
  // Gallery images dynamic state from API
  const [galleryImages, setGalleryImages] = useState<
    Array<{ src: string; title: string }>
  >([
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu71kY_yHTwR-O6Kg1qzY_766dTStBbPs9vYHdmT5nHq--RDpDFH7qVYYXCeaEBprlDjB2f4j8ovzv9NDGkwjgN91VxFlD5HgK8rp9HvCdSalssW_fDRMF4bew2lAYCwoVTe7_ewXugCR1EkOcpaH-r1y8jEdDdr_G1Dh7-_pAr_qZLy4uBn2X3UXRHWnAGE2BeDIeaqqqFFNwQR3onFGFW61ZKsFhO6iRXdA5-nRclmfFkDJCahUI14JGjuARd_EJkXOxHGCwFEio",
      title: "Encontro Histórico dos Fundadores da CDL (1971)",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaN5UdOfqkweoDnP3_Vuci0qFwC8oeYUcznf4pnqlh3kxVBiPlqw3fsb1P2HPyiBcRLSaRLCOGzRnnEIUUGXxmCxa1lFS2edb58X8oLwIHghfsni9if_HBJBrsil6YRQ8qCwsy0lpzAFNHUXQaHP1l2OHGvAMyrEYqQJD_gRXZj2fuzIWvhRFpUWgrg9i7xTSuuehQoNAEGwg2B5UeRAN-eIXpiRvxAlGosjBgL3a1DjxORKEFKtFom3BRT0MWaHs5u4SUNzk9UcTr",
      title: "Inauguração da Sede Atual da CDL Cachoeiro",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_qFSSuxQgKnMoUcht5lFwaUMKGlfUuSqjPotMgKTbFGtvTLg8ouiesLfIb3Y3bnp_KBS1WOvBE-c4XF8PP9-hmQZhhXQ05FsTBQOpUzWnso61vPWpcy4rZBgIXoaeLSKv__O_uhjQ96mTPsuDrMEuLpAoKhnXAGt0N14QO2G4b6C4GNW4r53Xh_hBZFgUOwS1nc0S9Nz9XRqFBwi2p2rGMSdAjx044wGHQrDnW2njkTxlKikbHdNWeCVnxy4Bv736ROF7IyyTYyD5",
      title: "Grandes Reuniões com Lojistas do Sul Capixaba",
    },
  ]);

  // Fetch gallery dynamically from API
  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        if (
          data.success &&
          Array.isArray(data.images) &&
          data.images.length > 0
        ) {
          setGalleryImages(data.images);
        }
      })
      .catch((err) => console.error("Erro ao carregar imagens da API:", err));
  }, []);

  // Navigation & Modals State

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Accordion toggle states
  const [accordions, setAccordions] = useState<{ [key: string]: boolean }>({
    spc: false,
    digital: false,
    structure: false,
  });

  // Scroll to top button visibility
  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  // Refs
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Initialize AOS safely on client-side
    import("aos")
      .then((AOS) => {
        AOS.default.init({
          duration: 800,
          easing: "ease-out-quad",
          once: true,
          offset: 0,
        });
        AOS.default.refresh();
      })
      .catch((err) => {
        console.warn("AOS init notice:", err);
      });

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard Navigation for Modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setVideoModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Toggle Accordion function
  const toggleAccordion = (key: string) => {
    setAccordions((prev) => ({
      spc: key === "spc" ? !prev.spc : false,
      digital: key === "digital" ? !prev.digital : false,
      structure: key === "structure" ? !prev.structure : false,
    }));
  };

  // Timeline Carousel Scroll handlers

  // Open Video Handler
  const openVideo = () => {
    setVideoModalOpen(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          console.log("Auto-play blocked, playing on manual click");
        });
      }
    }, 100);
  };

  // Close Video Handler
  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setVideoModalOpen(false);
  };

  return (
    <div className="bg-primary-container text-on-background min-h-screen relative flex flex-col justify-between selection:bg-secondary-brand selection:text-primary-container antialiased font-sans">
      {/* HEADER & NAVBAR */}
      <Header />
      

      {/* HERO SECTION */}
      <main className="flex-grow">
        

        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 md:px-12 overflow-hidden">
          {/* Dynamic ambient backgrounds */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div
              className="w-full h-full bg-cover bg-center opacity-10 scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_qFSSuxQgKnMoUcht5lFwaUMKGlfUuSqjPotMgKTbFGtvTLg8ouiesLfIb3Y3bnp_KBS1WOvBE-c4XF8PP9-hmQZhhXQ05FsTBQOpUzWnso61vPWpcy4rZBgIXoaeLSKv__O_uhjQ96mTPsuDrMEuLpAoKhnXAGt0N14QO2G4b6C4GNW4r53Xh_hBZFgUOwS1nc0S9Nz9XRqFBwi2p2rGMSdAjx044wGHQrDnW2njkTxlKikbHdNWeCVnxy4Bv736ROF7IyyTYyD5')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary-container via-transparent to-[#001430]" />
          </div>

          
          <div className="relative z-10 w-full max-w-6xl mx-auto text-center flex flex-col items-center gap-20">
            {/* Tag & Anniversary badge */}
            <LinksEvento />
            <div
              className="flex flex-col items-center mb-6"
              data-aos="fade-down"
            >
              <span className="bg-secondary-brand/10 border border-secondary-brand/20 text-secondary-brand text-xs font-bold px-4 py-1.5 rounded-full tracking-[0.2em] uppercase flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-secondary-brand" />
                1971 - 2026 • 55 ANOS DE HISTÓRIA
              </span>
            </div>

            <h1
              className="font-headline text-4xl sm:text-5xl md:text-7xl font-black mb-6 text-gradient tracking-tight max-w-4xl leading-none"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              55 Anos de Protagonismo e Inovação
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

            {/* Simple Elegant Video Player Cover */}
            <Video />
          </div>
        </section>

        {/* TRANSITION RIBBON */}
        <div className="geometric-ribbon w-full shadow-inner relative z-10" />

        {/* MANIFESTO SECTION */}
        <section
          id="manifesto"
          className="py-24 md:py-32 bg-primary-container relative"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center overflow-hidden">
              {/* Left Side: Copywriting */}
              <div className="lg:col-span-7 space-y-8" data-aos="fade-right">
                <span className="text-secondary-brand font-bold text-xs tracking-[0.2em] uppercase block">
                  O Manifesto Coletivo
                </span>
                <h2 className="font-headline text-3xl md:text-5xl font-black text-white leading-tight">
                  Força local com <br />
                  <span className="text-secondary-brand">
                    visão de vanguarda.
                  </span>
                </h2>
                <div className="space-y-6 text-on-surface-variant font-sans text-sm md:text-base leading-relaxed">
                  <p>
                    Não somos apenas um banco de dados de proteção ao crédito.
                    Somos a união de voluntários, lojistas, prestadores de
                    serviços e indústrias de Cachoeiro de Itapemirim que
                    decidiram escrever o destino econômico de nossa região.
                  </p>
                  <p className="border-l-2 border-secondary-brand pl-4 italic text-white/90">
                    "Há 55 anos, saímos da era das transações baseadas no 'fio
                    do bigode' para estruturar uma economia moderna, sustentável
                    e plenamente digitalizada no sul capixaba."
                  </p>
                  <p>
                    Da histórica comissão pioneira de 1971 até os modernos
                    emissores de certificação digital de hoje, a CDL Cachoeiro
                    mantém o mesmo propósito original: apoiar o comerciante,
                    aproximar parceiros e impulsionar o faturamento regional.
                  </p>
                </div>
              </div>

              {/* Right Side: Stats & Key Achievements */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div
                  className="bg-white/5 border border-white/5 p-6 rounded-xl hover:border-secondary-brand/25 transition-all text-center"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <div className="w-12 h-12 bg-secondary-brand/10 rounded-lg flex items-center justify-center mb-4 mx-auto text-secondary-brand">
                    <Users className="w-6 h-6 text-secondary-brand" />
                  </div>
                  <h3 className="font-headline font-black text-3xl text-white mb-1">
                    +800
                  </h3>
                  <p className="text-xs text-on-surface-variant uppercase font-semibold">
                    Associados Ativos
                  </p>
                </div>

                <div
                  className="bg-white/5 border border-white/5 p-6 rounded-xl hover:border-secondary-brand/25 transition-all text-center"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <div className="w-12 h-12 bg-secondary-brand/10 rounded-lg flex items-center justify-center mb-4 mx-auto text-secondary-brand">
                    <Award className="w-6 h-6 text-secondary-brand" />
                  </div>
                  <h3 className="font-headline font-black text-3xl text-white mb-1">
                    5º Lugar
                  </h3>
                  <p className="text-xs text-on-surface-variant uppercase font-semibold">
                    Ranking Emissões Nac.
                  </p>
                </div>

                <div
                  className="bg-white/5 border border-white/5 p-6 rounded-xl hover:border-secondary-brand/25 transition-all text-center sm:col-span-2"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <div className="w-12 h-12 bg-secondary-brand/10 rounded-lg flex items-center justify-center mb-4 mx-auto text-secondary-brand">
                    <Calendar className="w-6 h-6 text-secondary-brand" />
                  </div>
                  <h3 className="font-headline font-black text-3xl text-white mb-1">
                    55 Anos
                  </h3>
                  <p className="text-xs text-on-surface-variant uppercase font-semibold">
                    De Progresso & Conquistas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE / LINHA DO TEMPO SECTION */}
        <Timeline />

        <Galeria />

        {/* CURRENT PRESIDENT FEATURED SECTION */}
        <section
          id="presidente"
          className="py-24 md:py-32 bg-gradient-to-b from-primary-container via-[#00193c] to-[#00193c] relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-secondary-brand/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Photo Column - Black and White Portrait */}
              <div
                className="lg:col-span-5 order-2 lg:order-1"
                data-aos="fade-right"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Decorative background frame element */}
                  <div className="absolute -inset-2 bg-gradient-to-tr from-secondary-brand/20 via-transparent to-secondary-brand/30 rounded-3xl blur-sm -z-10" />

                  <div className="relative rounded-2xl overflow-hidden border border-secondary-brand/30 bg-[#00193c] shadow-2xl group">
                    <Image
                      src="/img/layout/Celso.png"
                      alt="Celso Luiz Costa - Presidente da CDL Cachoeiro"
                      width={600}
                      height={750}
                      priority
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover contrast-110 group-hover:contrast-100 transition-all duration-700"
                    />

                    {/* Dark gradient overlay for bottom caption */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-12 flex flex-col justify-end">
                      <span className="text-[10px] font-bold text-secondary-brand uppercase tracking-[0.2em] mb-1">
                        LIDERANÇA & DEDICAÇÃO
                      </span>
                      <h3 className="font-headline font-black text-2xl text-white">
                        Celso Luiz Costa
                      </h3>
                      <p className="text-xs text-on-surface-variant font-medium">
                        Presidente da CDL Cachoeiro de Itapemirim
                      </p>
                    </div>
                  </div>

                  {/* Stat badge overlay */}
                  <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-primary-container border border-secondary-brand/40 px-5 py-3 rounded-xl shadow-xl hidden sm:flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary-brand/15 rounded-lg flex items-center justify-center text-secondary-brand">
                      <Award className="w-5 h-5 text-secondary-brand" />
                    </div>
                    <div>
                      <p className="font-headline font-bold text-sm text-white">
                        +50 Anos
                      </p>
                      <p className="text-[10px] text-on-surface-variant uppercase font-semibold">
                        Dedicados ao Varejo
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Column - Comprehensive Story */}
              <div
                className="lg:col-span-7 order-1 lg:order-2 space-y-6"
                data-aos="fade-left"
              >
                <div className="space-y-2">
                  <span className="text-secondary-brand font-bold text-xs tracking-[0.25em] uppercase block">
                    Nosso Presidente
                  </span>
                  <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                    Presente desde o início da história
                  </h2>
                  <p className="text-secondary-brand/90 font-headline font-bold text-base md:text-lg">
                    Celso Luiz Costa: Trajetória conectada ao desenvolvimento de
                    Cachoeiro
                  </p>
                </div>

                <div className="space-y-4 text-on-surface-variant font-sans text-xs sm:text-sm md:text-base leading-relaxed">
                  <p>
                    Quando a Câmara de Dirigentes Lojistas de Cachoeiro de
                    Itapemirim dava seus primeiros passos, em 1971, Celso Luiz
                    Costa, com menos de 20 anos de idade, também começava sua
                    própria trajetória no comércio da cidade.
                  </p>

                  <p>
                    Ele trabalhava como funcionário na empresa da família por um
                    motivo especial:{" "}
                    <span className="text-white italic">
                      "Entrei no comércio pela menina mais linda do Liceu (hoje,
                      minha esposa). Eu queria estudar, fazer faculdade, mas
                      também queria ganhar dinheiro para casar. Por isso,
                      comecei a trabalhar na loja do meu pai"
                    </span>
                    , conta Celso.
                  </p>

                  <p>
                    Naquela época, vender a prazo ainda era baseado apenas na
                    confiança verbal. Não existiam sistemas digitais ou
                    consultas automatizadas. Foi então que Celso conheceu o
                    Serviço de Proteção ao Crédito (SPC), prestes a chegar a
                    Cachoeiro. Ele convenceu seu pai a implementar a novidade,
                    dando início a uma parceria histórica com a CDL.
                  </p>

                  <p>
                    Após o sucesso do SPC, Celso tornou-se sócio, expandiu seus
                    negócios e abriu novas filiais. Em 1978, aos 27 anos,
                    assumiu a presidência da CDL pela primeira vez, conquistando
                    a primeira sede própria no Edifício Hércules (Sala 301).
                  </p>

                  <p>
                    Em 2004, assumiu seu segundo mandato à frente da
                    instituição, onde permanece liderando grandes
                    transformações: a aquisição de todo o 3º pavimento do
                    Edifício Hércules, a criação do Centro de Convenções, a
                    Escola de Varejo no 4º andar e a consolidação da CDL como
                    referência regional e nacional.
                  </p>
                </div>

                {/* Highlight Quote Box */}
                <div className="bg-secondary-brand/10 border-l-4 border-secondary-brand p-5 rounded-r-xl space-y-2 mt-6">
                  <p className="text-white text-xs sm:text-sm italic leading-relaxed">
                    "Minha maior contribuição por onde passei sempre foi ser
                    otimista e continuo assim. Olho esperançoso para o futuro.
                    Hoje nós estamos no DNA de todo o desenvolvimento, não só do
                    varejo, mas no aspecto geral da sociedade."
                  </p>
                  <p className="text-right text-[11px] font-bold text-secondary-brand uppercase tracking-wider">
                    — Celso Luiz Costa, Presidente da CDL Cachoeiro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRESIDENTS GALLERY SECTION */}
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
                Nossas Lideranças
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-4">
                Presidentes que Marcaram Época
              </h2>
              <p className="text-on-surface-variant text-sm md:text-base">
                Homenagem aos voluntários do desenvolvimento econômico que
                dedicaram suas gestões ao fortalecimento de nossa união
                corporativa.
              </p>
            </div>

            <NossosPresidentes />
          </div>
        </section>

        {/* CURRENT BOARD OF DIRECTORS SECTION */}
        <section
          id="AtualDiretoria"
          className="py-24 md:py-32 bg-gradient-to-b from-[#00193c] to-[#002351] relative"
        >
          <div className="flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-12">
            <div
              className="max-w-2xl mx-auto text-center mb-20"
              data-aos="fade-up"
            >
              <span className="text-secondary-brand font-bold text-xs tracking-[0.2em] uppercase mb-3 block">
                Nosso Corpo Diretor
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-4">
                Atual Diretoria da CDL Cachoeiro
              </h2>
            </div>
            <AtualDiretoria />
            
          </div>
        </section>

        {/* SERVICES / SOLUTIONS SECTION */}
        <section
          id="servicos"
          className="py-24 md:py-32 bg-primary-container relative"
        >
          {/* Visual background pattern */}
          <div className="absolute bottom-0 left-0 w-full h-32 opacity-5 pointer-events-none">
            <Image
              alt="Geometric pattern background"
              fill
              className="w-full object-cover h-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaN5UdOfqkweoDnP3_Vuci0qFwC8oeYUcznf4pnqlh3kxVBiPlqw3fsb1P2HPyiBcRLSaRLCOGzRnnEIUUGXxmCxa1lFS2edb58X8oLwIHghfsni9if_HBJBrsil6YRQ8qCwsy0lpzAFNHUXQaHP1l2OHGvAMyrEYqQJD_gRXZj2fuzIWvhRFpUWgrg9i7xTSuuehQoNAEGwg2B5UeRAN-eIXpiRvxAlGosjBgL3a1DjxORKEFKtFom3BRT0MWaHs5u4SUNzk9UcTr"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-xl mb-20" data-aos="fade-up">
              <span className="text-secondary-brand font-bold text-xs tracking-[0.2em] uppercase mb-3 block">
                Ecossistema de Soluções
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                Muito além do crédito
              </h2>
              <p className="text-on-surface-variant text-sm md:text-base">
                Oferecemos um portfólio tecnológico completo voltado ao
                desenvolvimento empresarial de Cachoeiro, mitigando riscos e
                simplificando rotinas de faturamento.
              </p>
            </div>

            {/* 3 Columns of Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Solution 1: SPC */}
              <div
                className="bg-[#0b132b]/45 border border-white/5 p-8 rounded-xl flex flex-col justify-between hover:border-secondary-brand/30 transition-all group"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div>
                  <div className="w-14 h-14 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-white/5 text-secondary-brand">
                    <Shield className="w-7 h-7 text-secondary-brand" />
                  </div>
                  <h3 className="font-headline font-bold text-xl text-white mb-3">
                    SPC & Inteligência
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed mb-6">
                    Consultas ao SPC Brasil e Serasa, monitoramento contínuo SPC
                    Avisa e profunda análise de risco para concessões de crédito
                    com segurança cirúrgica.
                  </p>
                </div>

                <div>
                  {/* Expandable features section */}
                  <button
                    onClick={() => toggleAccordion("spc")}
                    className="accordion-btn flex items-center gap-2 text-xs font-bold text-secondary-brand mb-4 hover:underline cursor-pointer"
                  >
                    <span>
                      {accordions.spc
                        ? "Ocultar benefícios"
                        : "Ver benefícios específicos"}
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${accordions.spc ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>

                  {accordions.spc && (
                    <ul className="space-y-2.5 mb-6 border-t border-white/5 pt-4 animate-in fade-in duration-200">
                      <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0" />
                        <span>Consultas PF e PJ Integradas</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0" />
                        <span>
                          Monitoramento SPC Avisa (Alertas em tempo real)
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0" />
                        <span>Recuperação de Crédito facilitada</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0" />
                        <span>Histórico de Comportamento de Pagamento</span>
                      </li>
                    </ul>
                  )}

                  <div className="border-t border-white/5 pt-4">
                    <span className="text-[10px] text-white/40 block">
                      SERVIÇO INTEGRADO
                    </span>
                    <span className="text-xs font-semibold text-white/95">
                      CDL Cachoeiro
                    </span>
                  </div>
                </div>
              </div>

              {/* Solution 2: Certificado */}
              <div
                className="bg-[#0b132b]/45 border border-white/5 p-8 rounded-xl flex flex-col justify-between hover:border-secondary-brand/30 transition-all group"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div>
                  <div className="w-14 h-14 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-white/5 text-secondary-brand">
                    <Award className="w-7 h-7 text-secondary-brand" />
                  </div>
                  <h3 className="font-headline font-bold text-xl text-white mb-3">
                    Protagonismo Digital
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed mb-6">
                    Líder regional e referência no Espírito Santo em
                    Certificação Digital, ocupando o 5º lugar nacional em
                    emissões seguras pelo sistema SPC Brasil.
                  </p>
                </div>

                <div>
                  {/* Expandable features section */}
                  <button
                    onClick={() => toggleAccordion("digital")}
                    className="accordion-btn flex items-center gap-2 text-xs font-bold text-secondary-brand mb-4 hover:underline cursor-pointer"
                  >
                    <span>
                      {accordions.digital
                        ? "Ocultar benefícios"
                        : "Ver benefícios específicos"}
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${accordions.digital ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>

                  {accordions.digital && (
                    <ul className="space-y-2.5 mb-6 border-t border-white/5 pt-4 animate-in fade-in duration-200">
                      <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0" />
                        <span>Certificado Digital e-CPF e e-CNPJ</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0" />
                        <span>
                          Emissão Presencial na Sede ou Remota por
                          videoconferência
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0" />
                        <span>Instalação e Suporte Técnico especializado</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0" />
                        <span>
                          Validade e Segurança Jurídica nacional garantida
                        </span>
                      </li>
                    </ul>
                  )}

                  <div className="border-t border-white/5 pt-4">
                    <span className="text-[10px] text-white/40 block">
                      SERVIÇO INTEGRADO
                    </span>
                    <span className="text-xs font-semibold text-white/95">
                      CDL Cachoeiro
                    </span>
                  </div>
                </div>
              </div>

              {/* Solution 3: Estrutura */}
              <div
                className="bg-[#0b132b]/45 border border-white/5 p-8 rounded-xl flex flex-col justify-between hover:border-secondary-brand/30 transition-all group"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div>
                  <div className="w-14 h-14 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-white/5 text-secondary-brand">
                    <Building className="w-7 h-7 text-secondary-brand" />
                  </div>
                  <h3 className="font-headline font-bold text-xl text-white mb-3">
                    Estrutura & Parcerias
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed mb-6">
                    Centro de Convenções próprio altamente equipado para
                    capacitações e fomento financeiro acelerado em parceria
                    direta como correspondente BANDES.
                  </p>
                </div>

                <div>
                  {/* Expandable features section */}
                  <button
                    onClick={() => toggleAccordion("structure")}
                    className="accordion-btn flex items-center gap-2 text-xs font-bold text-secondary-brand mb-4 hover:underline cursor-pointer"
                  >
                    <span>
                      {accordions.structure
                        ? "Ocultar benefícios"
                        : "Ver benefícios específicos"}
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${accordions.structure ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>

                  {accordions.structure && (
                    <ul className="space-y-2.5 mb-6 border-t border-white/5 pt-4 animate-in fade-in duration-200">
                      <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0" />
                        <span>
                          Centro de Convenções Multiuso com som e projeção
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0" />
                        <span>
                          Correspondente oficial BANDES (Microcrédito)
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0" />
                        <span>
                          Salas de treinamento para equipes associadas
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-on-background/95">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary-brand mt-0.5 shrink-0" />
                        <span>Networking qualificado entre empresários</span>
                      </li>
                    </ul>
                  )}

                  <div className="border-t border-white/5 pt-4">
                    <span className="text-[10px] text-white/40 block">
                      SERVIÇO INTEGRADO
                    </span>
                    <span className="text-xs font-semibold text-white/95">
                      CDL Cachoeiro
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING HERO BANNER */}
        <section className="py-28 md:py-36 relative bg-on-background text-primary-container text-center overflow-hidden">
          {/* Subtitle watermark */}
          <span className="font-headline font-black text-6xl md:text-[110px] opacity-[0.03] absolute left-1/2 -top-10 -translate-x-1/2 select-none tracking-widest leading-none pointer-events-none">
            COLETIVO
          </span>

          <div
            className="max-w-4xl mx-auto px-6 relative z-10"
            data-aos="fade-up"
          >
            <span className="text-[#884f00] font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
              PENSANDO NO AMANHÃ
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black text-primary-container mb-8 leading-tight">
              Uma história construída <br />
              <span className="text-secondary-container relative">
                por muitos, para todos.
                <span className="absolute left-0 bottom-0 w-full h-[4px] bg-secondary-container/10 -z-10" />
              </span>
            </h2>
            <p className="font-sans text-sm md:text-lg max-w-2xl mx-auto mb-12 text-[#2d1b00]/80 leading-relaxed">
              Há 55 anos, acreditamos que o sucesso de um comerciante é o
              progresso de toda a nossa comunidade. O futuro nos aguarda com
              novos desafios digitais, e a CDL Cachoeiro estará lá, apoiando sua
              empresa.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="https://api.whatsapp.com/send?phone=5528998867193&text=Ol%C3%A1%2C%20gostaria%20de%20me%20associar%20%C3%A0%20CDL%20Cachoeiro."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#db7f00] hover:bg-[#c26e00] text-white font-extrabold px-8 py-3.5 rounded-lg text-sm transition-all cursor-pointer shadow-lg shadow-[#db7f00]/20 flex items-center justify-center gap-1.5"
              >
                Quero me Associar Hoje
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* INTERACTIVE OVERLAYS & MODALS */}

      {/* 1. VIDEO MODAL (SIMPLE & ELEGANT HTML5 VIDEO PLAYER) */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0b132b] border border-white/10 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col relative">
            {/* Close Button at top-right */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-20 bg-black/60 text-white hover:bg-white/20 p-2.5 rounded-full transition-colors cursor-pointer"
              aria-label="Fechar vídeo"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Dynamic Header */}
            <div className="p-5 border-b border-white/5 bg-[#001430]/65 flex items-center gap-2.5">
              <Film className="text-secondary-brand w-5 h-5" />
              <div>
                <h3 className="text-white font-headline font-bold text-base leading-none">
                  55 Anos CDL Cachoeiro
                </h3>
              </div>
            </div>

            {/* Actual HTML5 video container */}
            <div className="bg-black relative aspect-video w-full">
              <iframe
                src="https://drive.google.com/file/d/1bGn3f06HEVYS0zq4v6BHEhN_sOW8DcgI/preview"
                className="w-full h-full object-contain"
                allow="autoplay; fullscreen"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* 3. PHOTO LIGHTBOX MODAL */}
      

      {/* SCROLL TO TOP BUTTON */}
      {scrollTopVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-secondary-brand hover:bg-secondary-brand/90 text-primary-container p-3 rounded-full transition-all cursor-pointer shadow-lg shadow-black/30 z-30 animate-in zoom-in duration-200"
          title="Voltar ao início"
        >
          <ChevronUp className="w-5 h-5 text-primary-container" />
        </button>
      )}
    </div>
  );
}
