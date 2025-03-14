import * as yup from "yup";

export type UserRegistrationFormData = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    dateOfBirth: Date;
    idCard: string;
    gender: string;
    password: string;
    confirmPassword: string;
};

const phoneNumberRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const idCardRegex = /^\d{9,12}$/;

export const userRegistrationSchema = yup.object().shape({
    firstName: yup.string()
        .required("El nombre es obligatorio"),

    lastName: yup.string()
        .required("El apellido es obligatorio"),

    phoneNumber: yup.string()
        .matches(phoneNumberRegex, "Número de teléfono inválido")
        .required("El número de teléfono es obligatorio"),

    email: yup.string()
        .email("Correo inválido")
        .required("El email es obligatorio"),

    dateOfBirth: yup.date()
        .typeError("La fecha de nacimiento debe ser válida")
        .required("La fecha de nacimiento es obligatoria"),

    idCard: yup.string()
        .matches(idCardRegex, "La cédula debe tener exactamente 12 dígitos y solo números")
        .required("El ID Card es obligatorio"),

    gender: yup.string()
        .required("El género es obligatorio"),

    password: yup.string()
        .min(5, "La contraseña debe tener al menos 5 caracteres")
        .max(15, "La contraseña no puede tener más de 15 caracteres")
        .required("La contraseña es obligatoria"),

    confirmPassword: yup.string()
        .oneOf([yup.ref("password")], "Las contraseñas no coinciden")
        .required("Debe confirmar la contraseña")
});