import type { Category as CategoryType } from "../../types";
import styles from "./styles.module.css";
import { useNavigation } from "../router-provider";

type CategoryProps = {
  category: CategoryType;
};

export const Category = ({ category }: CategoryProps) => {
  const { slug, title, description, imgSrc, alt } = category;
  const navigate = useNavigation();

  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    navigate(event.currentTarget.getAttribute("href")!);
  }

  return (
    <a
      href={`/categories/${slug}`}
      className={styles["category"]}
      onClick={handleClick}
    >
      <div className={styles["category__image"]}>
        <img src={imgSrc} alt={alt ? alt : ""} />
      </div>
      <div>
        <h3 className={styles["category__title"]}>{title}</h3>
        <p className={styles["category__description"]}>{description}</p>
      </div>
    </a>
  );
};

export default Category;
