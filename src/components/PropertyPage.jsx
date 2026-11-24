import { useEffect, useState } from "react";
import { empresa } from "../data/config";
import { moeda, linkWhatsApp } from "../utils";
import { SetaEsq, SetaDir } from "./Setas";
import Img from "./Img";

// Página completa de um imóvel (abre ao clicar no card). Endereço: #/imovel/<id>
export default function PropertyPage({ imovel }) {
  const [fotoAtiva, setFotoAtiva] = useState(0);

  // Ao trocar de imóvel: volta para a primeira foto e para o topo da página
  useEffect(() => {
    setFotoAtiva(0);
    window.scrollTo(0, 0);
  }, [imovel.id]);

  const total = imovel.fotos.length;
  const foto = imovel.fotos[fotoAtiva];
  const anterior = () => setFotoAtiva((fotoAtiva - 1 + total) % total);
  const proxima = () => setFotoAtiva((fotoAtiva + 1) % total);

  const alugar = imovel.negocio === "Aluguel";
  const mensagem = `Olá! Tenho interesse no imóvel ${imovel.ref} (${imovel.tipo} em ${imovel.bairro}, ${imovel.cidade}).`;

  // Linhas da tabela de informações (só mostra o que existir)
  const infos = [
    ["Código", imovel.ref],
    ["Endereço", imovel.endereco],
    ["Área construída", `${imovel.area.toLocaleString("pt-BR")} m²`],
    imovel.terreno && ["Área do terreno", `${imovel.terreno.toLocaleString("pt-BR")} m²`],
    imovel.iptu && ["IPTU (mensal aprox.)", moeda(imovel.iptu)],
    imovel.condominio && ["Condomínio", moeda(imovel.condominio)],
    ["Dormitórios", `${imovel.quartos} (${imovel.suites} ${imovel.suites === 1 ? "suíte" : "suítes"})`],
    ["Banheiros", imovel.banheiros],
    ["Vagas", imovel.vagas],
  ].filter(Boolean);

  return (
    <main className="container pagina-imovel">
      <a href="#imoveis" className="voltar">← Voltar aos imóveis</a>

      <header className="pagina-topo">
        <small className="ref">Ref: {imovel.ref} · {imovel.negocio}</small>
        <h1>{imovel.titulo}</h1>
        <p className="local">📍 {imovel.bairro}, {imovel.cidade} – SP</p>
      </header>

      <div className="pagina-grid">
        {/* ---------- Coluna principal ---------- */}
        <div>
          <div className="galeria">
            <div className="galeria-palco">
              {/* Cópia desfocada da foto preenche as laterais das fotos em pé */}
              <img className="galeria-fundo" src={foto} alt="" aria-hidden="true" referrerPolicy="no-referrer" />
              <Img key={foto} className="galeria-principal" src={foto} alt={`${imovel.tipo} – foto ${fotoAtiva + 1}`} />
              <button className="seta seta-esq" onClick={anterior} aria-label="Foto anterior"><SetaEsq /></button>
              <button className="seta seta-dir" onClick={proxima} aria-label="Próxima foto"><SetaDir /></button>
            </div>
            <p className="galeria-legenda">Foto {fotoAtiva + 1} de {total}</p>
            <div className="galeria-mini">
              {imovel.fotos.map((src, i) => (
                <button
                  key={src}
                  className="mini-btn"
                  onClick={() => setFotoAtiva(i)}
                  aria-label={`Ver foto ${i + 1}`}
                >
                  <Img
                    src={src}
                    alt={`Miniatura ${i + 1}`}
                    className={i === fotoAtiva ? "mini ativa" : "mini"}
                    fallback={<span className="mini mini-erro" />}
                  />
                </button>
              ))}
            </div>
          </div>

          <section className="ficha">
            <h2>Descrição</h2>
            <p>{imovel.descricao}</p>
          </section>

          <section className="ficha">
            <h2>Informações do imóvel</h2>
            <dl className="infos">
              {infos.map(([rotulo, valor]) => (
                <div key={rotulo}>
                  <dt>{rotulo}</dt>
                  <dd>{valor}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="ficha">
            <h2>Dependências</h2>
            <ul className="chips">
              {imovel.dependencias.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </section>

          <section className="ficha">
            <h2>Características</h2>
            <ul className="chips chips-destaque">
              {imovel.caracteristicas.map((c) => <li key={c}>✓ {c}</li>)}
            </ul>
          </section>

          <section className="ficha">
            <h2>Condições de pagamento</h2>
            <ul className="lista">
              {imovel.pagamento.map((p) => <li key={p}>💰 {p}</li>)}
            </ul>
          </section>

          {imovel.proximos.length > 0 && (
            <section className="ficha">
              <h2>Proximidades</h2>
              <ul className="chips">
                {imovel.proximos.map((p) => <li key={p}>📍 {p}</li>)}
              </ul>
            </section>
          )}
        </div>

        {/* ---------- Coluna lateral (fixa ao rolar) ---------- */}
        <aside className="pagina-lateral">
          <p className="lateral-rotulo">{alugar ? "Aluguel" : "Valor de venda"}</p>
          <p className="preco grande">
            {moeda(imovel.preco)}
            {alugar && <span>/mês</span>}
          </p>

          <ul className="lateral-resumo">
            <li>🛏 {imovel.quartos} dormitórios ({imovel.suites} {imovel.suites === 1 ? "suíte" : "suítes"})</li>
            <li>🚿 {imovel.banheiros} banheiros</li>
            <li>🚗 {imovel.vagas} vagas</li>
            <li>📐 {imovel.area} m² construídos</li>
          </ul>

          <a className="btn btn-whats" href={linkWhatsApp(empresa.whatsapp, mensagem)} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
          <p className="lateral-contato">
            {empresa.nome} · {empresa.creci}<br />📞 {empresa.telefone}
          </p>
        </aside>
      </div>
    </main>
  );
}
