import React from "react";
import "../styles/MotoCard.css";

const MotoCard = ({ moto }) => {
  // Função para tratar erro de imagem
  const handleImageError = (e) => {
    e.target.src = "/imagens/placeholder.jpg"; // Imagem de fallback
  };

  return (
    <div className="moto-card">
      <div className="moto-imagem-container">
        <img
          src={moto.imagem}
          alt={moto.nome}
          onError={handleImageError}
          className="moto-imagem"
        />
      </div>
      <div className="moto-info">
        <h3>{moto.nome}</h3>
        <div className="moto-detalhes">
          <span className="categoria">{moto.categoria}</span>
          <span className="cilindrada">{moto.cilindrada}</span>
        </div>
      </div>
      <div className="moto-preco">R$ {moto.preco.toLocaleString("pt-BR")}</div>
      <button className="test-ride-btn">Quero test ride</button>
    </div>
  );
};

export default MotoCard;
