import { useState } from "react";
import { tipos } from "../data/config";

// Definição dos formulários. Para criar outro, basta adicionar aqui.
const formularios = {
  negociar: {
    titulo: "Negocie seu Imóvel",
    texto: "Quer vender ou alugar? Conte sobre o seu imóvel e entraremos em contato.",
    campos: [
      { nome: "nome", rotulo: "Seu nome", tipo: "text" },
      { nome: "telefone", rotulo: "Telefone / WhatsApp", tipo: "tel" },
      { nome: "email", rotulo: "E-mail", tipo: "email" },
      { nome: "tipo", rotulo: "Tipo de imóvel", tipo: "select", opcoes: tipos },
      { nome: "detalhes", rotulo: "Endereço e detalhes do imóvel", tipo: "textarea" },
    ],
  },
  atendimento: {
    titulo: "Deixe seus dados",
    texto: "Deixe seus dados e o corretor retorna o mais rápido possível.",
    campos: [
      { nome: "nome", rotulo: "Seu nome", tipo: "text" },
      { nome: "telefone", rotulo: "Telefone / WhatsApp", tipo: "tel" },
      { nome: "detalhes", rotulo: "O que você procura?", tipo: "textarea" },
    ],
  },
};

export default function FormModal({ tipo, onFechar }) {
  const [enviado, setEnviado] = useState(false);
  const form = formularios[tipo];
  if (!form) return null;

  const enviar = (e) => {
    e.preventDefault();
    // Por enquanto só frontend: mostramos os dados no console.
    // Depois é aqui que você chamaria sua API (fetch/axios).
    const dados = Object.fromEntries(new FormData(e.target));
    console.log("Formulário enviado:", tipo, dados);
    setEnviado(true);
  };

  return (
    <div className="modal-fundo" onClick={onFechar}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-fechar" onClick={onFechar} aria-label="Fechar">✕</button>

        <div className="modal-conteudo">
          <h2>{form.titulo}</h2>

          {enviado ? (
            <>
              <p>✅ Recebemos sua mensagem! Entraremos em contato em breve.</p>
              <button className="btn btn-primary" onClick={onFechar}>Fechar</button>
            </>
          ) : (
            <form onSubmit={enviar} className="form">
              <p>{form.texto}</p>
              {form.campos.map((c) => (
                <label key={c.nome} className="campo">
                  <span>{c.rotulo}</span>
                  {c.tipo === "select" ? (
                    <select name={c.nome}>
                      {c.opcoes.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  ) : c.tipo === "textarea" ? (
                    <textarea name={c.nome} rows="4" />
                  ) : (
                    <input name={c.nome} type={c.tipo} required />
                  )}
                </label>
              ))}
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
