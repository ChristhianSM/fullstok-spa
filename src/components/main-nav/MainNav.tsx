import { Link } from "react-router";
import styles from "./styles.module.css";

export const MainNav = () => {
  return (
    <nav aria-label="Navegación principal" className={styles["main-nav"]}>
      <ul className={styles["main-nav__list"]} role="menubar">
        <li className={styles["main-nav__item"]} role="none">
          <Link
            to="/categories/polos"
            role="menuitem"
            className={styles["main-nav__link"]}
          >
            Polos
          </Link>
        </li>
        <li className={styles["main-nav__item"]} role="none">
          <Link
            to="/categories/tazas"
            role="menuitem"
            className={styles["main-nav__link"]}
          >
            Tazas
          </Link>
        </li>
        <li className={styles["main-nav__item"]} role="none">
          <Link
            to="/categories/stickers"
            role="menuitem"
            className={styles["main-nav__link"]}
          >
            Stickers
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
