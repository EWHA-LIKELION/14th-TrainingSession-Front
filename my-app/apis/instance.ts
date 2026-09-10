import type { AxiosInstance } from "axios";
import axios from "axios";
import { API_DOMAIN } from "@/constants/env";

const client: AxiosInstance = axios.create({
    baseURL: API_DOMAIN,
    timeout: 5000,
});
client.interceptors.request.use(
    (response) => response,
    (error) => {
        const customMessage = error.response?.data?.detail;
        if (error.response?.data?.detail) return Promise.reject(new Error(customMessage));
        
        return Promise.reject(error);
    },
);

export { client };