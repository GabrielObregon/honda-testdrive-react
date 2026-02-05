// src/components/MotoCard.jsx
import React from "react";
import "./MotoCard.css";

const MotoCard = ({ moto }) => {
  return (
    <div className="moto-card">
      <h3>{moto.nome}</h3>
      <div className="moto-info">
        <p>
          <strong>Categoria:</strong> {moto.categoria}
        </p>
        <p>
          <strong>Cilindrada:</strong> {moto.cilindrada}
        </p>
      </div>
      <div className="moto-preco">R$ {moto.preco.toLocaleString("pt-BR")}</div>
      <button className="test-ride-btn">Quero test ride</button>
    </div>
  );
};

export default MotoCard;
