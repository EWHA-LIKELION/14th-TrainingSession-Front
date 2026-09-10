// 게시글 관련 API 함수 모음
import type Posting from "@/types/posting";
import { client } from "@/apis/instance";
import type { AxiosResponse } from "axios";

// 목록 조회 API
const getPostingList = async <Res = Posting[]>(): Promise<
  AxiosResponse<Res>
> => {
  return await client.get<Res>(`/forum/community`);
};

// 상세 조회 API (Dynamic Routes의 id로 요청)
const getPostingDetail = async <Res = Posting>(
  id: string,
): Promise<AxiosResponse<Res>> => {
  return await client.get<Res>(`/forum/community/${id}`);
};

// 작성 API (FormData 전송)
const postPosting = async <Req = FormData, Res = void>(
  body: Req,
): Promise<AxiosResponse<Res>> => {
  return await client.post<Res>(`/forum/community`, body);
};

export { getPostingList, getPostingDetail, postPosting };
