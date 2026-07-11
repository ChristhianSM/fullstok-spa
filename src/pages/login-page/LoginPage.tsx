import { useState, type SubmitEvent } from "react";
import { Link, useNavigate } from "react-router";
import clsx from "clsx";
import { useAuth } from "../../components/auth-provider";
import { Button, Container, Section, PasswordInput } from "../../components/ui";
import { ApiError, type FieldErrors } from "../../lib/api-error";
import styles from "./styles.module.css";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [fieldErrors, setFieldErrors] = useState<FieldErrors | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    setFieldErrors(null);
    setFormError(null);
    setIsSubmitting(true);
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      if (error instanceof ApiError && error.status === 422 && error.fields) {
        setFieldErrors(error.fields);
      } else if (error instanceof ApiError && error.status === 401) {
        setFormError(error.message);
      } else {
        console.error(error);
        setFormError("No pudimos iniciar sesión. Intenta de nuevo.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section>
      <Container className={styles["login"]}>
        <h1 className={styles["login__title"]}>Inicia sesión en tu cuenta</h1>
        <form
          className={styles["login__form"]}
          onSubmit={handleSubmit}
          noValidate
        >
          <div
            className={clsx(
              "input-field",
              fieldErrors?.email && "input-field--error",
            )}
          >
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            {fieldErrors?.email && (
              <span className="input-field__error">{fieldErrors.email[0]}</span>
            )}
          </div>

          <div
            className={clsx(
              "input-field",
              fieldErrors?.password && "input-field--error",
            )}
          >
            <label htmlFor="password">Contraseña</label>
            <PasswordInput
              id="password"
              name="password"
              autoComplete="current-password"
              required
            />
            {fieldErrors?.password && (
              <span className="input-field__error">
                {fieldErrors.password[0]}
              </span>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className={styles["login__submit"]}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Iniciando sesión..." : "Iniciar sesión"}
          </Button>

          {formError && <p className={styles["login__error"]}>{formError}</p>}
        </form>

        <div className={styles["login__footer"]}>
          <span className={styles["login__footer_text"]}>
            ¿Aún no tienes cuenta?
          </span>
          <Link to="/signup" className={styles["login__footer_link"]}>
            Crea una cuenta
          </Link>
        </div>
      </Container>
    </Section>
  );
}
