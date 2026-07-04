import styles from "./styles.module.css";

import { useEffect, useState } from "react";
import Categories from "../categories";
import Features from "../features";
import Hero from "../hero";
import type { Category } from "../../types";
import { GET_CATEGORIES_URL } from "../../config";
import { Container } from "../ui";

export const HomePage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("loading");

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await fetch(GET_CATEGORIES_URL);
        if (!response.ok) throw new Error("Ocurrio un Problema");
        const { data } = await response.json();
        setStatus("success");
        setCategories(data);
      } catch (error) {
        setStatus("error");
        console.log(error);
      }
    }

    getCategories();
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
