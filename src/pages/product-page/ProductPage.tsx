import { useParams } from "react-router";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import type { Product } from "../../types";
import { getProduct } from "../../services";
import { useCart } from "../../components/cart-provider";
import { Button, Container, Separator } from "../../components/ui";

export const ProductPage = () => {
  const { slug } = useParams();
  const { addItem, status: statusCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [addError, setAddError] = useState<string | null>(null);

  const [product, setProduct] = useState<Product | null>(null);
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );

  useEffect(() => {
    async function getProductBySlug() {
      try {
        const productData = await getProduct(slug!);
        setProduct(productData);
        setStatus("success");
      } catch (error) {
        console.log(error);
        setStatus("error");
      }
    }
    getProductBySlug();
  }, [slug]);

  async function handleAddToCart() {
    if (product === null) return;

    setIsAdding(true);
    setAddError(null);

    try {
      await addItem(product.id);
    } catch (error) {
      console.log(error);
      setAddError("No pudimos agregar el producto, Intenta nuevamente");
    } finally {
      setIsAdding(false);
    }
  }

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

  if (status === "loading" || product == null) {
    return <p>Cargando datos.....</p>;
  }

  return (
    <section className={styles["product"]}>
      <Container className={styles["product__container"]}>
        <div className={styles["product__image"]}>
          <img
            src={product.imgSrc}
            alt={product.title}
            className={styles["product__image_content"]}
          />
        </div>
        <div className={styles["product__info"]}>
          <h1 className={styles["product__title"]}>{product.title}</h1>
          <p className={styles["product__price"]}>
            S/ {(product.price / 100).toFixed(2)}
          </p>
          <p className={styles["product__description"]}>
            {product.description}
          </p>
          <Button
            size="xl"
            className={styles["product__button"]}
            type="submit"
            onClick={handleAddToCart}
            disabled={isAdding || statusCart !== "success"}
          >
            {isAdding ? "Agregando..." : "Agregar al Carrito"}
          </Button>
          {addError && (
            <p className={styles["product__add-error"]}>{addError}</p>
          )}
          <Separator className={styles["product__separator"]}></Separator>
          <div className={styles["product__features"]}>
            <h2 className={styles["product__features_title"]}>
              Características
            </h2>
            <ul className={styles["product__features_list"]}>
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductPage;
