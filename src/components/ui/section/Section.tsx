import type { ComponentPropsWithoutRef } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

type SectionProps = ComponentPropsWithoutRef<"section">;

export const Section = ({
  className,
  children,
  ...delegated
}: SectionProps) => {
  const sectionClassName = clsx(styles["section"], className);

  return (
    <section className={sectionClassName} {...delegated}>
      {children}
    </section>
  );
};

export default Section;
