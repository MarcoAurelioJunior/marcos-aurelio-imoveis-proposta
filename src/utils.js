// Funções auxiliares pequenas

export const moeda = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export const linkWhatsApp = (numero, mensagem) =>
  `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
