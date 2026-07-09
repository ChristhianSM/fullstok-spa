import { NavLink, Outlet } from "react-router";
import styles from "./styles.module.css";

export default function PublicShell() {
  return (
    <div>
      <header className="shell__header">
        <strong>Acme</strong>
        <nav className="shell__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles["shell__nav--active"] : styles["shell__nav"]
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles["shell__nav--active"] : styles["shell__nav"]
            }
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? styles["shell__nav--active"] : styles["shell__nav"]
            }
          >
            Dashboard
          </NavLink>
        </nav>
      </header>
      <main className="shell__main">
        <Outlet />
      </main>
      <footer>Footer que pertenece al Layout</footer>
    </div>
  );
}
