import { createContext } from "react";

type RouterContextValue = {
  path: string;
  navigate: (to: string) => void;
}

export const RouterContext = createContext<RouterContextValue | null>(null);