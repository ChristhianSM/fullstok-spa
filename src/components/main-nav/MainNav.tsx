import styles from "./styles.module.css";

export const MainNav = () => {
  return (
    <nav aria-label="Navegación principal" className={styles["main-nav"]}>
      <ul className={styles["main-nav__list"]} role="menubar">
        <li className={styles["main-nav__item"]} role="none">
          <a
            href="/categories/polos"
            role="menuitem"
            className={styles["main-nav__link"]}
          >
            Polos
          </a>
        </li>
        <li className={styles["main-nav__item"]} role="none">
          <a
            href="/categories/tazas"
            role="menuitem"
            className={styles["main-nav__link"]}
          >
            Tazas
          </a>
        </li>
        <li className={styles["main-nav__item"]} role="none">
          <a
            href="/categories/stickers"
            role="menuitem"
            className={styles["main-nav__link"]}
          >
            Stickers
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
