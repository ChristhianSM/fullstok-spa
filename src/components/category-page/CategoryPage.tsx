import { useEffect, useState } from "react";
import type { Category, Product } from "../../types";
import PriceFilter from "../price-filter";
import ProductCard from "../product-card/ProductCard";
import { Container } from "../ui";
import styles from "./styles.module.css";
import { BASE_URL } from "../../config";

type CategoryProps = {
  categorySlug: string;
};

export const CategoryPage = ({ categorySlug }: CategoryProps) => {
  const [category, setCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );

  useEffect(() => {
    async function runEffect() {
      try {
        const [categoryResponse, productsResponse] = await Promise.all([
          fetch(`${BASE_URL}/categories/${categorySlug}`),
          fetch(`${BASE_URL}/categories/${categorySlug}/products`),
        ]);

        const bodyCategory = await categoryResponse.json();
        const bodyProducts = await productsResponse.json();

        if (!categoryResponse.ok) throw new Error(bodyCategory.error);
        if (!productsResponse.ok) throw new Error(bodyProducts.error);

        setCategory(bodyCategory.data);
        setProducts(bodyProducts.data);
        setStatus("success");
      } catch (error) {
        console.log(error);
        setStatus("error");
      }
    }

    runEffect();
  }, [categorySlug]);

  if (status === "error") {
    return (
      <section className={styles["category-page-error"]}>
        <Container>
          <p className={styles["category-page-error__message"]}>
            Algo salio mal. Por favor Intente recargar la pagina
          </p>
        </Container>
      </section>
    );
  }

  if (status === "loading") {
    return <p>Cargando datos.....</p>;
  }
  return (
    <>
      <section className={styles["category-header"]}>
        <Container>
          <div className={styles["category-header__content"]}>
            <h1 className={styles["category-header__title"]}>
              {category?.title}
            </h1>
            {/* TODO */}
            <p className={styles["category-header__description"]}>
              {category?.description}
            </p>
          </div>
        </Container>
      </section>

      <section className={styles["products"]}>
        <Container>
          <div className={styles["products__layout"]}>
            <PriceFilter className={styles["products__price-filter"]} />
            <div className={styles["products__grid"]}>
              {products.length > 0 ? (
                products.map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })
              ) : (
                <p>No hay productos que mostrar</p>
              )}
              {}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CategoryPage;
