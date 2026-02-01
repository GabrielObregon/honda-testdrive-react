import { useState } from "react";
import Header from "./components/Header";
import FormAgendamento from "./components/FormAgendamento";
import ListaAgendamentos from "./components/ListaAgendamentos";

function App() {
  const [agendamentos, setAgendamentos] = useState([]);

  function adicionarAgendamento(novo) {
    setAgendamentos([...agendamentos, novo]);
  }

  return (
    <div className="container mt-3">
      <Header />
      <FormAgendamento onAdicionar={adicionarAgendamento} />
      <ListaAgendamentos agendamentos={agendamentos} />
    </div>
  );
}

export default App;
