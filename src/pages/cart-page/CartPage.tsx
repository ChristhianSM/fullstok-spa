import styles from "./styles.module.css";
import CartItem from "../../components/cart-item";
import { Button, Container, Section } from "../../components/ui";
import { useCart } from "../../components/cart-provider";

export const CartPage = () => {
  const { cart, status } = useCart();

  if (status === "error") {
    return (
      <Section>
        <Container>
          <p className={styles["cart__error"]}>
            Algo salió mal. Por favor, intenta recargar la página.
          </p>
        </Container>
      </Section>
    );
  }

  if (status === "loading") {
    return null;
  }

  const items = cart?.items ?? [];
  const totalPrice = cart?.totalPrice ?? 0;

  return (
    <Section>
      <Container>
        <div className={styles["cart"]}>
          <h1 className={styles["cart__title"]}>Carrito de compras</h1>
          <div className={styles["cart__container"]}>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <div className={styles["cart__total"]}>
              <p>Total</p>
              <p>S/ {totalPrice / 100}</p>
            </div>
            <div className={styles["cart__action"]}>
              <Button
                href={`${items.length === 0 ? "/" : "/checkout"}`}
                size="lg"
                className={styles["cart__action-button"]}
              >
                {items.length === 0 ? "Ir a la tienda" : "Continuar Compra"}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CartPage;
