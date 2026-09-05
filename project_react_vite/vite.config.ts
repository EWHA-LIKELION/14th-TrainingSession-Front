import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite"; // 템플릿에 없는 추가 (우리 프로젝트가 tailwind 사용)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
