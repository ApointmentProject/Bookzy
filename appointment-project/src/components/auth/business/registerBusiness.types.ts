import * as yup from "yup";

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
    socialMedia: {
        instagram?: string | null;
        facebook?: string | null;
        whatsapp?: string | null;
    };
};

export const businessSchema = yup.object({
  category: yup.string().required(),
  businessName: yup.string().required(),
  slogan: yup.string(),
  businessPhone: yup.string().required(),
  exactAddress: yup.string().required(),
  province: yup.string().required(),
  canton: yup.string().required(),
  district: yup.string().required(),
  businessDescription: yup.string().required(),
  socialMedia: yup
    .object({
      instagram: yup.string().nullable(),
      facebook: yup.string().nullable(),
      whatsapp: yup.string().nullable(),
    })
    .default({}), // <-- This ensures socialMedia is always an object
});

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
