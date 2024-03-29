import { QNAResponse } from "@/model/QNA.module";
import { ProfileResponse } from "@/model/response.model";
import Axios, { AxiosResponse } from "axios";
import { API, API_PATH } from "./api.model";

const axios = Axios.create({
  baseURL: API_PATH,
});
export class APIUtils {
  public static async getProfile(): Promise<AxiosResponse<ProfileResponse>> {
    return await axios.get(API.getProfile);
  }
  public static async getQNA(): Promise<AxiosResponse<QNAResponse>> {
    return await axios.get(API.getQNA);
  }
}
