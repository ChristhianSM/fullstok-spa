import type { CartItem as CartItemType } from "../../types";
import { useCart } from "../cart-provider";
import { Button } from "../ui";
import styles from "./styles.module.css";

type CartItemProps = {
  item: CartItemType;
};

export const CartItem = ({ item }: CartItemProps) => {
  const {
    id,
    quantity,
    product: { imgSrc, price, title },
  } = item;
  const { removeItem, updateItem } = useCart();

  function handleIncrementQuantity() {
    updateItem(id, quantity + 1);
  }

  function handleDecrementQuantity() {
    if (quantity === 1) {
      removeItem(id);
    } else {
      updateItem(id, quantity - 1);
    }
  }

  function handleRemoveItem() {
    removeItem(id);
  }

  return (
    <div className={styles["cart__item"]}>
      <div className={styles["cart__item-image"]}>
        <img
          src={imgSrc}
          alt={title}
          className={styles["cart__item-image-content"]}
        />
      </div>
      <div className={styles["cart__item-details"]}>
        <div className={styles["cart__item-header"]}>
          <h2 className={styles["cart__item-title"]}>{title}</h2>
          <Button
            type="button"
            variant="outline"
            size="sm-icon"
            aria-label="Eliminar artículo"
            onClick={handleRemoveItem}
          >
            <img
              src="/images/icons/trash.svg"
              alt=""
              className={styles["cart__item-icon"]}
            />
          </Button>
        </div>
        <div className={styles["cart__item-footer"]}>
          <p className={styles["cart__item-price"]}>S/ {price / 100}</p>
          <div className={styles["cart__item-quantity"]}>
            <Button
              type="button"
              variant="outline"
              size="sm-icon"
              aria-label="Reducir cantidad"
              onClick={handleDecrementQuantity}
            >
              <img
                src="/images/icons/minus.svg"
                alt=""
                className={styles["cart__item-icon"]}
              />
            </Button>
            <span className={styles["cart__item-quantity-display"]}>
              {quantity}
            </span>
            <Button
              type="button"
              variant="outline"
              size="sm-icon"
              aria-label="Aumentar cantidad"
              onClick={handleIncrementQuantity}
            >
              <img
                src="/images/icons/plus.svg"
                alt=""
                className={styles["cart__item-icon"]}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
