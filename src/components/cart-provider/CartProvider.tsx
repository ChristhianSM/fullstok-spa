import { useEffect, useState, type ReactNode } from "react";
import { BASE_URL } from "../../config";
import type { Cart } from "../../types";
import { CartContext } from "./cartContext";

async function getCart(): Promise<Cart | null> {
  const response = await fetch(`${BASE_URL}/cart`, { credentials: "include" });

  if (response.status === 404) return null;

  const body = await response.json();

  if (!response.ok) throw new Error(body.error);

  return body.data;
}

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

    const url = exitingItem
      ? `${BASE_URL}/cart/items/${exitingItem.id}`
      : `${BASE_URL}/cart/items`;
    const method = exitingItem ? "PATCH" : "POST";
    const body = exitingItem
      ? { quantity: exitingItem.quantity + 1 }
      : { productId, quantity: 1 };

    const response = await fetch(url, {
      method,
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error);

    setCart(await getCart());
  }

  useEffect(() => {
    async function runEffect() {
      try {
        setTimeout(async () => {
          setCart(await getCart());
          setStatus("success");
        }, 3000);
      } catch (error) {
        console.log(error);
        setStatus("error");
      }
    }

    runEffect();
  }, []);

  return (
    <CartContext.Provider value={{ cart, status, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
