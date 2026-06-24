import { Button, Container } from "../ui";
import styles from "./styles.module.css";

type AuthNavProps = {
  user: { email: string } | null;
};

export const AuthNav = ({ user }: AuthNavProps) => {
  return (
    <div className={styles["auth-nav"]}>
      <Container className={styles["auth-nav__container"]}>
        <nav aria-label="Autenticación de usuario">
          <ul className={styles["auth-nav__list"]}>
            {user ? (
              <>
                <li className={styles["auth-nav__item"]}>
                  Bienvenido {user.email}
                </li>
                <li className={styles["auth-nav__item"]}>
                  <form action="/logout" method="POST">
                    <Button
                      variant="ghost"
                      className={styles["auth-nav__button"]}
                    >
                      Cerrar sesión
                    </Button>
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
      </Container>
    </div>
  );
};

export default AuthNav;
