import { Button, Container, Section, Separator } from "../ui";
import styles from "./styles.module.css";

type FooterProps = {
  className?: string;
  navigate: (to: string) => void;
};

export const Footer = ({ className, navigate }: FooterProps) => {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    navigate(event.currentTarget.getAttribute("href")!);
  }
  return (
    <footer className={className}>
      <Container as="div">
        <Section className={styles["footer__section"]}>
          <div className={styles["footer__links"]}>
            <ul role="list" className={styles["footer__list"]}>
              <li className={styles["footer__title"]}>Tienda</li>
              <li>
                <a href="/categories/polos" onClick={handleClick}>
                  Polos
                </a>
              </li>
              <li>
                <a href="/categories/tazas" onClick={handleClick}>
                  Tazas
                </a>
              </li>
              <li>
                <a href="/categories/stickers" onClick={handleClick}>
                  Stickers
                </a>
              </li>
            </ul>
            <ul role="list" className={styles["footer__list"]}>
              <li className={styles["footer__title"]}>Compañía</li>
              <li>
                <a href="/about">Quienes somos</a>
              </li>
              <li>
                <a href="/terms">Términos y condiciones</a>
              </li>
              <li>
                <a href="/privacy">Privacidad</a>
              </li>
            </ul>
            <ul role="list" className={styles["footer__list"]}>
              <li className={styles["footer__title"]}>Conecta</li>
              <li>
                <a href="https://wa.me/" target="_blank">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["footer__newsletter"]}>
            <p className={styles["footer__newsletter-title"]}>
              Suscríbete a nuestro boletín
            </p>
            <p className={styles["footer__newsletter-text"]}>
              Recibe las últimas ofertas y descuentos en tu correo semanalmente.
            </p>
            <form className={styles["footer__form"]}>
              <input
                type="email"
                aria-label="Correo"
                name="email"
                required
                placeholder="ejemplo@mail.com"
                autoComplete="email"
              />
              <Button variant="secondary" size="lg" type="submit">
                Suscribirse
              </Button>
            </form>
          </div>
        </Section>
        <Separator />
        <small className={styles["footer__copyright"]}>
          Todos los derechos reservados © Full Stock
        </small>
      </Container>
    </footer>
  );
};

export default Footer;
