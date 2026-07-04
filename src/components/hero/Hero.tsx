import { Button, Container } from "../ui";
import styles from "./styles.module.css";
import { useNavigation } from "../router-provider";

export const Hero = () => {
  const navigate = useNavigation();

  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    navigate(event.currentTarget.getAttribute("href")!);
  }

  return (
    <section className={styles["hero"]}>
      <Container size="sm" className={styles["hero__container"]}>
        <h2 className={styles["hero__title"]}>Nuevos productos disponibles</h2>
        <p className={styles["hero__text"]}>
          Un pequeño lote de increíbles productos acaba de llegar.
          <br />
          Agrega tus favoritos al carrito antes que se agoten.
        </p>
        <Button size="xl" href="/categories/polos" onClick={handleClick}>
          Compra ahora
        </Button>
      </Container>
    </section>
  );
};

// className="button button--xl"

export default Hero;
