import React, { useState, useEffect } from "react";
import useApi from "../hooks/useApi";
import usePostApi from "../hooks/usePostApi";
import "../styles/FormAgendamento.css";

const FormAgendamento = () => {
  const { data: motos } = useApi("/api/motos.json");
  const { postData, loading: submitting, success, resetSuccess } = usePostApi();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const motoSelecionada = motos?.find((m) => m.id == formData.motoId);

    const dadosParaEnviar = {
      ...formData,
      motoNome: motoSelecionada?.nome || "Não informada",
    };

    try {
      await postData(dadosParaEnviar);

      setFormData({
        nome: "",
        email: "",
        idade: "",
        telefone: "",
        motoId: "",
        data: "",
        horario: "",
      });
    } catch (err) {
      console.error("Erro:", err);
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        resetSuccess();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [success, resetSuccess]);

  return (
    <section id="agendar" className="agendamento-section">
      <h2>Agendar Test Ride</h2>
      <p className="subtitulo">Preencha os dados abaixo</p>

      {}
      {success && (
        <div className="mensagem-sucesso">
          <div className="mensagem-conteudo">
            <span className="mensagem-icon">✓</span>
            <div className="mensagem-texto">
              <strong>Agendamento enviado com sucesso!</strong>
              <p>Mandaremos mais informações no seu email em breve.</p>
            </div>
          </div>
        </div>
      )}

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

        <button type="submit" className="submit-btn" disabled={submitting}>
          {submitting ? "Enviando..." : "Enviar Agendamento"}
        </button>
      </form>
    </section>
  );
};

export default FormAgendamento;
