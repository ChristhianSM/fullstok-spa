import { useEffect, useState } from "react";
import { Navigate, useSearchParams } from "react-router";
import { Container, Section } from "../../components/ui";
import { getOrder } from "../../services";
import type { OrderWithItems, Status } from "../../types";
import styles from "./styles.module.css";

export default function OrderConfirmationPage() {
  const [searchParams] = useSearchParams();
  const orderId = Number(searchParams.get("orderId"));

  const [order, setOrder] = useState<OrderWithItems | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!orderId) return;

    async function runEffect() {
      try {
        setOrder(await getOrder(orderId));
        setStatus("success");
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    }

    runEffect();
  }, [orderId]);

  if (!orderId) {
    return <Navigate to="/" replace />;
  }

  if (status === "error") {
    return (
      <Section>
        <Container>
          <p className={styles["order-confirmation__error"]}>
            No encontramos la orden que buscas.
          </p>
        </Container>
      </Section>
    );
  }

  if (status === "loading" || order === null) {
    return null;
  }

  return (
    <Section className={styles["order-confirmation"]}>
      <Container>
        <h1 className={styles["order-confirmation__title"]}>
          ¡Muchas gracias por tu compra!
        </h1>
        <p className={styles["order-confirmation__heading"]}>
          Tu orden está en camino
        </p>
        <p className={styles["order-confirmation__description"]}>
          Llegaremos a la puerta de tu domicilio lo antes posible
        </p>
        <p className={styles["order-confirmation__tracking-label"]}>
          Número de orden
        </p>
        <p className={styles["order-confirmation__tracking-code"]}>
          {order.id}
        </p>
      </Container>
    </Section>
  );
}
