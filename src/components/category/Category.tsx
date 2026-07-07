import type { Category as CategoryType } from "../../types";
import styles from "./styles.module.css";
import { Link } from "react-router";

type CategoryProps = {
  category: CategoryType;
};

export const Category = ({ category }: CategoryProps) => {
  const { slug, title, description, imgSrc, alt } = category;

  return (
    <Link to={`/categories/${slug}`} className={styles["category"]}>
      <div className={styles["category__image"]}>
        <img src={imgSrc} alt={alt ? alt : ""} />
      </div>
      <div>
        <h3 className={styles["category__title"]}>{title}</h3>
        <p className={styles["category__description"]}>{description}</p>
      </div>
    </Link>
  );
};

export default Category;
