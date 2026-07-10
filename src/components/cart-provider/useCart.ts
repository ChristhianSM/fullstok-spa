import { useContext } from "react";
import { CartContext } from "./cartContext";

export function useCart(){
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("UseCart debe usarse dentro de CartProvider");
  }

  return context;
}