import { useEffect, useState } from "react";
import type { Category, Product } from "../../types";
import PriceFilter from "../price-filter";
import ProductCard from "../product-card/ProductCard";
import { Container } from "../ui";
import styles from "./styles.module.css";
import { BASE_URL } from "../../config";
import { useParams, useSearchParams } from "react-router";

export const CategoryPage = () => {
  const { slug: categorySlug } = useParams();
  const [category, setCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );

  // Estado para manejar los filtros
  const [searchParams, setSearchParams] = useSearchParams();

  const minPrice = parsePrice(searchParams.get("minPrice"));
  const maxPrice = parsePrice(searchParams.get("maxPrice"));

  const productsFilters = products.filter((product) => {
    // Precio de producto = 20.00
    // minPrice = 25.00
    // maxPrice = 30.00
    const priceInSoles = product.price / 100;

    if (minPrice !== undefined && minPrice > priceInSoles) return false; // V && F F
    if (maxPrice !== undefined && maxPrice < priceInSoles) return false; // V && 30 < 20 F  -> F

    return true;
  });

  function parsePrice(value: string | null): number | undefined {
    if (value === null || value.trim() === "") return undefined;
    const parsed = Number(value);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : undefined;
  }

  function handleFilter(formData: FormData) {
    const min = formData.get("minPrice") ?? "";
    const max = formData.get("maxPrice") ?? "";

    const nextParams = new URLSearchParams(searchParams); // minPrice=10&maxPrice=20

    if (typeof min === "string" && min.trim() !== "")
      nextParams.set("minPrice", min);
    else nextParams.delete("minPrice");

    if (typeof max === "string" && max.trim() !== "")
      nextParams.set("maxPrice", max);
    else nextParams.delete("maxPrice");

    setSearchParams(nextParams);
  }

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
            <PriceFilter
              key={categorySlug}
              className={styles["products__price-filter"]}
              defaultMinPrice={searchParams.get("minPrice") ?? undefined}
              defaultMaxPrice={searchParams.get("maxPrice") ?? undefined}
              onFilter={handleFilter}
            />
            <div className={styles["products__grid"]}>
              {productsFilters.length > 0 ? (
                productsFilters.map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })
              ) : (
                <p>No hay productos que mostrar</p>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CategoryPage;
