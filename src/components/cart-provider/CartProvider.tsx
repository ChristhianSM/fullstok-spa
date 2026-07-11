import { useEffect, useState, type ReactNode } from "react";
import type { Cart } from "../../types";
import { CartContext } from "./cartContext";
import {
  addCartItem,
  getCart,
  removeCartItem,
  updateCartItem,
} from "../../services";

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );

  async function addItem(productId: number) {
    // Verificacmos si el producto se encuentra en nuestro carrito de compras;
    const exitingItem = cart?.items.find(
      (item) => item.product.id === productId,
    ); // Te trae el producto con el id 7 o null;

    if (exitingItem) {
      await updateCartItem(exitingItem.id, exitingItem.quantity + 1);
    } else {
      await addCartItem(productId, 1);
    }

    setCart(await getCart());
  }

  async function updateItem(itemId: number, quantity: number) {
    await updateCartItem(itemId, quantity);
    setCart(await getCart());
  }

  async function removeItem(itemId: number) {
    await removeCartItem(itemId);
    setCart(await getCart());
  }

  useEffect(() => {
    async function runEffect() {
      try {
        const cartData = await getCart();
        setCart(cartData);
        setStatus("success");
      } catch (error) {
        console.log(error);
        setStatus("error");
      }
    }

    runEffect();
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, status, addItem, updateItem, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
