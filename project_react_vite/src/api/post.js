import api from "./api";

/**
 * 게시글 상세 조회
 */
export const getPost = async (id) => {
  const response = await api.get(`/blog/${id}`);
  return response.data;
};
