import { apiClient } from "../apiClient";
import UserRoutes from "../../constants/routes/user.routes.ts";
import { UserRegistrationFormData } from "../../validations/registration/validateUserRegistration.ts";
import { UserPasswordValidationType } from "../../types/User.ts";
import axios from "axios";

const convertGender = (gender: string): "Male" | "Female" | "Other" | "Prefer not to say" => {
  switch (gender) {
    case "masculino": return "Male";
    case "femenino": return "Female";
    case "otro": return "Other";
    case "prefiero-no-decir": return "Prefer not to say";
    default: return "Other";
  }
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

export const createUser = async (userData: UserRegistrationFormData): Promise<void> => {
      const formattedData = {
    first_name: userData.firstName,
    last_name: userData.lastName,
    email: userData.email,
    phone_number: userData.phone,
    birthday: new Date(userData.dob),
    id_number: userData.idNumber,
    gender: convertGender(userData.gender), // ahora mapeado
    password_hash: userData.password
  };

    await apiClient.post(UserRoutes.baseUrl, formattedData);
};

interface CheckUserResponse {
    userExists: boolean;
}
export const checkUser = async (
    email: string): Promise<boolean> => {
    console.log("En useCheckUser, enviando email:", email);
    const response = await axios.post<CheckUserResponse>(
        UserRoutes.checkUser, email);
    console.log("Respuesta de checkUser:", response.data);
    return response.data.userExists;
}