import { createContext } from "react";

type CountContextValue = {
  count: number;
  onIncrement: () => void;
};

export const CountContext = createContext<CountContextValue | null>(null);