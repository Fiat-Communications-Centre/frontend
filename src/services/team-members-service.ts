import { ApiResponse, RequestQuery } from "@/types/common";
import { apiService } from "./base-service";
import { UserData } from "@/types/user";

interface ITeamMemberService {
  getTeamMembers: (query?: RequestQuery) => Promise<ApiResponse<UserData[]>>;
}

class TeamMemberService implements ITeamMemberService {
  async getTeamMembers(query?: RequestQuery & {featured?:boolean}) {
    const res = await apiService.request<any, UserData[]>({
      method: "GET",
      endpoint: "/api/team-members",
      data: null,
      opts: {
        query,
      },
    });
    return res;
  }
}

export const teamMemberService = new TeamMemberService();
