import type { ComponentPropsWithoutRef } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

type ContainterProps = ComponentPropsWithoutRef<"div"> & {
  size?: "sm";
};

export const Container = ({
  size,
  className,
  children,
  ...delegated
}: ContainterProps) => {
  const containerClassName = clsx(
    styles["container"],
    size && styles[`container--${size}`],
    className,
  );
  return (
    <div className={containerClassName} {...delegated}>
      {" "}
      {children}
    </div>
  );
};

export default Container;
