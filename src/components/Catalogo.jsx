import React, { useState } from "react";
import useApi from "../hooks/useApi";
import MotoCard from "./MotoCard";
import "./Catalogo.css";

const Catalogo = () => {
  const { data: motos, loading, error } = useApi("/api/motos.json");
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas");

  if (loading) return <div className="loading">Carregando motos...</div>;
  if (error) return <div className="error">Erro ao carregar: {error}</div>;

  // Extrair categorias únicas
  const categorias = [
    "Todas",
    ...new Set(motos?.map((moto) => moto.categoria) || []),
  ];

  // Filtrar motos por categoria
  const motosFiltradas =
    categoriaAtiva === "Todas"
      ? motos
      : motos.filter((moto) => moto.categoria === categoriaAtiva);

  return (
    <section id="catalogo" className="catalogo-section">
      <h2>Catálogo</h2>
      <p className="subtitulo">Filtre por categoria ou baixe pelo nome</p>

      <div className="filtros">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={`filtro-btn ${categoriaAtiva === categoria ? "ativo" : ""}`}
            onClick={() => setCategoriaAtiva(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      <div className="catalogo-grid">
        {motosFiltradas.map((moto) => (
          <MotoCard key={moto.id} moto={moto} />
        ))}
      </div>
    </section>
  );
};

export default Catalogo;
