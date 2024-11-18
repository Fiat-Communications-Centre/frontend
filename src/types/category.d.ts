export interface Category {
  id: number;
  name: string;
  type:string
}

export interface CreateCategoryPayload {
  name: string;
  type:string
}
export interface UpdateCategoryPayload  {
  id: number;
  name: string;
  type:string
}

export interface DeleteCategoriesPayload {
  ids: number[];
  permanently?: boolean;
}