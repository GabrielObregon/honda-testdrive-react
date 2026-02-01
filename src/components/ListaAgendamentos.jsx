function ListaAgendamentos({ agendamentos }) {
  return (
    <div className="card p-3">
      <h5>Agendamentos</h5>

      {agendamentos.length === 0 && (
        <p>Nenhum agendamento realizado</p>
      )}

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
