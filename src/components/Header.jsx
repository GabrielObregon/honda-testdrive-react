import styles from "../styles/Header.module.css";

function Header() {
  const marca = "Honda";

  return (
    <header className={styles.header}>
      <h1>Agendamento de Test Drive {marca}</h1>
      <p>Escolha seu modelo e agende seu test drive</p>
    </header>
  );
}

export default Header;
