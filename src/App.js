// src/App.js
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Destaques from "./components/Destaques";
import Catalogo from "./components/Catalogo";
import Comparador from "./components/Comparador";
import FormAgendamento from "./components/FormAgendamento";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Destaques />
        <Catalogo />
        <Comparador />
        <FormAgendamento />
        <FAQ />
      </main>
      <Footer /> {/* Adicione esta linha */}
    </div>
  );
}

export default App;
