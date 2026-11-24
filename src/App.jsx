import { useEffect, useMemo, useState } from "react";
import { imoveis } from "./data/imoveis";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Busca from "./components/Busca";
import PropertyCard from "./components/PropertyCard";
import PropertyPage from "./components/PropertyPage";
import FormModal from "./components/FormModal";
import Financiamento from "./components/Financiamento";
import { Sobre, Contato, Localizacao, Footer, WhatsAppFlutuante } from "./components/Sections";

const filtrosVazios = {
  negocio: "", tipo: "", cidade: "", bairro: "", quartos: "", precoMax: "", codigo: "",
};

export default function App() {
  // ---- Estado da página ----
  const [filtros, setFiltros] = useState(filtrosVazios);
  const [formAberto, setFormAberto] = useState(null); // "negociar" | "atendimento"

  // ---- Rota (sem biblioteca): #/imovel/2 abre a página do imóvel 2 ----
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const atualizar = () => setHash(window.location.hash);
    window.addEventListener("hashchange", atualizar);
    return () => window.removeEventListener("hashchange", atualizar);
  }, []);

  const idDaRota = hash.match(/^#\/imovel\/(\d+)/)?.[1];
  const imovelAtual = idDaRota ? imoveis.find((i) => i.id === Number(idDaRota)) : null;

  // Ao voltar para a home por um link como "#imoveis", rola até a seção
  // (a seção só existe depois que a home é desenhada, por isso o useEffect).
  useEffect(() => {
    if (imovelAtual) return;
    const id = hash.replace("#", "");
    if (id && !id.startsWith("/")) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [imovelAtual, hash]);

  // ---- Ações ----
  const mudarFiltro = (nome, valor) => {
    setFiltros((atual) => {
      const novo = { ...atual, [nome]: valor };
      if (nome === "cidade") novo.bairro = ""; // bairro depende da cidade
      return novo;
    });
  };

  // ---- Dados derivados ----
  const cidades = useMemo(() => [...new Set(imoveis.map((i) => i.cidade))].sort(), []);

  const bairros = useMemo(
    () =>
      filtros.cidade
        ? [...new Set(imoveis.filter((i) => i.cidade === filtros.cidade).map((i) => i.bairro))].sort()
        : [],
    [filtros.cidade]
  );

  const resultado = imoveis.filter((i) => {
    if (filtros.negocio && i.negocio !== filtros.negocio) return false;
    if (filtros.tipo && i.tipo !== filtros.tipo) return false;
    if (filtros.cidade && i.cidade !== filtros.cidade) return false;
    if (filtros.bairro && i.bairro !== filtros.bairro) return false;
    if (filtros.quartos && i.quartos < Number(filtros.quartos)) return false;
    if (filtros.precoMax && i.preco > Number(filtros.precoMax)) return false;
    if (filtros.codigo && !i.ref.toLowerCase().includes(filtros.codigo.toLowerCase())) return false;
    return true;
  });

  return (
    <>
      <Header />

      {imovelAtual ? (
        <PropertyPage imovel={imovelAtual} />
      ) : (
        <>
          <Hero />

          {/* Busca "flutuando" na parte de baixo do banner */}
          <div className="container busca-flutuante">
            <Busca
              filtros={filtros}
              cidades={cidades}
              bairros={bairros}
              onMudar={mudarFiltro}
              onLimpar={() => setFiltros(filtrosVazios)}
            />
          </div>

          <section id="imoveis" className="section secao-imoveis">
            <div className="container">
              <p className="eyebrow">Imóveis</p>
              <h2>
                Imóveis disponíveis <small className="contagem">({resultado.length})</small>
              </h2>

              {resultado.length === 0 ? (
                <p className="vazio">Nenhum imóvel encontrado com esses filtros.</p>
              ) : (
                <div className="grid-cards">
                  {resultado.map((i) => <PropertyCard key={i.id} imovel={i} />)}
                </div>
              )}
            </div>
          </section>

          <Sobre />
          <Financiamento />
          <Contato onAbrirForm={setFormAberto} />
          <Localizacao />
        </>
      )}

      <Footer />
      <WhatsAppFlutuante />

      {formAberto && <FormModal tipo={formAberto} onFechar={() => setFormAberto(null)} />}
    </>
  );
}
