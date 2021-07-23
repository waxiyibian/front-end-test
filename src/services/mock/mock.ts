import Mock from "mockjs";
import { API, API_PATH } from "../api/api.model";

import { zhProfile, zhQNA } from "./zh-mock-data";
import { enProfile, enQNA } from "./en-mock-data";
import { ProfileResponse } from "@/model/response.model";
import { QNAResponse } from "@/model/QNA.module";

Mock.mock(API_PATH + API.getProfile, "get", function (): ProfileResponse {
  return {
    zh: zhProfile,
    en: enProfile,
  };
});

Mock.mock(API_PATH + API.getQNA, "get", function(): QNAResponse {
  return {
    zh: zhQNA,
    en: enQNA,
  }
})
