import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <a href="#body">
          <img
            src="https://raw.githubusercontent.com/Moamal-2000/boycott-them/main/src/assets/global-images/flag.webp"
            alt="palestine flag"
            className={styles.flag}
          />
        </a>
        <h1 className={styles.heading}>معاً لدعم فلسطين</h1>
      </nav>
    </header>
  );
};
export default Header;
