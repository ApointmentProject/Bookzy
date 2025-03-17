import { apiClient } from "../apiClient";
import UserRoutes from "../../constants/routes/user.routes.ts";
import { UserRegistrationFormData } from "../../validations/validateUserRegistration.ts";
import { UserPasswordValidationType } from "../../types/User.ts";

// Función para convertir el género de español a inglés.
const convertGender = (
    gender: string
  ): "Male" | "Female" | "Other" | "Prefer not to say" => {
    const lower = gender.toLowerCase();
    if (lower === "masculino") return "Male";
    if (lower === "femenino") return "Female";
    if (lower === "otro") return "Other";
    return "Prefer not to say";
  };


export const createUser = async (userData: UserRegistrationFormData): Promise<void> => {
    const formattedData = {
        first_name: userData.firstName,
        last_name: userData.lastName,
        email: userData.email,
        phone_number: userData.phoneNumber,
        birthday: new Date(userData.dateOfBirth),
        id_number: userData.idCard,
        gender: convertGender(userData.gender),
        password_hash: userData.password
    };

    await apiClient.post(UserRoutes.baseUrl, formattedData);
};

interface ValidatePasswordResponse {
    passwordMatch: boolean;
}

export const validatePassword = async (
    data: UserPasswordValidationType): Promise<ValidatePasswordResponse> => {
    const response = await apiClient.post<ValidatePasswordResponse>(
        UserRoutes.validatePassword, data);
    return response.data;
};