export type IdType = number | string;

export type AnyObject = Record<string, any>;

export type PropField<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

export type ApiError = {
  name: string;
  message?: string;
  field: null | Record<string, string>;
};

export interface PaginationOptions {
  page: number;
  limit: number;
}

export interface Pagination {
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

export type ApiResponse<T = any> = {
  success: boolean;
  data?: T;
  message?: string;
  error?: ApiError;
  pagination?: Pagination;
};

export type RequestQuery = {
  limit?: number;
  page?: number;
  [key: string]: any;
};
