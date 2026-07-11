import styles from "./styles.module.css";

import { useEffect, useState } from "react";

import type { Category, Status } from "../../types";

import { getCategories } from "../../services";
import Hero from "../../components/hero";
import { Container } from "../../components/ui";
import Categories from "../../components/categories";
import Features from "../../components/features";

export const HomePage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    async function runEffect() {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
        setStatus("success");
      } catch (error) {
        console.log(error);
        setStatus("error");
      }
    }

    runEffect();
  }, []);

  return (
    <>
      <Hero />
      {status === "loading" && <p>Loading ....</p>}
      {status === "error" && (
        <section className={styles["categories-error"]}>
          <Container>
            <h2 className={styles["categories-error__title"]}>
              Algo salió mal
            </h2>
            <p className={styles["categories-error__description"]}>
              No pudimos cargar las categorías. Por favor, intenta recargar la
              página.
            </p>
          </Container>
        </section>
      )}
      {status === "success" && <Categories categories={categories} />}
      <Features />
    </>
  );
};

export default HomePage;
