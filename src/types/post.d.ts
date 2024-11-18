import { Category } from "./category";
import { MediaData } from "./media";
import { UserData } from "./user";


export interface PostData {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  tags: string[];
  categoryId?: number;
  thumbnailId: number;
  userId: string;
  featured?: boolean;
  published?: boolean;
  createdAt: Date;
  updatedAt: Date;

  author: UserData;
  thumbnail: MediaData;
  category: Category | null;
  deletedAt: Date | null;

  commentsCount:number
}

export interface FilterPostPayload {
  id?: number;
  title?: string;
  slug?: string;
  tag?: string;
  userId?: number;
  categoryId?: number;
  featured?: boolean;
  published?: boolean;
}