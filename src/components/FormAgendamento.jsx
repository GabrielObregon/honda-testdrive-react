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

  const horarios = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Test Ride agendado com sucesso! Entraremos em contato para confirmar.",
    );
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

      <form onSubmit={handleSubmit} className="agendamento-form">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Seu nome completo"
              required
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
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="idade">Idade</label>
            <input
              type="number"
              id="idade"
              name="idade"
              value={formData.idade}
              onChange={handleChange}
              placeholder="18"
              min="18"
              max="100"
              required
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
              placeholder="(11) 99999-9999"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="motoId">Moto de interesse</label>
            <div className="custom-select">
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
            <div className="custom-select">
              <select
                id="horario"
                name="horario"
                value={formData.horario}
                onChange={handleChange}
                required
              >
                <option value="">Selecione um horário</option>
                {horarios.map((hora) => (
                  <option key={hora} value={hora}>
                    {hora}
                  </option>
                ))}
              </select>
            </div>
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
