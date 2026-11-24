// 3 imóveis FICTÍCIOS, só para demonstração (dados e valores inventados).
// As fotos são de exemplo, do banco gratuito Pexels (uso livre).
// Para adicionar um imóvel: copie um bloco e troque o id e os dados.
// "fotos": a primeira é a capa do card.

const foto = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

const pagamentoPadrao = [
  "Aceita financiamento bancário",
  "Aceita FGTS",
  "Valor e entrada negociáveis com o corretor",
];

export const imoveis = [
  {
    id: 1,
    ref: "MA1001",
    tipo: "Casa em Condomínio",
    negocio: "Venda",
    cidade: "São Roque",
    bairro: "Jardim Flórida",
    endereco: "Condomínio Alto da Serra – São Roque – SP",
    preco: 1150000,
    quartos: 4,
    suites: 2,
    banheiros: 4,
    vagas: 4,
    area: 280,
    terreno: 600,
    iptu: 520,
    condominio: 650,
    titulo: "Casa em condomínio fechado com 4 quartos e área gourmet",
    descricao:
      "Casa ampla em condomínio fechado, com sala em dois ambientes, cozinha planejada e área gourmet com churrasqueira integrada ao jardim. São 4 quartos, sendo 2 suítes, e garagem para 4 carros. Condomínio com portaria 24 horas e ruas tranquilas, a poucos minutos do centro de São Roque.",
    dependencias: ["4 quartos (2 suítes)", "Sala em 2 ambientes", "Cozinha planejada", "Lavabo", "Área gourmet com churrasqueira", "Jardim", "Garagem para 4 carros"],
    caracteristicas: ["Condomínio fechado", "Portaria 24 horas", "Armários planejados", "Ruas arborizadas"],
    pagamento: pagamentoPadrao,
    proximos: ["Supermercado", "Escola", "Farmácia", "Padaria", "Posto de Saúde"],
    fotos: [foto(106399), foto(1571460), foto(3935350), foto(2029694)],
  },
  {
    id: 2,
    ref: "MA1002",
    tipo: "Chácara",
    negocio: "Venda",
    cidade: "São Roque",
    bairro: "Mailasqui",
    endereco: "Estrada Municipal – Mailasqui – São Roque – SP",
    preco: 890000,
    quartos: 3,
    suites: 1,
    banheiros: 2,
    vagas: 6,
    area: 160,
    terreno: 5000,
    iptu: null,
    condominio: null,
    titulo: "Chácara com casa sede, pomar e muito espaço para lazer",
    descricao:
      "Chácara de 5.000 m² com casa sede de 3 quartos, varanda ampla, cozinha com fogão a lenha, pomar formado e gramado para eventos e lazer em família. Ótima opção para quem quer morar com tranquilidade ou ter um refúgio de fim de semana, com acesso fácil pela estrada pavimentada.",
    dependencias: ["3 quartos (1 suíte)", "Sala com lareira", "Cozinha com fogão a lenha", "Varanda ampla", "Área de serviço", "Pomar", "Garagem para 6 carros"],
    caracteristicas: ["Terreno de 5.000 m²", "Poço artesiano", "Pomar formado", "Estrada pavimentada", "Documentação em dia"],
    pagamento: pagamentoPadrao,
    proximos: ["Mercado", "Escola rural", "Restaurante", "Rodovia Raposo Tavares"],
    fotos: [foto(259588), foto(280229), foto(534151), foto(1918291)],
  },
  {
    id: 3,
    ref: "MA1003",
    tipo: "Apartamento",
    negocio: "Aluguel",
    cidade: "São Roque",
    bairro: "Centro",
    endereco: "Edifício Praça Central – Centro – São Roque – SP",
    preco: 2400,
    quartos: 2,
    suites: 1,
    banheiros: 2,
    vagas: 1,
    area: 68,
    terreno: null,
    iptu: 95,
    condominio: 480,
    titulo: "Apartamento com 2 dormitórios e varanda no Centro",
    descricao:
      "Apartamento bem iluminado, em prédio com elevador e portaria, a poucos passos do comércio, de bancos e da praça central. Tem sala com varanda, cozinha com armários, 2 dormitórios (1 suíte) e vaga de garagem coberta. Ideal para quem busca praticidade e boa localização.",
    dependencias: ["2 dormitórios (1 suíte)", "Sala com varanda", "Cozinha com armários", "Banheiro social", "Área de serviço", "1 vaga coberta"],
    caracteristicas: ["Elevador", "Portaria", "Varanda", "Próximo ao comércio"],
    pagamento: ["Aluguel com fiador, seguro-fiança ou caução", "Condomínio e IPTU à parte"],
    proximos: ["Supermercado", "Bancos", "Praça Central", "Escola", "Farmácia", "Transporte coletivo"],
    fotos: [foto(2462015), foto(1643383), foto(2724749), foto(1457842)],
  },
];
