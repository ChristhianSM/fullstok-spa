import styles from "./styles.module.css";
import { Button, Container, Section } from "../../components/ui";

export const NotFoundPage = () => {
  return (
    <Section>
      <Container>
        <div className={styles["not-found__content"]}>
          <h1 className={styles["not-found__title"]}>Página no encontrada</h1>
          <p className={styles["not-found__message"]}>
            La página que buscas no existe o fue movida.
          </p>
          <Button href="/" size="lg">
            Volver al Inicio
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default NotFoundPage;
