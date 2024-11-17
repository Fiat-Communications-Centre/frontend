
import { backendApiService } from "@/services/base-service";
import { ApiResponse } from "@/types/common";
import { PostData } from "@/types/post";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string; slug: string }> }
) {
  try {
    const { id, slug } = await params;
    const response = await backendApiService.request<any, PostData>({
      endpoint: `api/v1/posts/published/${id}`,
      method: "GET",
      data: null,
      opts: {
        query: {
          slug,
        },
      },
    });

    return NextResponse.json(response);
  } catch (e: any) {
    const status = e?.response?.status ?? 500;
    const errorData = e?.response?.data ?? { message: e.message };
    return NextResponse.json(errorData, { status });
  }
}
