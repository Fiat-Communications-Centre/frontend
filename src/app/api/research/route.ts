import { backendApiService } from "@/services/base-service";
import { CreateResearchRequestPayload } from "@/types/research";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();

    const response = await backendApiService.request<
      CreateResearchRequestPayload,
      null
    >({
      method: "POST",
      endpoint: "api/v1/research-requests",
      data: data as any,
      opts: {
        contentType: "multipart/form-data",
      },
    });
    return NextResponse.json(response);
  } catch (e: any) {
    const status = e?.response?.status ?? 500;
    const errorData = e?.response?.data ?? { message: e.message };
    return NextResponse.json(errorData, { status });
  }
}
