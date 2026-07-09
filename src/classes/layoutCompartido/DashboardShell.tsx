import { NavLink, Outlet } from "react-router";
import styles from "./styles.module.css";

export default function DashboardShell() {
  return (
    <div className="dashboard">
      <aside className="dashboard__sidebar">
        <strong>Panel</strong>
        <nav className="shell__nav">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? styles["shell__nav--active"] : styles["shell__nav"]
            }
            end
          >
            Resumen
          </NavLink>
          <NavLink
            to="/dashboard/reports"
            className={({ isActive }) =>
              isActive ? styles["shell__nav--active"] : styles["shell__nav"]
            }
          >
            Reportes
          </NavLink>
          <NavLink to="/">← Volver al sitio</NavLink>
        </nav>
      </aside>
      <main className="shell__main">
        <Outlet />
      </main>
    </div>
  );
}
