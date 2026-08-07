import Image from "next/image";
import Link from "next/link";


export default function Footer(){
    return(
        <footer className="bg-primary-container border-t border-white/5 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo Brand */}
          <div>
            <div className="font-headline text-lg md:text-xl font-black text-white flex items-center gap-3">
              <Image
                src="/img/layout/cdlcachoeiro.png"
                alt="CDL Cachoeiro 55 Anos"
                width={160}
                height={48}
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
                priority
              />
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex gap-6 md:gap-8 text-xs font-semibold text-on-surface-variant">
            <a
              href="#historia"
              className="hover:text-secondary-brand transition-colors"
            >
              História
            </a>
            <a
              href="#manifesto"
              className="hover:text-secondary-brand transition-colors"
            >
              Manifesto
            </a>
            <a
              href="#galeria"
              className="hover:text-secondary-brand transition-colors"
            >
              Galeria
            </a>
            <a
              href="#servicos"
              className="hover:text-secondary-brand transition-colors"
            >
              Serviços
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-on-surface-variant text-center md:text-right">
            © 2026 CDL Cachoeiro. 55 anos impulsionando o desenvolvimento
            regional.
          </p>
        </div>
        <p className="text-xs text-on-surface-variant text-center md:text-center">
          Site desenvolvido por{" "}
          <Link href="https://comconteudo.com.br" className="font-semibold">
            Agência Conteúdo
          </Link>
        </p>
      </footer>
    )
}