import { negocios, tipos, faixasPreco } from "../data/config";

// Painel de busca em uma caixa branca. Recebe os filtros e a função que atualiza um por vez.
export default function Busca({ filtros, cidades, bairros, onMudar, onLimpar }) {
  // Atalho para criar um <select> ligado ao estado dos filtros
  const Campo = ({ rotulo, nome, vazio, children }) => (
    <label className="campo">
      <span>{rotulo}</span>
      <select value={filtros[nome]} onChange={(e) => onMudar(nome, e.target.value)}>
        <option value="">{vazio}</option>
        {children}
      </select>
    </label>
  );

  return (
    <form className="busca" onSubmit={(e) => e.preventDefault()}>
      <Campo rotulo="Negócio" nome="negocio" vazio="Todos">
        {negocios.map((n) => <option key={n}>{n}</option>)}
      </Campo>
      <Campo rotulo="Tipo" nome="tipo" vazio="Todos">
        {tipos.map((t) => <option key={t}>{t}</option>)}
      </Campo>
      <Campo rotulo="Cidade" nome="cidade" vazio="Todas">
        {cidades.map((c) => <option key={c}>{c}</option>)}
      </Campo>
      <Campo rotulo="Bairro" nome="bairro" vazio={filtros.cidade ? "Todos" : "Escolha a cidade"}>
        {bairros.map((b) => <option key={b}>{b}</option>)}
      </Campo>
      <Campo rotulo="Quartos (mín.)" nome="quartos" vazio="Todos">
        {[1, 2, 3, 4].map((n) => <option key={n} value={n}>{n}+</option>)}
      </Campo>
      <Campo rotulo="Preço até" nome="precoMax" vazio="Sem limite">
        {faixasPreco.map((f) => <option key={f.valor} value={f.valor}>{f.label}</option>)}
      </Campo>
      <label className="campo">
        <span>Código</span>
        <input
          type="text"
          placeholder="Ex.: MA1001"
          value={filtros.codigo}
          onChange={(e) => onMudar("codigo", e.target.value)}
        />
      </label>
      <div className="busca-botoes">
        <button type="button" className="btn btn-ghost" onClick={onLimpar}>Limpar filtros</button>
      </div>
    </form>
  );
}
