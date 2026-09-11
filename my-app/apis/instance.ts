import type { AxiosInstance } from "axios";
import axios from "axios";
import { API_DOMAIN } from "@/constants/env";
const client: AxiosInstance = axios.create({
  baseURL: API_DOMAIN,
  timeout: 5000,
});
client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.data.detail) throw new Error(error.response.data.detail);
    else throw new Error("알 수 없는 오류가 발생했습니다.");
    return Promise.reject(error);
  },
);
export { client };
