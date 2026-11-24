import { useEffect, useState } from "react";
import { moeda } from "../utils";
import { SetaEsq, SetaDir } from "./Setas";
import Img from "./Img";

// Card de um imóvel. Clicar abre a página do imóvel.
// Ao passar o mouse, as fotos trocam sozinhas a cada 2 segundos (carrossel com fade).
export default function PropertyCard({ imovel }) {
  const [indice, setIndice] = useState(0); // foto que está aparecendo
  const [hover, setHover] = useState(false); // mouse em cima do card?

  const fotos = imovel.fotos;
  const total = fotos.length;
  const link = `#/imovel/${imovel.id}`; // página do imóvel
  const alugar = imovel.negocio === "Aluguel";

  // Enquanto o mouse estiver em cima, avança uma foto a cada 2s
  useEffect(() => {
    if (!hover) return;
    const timer = setInterval(() => setIndice((i) => (i + 1) % total), 2000);
    return () => clearInterval(timer);
  }, [hover, total]);

  const sair = () => {
    setHover(false);
    setIndice(0); // volta para a capa
  };

  // As setas ficam dentro de um link: preventDefault evita abrir a página ao clicar nelas
  const anterior = (e) => {
    e.preventDefault();
    setIndice((indice - 1 + total) % total);
  };
  const proxima = (e) => {
    e.preventDefault();
    setIndice((indice + 1) % total);
  };

  return (
    <article className="card" onMouseEnter={() => setHover(true)} onMouseLeave={sair}>
      <a className="card-img" href={link}>
        {/* Todas as fotos ficam empilhadas; só a atual fica visível (efeito fade) */}
        {fotos.map((src, i) => (
          <Img
            key={src}
            src={src}
            alt={`${imovel.tipo} em ${imovel.bairro} – foto ${i + 1}`}
            className={i === indice ? "foto visivel" : "foto"}
          />
        ))}

        <span className="tag">{imovel.negocio}</span>

        <button className="card-seta card-seta-esq" onClick={anterior} aria-label="Foto anterior">
          <SetaEsq />
        </button>
        <button className="card-seta card-seta-dir" onClick={proxima} aria-label="Próxima foto">
          <SetaDir />
        </button>

        <div className="bolinhas">
          {fotos.map((src, i) => (
            <span key={src} className={i === indice ? "bolinha ativa" : "bolinha"} />
          ))}
        </div>
      </a>

      <a className="card-body" href={link}>
        <small className="ref">Ref: {imovel.ref}</small>
        <h3>{imovel.tipo}</h3>
        <p className="local">📍 {imovel.bairro}, {imovel.cidade} – SP</p>
        <p className="preco">
          {moeda(imovel.preco)}
          {alugar && <span>/mês</span>}
        </p>
        <ul className="specs">
          {imovel.quartos > 0 && <li>🛏 {imovel.quartos}</li>}
          {imovel.banheiros > 0 && <li>🚿 {imovel.banheiros}</li>}
          {imovel.vagas > 0 && <li>🚗 {imovel.vagas}</li>}
          <li>📐 {imovel.area} m²</li>
        </ul>
      </a>
    </article>
  );
}
