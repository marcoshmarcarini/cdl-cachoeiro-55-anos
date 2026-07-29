import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { storeName, ownerName, segment, yearsInCachoeiro, specialMemory } = body;

    if (!storeName || !ownerName) {
      return NextResponse.json(
        { error: "Por favor, informe o nome do estabelecimento e o nome do responsável." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Fallback response if GEMINI_API_KEY is not set yet
      return NextResponse.json({
        headline: `Certificado de Reconhecimento Empresarial - 55 Anos CDL`,
        message: `A Diretoria da CDL Cachoeiro de Itapemirim rende homenagens especiais à loja "${storeName}", liderada por ${ownerName}, no segmento de ${segment || "Comércio & Serviços"}. Há ${yearsInCachoeiro || "muitos"} anos fazendo parte da história do comércio capixaba, gerando empregos, valorizando a nossa cidade e construindo o futuro de Cachoeiro com coragem e dedicação!`,
        certificateCode: `CDL55-HONOR-${Math.floor(100000 + Math.random() * 900000)}`,
        dateGenerated: new Date().toLocaleDateString("pt-BR")
      });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    const prompt = `Você é o mestre de cerimônias e redator oficial do Jubileu de Esmeralda (55 Anos) da CDL Cachoeiro de Itapemirim (Espírito Santo).
Elabore uma mensagem institucional e um poema/texto festivo em homenagem ao estabelecimento comercial local.

Dados do homenageado:
- Nome do Estabelecimento: "${storeName}"
- Nome do Empresário/Lojista: "${ownerName}"
- Segmento: "${segment || "Comércio Varejista"}"
- Tempo de Atuação em Cachoeiro: "${yearsInCachoeiro || "Histórico"}"
- Memória ou Diferencial Especial: "${specialMemory || "Compromisso com o atendimento e qualidade"}"

Retorne estritamente um formato JSON com:
- "headline": Um título de impacto festivo e honroso para o certificado.
- "message": Um texto de 2 parágrafos emocionante e solene destacando a importância da empresa para o comércio de Cachoeiro de Itapemirim, citando a CDL 55 anos.
- "quote": Uma frase curta de inspiração empresarial.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text || "{}";
    const result = JSON.parse(text);

    return NextResponse.json({
      headline: result.headline || `Homenagem de Honorabilidade - 55 Anos CDL Cachoeiro`,
      message: result.message || `Ao comerciante ${ownerName} e à empresa ${storeName}, nossa profunda gratidão por fortalecer o comércio de Cachoeiro de Itapemirim.`,
      quote: result.quote || "O comércio fortalece a cidade; a união consolida a nossa história.",
      certificateCode: `CDL55-CUI-${Math.floor(100000 + Math.random() * 900000)}`,
      dateGenerated: new Date().toLocaleDateString("pt-BR")
    });

  } catch (error: any) {
    console.error("Erro no gerador de homenagem da CDL:", error);
    return NextResponse.json(
      { error: "Erro ao gerar mensagem de homenagem: " + error.message },
      { status: 500 }
    );
  }
}
