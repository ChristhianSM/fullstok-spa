import { type ReactNode } from "react";

type PropsCard = {
  children: ReactNode;
  as?: "main" | "div" | "section" | "aside" | "article" | "li";
};

export const Card = ({ children, as: Tag = "div" }: PropsCard) => {
  return <Tag>{children}</Tag>;
};
