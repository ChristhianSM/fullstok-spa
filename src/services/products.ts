import { request } from "../lib/api-client";
import type { Product } from "../types";

export async function getProduct(slug: string){
  return request<Product>(`products/${slug}`)
}