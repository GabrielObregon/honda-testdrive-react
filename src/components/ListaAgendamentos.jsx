function ListaAgendamentos({ agendamentos }) {
  const temAgendamento = agendamentos.length > 0;

  return (
    <div className={`card p-3 ${temAgendamento ? "border-success" : "border-danger"}`}>
      <h5>Agendamentos</h5>

      {!temAgendamento && <p>Nenhum agendamento realizado</p>}

      <ul className="list-group">
        {agendamentos.map((item, index) => (
          <li key={index} className="list-group-item">
            <strong>{item.nome}</strong> - {item.modelo} ({item.data})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaAgendamentos;
