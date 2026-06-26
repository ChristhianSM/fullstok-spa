import type { Product } from "../../types";
import styles from "./style.module.css";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { id, title, description, price, imgSrc } = product;
  return (
    <a href={`/product/${id}`} className={styles["product-card"]}>
      <div className={styles["product-card__container"]}>
        <div className={styles["product-card__image-container"]}>
          <img
            src={imgSrc}
            alt={title}
            className={styles["product-card__image"]}
          />
        </div>
        <div className={styles["product-card__content"]}>
          <h2 className={styles["product-card__title"]}>{title}</h2>
          <p className={styles["product-card__description"]}>{description}</p>
          <p className={styles["product-card__price"]}>
            S/ {(price / 100).toFixed(2)}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
