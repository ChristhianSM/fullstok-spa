import { useState, type SubmitEvent } from "react";
import { Link, useNavigate } from "react-router";
import clsx from "clsx";
import { useAuth } from "../../components/auth-provider";
import { Button, Container, Section, PasswordInput } from "../../components/ui";
import { ApiError, type FieldErrors } from "../../lib/api-error";
import styles from "./styles.module.css";

export default function SignupPage() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [fieldErrors, setFieldErrors] = useState<FieldErrors | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    const confirmPassword = String(formData.get("confirmPassword"));

    setFieldErrors(null);
    setFormError(null);
    setIsSubmitting(true);
    try {
      if (password !== confirmPassword) {
        setFormError("Las contraseñas no coinciden.");
        return;
      }
      await signup(email, password);
      navigate("/");
    } catch (error) {
      if (error instanceof ApiError && error.status === 422 && error.fields) {
        setFieldErrors(error.fields);
      } else if (error instanceof ApiError && error.status === 409) {
        setFieldErrors({ email: [error.message] });
      } else {
        console.error(error);
        setFormError("No pudimos crear la cuenta. Intenta de nuevo.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section>
      <Container className={styles["signup"]}>
        <h1 className={styles["signup__title"]}>Crea tu cuenta</h1>
        <form
          className={styles["signup__form"]}
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

          <div
            className={clsx(
              "input-field",
              fieldErrors?.confirmPassword && "input-field--error",
            )}
          >
            <label htmlFor="confirmPassword">Confirma tu contraseña</label>
            <PasswordInput
              id="confirmPassword"
              name="confirmPassword"
              autoComplete="current-password"
              required
            />
            {fieldErrors?.confirmPassword && (
              <span className="input-field__error">
                {fieldErrors.confirmPassword[0]}
              </span>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className={styles["signup__submit"]}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creando cuenta..." : "Crear cuenta"}
          </Button>

          {formError && <p className={styles["signup__error"]}>{formError}</p>}
        </form>

        <div className={styles["signup__footer"]}>
          <span className={styles["signup__footer_text"]}>
            ¿Ya tienes cuenta?
          </span>
          <Link to="/login" className={styles["signup__footer_link"]}>
            Inicia sesión
          </Link>
        </div>
      </Container>
    </Section>
  );
}
