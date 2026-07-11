import { createContext } from "react";
import type { Cart } from "../../types";

export type CartContextValue = {
  cart: Cart | null;
  status: "success" | "error" | "loading";
  addItem: (productId: number) => Promise<void>;
  updateItem: (itemId: number, quantity: number) => Promise<void>;
  removeItem: (itemId: number) => Promise<void>;
}

export const CartContext = createContext<CartContextValue | null>(null);