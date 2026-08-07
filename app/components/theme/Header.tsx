import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-primary-container/85 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        {/* Logo Brand */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/img/layout/cdlcachoeiro.png"
            alt="CDL Cachoeiro 55 Anos"
            width={160}
            height={48}
            className="h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
            priority
          />
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <a
            href="#historia"
            className="text-on-background/85 hover:text-secondary-brand transition-colors text-sm font-medium"
          >
            História
          </a>
          <a
            href="#manifesto"
            className="text-on-background/85 hover:text-secondary-brand transition-colors text-sm font-medium"
          >
            Manifesto
          </a>
          <a
            href="#galeria"
            className="text-on-background/85 hover:text-secondary-brand transition-colors text-sm font-medium"
          >
            Galeria
          </a>
          <a
            href="#presidente"
            className="text-on-background/85 hover:text-secondary-brand transition-colors text-sm font-medium"
          >
            Nosso Presidente
          </a>
          <a
            href="#presidentes"
            className="text-on-background/85 hover:text-secondary-brand transition-colors text-sm font-medium"
          >
            Presidentes
          </a>
          <a
            href="#festa55anos"
            className="text-on-background/85 hover:text-secondary-brand transition-colors text-sm font-medium"
          >
            Festa 55 anos
          </a>
          <a
            href="#servicos"
            className="text-on-background/85 hover:text-secondary-brand transition-colors text-sm font-medium"
          >
            Serviços
          </a>

          <Link
            href="https://api.whatsapp.com/send?phone=5528998867193&text=Ol%C3%A1%2C%20gostaria%20de%20me%20associar%20%C3%A0%20CDL%20Cachoeiro."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary-brand hover:bg-secondary-brand/90 text-primary-container font-extrabold text-sm px-6 py-2.5 rounded-lg hover:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-secondary-brand/15"
          >
            Seja Associado
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-on-background hover:text-secondary-brand transition-colors p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary-container border-b border-white/10 px-6 py-6 space-y-4">
          <div className="flex flex-col gap-4">
            <a
              href="#historia"
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-background/90 hover:text-secondary-brand transition-colors text-base font-medium"
            >
              História
            </a>
            <a
              href="#manifesto"
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-background/90 hover:text-secondary-brand transition-colors text-base font-medium"
            >
              Manifesto
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-background/90 hover:text-secondary-brand transition-colors text-base font-medium"
            >
              Galeria
            </a>
            <a
              href="#presidente"
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-background/90 hover:text-secondary-brand transition-colors text-base font-medium"
            >
              Nosso Presidente
            </a>
            <a
              href="#presidentes"
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-background/90 hover:text-secondary-brand transition-colors text-base font-medium"
            >
              Presidentes
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-on-background/90 hover:text-secondary-brand transition-colors text-base font-medium"
            >
              Serviços
            </a>
            <Link
              href="https://api.whatsapp.com/send?phone=5528998867193&text=Ol%C3%A1%2C%20gostaria%20de%20me%20associar%20%C3%A0%20CDL%20Cachoeiro."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-brand hover:bg-secondary-brand/90 text-primary-container font-extrabold text-sm px-6 py-2.5 rounded-lg hover:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-secondary-brand/15"
            >
              Seja Associado
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
