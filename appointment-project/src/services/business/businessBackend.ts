import { apiClient } from "../../api/apiClient";
import { RegisterBusinessFinalData } from "../../components/auth/business/registerBusiness.types";

export interface BusinessData {
  id: number;
  business_name: string;
  business_slug: string;
  category_id: number;
  phone_number: string;
  email: string;
  address: string;
  province: string;
  canton: string;
  district: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export interface BusinessResponse {
  error: string;
  success: boolean;
  message: string;
  data: {
    business: BusinessData;
    userId: number;
  };
}

/**
 * Registra un nuevo negocio con usuario (nuevo o existente)
 */
export const registerBusiness = async (
  payload: RegisterBusinessFinalData
): Promise<BusinessResponse> => {
  const response = await apiClient.post<BusinessResponse>(
    "/api/businesses",
    payload
  );
  return response.data;
};
