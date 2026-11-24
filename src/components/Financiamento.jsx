import { useState } from "react";
import { moeda } from "../utils";

// Simulador simples (tabela Price). Valores apenas ilustrativos.
export default function Financiamento() {
  const [valor, setValor] = useState(500000);
  const [entrada, setEntrada] = useState(100000);
  const [anos, setAnos] = useState(30);
  const [taxaAnual, setTaxaAnual] = useState(10.5);

  const financiado = Math.max(valor - entrada, 0);
  const i = taxaAnual / 100 / 12; // taxa mensal
  const n = anos * 12; // número de parcelas
  const parcela = i === 0 ? financiado / n : (financiado * i) / (1 - Math.pow(1 + i, -n));

  return (
    <section id="financiamento" className="section section-clara">
      <div className="container grid-2">
        <div>
          <p className="eyebrow">Financiamento</p>
          <h2>Simule o seu financiamento</h2>
          <p>
            Veja uma estimativa da parcela. A simulação é ilustrativa; as condições reais dependem
            da análise de crédito do banco.
          </p>

          <div className="resultado">
            <span>Parcela estimada</span>
            <strong>{moeda(parcela || 0)}</strong>
            <small>Valor financiado: {moeda(financiado)}</small>
          </div>
        </div>

        <div className="form">
          <label className="campo">
            <span>Valor do imóvel</span>
            <input type="number" value={valor} min="0" step="10000" onChange={(e) => setValor(Number(e.target.value))} />
          </label>
          <label className="campo">
            <span>Entrada</span>
            <input type="number" value={entrada} min="0" step="5000" onChange={(e) => setEntrada(Number(e.target.value))} />
          </label>
          <label className="campo">
            <span>Prazo: {anos} anos</span>
            <input type="range" min="5" max="35" value={anos} onChange={(e) => setAnos(Number(e.target.value))} />
          </label>
          <label className="campo">
            <span>Juros: {taxaAnual.toFixed(1)}% ao ano</span>
            <input type="range" min="6" max="16" step="0.1" value={taxaAnual} onChange={(e) => setTaxaAnual(Number(e.target.value))} />
          </label>
        </div>
      </div>
    </section>
  );
}
