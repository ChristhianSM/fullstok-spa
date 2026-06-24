import clsx from "clsx";
import styles from "../button/styles.module.css";
import { type ComponentPropsWithRef } from "react";

type PropsButtonLink = ComponentPropsWithRef<"a"> & {
  variant?: "secondary" | "outline" | "ghost";
  size?: "sm" | "lg" | "xl" | "sm-icon" | "icon" | "lg-icon" | "xl-icon";
};

export const ButtonLink = ({
  variant,
  size,
  className,
  ...delegated
}: PropsButtonLink) => {
  const buttonLinkClassName = clsx(
    styles["button"],
    variant && styles[`button--${variant}`],
    size && styles[`button--${size}`],
    className,
  );
  return <a className={buttonLinkClassName} {...delegated} />;
};

<a
  href="/cart"
  className={`button button--ghost button--xl-icon ${styles["header-actions__cart"]}`}
  aria-label="Carrito de compras"
></a>;

export default ButtonLink;
