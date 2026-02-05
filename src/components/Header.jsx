// src/components/Header.jsx
import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo e título */}
        <div className={styles.logoArea}>
          <div className={styles.logoContainer}>
            <img
              src="/imagens/logo.png"
              alt="Logo Honda"
              className={styles.logo}
            />
          </div>
          <div className={styles.tituloContainer}>
            <h1 className={styles.titulo}>HONDA</h1>
            <span className={styles.subtitulo}>Test Drive</span>
          </div>
        </div>

        {/* Menu de navegação */}
        <nav className={styles.nav}>
          <a href="#destaques" className={styles.navLink}>
            Destaques
          </a>
          <a href="#catalogo" className={styles.navLink}>
            Catálogo
          </a>
          <a href="#comparador" className={styles.navLink}>
            Comparador
          </a>
          <a href="#agendar" className={styles.navLink}>
            Agendar Test Drive
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
