// src/components/Header.jsx
import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/imagens/logo192.png" alt="Honda Logo" />
        <h1>Honda</h1>
      </div>
      <nav className={styles.nav}>
        <a href="#destaques">Destaques</a>
        <a href="#catalogo">Catálogo</a>
        <a href="#comparador">Comparador</a>
        <a href="#agendar">Agendar Test Ride</a>
      </nav>
    </header>
  );
};

export default Header;
