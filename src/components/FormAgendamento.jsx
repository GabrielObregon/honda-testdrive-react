import { useState } from "react";

function FormAgendamento({ onAdicionar }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [modelo, setModelo] = useState("");
  const [data, setData] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onAdicionar({
      nome,
      email,
      modelo,
      data
    });

    setNome("");
    setEmail("");
    setModelo("");
    setData("");
  }

  return (
    <form onSubmit={handleSubmit} className="card p-3 mb-3">
      <h5>Agendar Test Drive</h5>

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Nome"
        value={nome}
        onChange={e => setNome(e.target.value)}
        onKeyDown={() => console.log("Digitando nome")}
        required
       />
  
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Nome"
        value={nome}
        onChange={e => setNome(e.target.value)}
        required
      />

      <input
        type="email"
        className="form-control mb-2"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />

      <select
        className="form-control mb-2"
        value={modelo}
        onChange={e => setModelo(e.target.value)}
        required
      >
        <option value="">Selecione o modelo</option>
        <option value="Cg 160">Cg 160</option>
        <option value="Biz">Biz</option>
        <option value="CB 250">CB 250</option>
      </select>

      <input
        type="date"
        className="form-control mb-2"
        value={data}
        onChange={e => setData(e.target.value)}
        required
      />

      <button className="btn btn-danger">Agendar</button>
    </form>
  );
}

export default FormAgendamento;
