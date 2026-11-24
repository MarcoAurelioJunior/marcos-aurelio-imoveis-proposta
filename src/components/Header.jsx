import { useState } from "react";
import { empresa } from "../data/config";

// Barra superior fixa, preta, com o nome em dourado e o menu à direita.
export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const fechar = () => setMenuAberto(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="logo" onClick={fechar}>
          <strong>{empresa.nome}</strong>
          <small>{empresa.titulo}</small>
        </a>

        <button className="menu-toggle" onClick={() => setMenuAberto(!menuAberto)} aria-label="Abrir menu">
          ☰
        </button>

        <nav className={menuAberto ? "menu aberto" : "menu"}>
          <a href="#inicio" onClick={fechar}>Início</a>
          <a href="#imoveis" onClick={fechar}>Imóveis</a>
          <a href="#sobre" onClick={fechar}>Sobre</a>
          <a href="#financiamento" onClick={fechar}>Financiamento</a>
          <a href="#localizacao" onClick={fechar}>Localização</a>
          <a href="#contato" className="menu-cta" onClick={fechar}>Contato</a>
        </nav>
      </div>
    </header>
  );
}
