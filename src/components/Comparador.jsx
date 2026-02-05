// src/components/Comparador.jsx
import React, { useState } from "react";
import useApi from "../hooks/useApi";
import "./Comparador.css";

const Comparador = () => {
  const { data: motos, loading, error } = useApi("/api/motos.json");
  const [moto1, setMoto1] = useState(null);
  const [moto2, setMoto2] = useState(null);

  const specs = [
    { key: "nome", label: "Modelo" },
    { key: "categoria", label: "Categoria" },
    { key: "cilindrada", label: "Cilindrada" },
    { key: "preco", label: "Preço" },
    { key: "potencia", label: "Potência" },
    { key: "peso", label: "Peso" },
    { key: "tanque", label: "Tanque" },
    { key: "freio", label: "Freio" },
  ];

  if (loading) return <div className="loading">Carregando comparador...</div>;
  if (error) return <div className="error">Erro ao carregar: {error}</div>;

  return (
    <section id="comparador" className="comparador-section">
      <h2>Comparador</h2>
      <p className="subtitulo">Compare especificações técnicas</p>

      <div className="comparador-filtros">
        <div className="filtro-group">
          <div className="custom-select">
            <select
              onChange={(e) =>
                setMoto1(motos.find((m) => m.id === parseInt(e.target.value)))
              }
              defaultValue=""
            >
              <option value="" disabled>
                Selecione uma moto
              </option>
              {motos.map((moto) => (
                <option key={`moto1-${moto.id}`} value={moto.id}>
                  {moto.nome}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="vs-separator">
          <span>vs</span>
        </div>

        <div className="filtro-group">
          <div className="custom-select">
            <select
              onChange={(e) =>
                setMoto2(motos.find((m) => m.id === parseInt(e.target.value)))
              }
              defaultValue=""
            >
              <option value="" disabled>
                Selecione outra moto
              </option>
              {motos.map((moto) => (
                <option key={`moto2-${moto.id}`} value={moto.id}>
                  {moto.nome}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {(moto1 || moto2) && (
        <div className="comparador-tabela">
          <table>
            <thead>
              <tr>
                <th>Especificação</th>
                <th>{moto1 ? moto1.nome : "---"}</th>
                <th>{moto2 ? moto2.nome : "---"}</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((spec, index) => (
                <tr key={index}>
                  <td className="spec-label">{spec.label}</td>
                  <td className="spec-value">
                    {moto1
                      ? spec.key === "preco"
                        ? `R$ ${moto1[spec.key].toLocaleString("pt-BR")}`
                        : spec.key === "potencia" ||
                            spec.key === "peso" ||
                            spec.key === "tanque" ||
                            spec.key === "freio"
                          ? moto1.ficha[spec.key]
                          : moto1[spec.key]
                      : "---"}
                  </td>
                  <td className="spec-value">
                    {moto2
                      ? spec.key === "preco"
                        ? `R$ ${moto2[spec.key].toLocaleString("pt-BR")}`
                        : spec.key === "potencia" ||
                            spec.key === "peso" ||
                            spec.key === "tanque" ||
                            spec.key === "freio"
                          ? moto2.ficha[spec.key]
                          : moto2[spec.key]
                      : "---"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!moto1 && !moto2 && (
        <div className="comparador-placeholder">
          <p>Selecione duas motos para comparar as especificações</p>
        </div>
      )}
    </section>
  );
};

export default Comparador;
