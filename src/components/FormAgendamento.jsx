// src/components/FormAgendamento.jsx
import React, { useState } from "react";
import useApi from "../hooks/useApi";
import "./FormAgendamento.css";

const FormAgendamento = () => {
  const { data: motos } = useApi("/api/motos.json");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    idade: "",
    telefone: "",
    motoId: "",
    data: "",
    horario: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você faria a requisição para enviar o agendamento
    console.log("Dados do agendamento:", formData);
    alert("Test ride agendado com sucesso!");
    // Resetar o formulário
    setFormData({
      nome: "",
      email: "",
      idade: "",
      telefone: "",
      motoId: "",
      data: "",
      horario: "",
    });
  };

  return (
    <section id="agendar" className="agendamento-section">
      <h2>Agendar Test Ride</h2>
      <p className="subtitulo">Preencha os dados abaixo</p>

      <form onSubmit={handleSubmit} className="form-agendamento">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              placeholder="Seu nome completo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="idade">Idade</label>
            <input
              type="number"
              id="idade"
              name="idade"
              value={formData.idade}
              onChange={handleChange}
              required
              min="18"
              placeholder="18"
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
              placeholder="(11) 99999-9999"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="motoId">Moto de interesse</label>
            <select
              id="motoId"
              name="motoId"
              value={formData.motoId}
              onChange={handleChange}
              required
            >
              <option value="">Selecione uma moto</option>
              {motos &&
                motos.map((moto) => (
                  <option key={moto.id} value={moto.id}>
                    {moto.nome}
                  </option>
                ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="data">Data preferencial</label>
            <input
              type="date"
              id="data"
              name="data"
              value={formData.data}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="horario">Horário preferencial</label>
            <input
              type="time"
              id="horario"
              name="horario"
              value={formData.horario}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Enviar Agendamento
        </button>
      </form>
    </section>
  );
};

export default FormAgendamento;
