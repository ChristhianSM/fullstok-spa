import styles from "./styles.module.css";
import type { Category } from "../../types";
import { getCategories } from "../../services";
import Hero from "../../components/hero";
import { Container } from "../../components/ui";
import Categories from "../../components/categories";
import Features from "../../components/features";
import { useFetch } from "../../hooks/useFetch";

export const HomePage = () => {
  const { data, status } = useFetch<Category[]>(getCategories, []);
  const categories = data || [];

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
