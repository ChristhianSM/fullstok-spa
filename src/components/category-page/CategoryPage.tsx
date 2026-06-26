import type { Product } from "../../types";
import PriceFilter from "../price-filter";
import ProductCard from "../product-card/ProductCard";
import { Container } from "../ui";
import styles from "./styles.module.css";

const product: Product = {
  id: 12,
  title: "Camisa",
  description: "Camisa muy bonita",
  categoryId: 10,
  features: ["Azul", "Manga Corta"],
  price: 1000,
  slug: "camisa-corta",
  createdAt: new Date(),
  updatedAt: new Date(),
  imgSrc:
    "https://media.istockphoto.com/id/1328049157/es/foto/maqueta-de-camiseta-de-manga-corta-para-hombres-en-las-vistas-delantera-y-trasera.jpg?s=612x612&w=0&k=20&c=aRwBbk641RUa4KTMWTNh6HgaYQoKjCVNJSeUZAN7Bwg=",
};

export const CategoryPage = () => {
  return (
    <>
      <section className={styles["category-header"]}>
        <Container>
          <div className={styles["category-header__content"]}>
            <h1 className={styles["category-header__title"]}>
              Nombre de Categoria
            </h1>
            {/* TODO */}
            <p className={styles["category-header__description"]}>
              Description de la Categoria
            </p>
          </div>
        </Container>
      </section>

      <section className={styles["products"]}>
        <Container>
          <div className={styles["products__layout"]}>
            <PriceFilter className={styles["products__price-filter"]} />
            <div className={styles["products__grid"]}>
              <ProductCard product={product} />
              <ProductCard product={product} />
              <ProductCard product={product} />
              <ProductCard product={product} />
              <ProductCard product={product} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CategoryPage;
