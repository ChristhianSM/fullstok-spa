import { useContext } from "react";
import { CountContext } from "./countContext";

export const Button = () => {
  const { onIncrement } = useContext(CountContext)!;
  return <button onClick={onIncrement}>Incrementar</button>;
};
