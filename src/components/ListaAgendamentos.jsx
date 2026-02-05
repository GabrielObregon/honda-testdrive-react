import { useEffect, useState } from "react";
import { getMotos, deletarMoto } from "../hooks/useApi";

export default function ListaAgendamentos() {
  const [motos, setMotos] = useState([]);

  async function carregarMotos() {
    const dados = await getMotos();
    setMotos(dados);
  }

  useEffect(() => {
    carregarMotos();
  }, []);

  async function removerMoto(id) {
    await deletarMoto(id);
    carregarMotos();
  }

  return (
    <div>
      <h2>Motos cadastradas</h2>

      {motos.map((moto) => (
        <div key={moto.id}>
          <strong>{moto.nome}</strong> - {moto.cc}cc - R$ {moto.preco}
          <button onClick={() => removerMoto(moto.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}
