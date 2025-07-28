// types/business.ts
export interface Business {
  id: number;
  businessName: string;
  businessSlug?: string;
  categoryId: number;
  phoneNumber: string;
  email: string;
  address: string;
  province: string;
  canton: string;
  district: string;
  description?: string;
  isActive: boolean;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;

  category?: {
    id: number;
    name: string;
    description?: string;
    icon?: string;
  };

  socialNetworks?: {
    instagramUrl?: string;
    facebookUrl?: string;
    whatsappUrl?: string;
    tiktokUrl?: string;
    youtubeUrl?: string;
    twitterUrl?: string;
    linkedinUrl?: string;
    websiteUrl?: string;
  };

  role?: "owner" | "manager" | "employee" | "receptionist";
}
