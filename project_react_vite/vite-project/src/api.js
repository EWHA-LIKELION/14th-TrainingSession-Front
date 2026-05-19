import axios from "axios";
import useAuthStore from "@/store/useAuthStore";

// axios 인스턴스 생성

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,

  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,

  (error) => {
    const { logout } = useAuthStore.getState();

    if (error.response) {
      const { status, data } = error.response;

      // 인증 만료

      if (status === 401) {
        logout();
      }

      // 서버가 JSON으로 준 에러

      if (data && typeof data === "object") {
        return Promise.reject(data);
      }
      // 기타 서버 에러

      return Promise.reject({
        message: "서버 오류가 발생했습니다.",
      });
    }

    // 네트워크 에러

    return Promise.reject({
      message: "네트워크 오류가 발생했습니다.",
    });
  },
);
