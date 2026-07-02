import styles from "./styles.module.css";

type MainNaveProps = {
  navigate: (to: string) => void;
};

export const MainNav = ({ navigate }: MainNaveProps) => {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    navigate(event.currentTarget.getAttribute("href")!);
  }

  return (
    <nav aria-label="Navegación principal" className={styles["main-nav"]}>
      <ul className={styles["main-nav__list"]} role="menubar">
        <li className={styles["main-nav__item"]} role="none">
          <a
            href="/categories/polos"
            role="menuitem"
            className={styles["main-nav__link"]}
            onClick={handleClick}
          >
            Polos
          </a>
        </li>
        <li className={styles["main-nav__item"]} role="none">
          <a
            href="/categories/tazas"
            role="menuitem"
            className={styles["main-nav__link"]}
            onClick={handleClick}
          >
            Tazas
          </a>
        </li>
        <li className={styles["main-nav__item"]} role="none">
          <a
            href="/categories/stickers"
            role="menuitem"
            className={styles["main-nav__link"]}
            onClick={handleClick}
          >
            Stickers
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
