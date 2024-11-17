import { ApiResponse, RequestQuery } from "@/types/common";
import { FilterPostPayload, PostData } from "@/types/post";
import { apiService } from "./base-service";

interface IPostService {
  getPosts: (
    query?: RequestQuery & FilterPostPayload
  ) => Promise<ApiResponse<PostData[]>>;
  getPostByIdSlug: (id: number, slug: string) => Promise<ApiResponse<PostData>>;
}

class PostService implements IPostService {
  async getPosts(query?: RequestQuery & FilterPostPayload) {
    const res = await apiService.request<any, PostData[]>({
      method: "GET",
      endpoint: "/api/blog",
      data: null,
      opts: {
        query,
      },
    });
    return res;
  }

  async getPostByIdSlug(id: number, slug: string) {
    if (!id || !slug) {
      throw new Error("ID & slug are required");
    }

    const res = await apiService.request<any, PostData>({
      method: "GET",
      endpoint: `/api/blog/${id}/${slug}`,
      data: null,
      opts: {
        query: {
          slug,
        },
      },
    });

    return res;
  }
}

export const postService = new PostService();
