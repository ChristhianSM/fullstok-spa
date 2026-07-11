import { request } from "../lib/api-client";
import type { Order, OrderWithItems, ShippingInfo } from "../types";

export function createOrder(shippingInfo: ShippingInfo): Promise<Order> {
  return request<Order>("order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(shippingInfo),
  });
}

export function getOrder(id: number): Promise<OrderWithItems> {
  // credentials para que la sesión autorice ver la orden recién creada.
  return request<OrderWithItems>(`order/${id}`, { credentials: "include" });
}
