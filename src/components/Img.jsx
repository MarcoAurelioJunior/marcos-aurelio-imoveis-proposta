import { useState } from "react";

// <img> com plano B: se a imagem não carregar, mostra um bloco escuro com um ícone
// (ou o "fallback" que for passado) em vez de uma imagem quebrada.
export default function Img({ src, alt, className = "", fallback }) {
  const [erro, setErro] = useState(false);

  if (erro) {
    return fallback ?? <div className={`${className} img-erro`} role="img" aria-label={alt}>🏠</div>;
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      onError={() => setErro(true)}
    />
  );
}
