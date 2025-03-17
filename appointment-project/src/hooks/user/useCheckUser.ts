import { useMutation } from "@tanstack/react-query";
import { checkUser } from "../../api/user/userApi.ts";

export const useCheckUser = () => {
    return useMutation<boolean, Error, string>({
        mutationFn: checkUser,
        onSuccess: (data) => {
            console.log("Usuario encontrado:", data);
        },
        onError: (error) => {
            console.error("Error al verificar usuario:", error);
        },
    });
};