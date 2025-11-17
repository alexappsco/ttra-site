import { Profile } from "src/types/prof";

export interface User {
  isHasLocation: any;
  id: string;
  name: string;
  profileImage:string;
  phoneNumber:number;
  avatar: string;
  username: string;
  email: string;
  email_verified_at: null;
  phone: string;
  phone_verified_at: null;
  roles: string[];
  modules: string[];
}


export interface LoginCretentials {
    phoneNumber: string;
}
export interface LoginVerifyCretentials {
    phoneNumber: string;
    otp:string
}
export interface BusinessType {
  id: string;
  nameAr: string;
  nameEn: string;
  name: string;
  imageUrl: string;
  companySalesCount: number;
}

export interface RegiterCretentials{
Name:string;
PhoneNumber:string;
Email:string;
BusinessTypeIds:BusinessType[];
AgreeToTerms:boolean;
OfficialName:string;
}
export interface SetLocationCretentials{
  name: string;
  latitude: number;
  longitude: number;
  description: string;
  isDefault: boolean;
}

export interface AuthStore {
  loading: boolean;
  authenticated: boolean;
  user: User  | null;
  login: (creds: LoginCretentials) => Promise<void | { error: string }>;
  verifyOtp: (otp: string) => Promise<void | { error: string }>;
   init: () => Promise<void | { accessTokenExp: number } | undefined>;
  logout: () => Promise<void>;
  updateProfile: (updates: Partial<Profile>) => void;
}

export interface UserSession {
  user: User;
  accessToken: { value: string; expire: Date };
  refreshToken: { value: string; expire: Date };
}
