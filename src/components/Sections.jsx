import { empresa, imagens, perfil } from "../data/config";
import Img from "./Img";

// Seções simples e estáticas, juntas em um arquivo só para facilitar a leitura.

// "Sobre": foto com moldura dourada + texto do perfil
export function Sobre() {
  return (
    <section id="sobre" className="section">
      <div className="container sobre-grid">
        <div className="sobre-foto">
          <Img
            src={imagens.perfil}
            alt={empresa.nome}
            fallback={
              <div className="monograma" role="img" aria-label={empresa.nome}>
                <span>MA</span>
              </div>
            }
          />
        </div>
        <div>
          <p className="eyebrow">Sobre</p>
          <h2>Perfil</h2>
          {perfil.map((p) => <p key={p} className="texto-sobre">{p}</p>)}
        </div>
      </div>
    </section>
  );
}

// "Contato": telefone, e-mail e botões de ação
export function Contato({ onAbrirForm }) {
  return (
    <section id="contato" className="section">
      <div className="container">
        <div className="contato-caixa">
          <p className="eyebrow">Contato</p>
          <h2>Fale comigo</h2>
          <ul className="contatos">
            <li>📞 {empresa.telefone}</li>
            <li>✉️ {empresa.email}</li>
          </ul>
          <div className="botoes">
            <a className="btn btn-ouro" href={`https://wa.me/${empresa.whatsapp}`} target="_blank" rel="noreferrer">
              Chamar no WhatsApp
            </a>
            <button className="btn btn-contorno" onClick={() => onAbrirForm("atendimento")}>
              Deixar meus dados
            </button>
            <button className="btn btn-contorno" onClick={() => onAbrirForm("negociar")}>
              Quero vender ou alugar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// "Localização": endereço + mapa (com filtro para combinar com o tema escuro)
export function Localizacao() {
  return (
    <section id="localizacao" className="section section-clara">
      <div className="container">
        <p className="eyebrow">Localização</p>
        <h2>Venha nos visitar</h2>
        <p className="endereco">📍 {empresa.endereco}</p>
        <iframe
          className="mapa"
          title="Mapa"
          loading="lazy"
          src="https://maps.google.com/maps?q=Rua%20Professor%20Tib%C3%A9rio%20Justo%20da%20Silva%20489%20S%C3%A3o%20Roque%20SP&output=embed"
        />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <strong>{empresa.nome}</strong>
      <p>{empresa.titulo} · {empresa.creci}</p>
      <p>© {new Date().getFullYear()} · Site de demonstração</p>
    </footer>
  );
}

export function WhatsAppFlutuante() {
  const msg = encodeURIComponent("Olá! Vim pelo site e gostaria de mais informações.");
  return (
    <a
      className="whats-flutuante"
      href={`https://wa.me/${empresa.whatsapp}?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
    >
      💬
    </a>
  );
}
