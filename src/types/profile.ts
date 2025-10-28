export interface ProfileData {
  id: string;
    email: string;
    name: string;
    phoneNumber: string;
    profileImage: string | null;
}
export interface ProfileResponse {
  success: boolean;
  data: ProfileData;
  message: string;
  status: number;
}