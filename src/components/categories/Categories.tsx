import Category from "../category";
import type { Category as CategoryType } from "../../types";
import styles from "./styles.module.css";

type CategoriesProps = {
  categories: CategoryType[];
};

export const Categories = ({ categories }: CategoriesProps) => {
  return (
    <section className={styles["categories"]}>
      <div className="container">
        <div className={styles["categories__header"]}>
          <h2 className={styles["categories__title"]}>Compra por categoría</h2>
          <p className={styles["categories__description"]}>
            Explora nuestra selección de productos especialmente diseñados para
            desarrolladores web.
            <br className={styles["categories__description-break"]} />
            Encuentra lo que buscas navegando por nuestras categorías de polos,
            tazas, stickers y más.
          </p>
        </div>
        <div className={styles["categories__grid"]}>
          {categories.map((category) => {
            return <Category key={category.id} category={category} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
