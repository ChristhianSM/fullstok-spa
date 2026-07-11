import type { FieldErrors } from "./api-client";

export class ApiError extends Error {
  readonly status: number;
  readonly fields?: FieldErrors;

  constructor(message: string, status: number, fields?: FieldErrors) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.fields = fields;
  }
}
