import { useState, type ReactNode } from "react";
import { CountContext } from "./countContext";

type CountProviderProps = {
  children: ReactNode;
};

export const CountProvider = ({ children }: CountProviderProps) => {
  const [count, setCount] = useState(0);

  function onIncrement() {
    setCount(count + 1);
  }

  return (
    <CountContext.Provider value={{ count, onIncrement }}>
      {children}
    </CountContext.Provider>
  );
};
