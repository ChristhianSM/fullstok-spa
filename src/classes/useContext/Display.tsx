import { useContext } from "react";
import { CountContext } from "./countContext";

export const Display = () => {
  const { count } = useContext(CountContext)!;

  return <div>{count}</div>;
};
