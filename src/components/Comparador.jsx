// src/components/Comparador.jsx
import React, { useState, useEffect } from "react";
import useApi from "../hooks/useApi";
import "./Comparador.css";

const Comparador = () => {
  const { data: motos, loading, error } = useApi("/api/motos.json");
  const [moto1, setMoto1] = useState("");
  const [moto2, setMoto2] = useState("");
  const [comparacao, setComparacao] = useState(null);

  useEffect(() => {
    if (moto1 && moto2 && motos) {
      const motoA = motos.find((m) => m.id === parseInt(moto1));
      const motoB = motos.find((m) => m.id === parseInt(moto2));
      if (motoA && motoB) {
        setComparacao({ motoA, motoB });
      }
    } else {
      setComparacao(null);
    }
  }, [moto1, moto2, motos]);

  if (loading) return <div className="loading">Carregando...</div>;
  if (error) return <div className="error">Erro: {error}</div>;

  return (
    <section id="comparador" className="comparador-section">
      <h2>Comparador</h2>
      <p className="subtitulo">Compare especificações técnicas.</p>

      <div className="comparador-select">
        <select value={moto1} onChange={(e) => setMoto1(e.target.value)}>
          <option value="">Selecione uma moto</option>
          {motos &&
            motos.map((moto) => (
              <option key={moto.id} value={moto.id}>
                {moto.nome}
              </option>
            ))}
        </select>

        <select value={moto2} onChange={(e) => setMoto2(e.target.value)}>
          <option value="">Selecione outra moto</option>
          {motos &&
            motos.map((moto) => (
              <option key={moto.id} value={moto.id}>
                {moto.nome}
              </option>
            ))}
        </select>
      </div>

      {comparacao && (
        <div className="tabela-comparacao">
          <h3>Comparação</h3>
          <table>
            <thead>
              <tr>
                <th>Especificação</th>
                <th>{comparacao.motoA.nome}</th>
                <th>{comparacao.motoB.nome}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Categoria</td>
                <td>{comparacao.motoA.categoria}</td>
                <td>{comparacao.motoB.categoria}</td>
              </tr>
              <tr>
                <td>Cilindrada</td>
                <td>{comparacao.motoA.cilindrada}</td>
                <td>{comparacao.motoB.cilindrada}</td>
              </tr>
              <tr>
                <td>Preço</td>
                <td>R$ {comparacao.motoA.preco.toLocaleString("pt-BR")}</td>
                <td>R$ {comparacao.motoB.preco.toLocaleString("pt-BR")}</td>
              </tr>
              <tr>
                <td>Potência</td>
                <td>{comparacao.motoA.ficha.potencia}</td>
                <td>{comparacao.motoB.ficha.potencia}</td>
              </tr>
              <tr>
                <td>Peso</td>
                <td>{comparacao.motoA.ficha.peso}</td>
                <td>{comparacao.motoB.ficha.peso}</td>
              </tr>
              <tr>
                <td>Tanque</td>
                <td>{comparacao.motoA.ficha.tanque}</td>
                <td>{comparacao.motoB.ficha.tanque}</td>
              </tr>
              <tr>
                <td>Freio</td>
                <td>{comparacao.motoA.ficha.freio}</td>
                <td>{comparacao.motoB.ficha.freio}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default Comparador;
