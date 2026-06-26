import clsx from "clsx";
import { Button } from "../ui";
import styles from "./styles.module.css";
import type { ComponentPropsWithoutRef } from "react";

type PriceFilterProps = ComponentPropsWithoutRef<"form">;

export const PriceFilter = ({ className, ...delegated }: PriceFilterProps) => {
  return (
    <form className={clsx(styles["price-filter"], className)} {...delegated}>
      <fieldset>
        <legend className={styles["price-filter__legend"]}>Precio</legend>
        <div className={styles["price-filter__inputs"]}>
          <div className={styles["price-filter__field"]}>
            <label htmlFor="minPrice" className={styles["price-filter__label"]}>
              Min
            </label>
            <input
              id="minPrice"
              type="number"
              name="minPrice"
              min="0"
              step="0.01"
            />
          </div>
          <div className={styles["price-filter__field"]}>
            <label htmlFor="maxPrice" className={styles["price-filter__label"]}>
              Max
            </label>
            <input
              id="maxPrice"
              type="number"
              name="maxPrice"
              min="0"
              step="0.01"
            />
          </div>
        </div>
      </fieldset>

      <Button
        type="submit"
        size="xl"
        variant="secondary"
        className={styles["price-filter__button"]}
      >
        Filtar Productos
      </Button>
    </form>
  );
};

export default PriceFilter;
