export interface MediaData {
  id: number;
  url: string;
  height: number | null;
  width: number | null;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}
