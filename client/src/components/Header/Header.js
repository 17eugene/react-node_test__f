import styles from "./Header.module.css";

function Header({ children }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p className={styles.crud}>CRUD</p>
      </div>
      {children}
    </header>
  );
}

export default Header;
