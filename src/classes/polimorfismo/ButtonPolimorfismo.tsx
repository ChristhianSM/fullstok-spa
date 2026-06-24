import clsx from "clsx";
import styles from "./styles.module.css";
import { type ComponentPropsWithoutRef } from "react";

type PropsButton = ComponentPropsWithoutRef<"button"> &
  ComponentPropsWithoutRef<"a"> & {
    variant?: "secondary" | "outline" | "ghost";
    size?: "sm" | "lg" | "xl" | "sm-icon" | "icon" | "lg-icon" | "xl-icon";
  };

export const ButtonPolimorfismo = ({
  variant,
  size,
  href,
  className,
  ...delegated
}: PropsButton) => {
  const buttonClassName = clsx(
    styles["button"],
    variant && styles[`button--${variant}`],
    size && styles[`button--${size}`],
    className,
  );

  const Tag = typeof href === "string" ? "a" : "button";

  return <Tag className={buttonClassName} href={href} {...delegated} />;
};

export default ButtonPolimorfismo;
