import { request } from "../lib/api-client";
import { ApiError } from "../lib/api-error";
import type { Cart, CartItem } from "../types";

export async function getCart(): Promise<Cart | null>{
  try {
    return await request<Cart>("cart", { credentials: "include" }); // Cart o 404
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) return null;
    throw error;
  }
}

export async function addCartItem ( productId: number, quantity: number) {
  return request<CartItem>("cart/items", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    credentials: "include",
    body: JSON.stringify({productId, quantity})
  })
}

export async function updateCartItem ( itemId: number, quantity: number) {
  return request<CartItem>(`cart/items/${itemId}`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    credentials: "include",
    body: JSON.stringify({quantity})
  })
}

export async function removeCartItem ( itemId: number) {
  return request<void>(`cart/items/${itemId}`, {
    method: "DELETE",
    credentials: "include",
  })
}