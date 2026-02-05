// src/components/Destaques.jsx
import React from "react";
import "./Destaques.css";

const Destaques = () => {
  const destaques = [
    {
      nome: "Honda Bizz",
      descricao: "Potência, estabilidade e conforto urbano.",
      link: "#catalogo",
      textoBotao: "Ver catálogo",
    },
    {
      nome: "Honda CG 160",
      descricao: "Robusta e confiável no dia a dia.",
      link: "#agendar",
      textoBotao: "Agendar test ride",
    },
    {
      nome: "Honda CB 250F Twister",
      descricao: "Potência e conforto em equilíbrio.",
      link: "#catalogo",
      textoBotao: "Comprar motos",
    },
  ];

  return (
    <section id="destaques" className="destaques-section">
      <h2>Destaques</h2>
      <p className="subtitulo">Modelos em evidência</p>

      <div className="destaques-grid">
        {destaques.map((destaque, index) => (
          <div key={index} className="destaque-card">
            <h3>{destaque.nome}</h3>
            <p>{destaque.descricao}</p>
            <a href={destaque.link}>
              <button>{destaque.textoBotao}</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destaques;
