import { NavLink } from "react-router";
import styles from "./styles.module.css";
import clsx from "clsx";

export const MainNav = () => {
  return (
    <nav aria-label="Navegación principal" className={styles["main-nav"]}>
      <ul className={styles["main-nav__list"]} role="menubar">
        <li className={styles["main-nav__item"]} role="none">
          <NavLink
            to="/categories/polos"
            role="menuitem"
            className={({ isActive }) =>
              clsx(
                styles["main-nav__link"],
                isActive && styles["main-nav__link--active"],
              )
            }
          >
            Polos
          </NavLink>
        </li>
        <li className={styles["main-nav__item"]} role="none">
          <NavLink
            to="/categories/tazas"
            role="menuitem"
            className={({ isActive }) =>
              clsx(
                styles["main-nav__link"],
                isActive && styles["main-nav__link--active"],
              )
            }
          >
            Tazas
          </NavLink>
        </li>
        <li className={styles["main-nav__item"]} role="none">
          <NavLink
            to="/categories/stickers"
            role="menuitem"
            className={({ isActive }) =>
              clsx(
                styles["main-nav__link"],
                isActive && styles["main-nav__link--active"],
              )
            }
          >
            Stickers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
