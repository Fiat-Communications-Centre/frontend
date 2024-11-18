import { ApiResponse } from "@/types/common";

import { apiService } from "./base-service";
import { CreateContactPayload, ContactData } from "@/types/contact";

interface IContactService {
  createContact: (
    data: CreateContactPayload
  ) => Promise<ApiResponse<ContactData>>;
}

class ContactService implements IContactService {
  async createContact(data: CreateContactPayload) {
    const res = await apiService.request<CreateContactPayload, ContactData>({
      method: "POST",
      endpoint: "/api/contact",
      data,
    });
    return res;
  }
}

export const contactService = new ContactService();
