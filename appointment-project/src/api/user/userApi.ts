import { apiClient } from "../apiClient";
import UserRoutes from "../../constants/routes/user.routes.ts";
import { UserRegistrationFormData } from "../../validations/validateUserRegistration.ts";
import { UserPasswordValidationType } from "../../types/User.ts";
import axios from "axios";

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
        phone_number: userData.phoneNumber,
        birthday: new Date(userData.dateOfBirth),
        id_number: userData.idCard,
        gender: userData.gender as "Male" | "Female" | "Other" | "Prefer not to say",
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