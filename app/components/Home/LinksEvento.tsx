import Link from "next/link";
import Image from "next/image";

export default function LinksEvento() {
  return (
    <div
      className="flex flex-col justify-center items-center mt-5"
      id="festa55anos"
    >
      <hr className="border-2 border-amber-500 w-1/2 mb-5" />
      <h2 className="text-2xl font-bold text-center text-white mb-4">
        Confira as fotos do evento de comemoração dos 55 anos da CDL Cachoeiro!
      </h2>

      <div
        className="flex justify-center items-center mt-5 gap-5 flex-wrap"
        id="GaleriaFotos"
      >
        <Image
          src="/img/evento/foto-1.jpeg"
          width={300}
          height={250}
          alt="Foto do evento"
        />
        <Image
          src="/img/evento/foto-2.jpeg"
          width={300}
          height={250}
          alt="Foto do evento"
        />
        <Image
          src="/img/evento/foto-3.jpeg"
          width={300}
          height={250}
          alt="Foto do evento"
        />
      </div>

      <div className="flex justify-center items-center mt-5 gap-5 flex-wrap" id="festa55anos">
        <Link
          href="https://drive.google.com/drive/folders/1nuL8KMkVMsXqUiAlTih3Ha8lSOi8hyzt?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-center m-auto justify-center items-center mt-12 inline-block bg-secondary-brand text-primary-container font-bold text-sm md:text-base px-6 py-3 rounded-lg hover:bg-secondary-brand/90 transition-all"
        >
          Fotos - Galeria 1
        </Link>

        <Link
          href="https://drive.google.com/drive/folders/1Q7NngEyMa_EcAYSqfSRcXGz0rihIY9fy?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-center m-auto justify-center items-center mt-12 inline-block bg-secondary-brand text-primary-container font-bold text-sm md:text-base px-6 py-3 rounded-lg hover:bg-secondary-brand/90 transition-all"
        >
          Fotos - Galeria 2
        </Link>
      </div>
    </div>
  );
}
