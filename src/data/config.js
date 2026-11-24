// Dados do corretor e opções dos filtros.
// Obs.: nome, CRECI, contatos, endereço e texto do perfil vêm do site atual do corretor.
// A foto do perfil é carregada direto do site dele (demonstração).

export const imagens = {
  // Foto de fundo do banner (Pexels, uso livre). Troque pela foto que preferir.
  hero: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920",
  perfil:
    "https://sites.google.com/sitesv-images-rt/APXyLQcbLzk2kt6t3HsaSQCZg55kJXGUiP2lEzReVhxOAqJJJlibC05uFleg5DslrBbt60DyToJF70RgBBB6U3DV7B0aUJOtwkLT0aG54TQ961EnVS1j231RElxeN59lbQJA8QdPlsAe1HrZ85dEYiRUD5xM2V3-_Noxf5xoXGfLkwcsAFzhJjPr2ru0yj1bsHBb8H0Il2inRZERwOlrAK57FnCC_SGC8blc9XIc0EJ9=w1280",
};

export const empresa = {
  nome: "Marcos Aurélio",
  titulo: "Corretor de Imóveis",
  creci: "CRECI 85681-F",
  telefone: "(11) 99832-8395",
  whatsapp: "5511998328395", // só números, com 55 + DDD
  email: "barros_marcosaurelio@yahoo.com.br",
  endereco: "Rua Professor Tibério Justo da Silva, 489, loja 05 – Jd. Flórida, São Roque – SP",
};

export const perfil = [
  "Mais de 5 anos de atuação no mercado imobiliário, com forte experiência na venda e locação de imóveis comerciais e residenciais, urbanos ou rurais.",
  "Formado desde 2009 pelo Creci e, após mais de 30 anos como gestor de Recursos Humanos, decidi mudar de carreira e de cidade: escolhi trabalhar em São Roque e região.",
  "Sempre de acordo com as diretrizes do Creci, trabalho para fechar negócios adequados para meus clientes e, assim, estabelecer uma parceria de confiança e duradoura.",
  "Certificado como avaliador profissional e em constantes atualizações para promover uma experiência completa.",
];

// Números do banner (tirados do perfil do corretor)
export const destaques = [
  ["5+", "anos no mercado imobiliário"],
  ["Urbano e rural", "residencial e comercial"],
  ["Avaliador", "profissional certificado"],
];

export const negocios = ["Venda", "Aluguel"];
export const tipos = ["Casa", "Casa em Condomínio", "Chácara", "Apartamento", "Terreno", "Sala Comercial"];

export const faixasPreco = [
  { label: "R$ 2.000", valor: 2000 },
  { label: "R$ 3.000", valor: 3000 },
  { label: "R$ 300 mil", valor: 300000 },
  { label: "R$ 500 mil", valor: 500000 },
  { label: "R$ 1 milhão", valor: 1000000 },
  { label: "R$ 2 milhões", valor: 2000000 },
];
