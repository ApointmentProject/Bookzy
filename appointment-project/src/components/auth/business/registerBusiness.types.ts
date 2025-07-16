export type RegisterMode = "new-user" | "existing-user";

// Datos del formulario de negocio
export interface BusinessFormData {
  category: string;
  businessName: string;
  slogan?: string;
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
}

// Datos del formulario para un nuevo usuario (dueño)
export interface UserFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dateOfBirth: string; // tipo string por ser input type="date"
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
export interface RegisterBusinessFinalData {
  business: BusinessFormData;
  user:
    | ({ type: "new-user" } & UserFormData)
    | ({ type: "existing-user" } & ExistingUserFormData);
}
