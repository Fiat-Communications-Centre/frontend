import { MediaData } from "./media";

export interface UserData {
  id: number;
  name: string;
  email: string;
  emailVerified: boolean;
  role: string;
  photoId: null;
  active: boolean;
  emailVerifiedAt: Date;
  title: string;
  bio: string;
  photo: MediaData | null;
  isTeamMember: boolean;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}