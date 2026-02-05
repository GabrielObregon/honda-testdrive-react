// src/components/Destaques.jsx
import React from "react";
import useApi from "../hooks/useApi";
import "./Destaques.css";

const Destaques = () => {
  const { data: motos, loading, error } = useApi("/api/motos.json");

  // Descrições para os destaques
  const descricoes = {
    "Honda CG 160": "Robusta e confiável no dia a dia.",
    "Honda Biz 125": "Potência, estabilidade e conforto urbano.",
    "Honda CB 250F Twister": "Potência e conforto em equilíbrio.",
  };

  if (loading) return <div className="loading">Carregando destaques...</div>;
  if (error) return <div className="error">Erro ao carregar: {error}</div>;

  // Use as 3 motos da API para os destaques
  const destaques = motos
    ? motos.slice(0, 3).map((moto) => ({
        ...moto,
        descricao: descricoes[moto.nome] || moto.descricao,
        link: "#catalogo",
        textoBotao: "Ver detalhes",
      }))
    : [];

  return (
    <section id="destaques" className="destaques-section">
      <h2>Destaques</h2>
      <p className="subtitulo">Modelos em evidência</p>

      <div className="destaques-grid">
        {destaques.map((destaque) => (
          <div key={destaque.id} className="destaque-card">
            <div className="destaque-imagem-container">
              <img
                src={destaque.imagem}
                alt={destaque.nome}
                className="destaque-imagem"
              />
            </div>
            <h3>{destaque.nome}</h3>
            <p>{destaque.descricao}</p>
            <a href={destaque.link}>
              <button className="destaque-btn">{destaque.textoBotao}</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destaques;
