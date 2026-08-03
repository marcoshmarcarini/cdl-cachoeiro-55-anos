import Image from "next/image";

import { DIRETORIA, CONSELHO } from "../data/cdlData";

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9IiMwMDE5M2MiLz48L3N2Zz4=";

console.log("DIRETORIA", DIRETORIA);
export default function AtualDiretoria() {
  return (
    <>
      <div className="flex justify-center items-center gap-8 lg:gap-12">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-amber-500/50 shadow-lg">
            <Image
              src="/img/layout/celso-face.png"
              alt="Celso Luiz Costa"
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
            />
          </div>
          <h3 className="text-lg font-bold text-white">Celso Luiz Costa</h3>
          <p className="text-sm text-slate-300 text-center">Presidente</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-amber-500/50 shadow-lg">
            <Image
              src="/img/layout/joao-face.png"
              alt="João Kléber de Massena"
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
            />
          </div>
          <h3 className="text-lg font-bold text-white">
            João Kléber de Massena
          </h3>
          <p className="text-sm text-slate-300 text-center">Vice-Presidente</p>
        </div>
      </div>

      <div className="mt-12 max-w-3xl mx-auto text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-4 text-center">
          Diretoria
        </h2>
        <ul>
          {DIRETORIA.map((nome, index) => (
            <li key={index} className="flex flex-col items-center gap-4 mb-2">
              <span className="text-white font-bold text-sm">{nome}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12 max-w-3xl mx-auto text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-4 text-center">
          Conselho
        </h2>
        <ul>
          {CONSELHO.map((nome, index) => (
            <li key={index} className="flex flex-col items-center gap-4 mb-2">
              <span className="text-white font-bold text-sm">{nome}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
