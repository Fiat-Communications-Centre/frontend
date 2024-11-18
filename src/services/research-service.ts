import { ApiResponse } from "@/types/common";

import { apiService } from "./base-service";
import { CreateResearchRequestPayload } from "@/types/research";

interface IResearchService {
  createResearchRequest: (
    data: CreateResearchRequestPayload
  ) => Promise<ApiResponse<null>>;
}

class ResearchService implements IResearchService {
  async createResearchRequest(data: CreateResearchRequestPayload) {
    const res = await apiService.request<CreateResearchRequestPayload, null>({
      method: "POST",
      endpoint: "/api/research",
      data,
      opts:{
        contentType:"multipart/form-data"
      }
    });
    return res;
  }
}

export const researchService = new ResearchService();
