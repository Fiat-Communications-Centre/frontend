import { backendApiService } from "@/services/base-service";
import { UserData } from "@/types/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const urlSearchParams = req.nextUrl.searchParams;
    const query = Object.fromEntries(urlSearchParams.entries());

    const response = await backendApiService.request<null, UserData>({
      method: "GET",
      endpoint: "api/v1/users/team-members",
      data: null,
      opts: {
        query,
      },
    });
    return NextResponse.json(response);
  } catch (e: any) {
    const status = e?.response?.status ?? 500;
    const errorData = e?.response?.data ?? { message: e.message };
    return NextResponse.json(errorData, { status });
  }
}
