import {backendApiService} from "@/services/base-service";
import { PostData } from "@/types/post";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const urlSearchParams = req.nextUrl.searchParams;
    const params = Object.fromEntries(urlSearchParams.entries());

    const response = await backendApiService.request<any, PostData>({
      method: "GET",
      endpoint: "api/v1/posts/published",
      data: null,
      opts: {
        query: params,
      },
    });
    return NextResponse.json(response);
  } catch (e: any) {
    const status = e?.response?.status ?? 500;
    const errorData = e?.response?.data ?? { message: e.message };
    return NextResponse.json(errorData, { status });
  }
}
