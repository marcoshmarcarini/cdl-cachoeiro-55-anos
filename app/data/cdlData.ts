import { TimelineMilestone, LeaderItem, EventItem, TestimonialItem } from "@/app/types/cdl";

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    year: "1969",
    decade: "1960s",
    title: "Fundação do Clube de Diretores Lojistas",
    description: "Visando unir a classe empresária e fortalecer o comércio varejista de Cachoeiro de Itapemirim, líderes pioneiros fundam a CDL em 10 de novembro de 1969.",
    category: "Fundação",
    highlights: ["União dos primeiros empresários locais", "Criação do Serviço de Proteção ao Crédito (SPC)", "Sede inicial no centro da cidade"]
  },
  {
    year: "1978",
    decade: "1970s",
    title: "Expansão dos Serviços e Consolidação no Sul do ES",
    description: "A CDL se consolida como a principal entidade representativa do comércio do Sul do Espírito Santo, expandindo consultas de crédito e apoio jurídico aos associados.",
    category: "Crescimento",
    highlights: ["Modernização dos registros de crédito", "Primeiras campanhas natalinas unificadas", "Fortalecimento institucional"]
  },
  {
    year: "1985",
    decade: "1980s",
    title: "Inauguração do Edifício Sede Própria",
    description: "Com o apoio maciço dos empresários cachoeirenses, é inaugurada a sede própria na Av. Beira Rio, tornando-se referência de atendimento e auditório para eventos.",
    category: "Inovação",
    highlights: ["Auditório para cursos e convenções", "Atendimento centralizado ao lojista", "Integração regional com cidades vizinhas"]
  },
  {
    year: "1997",
    decade: "1990s",
    title: "Informatização do SPC e Certificação Digital",
    description: "Pioneirismo na transição digital: o sistema de consultas em papel dá lugar a terminais eletrônicos e suporte instantâneo às lojas.",
    category: "Inovação",
    highlights: ["Informatização completa das consultas", "Pioneirismo em Certificação Digital no Sul do ES", "Criação da CDL Jovem"]
  },
  {
    year: "2008",
    decade: "2000s",
    title: "Feira de Negócios e Mérito Lojista",
    description: "Lançamento de grandes projetos de incentivo às vendas locais, campanhas de prêmios memoráveis e a tradicional premiação do Mérito Lojista Capixaba.",
    category: "Serviços",
    highlights: ["Premiação anual Mérito Lojista", "Ações promocionais de Dia das Mães e Natal", "Clube de Vantagens e Parcerias"]
  },
  {
    year: "2019",
    decade: "2010s",
    title: "Jubileu de Ouro: 50 Anos de História",
    description: "Celebração de meio século de atuação ininterrupta com homenagens aos ex-presidentes, publicação de livro comemorativo e modernização tecnológica.",
    category: "Fundação",
    highlights: ["Celebração do Jubileu de Ouro", "Plataforma digital para associados", "Fortalecimento do ecossistema de serviços"]
  },
  {
    year: "2024",
    decade: "2020s",
    title: "55 Anos: Inovação, Inteligência e Conectividade",
    description: "A CDL Cachoeiro celebra 55 anos impulsionando a transformação digital dos negócios, assessoria em inteligência artificial, ESG e crédito inovador.",
    category: "Futuro",
    highlights: ["Soluções em Inteligência Artificial para o Varejo", "Programa CDL Mulher e Empreendedorismo", "Defesa firme dos interesses da classe empresária"]
  }
];

export const LEADERSHIP_DATA: LeaderItem[] = [
  {
    name: "Celso Luiz Costa",
    role: "Presidente da CDL Cachoeiro",
    period: "Gestão Atual",
    quote: "Chegar aos 55 anos reafirma nossa vocação de defender o lojista, gerar empregos e impulsionar o desenvolvimento de Cachoeiro de Itapemirim com tecnologia e união.",
  },
  {
    name: "Diretoria Executiva",
    role: "Conselho de Administração",
    period: "2023 - 2025",
    quote: "Trabalho voluntário e comprometido de grandes lideranças dos setores de vestuário, calçados, serviços, construção e alimentação da nossa cidade.",
  },
  {
    name: "Galeria de Ex-Presidentes",
    role: "Lideranças Históricas",
    period: "1969 - Presente",
    quote: "Uma trajetória construída a muitas mãos por visionários que acreditaram no potencial do comércio cachoeirense.",
  }
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: "evt_1",
    title: "Sessão Solene de Gala - 55 Anos CDL Cachoeiro",
    date: "10 de Novembro",
    time: "19:30",
    location: "Auditório da Sede CDL Cachoeiro - Av. Beira Rio",
    category: "Solene",
    description: "Noite comemorativa de homenagens aos pioneiros, entrega do Troféu Mérito Lojista 55 Anos e lançamento do livro da memória empresarial de Cachoeiro.",
    featured: true
  },
  {
    id: "evt_2",
    title: "Forum de Inovação & Vendas para o Varejo 2025",
    date: "25 de Novembro",
    time: "14:00 às 21:00",
    location: "Centro de Eventos de Cachoeiro",
    category: "Negócios",
    description: "Workshops práticos sobre Inteligência Artificial aplicada ao comércio, atendimento omnichannel e estratégias de fidelização de clientes.",
    featured: true
  },
  {
    id: "evt_3",
    title: "Lançamento da Campanha Natal Iluminado de Prêmios",
    date: "01 de Dezembro",
    time: "09:00",
    location: "Praça Jerônimo Monteiro - Centro",
    category: "Social",
    description: "Abertura oficial da maior campanha natalina do Sul do estado com sorteio de veículos, vales-compras e atrações culturais.",
    featured: false
  },
  {
    id: "evt_4",
    title: "Encontro Empresarial CDL Mulher & Jovem",
    date: "12 de Dezembro",
    time: "18:30",
    location: "Espaço de Eventos CDL",
    category: "Networking",
    description: "Painel sobre liderança feminina no comércio, sucessão familiar e novos negócios com networking exclusivo.",
    featured: false
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test_1",
    author: "Sebastião Rezende",
    company: "Rezende Calçados",
    segment: "Calçados & Acessórios",
    yearsAssociated: 38,
    message: "A CDL Cachoeiro é nossa parceira diária desde a época do meu pai. O suporte de crédito, treinamentos de equipe e a segurança jurídica fazem toda a diferença para prosperarmos na Beira Rio."
  },
  {
    id: "test_2",
    author: "Ana Flávia Miranda",
    company: "Boutique Flor de Lis",
    segment: "Vestuário Feminino",
    yearsAssociated: 12,
    message: "Participar das ações do CDL Mulher e das campanhas comemorativas da cidade impulsionou nossas vendas em mais de 40%. Vida longa à CDL Cachoeiro nos seus 55 anos!"
  },
  {
    id: "test_3",
    author: "Ricardo Alvarenga",
    company: "Supermercado Sul Capixaba",
    segment: "Supermercadista",
    yearsAssociated: 25,
    message: "Uma entidade ética, firme e batalhadora que representa o verdadeiro pulmão econômico da nossa região. Parabéns por mais um ano marcante!"
  }
];

export const GALLERY_ITEMS = [
  {
    title: "Sede Histórica da CDL Cachoeiro",
    category: "História",
    description: "Localizada na Av. Beira Rio, ponto de referência do empreendedorismo no Sul do Estado.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Comércio Efervescente do Centro de Cachoeiro",
    category: "Comércio",
    description: "Rua Capitão Deslandes e adjacências: coração pulsante do consumo regional.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Sessões e Eventos com Empresários",
    category: "Ações",
    description: "Capacitação contínua, palestras renomadas e formação de lideranças lojistas.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Campanhas de Prêmios e Incentivo ao Consumo",
    category: "Campanhas",
    description: "Sorteios e decorações festivas que mobilizam todo o município.",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80"
  }
];
