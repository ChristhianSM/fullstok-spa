import type { ComponentPropsWithoutRef } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

type ContainerElement =
  | "div"
  | "main"
  | "section"
  | "article"
  | "aside"
  | "header"
  | "footer"
  | "nav";

type ContainterProps = ComponentPropsWithoutRef<"div"> & {
  size?: "sm";
  as?: ContainerElement;
};

export const Container = ({
  size,
  className,
  as: Tag = "div",
  children,
  ...delegated
}: ContainterProps) => {
  const containerClassName = clsx(
    styles["container"],
    size && styles[`container--${size}`],
    className,
  );
  return (
    <Tag className={containerClassName} {...delegated}>
      {" "}
      {children}
    </Tag>
  );
};

export default Container;
