import * as yup from "yup";

export const businessSchema = yup.object({
  category: yup.string().required("La categoría es obligatoria"),
  businessName: yup.string().required("El nombre del negocio es obligatorio"),
  slogan: yup.string().optional(),
  businessPhone: yup
  .string()
  .required("El número de teléfono es obligatorio")
  .matches(
  /^[268]{1}\d{3}-?\d{4}$/,
  "El número debe tener 8 dígitos y puede tener guion (8888-8888 o 88888888)"
  ),
  exactAddress: yup.string().required("La dirección exacta es obligatoria"),
  province: yup.string().required("La provincia es obligatoria"),
  canton: yup.string().required("El cantón es obligatorio"),
  district: yup.string().required("El distrito es obligatorio"),
  businessDescription: yup.string().required("La descripción es obligatoria"),
  socialMedia: yup.object({
    instagram: yup.string().url("Instagram inválido").nullable(),
    facebook: yup.string().url("Facebook inválido").nullable(),
    whatsapp: yup
      .string()
      .matches(/^\+?[\d\s\-]{7,15}$/, "WhatsApp inválido")
      .nullable(),
  }),
});

export const newUserSchema = yup.object({
  firstName: yup.string().required("Nombre requerido"),
  lastName: yup.string().required("Apellidos requeridos"),
  phone: yup
    .string()
    .matches(/^\+?[\d\s\-]{7,15}$/, "Teléfono inválido")
    .required("Teléfono requerido"),
  email: yup.string().email("Correo inválido").required("Correo requerido"),
  dateOfBirth: yup.string().required("Fecha de nacimiento requerida"),
  idNumber: yup
    .string()
    .matches(/^\d{9,12}$/, "Cédula inválida")
    .required("Cédula requerida"),
  gender: yup.string().required("Género requerido"),
  password: yup.string().min(5).max(15).required("Contraseña requerida"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Las contraseñas no coinciden")
    .required("Confirmación requerida"),
});

export const existingUserSchema = yup.object({
  email: yup.string().email("Correo inválido").required("Correo requerido"),
  password: yup.string().required("Contraseña requerida"),
});
