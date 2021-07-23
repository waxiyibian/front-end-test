import Mock from "mockjs";
import { API, API_PATH } from "../api/api.model";

import zhProfile from "./zh-mock-data";
import enProfile from "./en-mock-data";
import { ProfileResponse } from "@/model/response.model";

Mock.mock(API_PATH + API.getProfile, "get", function (): ProfileResponse {
  return {
    zh: zhProfile,
    en: enProfile,
  };
});
