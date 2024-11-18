import {backendApiService} from "@/services/base-service";
import { CreateContactPayload } from "@/types/contact";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
   
    const data = await req.json();

    const response = await backendApiService.request<any, CreateContactPayload>({
      method: "POST",
      endpoint: "api/v1/contacts",
      data,
      
    });
    return NextResponse.json(response);
  } catch (e: any) {
    const status = e?.response?.status ?? 500;
    const errorData = e?.response?.data ?? { message: e.message };
    return NextResponse.json(errorData, { status });
  }
}
