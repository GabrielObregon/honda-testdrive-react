import Header from "./components/Header";
import FormAgendamento from "./components/FormAgendamento";
import ListaAgendamentos from "./components/ListaAgendamentos";
import { useApi } from "./hooks/useApi";

function App() {
  const { dados: agendamentos, post } = useApi(
    "http://localhost:3001/agendamentos"
  );

  function adicionarAgendamento(novo) {
    post(novo);
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
