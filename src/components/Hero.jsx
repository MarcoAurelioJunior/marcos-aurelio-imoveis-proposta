import { empresa, imagens, destaques } from "../data/config";

// Banner com foto de imóvel ao fundo, coberta por uma camada preta translúcida.
export default function Hero() {
  return (
    <section id="inicio" className="hero" style={{ backgroundImage: `url(${imagens.hero})` }}>
      <div className="hero-camada" />

      <div className="container hero-conteudo">
        <p className="eyebrow">{empresa.titulo} · {empresa.creci}</p>
        <h1>{empresa.nome}</h1>
        <p className="hero-sub">
          Imóveis residenciais, comerciais e rurais em São Roque e região, com atendimento
          próximo e negociação transparente.
        </p>
        <div className="hero-botoes">
          <a className="btn btn-ouro" href="#imoveis">Ver imóveis</a>
          <a className="btn btn-contorno" href="#contato">Fale comigo</a>
        </div>

        <ul className="hero-numeros">
          {destaques.map(([n, t]) => (
            <li key={t}>
              <strong>{n}</strong>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
