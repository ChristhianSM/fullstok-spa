import { request } from "../lib/api-client";
import type { Category, Product } from "../types";

export async function getCategories() {
  return request<Category[]>("categories")
}

export async function getCategory(slug: string) {
  return request<Category>(`categories/${slug}`)
}

export async function getProductsByCategory(slug: string) {
  return request<Product[]>(`categories/${slug}/products`);
}