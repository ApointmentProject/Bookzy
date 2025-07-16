import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../api/user/userApi.ts";
import { UserRegistrationFormData } from "../../validations/registration/validateUserRegistration.ts";
import { useToast } from "../../context/ToastContext";

export const useCreateUser = () => {
  const { addToast } = useToast();

  return useMutation({
    mutationFn: async (userData: UserRegistrationFormData) => {
      await createUser(userData);
    },
    onSuccess: () => {
      addToast({
        type: "success",
        title: "¡Usuario creado!",
        message: "Tu cuenta fue registrada correctamente.",
      });
    },
    onError: (error: any) => {
      const backendMessage =
        error.response?.data?.error || "Error al crear el usuario";

      addToast({
        type: "error",
        title: "Error al registrar",
        message: backendMessage,
      });

      console.error("Error al crear usuario:", error);
    },
  });
};