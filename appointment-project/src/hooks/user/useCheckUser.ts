import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface CheckUserResponse {
    userExists: boolean;
}

export const useCheckUser = () => {
    const API_BASE_URL = import.meta.env.VITE_API_URL;
    return useMutation({
      mutationFn: async (email: string) => {
        console.log("En useCheckUser, enviando email:", email);
        const response = await axios.post<CheckUserResponse>(
          `${API_BASE_URL}/user/checkUser`,
          { email }
        );
        console.log("Respuesta de checkUser:", response.data);
        return response.data.userExists;
      }
    });
  };