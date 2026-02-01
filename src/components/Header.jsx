import styles from "../styles/Header.module.css";
import hondaImg from "../assets/honda.png";

function Header() {
  return (
    <header className={styles.header}>
      <img src={hondaImg} alt="Honda" className={styles.logo} />
      <h1>Agendamento de Test Drive Honda</h1>
    </header>
  );
}

export default Header;
