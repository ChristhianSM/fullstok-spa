import { type ComponentPropsWithoutRef } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

type PropsSeparator = ComponentPropsWithoutRef<"div"> & {
  orientation?: "horizontal" | "vertical";
};

export const Separator = ({
  className,
  orientation = "horizontal",
  ...delegated
}: PropsSeparator) => {
  const separatorClassName = clsx(
    styles["separator"],
    orientation === "vertical" && styles["separator--vertical"],
    className,
  );
  return <div className={separatorClassName} {...delegated}></div>;
};

export default Separator;
