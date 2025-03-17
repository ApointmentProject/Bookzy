import { useMutation } from "@tanstack/react-query";
import { validatePassword} from "../../api/user/userApi.ts";
import { UserPasswordValidationType} from "../../types/User.ts";

export const useValidatePassword = () => {
    return useMutation<{ passwordMatch: boolean }, Error, UserPasswordValidationType>({
        mutationFn: validatePassword,
        onSuccess: (data) => {
            console.log("Validacion exitosa:", data.passwordMatch);
        },
        onError: (error) => {
            console.error("Error al validar contraseña:", error);
        },
    });
};