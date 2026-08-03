import {
  TimelineMilestone,
  LeaderItem,
  EventItem,
  TestimonialItem,
} from "@/app/types/cdl";

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    year: "1969",
    decade: "1960s",
    title: "Fundação do Clube de Diretores Lojistas",
    description:
      "Visando unir a classe empresária e fortalecer o comércio varejista de Cachoeiro de Itapemirim, líderes pioneiros fundam a CDL em 10 de novembro de 1969.",
    category: "Fundação",
    highlights: [
      "União dos primeiros empresários locais",
      "Criação do Serviço de Proteção ao Crédito (SPC)",
      "Sede inicial no centro da cidade",
    ],
  },
  {
    year: "1978",
    decade: "1970s",
    title: "Expansão dos Serviços e Consolidação no Sul do ES",
    description:
      "A CDL se consolida como a principal entidade representativa do comércio do Sul do Espírito Santo, expandindo consultas de crédito e apoio jurídico aos associados.",
    category: "Crescimento",
    highlights: [
      "Modernização dos registros de crédito",
      "Primeiras campanhas natalinas unificadas",
      "Fortalecimento institucional",
    ],
  },
  {
    year: "1985",
    decade: "1980s",
    title: "Inauguração do Edifício Sede Própria",
    description:
      "Com o apoio maciço dos empresários cachoeirenses, é inaugurada a sede própria na Av. Beira Rio, tornando-se referência de atendimento e auditório para eventos.",
    category: "Inovação",
    highlights: [
      "Auditório para cursos e convenções",
      "Atendimento centralizado ao lojista",
      "Integração regional com cidades vizinhas",
    ],
  },
  {
    year: "1997",
    decade: "1990s",
    title: "Informatização do SPC e Certificação Digital",
    description:
      "Pioneirismo na transição digital: o sistema de consultas em papel dá lugar a terminais eletrônicos e suporte instantâneo às lojas.",
    category: "Inovação",
    highlights: [
      "Informatização completa das consultas",
      "Pioneirismo em Certificação Digital no Sul do ES",
      "Criação da CDL Jovem",
    ],
  },
  {
    year: "2008",
    decade: "2000s",
    title: "Feira de Negócios e Mérito Lojista",
    description:
      "Lançamento de grandes projetos de incentivo às vendas locais, campanhas de prêmios memoráveis e a tradicional premiação do Mérito Lojista Capixaba.",
    category: "Serviços",
    highlights: [
      "Premiação anual Mérito Lojista",
      "Ações promocionais de Dia das Mães e Natal",
      "Clube de Vantagens e Parcerias",
    ],
  },
  {
    year: "2019",
    decade: "2010s",
    title: "Jubileu de Ouro: 50 Anos de História",
    description:
      "Celebração de meio século de atuação ininterrupta com homenagens aos ex-presidentes, publicação de livro comemorativo e modernização tecnológica.",
    category: "Fundação",
    highlights: [
      "Celebração do Jubileu de Ouro",
      "Plataforma digital para associados",
      "Fortalecimento do ecossistema de serviços",
    ],
  },
  {
    year: "2024",
    decade: "2020s",
    title: "55 Anos: Inovação, Inteligência e Conectividade",
    description:
      "A CDL Cachoeiro celebra 55 anos impulsionando a transformação digital dos negócios, assessoria em inteligência artificial, ESG e crédito inovador.",
    category: "Futuro",
    highlights: [
      "Soluções em Inteligência Artificial para o Varejo",
      "Programa CDL Mulher e Empreendedorismo",
      "Defesa firme dos interesses da classe empresária",
    ],
  },
];

export const LEADERSHIP_DATA: LeaderItem[] = [
  {
    name: "Celso Luiz Costa",
    role: "Presidente da CDL Cachoeiro",
    period: "Gestão Atual",
    quote:
      "Chegar aos 55 anos reafirma nossa vocação de defender o lojista, gerar empregos e impulsionar o desenvolvimento de Cachoeiro de Itapemirim com tecnologia e união.",
  },
  {
    name: "Diretoria Executiva",
    role: "Conselho de Administração",
    period: "2023 - 2025",
    quote:
      "Trabalho voluntário e comprometido de grandes lideranças dos setores de vestuário, calçados, serviços, construção e alimentação da nossa cidade.",
  },
  {
    name: "Galeria de Ex-Presidentes",
    role: "Lideranças Históricas",
    period: "1969 - Presente",
    quote:
      "Uma trajetória construída a muitas mãos por visionários que acreditaram no potencial do comércio cachoeirense.",
  },
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: "evt_1",
    title: "Sessão Solene de Gala - 55 Anos CDL Cachoeiro",
    date: "10 de Novembro",
    time: "19:30",
    location: "Auditório da Sede CDL Cachoeiro - Av. Beira Rio",
    category: "Solene",
    description:
      "Noite comemorativa de homenagens aos pioneiros, entrega do Troféu Mérito Lojista 55 Anos e lançamento do livro da memória empresarial de Cachoeiro.",
    featured: true,
  },
  {
    id: "evt_2",
    title: "Forum de Inovação & Vendas para o Varejo 2025",
    date: "25 de Novembro",
    time: "14:00 às 21:00",
    location: "Centro de Eventos de Cachoeiro",
    category: "Negócios",
    description:
      "Workshops práticos sobre Inteligência Artificial aplicada ao comércio, atendimento omnichannel e estratégias de fidelização de clientes.",
    featured: true,
  },
  {
    id: "evt_3",
    title: "Lançamento da Campanha Natal Iluminado de Prêmios",
    date: "01 de Dezembro",
    time: "09:00",
    location: "Praça Jerônimo Monteiro - Centro",
    category: "Social",
    description:
      "Abertura oficial da maior campanha natalina do Sul do estado com sorteio de veículos, vales-compras e atrações culturais.",
    featured: false,
  },
  {
    id: "evt_4",
    title: "Encontro Empresarial CDL Mulher & Jovem",
    date: "12 de Dezembro",
    time: "18:30",
    location: "Espaço de Eventos CDL",
    category: "Networking",
    description:
      "Painel sobre liderança feminina no comércio, sucessão familiar e novos negócios com networking exclusivo.",
    featured: false,
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test_1",
    author: "Sebastião Rezende",
    company: "Rezende Calçados",
    segment: "Calçados & Acessórios",
    yearsAssociated: 38,
    message:
      "A CDL Cachoeiro é nossa parceira diária desde a época do meu pai. O suporte de crédito, treinamentos de equipe e a segurança jurídica fazem toda a diferença para prosperarmos na Beira Rio.",
  },
  {
    id: "test_2",
    author: "Ana Flávia Miranda",
    company: "Boutique Flor de Lis",
    segment: "Vestuário Feminino",
    yearsAssociated: 12,
    message:
      "Participar das ações do CDL Mulher e das campanhas comemorativas da cidade impulsionou nossas vendas em mais de 40%. Vida longa à CDL Cachoeiro nos seus 55 anos!",
  },
  {
    id: "test_3",
    author: "Ricardo Alvarenga",
    company: "Supermercado Sul Capixaba",
    segment: "Supermercadista",
    yearsAssociated: 25,
    message:
      "Uma entidade ética, firme e batalhadora que representa o verdadeiro pulmão econômico da nossa região. Parabéns por mais um ano marcante!",
  },
];

export const GALLERY_ITEMS = [
  {
    title: "Sede Histórica da CDL Cachoeiro",
    category: "História",
    description:
      "Localizada na Av. Beira Rio, ponto de referência do empreendedorismo no Sul do Estado.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Comércio Efervescente do Centro de Cachoeiro",
    category: "Comércio",
    description:
      "Rua Capitão Deslandes e adjacências: coração pulsante do consumo regional.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Sessões e Eventos com Empresários",
    category: "Ações",
    description:
      "Capacitação contínua, palestras renomadas e formação de lideranças lojistas.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Campanhas de Prêmios e Incentivo ao Consumo",
    category: "Campanhas",
    description:
      "Sorteios e decorações festivas que mobilizam todo o município.",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80",
  },
];

export const NOSSOS_PRESIDENTES = [
  {
    name: "Carlos Luiz Pinto",
    term: "1971 - 1972",
    description:
      "O primeiro presidente da CDL Cachoeiro foi quem liderou a mobilização para trazer o Serviço de Proteção ao Crédito (SPC) para Cachoeiro. A iniciativa foi tomada após uma viagem a Petrópolis (RJ), onde conheceu a CDL daquele município. Carlos Luiz Pinto era proprietário da Modas Elite, que ficava na Rua Capitão Deslandes. Mais tarde, mudou o nome para Carlupin, sendo uma das redes de lojas mais conhecidas de Cachoeiro. O empresário morreu em janeiro de 2026.",
  },
  {
    name: "Roque Ferreira Cabral",
    term: "1972 - 1973",
    description:
      "O segundo presidente da CDL Cachoeiro, na época de sua eleição, era um dos gerentes da Calçados e Lojas Itapuã e foi indicado pela diretoria da empresa para representá-la na diretoria da CDL. Posteriormente, desligou-se da Itapuã e hoje é proprietário de uma distribuidora de produtos para fabricação de calçados, onde continua atuando junto com seus familiares.",
  },
  {
    name: "Jonas Reis",
    term: "1973 - 1974",
    description:
      "Foi proprietário da loja Palácio dos Tecidos, localizada na Rua Capitão Deslandes. Hoje está aposentado e mora no Rio de Janeiro.",
  },
  {
    name: "Valter Sthel Cock",
    term: "1974 - 1975",
    description:
      "Valter tinha uma loja chamada Rádio Marconi, que vendia produtos eletroeletrônicos. Mais tarde, elegeu-se vereador, sendo eleito presidente da Câmara, e desligou-se do comércio, dedicando-se à vida política.",
  },
  {
    name: "Benício Freitas Nogueira",
    term: "1975 - 1976",
    description:
      "Foi comerciante na Rua Pedro Dias, com a loja Mobilar, de móveis e eletrodomésticos. Hoje está aposentado.",
  },
  {
    name: "Felipe Assad Saliba",
    term: "1976 a 1978",
    description:
      "Foi proprietário da Casa Natal, localizada na Rua Capitão Deslandes, uma das lojas mais tradicionais e conhecidas de Cachoeiro. Após militar mais de 50 anos no comércio de Cachoeiro, aposentou-se. Felipe faleceu no ano de 2018.",
  },
  {
    name: "Celso Luiz Costa",
    term: "1978 - 1980",
    description:
      "Celso sempre esteve presente nas atividades da CDL, tendo, inclusive, participado da reunião de criação da entidade. Fundou a Sapataria Lua e Xuá e teve participação na loja A Preferida, que era de propriedade de seu pai, Jerônimo Costa. Foi durante sua gestão que a CDL adquiriu sua primeira sede administrativa, a sala 301 do Ed. Hércules.",
  },
  {
    name: "Florizio Brezinski Paganote",
    term: "1980 - 1982",
    description:
      "Comerciante dono da loja Feira de Tecidos, localizada na Praça Pedro Cuevas Junior, onde hoje está a loja Plim Plim. Está aposentado atualmente.",
  },
  {
    name: "Marconi Leonel",
    term: "1982 - 1984",
    description: "O empresário Marconi Leonel é sobrinho do Sr. Severino, proprietário e fundador da Calçados Itapuã. Hoje é diretor executivo do Grupo Itapuã, uma rede com mais de 150 lojas na região Sudeste."
  },
  {
    name: "Cezar Missi",
    term: "1986 - 1988",
    description: "Foi proprietário da loja A Mestiça, que funcionou por mais de 60 anos no Centro da cidade. Foi uma das lojas mais atuantes e tradicionais da cidade, comercializando brinquedos, louças e eletrodomésticos. Foi o presidente Cezar quem iniciou os preparativos para informatização da CDL. Faleceu em janeiro de 1992, em pleno exercício de suas atividades, e a loja encerrou as atividades no ano de 2021."
  },
  {
    name: "Marconi Leonel",
    term: "1988 - 1990",
    description: "Nesta segunda gestão, a Itapuã iniciou seu processo de informatização e Marconi começou a trazer o conhecimento dos mesmos técnicos para dar andamento aos processos de informatização da CDL, iniciados na gestão de Cezar Missi. Hoje é diretor executivo do Grupo Itapuã, uma rede com mais de 150 lojas na região Sudeste."
  },
  {
    name: "José Rodrigues dos Santos",
    term: "1990 - 1992",
    description: "O popularmente conhecido como Zezinho foi dono da loja Móveis Zezinho, muito conhecida na cidade. Foi o precursor das campanhas de Natal da CDL com sorteio de carros. Ele faleceu em dezembro de 2025."
  },
  {
    name: "Mario Luiz de Souza",
    term: "1992 - 1996",
    description: "Era proprietário da loja Justino, que vendia móveis e eletrodomésticos e ficava localizada na Rua Professor Quintiliano. Em sua gestão, fez um convênio com a Dataci para colocar os computadores que rodavam os serviços de consultas ao SPC online. Após um estudo de viabilidade, a comissão de informática concluiu o contrato com a Dataci e adquiriu o primeiro servidor para guardar os dados da CDL, podendo oferecer os serviços de consultas via internet e rádio."
  },
  {
    name: "João Kléber de Massena",
    term: "1996 - 2000",
    description: "Foi proprietário das Lojas Kléber, localizada na Rua Capitão Deslandes, que vendia materiais para noivas e noivos. Foi ele quem liderou a vinda das feiras de negócios, levou as campanhas de Natal para a Praça Jerônimo Monteiro, colocando um grande stand e o globo onde se colocavam os cupons. Depois, a loja passou a vender artigos infantis. Em 2014, após 40 anos de atuação, encerrou as atividades da loja e agora dedica-se à coleção de carros antigos."
  },
  {
    name: "Macos Mendes Carvalho",
    term: "2000 - 2004",
    description: "Foi proprietário da SurfShop, na Galeria Elmo, depois trocou o nome da loja para Enseada, no Shopping Cachoeiro, que vendia roupas esportivas e moda surf wear. Realizou a grande festa de 30 anos da CDL, trouxe show do Guilherme Arantes, homenageando todos os ex-presidentes com o troféu Deusa da Fortuna. Adquiriu uma sala no 4º andar da CDL, ampliando ainda mais o espaço da entidade. Marquinhos, como era conhecido, faleceu em novembro de 2020, vítima de complicações da Covid-19."
  },
  {
    name: "Celso Luiz Costa",
    term: "2004 a atual",
    description: "Assumiu o segundo mandato e, após prorrogações de prazos ordenadas pela CNDL, permanece no cargo até hoje. Adquiriu o terceiro pavimento do Ed. Hércules, aumentando o patrimônio da CDL, onde foi construído o Centro de Convenções e mais três salas para construção da Escola de Varejo, no quarto andar. Revitalizou todo o prédio, transformando-o de residencial para comercial, com uma estética moderna e arrojada. Também realizou a 7ª Convenção Estadual do Comércio, que reuniu mais de cinco mil pessoas durante o evento."
  }
];

export const DIRETORIA = [
  "FERNANDO LEAL",
  "IGOR TOMÉ DE SOUZA",
  "ILSON ANTÔNIO SANDRINI",
  "MARCONI LEONEL MATIAS DOS SANTOS",
  "MARCOS MENDES CARVALHO",
  "NEWTON RUBMAIER COELHO",
  "RAFAEL ROCHA BALARINI"
];

export const CONSELHO = [
  "CRISTIANO PACÍFICO DA SILVA",
  "OSWALDO RUY CASAGRANDE COELHO",
  "RENATO FERREIRA LOVATTI",
  "RENILSON CHAGAS",
  "SÉRGIO MARCOS DE SOUZA",
  "WELLINGTON GAMA NAZÁRIO DA FONSECA"
];
