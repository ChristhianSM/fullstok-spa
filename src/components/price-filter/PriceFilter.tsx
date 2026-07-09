import clsx from "clsx";
import { Button } from "../ui";
import styles from "./styles.module.css";
import type { ComponentPropsWithoutRef } from "react";

type PriceFilterProps = ComponentPropsWithoutRef<"form"> & {
  defaultMinPrice?: string;
  defaultMaxPrice?: string;
  onFilter: (formData: FormData) => void;
};

export const PriceFilter = ({
  className,
  defaultMinPrice,
  defaultMaxPrice,
  onFilter,
  ...delegated
}: PriceFilterProps) => {
  function handleSubmitFilter(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onFilter(formData);
  }

  return (
    <form
      className={clsx(styles["price-filter"], className)}
      {...delegated}
      onSubmit={handleSubmitFilter}
    >
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
              defaultValue={defaultMinPrice}
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
              defaultValue={defaultMaxPrice}
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
