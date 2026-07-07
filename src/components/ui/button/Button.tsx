import clsx from "clsx";
import styles from "./styles.module.css";
import { type ComponentPropsWithRef } from "react";
import { Link } from "react-router";

type PropsBaseButton = {
  variant?: "secondary" | "outline" | "ghost";
  size?: "sm" | "lg" | "xl" | "sm-icon" | "icon" | "lg-icon" | "xl-icon";
};

type ButtonAsButtonProps = PropsBaseButton &
  ComponentPropsWithRef<"button"> & { href?: never };

type ButtonAsLinkProps = PropsBaseButton &
  ComponentPropsWithRef<"a"> & { href: string };

type PropsButton = ButtonAsButtonProps | ButtonAsLinkProps;

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

  if (typeof delegated.href === "string") {
    const { href, ...rest } = delegated;

    // Ruta interna
    if (href.startsWith("/")) {
      return <Link to={href} className={buttonClassName} {...rest} />;
    }

    // Ruta externa: http://...
    return <a className={buttonClassName} {...delegated}></a>;
  }

  return <button className={buttonClassName} {...delegated} />;
};

export default Button;
