import { Link } from "react-router";
import { Button, Container } from "../ui";
import styles from "./styles.module.css";
import { useAuth } from "../auth-provider/useAuth";
import { useState } from "react";

export const AuthNav = () => {
  const { user, logout } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  async function handleLogout() {
    setIsLoggingOut(true);
    try {
      await logout();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoggingOut(false);
    }
  }

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
                  <Button
                    variant="ghost"
                    className={styles["auth-nav__button"]}
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                  >
                    {isLoggingOut ? "Cerrando sesión..." : "Cerrar sesión"}
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li className={styles["auth-nav__item"]}>
                  <Link to="/login" className={styles["auth-nav__link"]}>
                    Iniciar sesión
                  </Link>
                </li>
                <li className={styles["auth-nav__item"]}>
                  <Link to="/signup" className={styles["auth-nav__link"]}>
                    Crear una cuenta
                  </Link>
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
