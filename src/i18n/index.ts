import { Locale } from "@/model/local.model";
import VueI18n from "vue-i18n";
import Vue from "vue";
import { TextMessage } from "./model";
Vue.use(VueI18n);

const messages: Locale<TextMessage> = {
  zh: {
    from: "从",
    to: "至",
    now: "此刻",
    gender: {
      Unknown: "保密",
      Male: "男",
      Female: "女",
    },
    masterLevel: {
      KnowOf: "了解",
      Beginner: "初学",
      Elementary: "入门",
      ElementaryPlus: "初级",
      InterMediate: "掌握",
      InterMediatePlus: "熟悉",
      Advanced: "高级",
      Expert: "专家",
    },
    techCategory: {
      FrontEndFrameWork: "前端框架",
      MiniProgramFrameWork: "小程序",
      GraphicFrameWork: "图表",
      UIFrameWork: "UI框架",
      DataBase: "数据库",
      BackEndFrameWork: "后端框架",
      DevelopmentLanguage: "编程语言",
    },
  },
  en: {
    from: "from",
    to: "to",
    now: "now",
    gender: {
      Unknown: "unknown",
      Male: "male",
      Female: "female",
    },
    masterLevel: {
      KnowOf: "Know Of",
      Beginner: "Beginner",
      Elementary: "Elementary",
      ElementaryPlus: "Elementary+",
      InterMediate: "InterMediate",
      InterMediatePlus: "InterMediate+",
      Advanced: "Advanced",
      Expert: "Expert",
    },
    techCategory: {
      FrontEndFrameWork: "Front End",
      MiniProgramFrameWork: "Mini Program",
      GraphicFrameWork: "Graphic",
      UIFrameWork: "UI Framework",
      DataBase: "Database",
      BackEndFrameWork: "Back End",
      DevelopmentLanguage: "Language",
    },
  },
};
export const i18n = new VueI18n({
  locale: "en", // 语言标识
  messages: messages as any,
});
