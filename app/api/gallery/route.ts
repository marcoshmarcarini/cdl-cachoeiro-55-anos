import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export interface GalleryItem {
  id: number;
  src: string;
  title?: string;
}

// Fallback images and metadata
const FALLBACK_IMAGES: GalleryItem[] = [
  {
    id: 1,
    src: "/img/novas_fotos/_Sala Certificado moderna.JPG.jpeg",
    title: "Sala de Certificados Modernizada"
  },
  {
    id: 2,
    src: "/img/novas_fotos/Atendimento consulta telefone.jpg.jpeg",
    title: "Atendimento por Telefone"
  },
  {
    id: 3,
    src: "/img/novas_fotos/Auditorio vazio.jpg.jpeg",
    title: "Auditório"

  },
  {
    id: 4,
    src: "/img/novas_fotos/Equipe operando sistema  antigos.jpg.jpeg",
    title: "Equipe Operando Sistema Antigo"
   
  },
  {
    id: 5,
    src: "/img/novas_fotos/Evento comemorativo 30 anos.jpg.jpeg",
    title: "Evento Comemorativo 30 Anos"
  },
  {
    id: 6,
    src: "/img/novas_fotos/Evento comemorativo 30 anos1.jpg.jpeg",
    title: "Evento Comemorativo 30 Anos"
  },
  {
    id: 7,
    src: "/img/novas_fotos/Fachadas antiga.jpg.jpeg",
    title: "Fachada Antiga da CDL"
  },
  {
    id: 8,
    src: "/img/novas_fotos/Fazendo consulta ficharios.jpg.jpeg",
    title: "Consulta em Fichários"
  },
  {
    id:9,
    src: "/img/novas_fotos/foto da diretoria atual.jpg.jpeg",
    title: "Diretoria Atual"
  },
  {
    id: 10,
    src: "/img/novas_fotos/Foto do ganhador do carro.jpg.jpeg",
    title: "Ganhador do Carro"
  },
  {
    id: 11,
    src: "/img/novas_fotos/Foto facahada modernizada.JPG.jpeg",
    title: "Fachada Modernizada"
  },
  {
    id: 12,
    src: "/img/novas_fotos/Foto-Interior-da-Sede-Antiga.png",
    title: "Interior da Sede Antiga"
  },
  {
    id: 13,
    src: "/img/novas_fotos/Foto reforma do prédio.jpg.jpeg",
    title: "Reforma do Prédio"
  },
  {
    id: 14,
    src: "/img/novas_fotos/Foto soreito na praça publico.JPG.jpeg",
    title: "Sorteio na Praça"
  },
  {
    id: 15,
    src: "/img/novas_fotos/Foto sorteio praça2.JPG.jpeg",
    title: "Sorteio na Praça"
  },
  {
    id: 16,
    src: "/img/novas_fotos/Fotos dos Presidente - 30 Anos_page-0001.jpg.jpeg",
    title: "Aniversário de 30 Anos - Fotos dos Presidentes"
  },
  {
    id: 17,
    src: "/img/novas_fotos/Globo na Praça.jpg.jpeg",
    title: "Globo na Praça"
  },
  {
    id: 18,
    src: "/img/novas_fotos/Inauguração Auditório.JPG.jpeg",
    title: "Inauguração do Auditório"
  },
  {
    id: 19,
    src: "/img/novas_fotos/Inauguração do Cerimonia.JPG.jpeg",
    title: "Inauguração da Cerimonia"
  },
  {
    id: 20,
    src: "/img/novas_fotos/Inauguração sala atual Administrativa.jpg.jpeg",
    title: "Inauguração da Sala Administrativa"
  },
  {
    id: 21,
    src: "/img/novas_fotos/Inauguração sala atual presidente.jpg.jpeg",
    title: "Inauguração da Sala do Presidente"
  },
  {
    id: 22,
    src: "/img/novas_fotos/Inetirior sede antiga.jpg.jpeg",
    title: "Interior da Sede Antiga"
  },
  {
    id: 23,
    src: "/img/novas_fotos/Lançamento CDL Corretora.JPG.jpeg",
    title: "Lançamento da CDL Corretora"
  },
  {
    id: 24,
    src: "/img/novas_fotos/Lançamento CDL Corretora1.JPG.jpeg",
    title: "Lançamento da CDL Corretora"
  },
  {
    id: 25,
    src: "/img/novas_fotos/Publicos participação das ações.jpg.jpeg",
    title: "Ações da CDL Cachoeiro"
  },
  {
    id: 26,
    src: "/img/novas_fotos/Show do Guilherme Arantes.jpg.jpeg",
    title: "Show do Guilherme Arantes"
  },
  {
    id: 27,
    src: "/img/novas_fotos/Sorteio de automoveis.jpg.jpeg",
    title: "Sorteio de Automóveis"
  },
  {
    id: 28,
    src: "/img/novas_fotos/Troféu Deusa da Fortuna1.jpg.jpeg",
    title: "Troféu Deusa da Fortuna"
  },
  {
    id: 29,
    src: "/img/novas_fotos/Troféu Deusa da Forturna.jpg.jpeg",
    title: "Troféu Deusa da Fortuna"
  },
];



export async function GET() {
  try {
    const publicImgDir = path.join(process.cwd(), "public", "img");
    let localImageFiles: string[] = [];

    if (fs.existsSync(publicImgDir)) {
      const files = fs.readdirSync(publicImgDir);
      localImageFiles = files.filter((f) =>
        /\.(jpg|jpeg|png|webp|svg|gif)$/i.test(f)
      );
    }

  
    // Se houver imagens em public/img, adicionamos e repetimos
    if (localImageFiles.length > 0) {
      const images: GalleryItem[] = localImageFiles.map((file, idx) => {
        const nameWithoutExt = file.split(".")[0];
        const formattedName = nameWithoutExt
          .replace(/[-_]/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase());

        return {
          id: idx + 1,
          src: `/img/${file}`,
        };
      });

      // Se houver menos de 6 imagens locais, mescla com as imagens de referência para manter a galeria rica
      const combined = [...images];
      if (combined.length < 6) {
        FALLBACK_IMAGES.forEach((item) => {
          if (!combined.some((c) => c.src === item.src)) {
            combined.push({ ...item, id: combined.length + 1 });
          }
        });
      }
 
      return NextResponse.json({
        success: true,
        count: combined.length,
        images: combined,
      });
    }

   

    // Fallback padrão se pasta estiver vazia
    return NextResponse.json({
      success: true,
      count: FALLBACK_IMAGES.length,
      images: FALLBACK_IMAGES,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: true,
      count: FALLBACK_IMAGES.length,
      images: FALLBACK_IMAGES,
    });
  }
}
