import type { AxiosResponse } from "axios";
import type Posting from "@/types/posting";
import { client } from "@/apis/instance";

const getPostingList = async <Res = Posting[]>(): Promise<
  AxiosResponse<Res>
> => {
  return await client.get<Res>(`/forum/community`);
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
