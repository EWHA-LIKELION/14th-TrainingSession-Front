import axios from "axios";

// 1. axios 인스턴스 생성
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// 2. 응답 인터셉터
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { data } = error.response;

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

export default api;
