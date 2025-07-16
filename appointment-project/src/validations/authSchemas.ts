// src/validations/authSchemas.ts
import * as yup from "yup"

export const loginSchema = yup.object({
  email: yup.string().email("Correo inválido").required("El correo es obligatorio"),
  password: yup.string().required("La contraseña es obligatoria"),
})

export const registerUserSchema = yup.object({
  firstName: yup.string().required("El nombre es obligatorio"),
  lastName: yup.string().required("El apellido es obligatorio"),
  phone: yup.string()
    .matches(/^\+?[\d\s\-]{7,15}$/, "Número de teléfono inválido")
    .required("El teléfono es obligatorio"),
  email: yup.string().email("Correo inválido").required("El correo es obligatorio"),
  dob: yup.string().required("Fecha de nacimiento obligatoria"),
  idNumber: yup.string()
    .matches(/^\d{9,12}$/, "Cédula inválida (9 a 12 dígitos)")
    .required("La cédula es obligatoria"),
  gender: yup.string().required("El género es obligatorio"),
  password: yup.string().min(5).max(15).required("La contraseña es obligatoria"),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password")], "Las contraseñas no coinciden")
    .required("Confirma la contraseña"),
});
