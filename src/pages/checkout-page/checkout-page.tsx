import { Navigate, useNavigate } from "react-router";
import { useCart } from "../../components/cart-provider";
import { Button, Container, Section, Separator } from "../../components/ui";
import { createOrder } from "../../services";
import type { ShippingInfo } from "../../types";
import { COUNTRIES, SHIPPING_FIELDS } from "./fields";
import styles from "./styles.module.css";
import { useState, type SubmitEvent } from "react";
import type { FieldErrors } from "../../lib/api-client";
import { ApiError } from "../../lib/api-error";
import { clsx } from "clsx";

export default function CheckoutPage() {
  const { cart, status, refresh } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const navigate = useNavigate();

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const values = Object.fromEntries(formData);

    const shippingInfo: ShippingInfo = {
      email: String(values.email),
      firstName: String(values.firstName),
      lastName: String(values.lastName),
      // La compañía es opcional: si viene vacía, enviamos undefined.
      company:
        String(values.company).trim() === ""
          ? undefined
          : String(values.company),
      address: String(values.address),
      city: String(values.city),
      country: String(values.country),
      region: String(values.region),
      zipCode: String(values.zipCode),
      phone: String(values.phone),
    };

    setIsSubmitting(true);
    try {
      const order = await createOrder(shippingInfo);
      navigate(`/order-confirmation?orderId=${order.id}`);
      await refresh();
    } catch (error) {
      if (error instanceof ApiError && error.status === 422 && error.fields) {
        setFieldErrors(error.fields);
      } else {
        setFormError(
          "Ocurrió un error al procesar tu pedido. Por favor, intenta nuevamente.",
        );
      }
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (status === "error") {
    return (
      <Section>
        <Container>
          <p className={styles["checkout__error"]}>
            Algo salió mal. Por favor, intenta recargar la página.
          </p>
        </Container>
      </Section>
    );
  }

  if (status === "loading") {
    return null;
  }

  // No se puede pagar un carrito vacío: de vuelta al carrito.
  if (cart === null || cart.items.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  const items = cart.items;
  const totalPrice = cart.totalPrice;

  console.log({ fieldErrors, formError });

  return (
    <Section className={styles["checkout"]}>
      <Container>
        <div className={styles["checkout__layout"]}>
          <div className={styles["checkout__summary"]}>
            <h2 className={styles["checkout__summary-title"]}>
              Resumen de la orden
            </h2>
            <div className={styles["checkout__summary-container"]}>
              {items.map((item) => (
                <div key={item.id} className={styles["checkout__item"]}>
                  <div className={styles["checkout__item-image"]}>
                    <img
                      src={item.product.imgSrc}
                      alt={item.product.title}
                      className={styles["checkout__item-image-content"]}
                    />
                  </div>
                  <div className={styles["checkout__item-details"]}>
                    <h3 className={styles["checkout__item-title"]}>
                      {item.product.title}
                    </h3>
                    <div className={styles["checkout__item-price"]}>
                      <p>{item.quantity}</p>
                      <img
                        src="/images/icons/x.svg"
                        alt=""
                        className={styles["checkout__item-price-icon"]}
                      />
                      <p>S/ {(item.product.price / 100).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className={styles["checkout__total"]}>
                <p>Total</p>
                <p>S/ {(totalPrice / 100).toFixed(2)}</p>
              </div>
            </div>
          </div>

          <form
            className={styles["checkout__form"]}
            onSubmit={handleSubmit}
            noValidate
          >
            <fieldset>
              <legend className={styles["checkout__legend"]}>
                Información de contacto
              </legend>
              <div
                className={clsx(
                  "input-field",
                  fieldErrors?.email && "input-field--error",
                )}
              >
                <label htmlFor="email">Correo electrónico</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
                {fieldErrors?.email && (
                  <span className="input-field__error">
                    {fieldErrors.email[0]}
                  </span>
                )}
              </div>
            </fieldset>

            <Separator className={styles["checkout__separator"]} />

            <fieldset>
              <legend className={styles["checkout__legend"]}>
                Información de envío
              </legend>
              <div className={styles["checkout__form-fields"]}>
                {SHIPPING_FIELDS.map((field) => (
                  <div
                    key={field.name}
                    className={clsx(
                      "input-field",
                      fieldErrors?.[field.name] && "input-field--error",
                    )}
                  >
                    <label htmlFor={field.name}>{field.label}</label>
                    {"type" in field && field.type === "select" ? (
                      <select
                        id={field.name}
                        name={field.name}
                        autoComplete={field.autoComplete}
                        defaultValue=""
                        required={field.required}
                      >
                        <option value="" disabled>
                          Seleccionar país
                        </option>
                        {COUNTRIES.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        autoComplete={field.autoComplete}
                        required={field.required}
                      />
                    )}
                    {fieldErrors?.[field.name] && (
                      <span className="input-field__error">
                        {fieldErrors[field.name][0]}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </fieldset>

            <Button
              type="submit"
              size="xl"
              className={styles["checkout__submit"]}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Procesando..." : "Confirmar Orden"}
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  );
}
