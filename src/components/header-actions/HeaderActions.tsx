import ThemeToggler from "../theme-toggler";
import { Button } from "../ui";
import styles from "./styles.module.css";

type HeaderMainProps = {
  cartItemsCount: number;
};

export const HeaderActions = ({ cartItemsCount }: HeaderMainProps) => {
  return (
    <div className={styles["header-actions"]}>
      <ThemeToggler />
      <Button
        href="/cart"
        variant="ghost"
        size="xl-icon"
        className={styles["header-actions__cart"]}
        aria-label="Carrito de compras"
      >
        <img
          src="/images/icons/cart.svg"
          alt="Carrito de compras"
          className={styles["header-actions__cart-icon"]}
        />
        {cartItemsCount > 0 && (
          <span className={styles["header-actions__cart-badge"]}>
            {cartItemsCount}
          </span>
        )}
      </Button>
    </div>
  );
};

export default HeaderActions;
