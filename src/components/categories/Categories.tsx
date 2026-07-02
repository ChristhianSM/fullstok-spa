import Category from "../category";
import type { Category as CategoryType } from "../../types";
import styles from "./styles.module.css";
import { Container } from "../ui";

type CategoriesProps = {
  categories: CategoryType[];
  navigate: (to: string) => void;
};

export const Categories = ({ categories, navigate }: CategoriesProps) => {
  return (
    <section className={styles["categories"]}>
      <Container>
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
            return (
              <Category
                key={category.id}
                category={category}
                navigate={navigate}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
