import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../api/user/userApi.ts";
import { UserRegistrationFormData } from "../../validations/validateUserRegistration.ts";

export const useCreateUser = () => {
    return useMutation({
        mutationFn: async (userData: UserRegistrationFormData) => {
            await createUser(userData);
        },
        onSuccess: () => {
            console.log("Usuario creado con éxito");
        },
        onError: (error) => {
            console.error("Error al crear usuario:", error);
        },
    });
};