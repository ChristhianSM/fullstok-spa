import styles from "./styles.module.css";

type AuthNavProps = {
  user: { email: string } | null;
};

export const AuthNav = ({ user }: AuthNavProps) => {
  return (
    <div className={styles["auth-nav"]}>
      <div className={`container ${styles["auth-nav__container"]}`}>
        <nav aria-label="Autenticación de usuario">
          <ul className={styles["auth-nav__list"]}>
            {user ? (
              <>
                <li className={styles["auth-nav__item"]}>
                  Bienvenido {user.email}
                </li>
                <li className={styles["auth-nav__item"]}>
                  <form action="/logout" method="POST">
                    <button
                      className={`button button--ghost ${styles["auth-nav__button"]}
                      `}
                    >
                      Cerrar sesión
                    </button>
                  </form>
                </li>
              </>
            ) : (
              <>
                <li className={styles["auth-nav__item"]}>
                  <a href="/login" className={styles["auth-nav__link"]}>
                    Iniciar sesión{" "}
                  </a>
                </li>
                <li className={styles["auth-nav__item"]}>
                  <a href="/signup" className={styles["auth-nav__link"]}>
                    Crear una cuenta{" "}
                  </a>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AuthNav;
