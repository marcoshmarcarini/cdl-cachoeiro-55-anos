import Image from "next/image";
import { useEffect, useState } from "react"
import { GalleryItem } from "@/app/api/gallery/route";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
export default function Galeria() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const BLUR_PLACEHOLDER =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9IiMwMDE5M2MiLz48L3N2Zz4=";

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
      }
      if (lightboxOpen) {
        if (e.key === "ArrowLeft") {
          setCurrentImgIndex(
            (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
          );
        }
        if (e.key === "ArrowRight") {
          setCurrentImgIndex((prev) => (prev + 1) % galleryImages.length);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <>
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
              Acervo Visual
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-4">
              Galeria de Imagens
            </h2>
            <p className="text-on-surface-variant text-sm md:text-base">
              Acompanhe os momentos históricos, reuniões e eventos que ajudaram
              a pavimentar os 55 anos de progresso do comércio de Cachoeiro de
              Itapemirim.
            </p>
          </div>

          {/* Responsive bento-like grid of photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setCurrentImgIndex(idx);
                  setLightboxOpen(true);
                }}
                className="gallery-item group relative h-72 rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-secondary-brand/30 transition-all"
                data-aos="fade-up"
                data-aos-delay={(idx + 1) * 50}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-5">
                  <p className="text-white text-sm font-semibold">
                    {img.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxOpen(false);
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
        >
          {/* Lightbox Header (close / counter) */}
          <div className="flex justify-between items-center p-4 z-10">
            <span className="text-xs font-semibold text-white/60 uppercase tracking-widest font-mono">
              {currentImgIndex + 1} de {galleryImages.length}
            </span>
            <button
              onClick={() => setLightboxOpen(false)}
              className="text-white hover:text-secondary-brand bg-white/5 hover:bg-white/15 p-2 rounded-full transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Display */}
          <div className="flex-grow flex items-center justify-center relative px-12">
            {/* Prev Button */}
            <button
              onClick={() =>
                setCurrentImgIndex(
                  (prev) =>
                    (prev - 1 + galleryImages.length) % galleryImages.length,
                )
              }
              className="absolute left-4 bg-white/5 hover:bg-secondary-brand hover:text-primary-container text-white p-3 rounded-full border border-white/10 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dynamic Image */}
            <Image
              width={1200}
              height={800}
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[70vh] w-auto h-auto rounded-lg object-contain shadow-2xl transition-all duration-300"
              src={galleryImages[currentImgIndex].src}
              alt={galleryImages[currentImgIndex].title}
            />

            {/* Next Button */}
            <button
              onClick={() =>
                setCurrentImgIndex((prev) => (prev + 1) % galleryImages.length)
              }
              className="absolute right-4 bg-white/5 hover:bg-secondary-brand hover:text-primary-container text-white p-3 rounded-full border border-white/10 transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
