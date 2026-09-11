import type { AxiosResponse } from "axios";
import type Posting from "@/types/posting";
import { client } from "@/apis/instance";

const getPostingList = async <Res = Posting[]>(): Promise<
  AxiosResponse<Res>
> => {
  return await client.get<Res>(`/forum/community`); //axios response가 반환하는 파일 형식을 제공하도록 넣어줘야
};

const getPostingDetail = async <Res = Posting>(
  id: string,
): Promise<AxiosResponse<Res>> => {
  return await client.get<Res>(`/forum/community/${id}`);
};

const postPosting = async <Res = void, Req = FormData>(
  body: Req,
): Promise<AxiosResponse<Res>> => {
  return await client.post<Res, AxiosResponse<Res>, Req>(
    `/forum/community`,

    body,
  );
};

export { getPostingList, getPostingDetail, postPosting };
