import { ButtonLink, Container } from "../ui";
import styles from "./styles.module.css";

export const Hero = () => {
  return (
    <section className={styles["hero"]}>
      <Container size="sm" className={styles["hero__container"]}>
        <h2 className={styles["hero__title"]}>Nuevos productos disponibles</h2>
        <p className={styles["hero__text"]}>
          Un pequeño lote de increíbles productos acaba de llegar.
          <br />
          Agrega tus favoritos al carrito antes que se agoten.
        </p>
        <ButtonLink size="xl" href="/categories/polos">
          Compra ahora
        </ButtonLink>
      </Container>
    </section>
  );
};

// className="button button--xl"

export default Hero;
