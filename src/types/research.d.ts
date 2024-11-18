export interface CreateResearchRequestPayload {
  name: string;
  email: string;
  phone: string;
  title: string;
  area: string;
  description: string;
  budget: number;
  attachments?: File[];
}
