import { BASE_URL } from "../config";
import { ApiError } from "./api-error";

type ApiSuccess<T> = {data: T};
type ApiFailure = {error: string};
type ApiResponse<T> = ApiSuccess<T> | ApiFailure;

export async function request<T>(path: string, options?: RequestInit): Promise<T>{
  const response = await fetch(`${BASE_URL}/${path}`, options);

  if (response.status === 204) {
    return undefined as T;
  }
  const body: ApiResponse<T> = await response.json();

  if (!response.ok) {
    const { error } = body as ApiFailure;
    throw new ApiError(error, response.status);
  }
  
  return (body as ApiSuccess<T>).data
}