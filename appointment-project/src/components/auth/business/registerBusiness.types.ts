// src/components/auth/business/registerBusiness.types.ts
export type RegisterMode = "new-user" | "existing-user";

// Datos del formulario de negocio
export type BusinessFormData = {
  slogan?: string;
  category: string;
  businessName: string;
  businessPhone: string;
  exactAddress: string;
  province: string;
  canton: string;
  district: string;
  businessDescription: string;
  socialMedia?: {
    instagram?: string | null;
    facebook?: string | null;
    whatsapp?: string | null;
  };
};

// Datos del formulario para un nuevo usuario (dueño)
export interface UserFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  idNumber: string;
  gender: string;
  password: string;
  confirmPassword: string;
}

// Datos del formulario para un usuario existente
export interface ExistingUserFormData {
  email: string;
  password: string;
}

// Datos finales que se envían al backend
export type RegisterBusinessFinalData = {
  mode: "new-user" | "existing-user";
  user: 
    | ({ type: "new-user" } & UserFormData)
    | ({ type: "existing-user" } & ExistingUserFormData);
  business: BusinessFormData & {
    email: string; // Email viene del usuario
    socialMedia: {
      instagram: string | null;
      facebook: string | null;
      whatsapp: string | null;
    };
  };
};