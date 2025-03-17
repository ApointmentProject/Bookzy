import { useQuery, useMutation } from "@tanstack/react-query";
import { apiClient } from "../api/apiClient.ts";

export const useGetData = <T>(key: string, url: string) => {
    return useQuery<T>({
        queryKey: [key],
        queryFn: async () => {
            const response = await apiClient.get<T>(url);
            return response.data;
        },
    });
};

export const usePostData = <T>(url: string) => {
    return useMutation<T, Error, T>({
        mutationFn: async (data) => {
            const response = await apiClient.post<T>(url, data);
            return response.data;
        },
    });
};

export const usePutData = <T>(url: string) => {
    return useMutation<T, Error, T>({
        mutationFn: async (data) => {
            const response = await apiClient.put<T>(url, data);
            return response.data;
        },
    });
};

export const useDeleteData = <T>(url: string) => {
    return useMutation<T, Error, void>({
        mutationFn: async () => {
            const response = await apiClient.delete(url);
            return response.data;
        },
    });
};
