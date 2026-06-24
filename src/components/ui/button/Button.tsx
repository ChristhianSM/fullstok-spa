import clsx from "clsx";
import styles from "./styles.module.css";
import { type ComponentPropsWithRef } from "react";

type PropsButton = ComponentPropsWithRef<"button"> & {
  variant?: "secondary" | "outline" | "ghost";
  size?: "sm" | "lg" | "xl" | "sm-icon" | "icon" | "lg-icon" | "xl-icon";
};

export const Button = ({
  variant,
  size,
  className,
  ...delegated
}: PropsButton) => {
  const buttonClassName = clsx(
    styles["button"],
    variant && styles[`button--${variant}`],
    size && styles[`button--${size}`],
    className,
  );
  return <button className={buttonClassName} {...delegated} />;
};

export default Button;
