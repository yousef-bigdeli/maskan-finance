import Search from "./Search";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>تامین سرمایه بانک مسکن</h1>
      <Search />
    </header>
  );
};

export default Header;
