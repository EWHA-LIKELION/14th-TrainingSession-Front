// Axios 인스턴스 생성
import type { AxiosInstance } from "axios";
import axios from "axios";
import { API_DOMAIN } from "@/constants/env";

const client: AxiosInstance = axios.create({
  baseURL: API_DOMAIN,
  timeout: 5000,
});

// 응답 공통 에러 처리 인터셉터
// error.response가 없는 경우를 대비해 옵셔널 체이닝 필요
client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.data?.detail)
      throw new Error(error.response.data.detail);
    else throw new Error("알 수 없는 오류가 발생했습니다.");
    return Promise.reject(error);
  },
);
export { client };
