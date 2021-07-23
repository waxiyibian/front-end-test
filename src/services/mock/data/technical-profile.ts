import {
  MasterLevelName,
  TechCategory,
  TechProfileItem,
} from "@/model/profile.model";

const frontEnd: TechProfileItem[] = [
  {
    label: "Vue",
    category: TechCategory.FrontEndFrameWork,
    level: MasterLevelName.InterMediatePlus,
  },
  {
    label: "Angular",
    category: TechCategory.FrontEndFrameWork,
    level: MasterLevelName.InterMediate,
  },
  {
    label: "JQuery",
    category: TechCategory.FrontEndFrameWork,
    level: MasterLevelName.InterMediatePlus,
  },
];

const miniProgram: TechProfileItem[] = [
  {
    label: "uni-app",
    category: TechCategory.MiniProgramFrameWork,
    level: MasterLevelName.ElementaryPlus,
  },
  {
    label: "WeChart Mini Program",
    category: TechCategory.MiniProgramFrameWork,
    level: MasterLevelName.ElementaryPlus,
  },
  {
    label: "mui",
    category: TechCategory.MiniProgramFrameWork,
    level: MasterLevelName.Elementary,
  },
  {
    label: "cordova",
    category: TechCategory.MiniProgramFrameWork,
    level: MasterLevelName.Elementary,
  },
];

const graphic: TechProfileItem[] = [
  {
    label: "echarts",
    category: TechCategory.GraphicFrameWork,
    level: MasterLevelName.InterMediatePlus,
  },
  {
    label: "antv.g2",
    category: TechCategory.GraphicFrameWork,
    level: MasterLevelName.Elementary,
  },
  {
    label: "d3",
    category: TechCategory.GraphicFrameWork,
    level: MasterLevelName.Elementary,
  },
];

const ui: TechProfileItem[] = [
  {
    label: "ant design vue",
    category: TechCategory.UIFrameWork,
    level: MasterLevelName.InterMediate,
  },
  {
    label: "element ui",
    category: TechCategory.UIFrameWork,
    level: MasterLevelName.InterMediate,
  },
  {
    label: "bootstrap",
    category: TechCategory.UIFrameWork,
    level: MasterLevelName.InterMediate,
  },
  {
    label: "lay ui",
    category: TechCategory.UIFrameWork,
    level: MasterLevelName.ElementaryPlus,
  },
  {
    label: "nz-zorro",
    category: TechCategory.UIFrameWork,
    level: MasterLevelName.InterMediate,
  },
];

const database: TechProfileItem[] = [
  {
    label: "mysql",
    category: TechCategory.DataBase,
    level: MasterLevelName.InterMediate,
  },
  {
    label: "oracle",
    category: TechCategory.DataBase,
    level: MasterLevelName.Elementary,
  },
  {
    label: "SQL Server",
    category: TechCategory.DataBase,
    level: MasterLevelName.Elementary,
  },
  {
    label: "Mongo DB",
    category: TechCategory.DataBase,
    level: MasterLevelName.Beginner,
  },
];

const backEnd: TechProfileItem[] = [
  {
    label: "spring boot",
    category: TechCategory.BackEndFrameWork,
    level: MasterLevelName.InterMediate,
  },
  {
    label: "spring mvc",
    category: TechCategory.BackEndFrameWork,
    level: MasterLevelName.InterMediate,
  },
  {
    label: "mybatis",
    category: TechCategory.BackEndFrameWork,
    level: MasterLevelName.InterMediate,
  },
  {
    label: "mybatis-plus",
    category: TechCategory.BackEndFrameWork,
    level: MasterLevelName.InterMediate,
  },
  {
    label: "spring data JPA",
    category: TechCategory.BackEndFrameWork,
    level: MasterLevelName.InterMediate,
  },
];

const langs: TechProfileItem[] = [
  {
    label: "javascript",
    category: TechCategory.DevelopmentLanguage,
    level: MasterLevelName.InterMediatePlus,
  },
  {
    label: "typescript",
    category: TechCategory.DevelopmentLanguage,
    level: MasterLevelName.InterMediatePlus,
  },
  {
    label: "java",
    category: TechCategory.DevelopmentLanguage,
    level: MasterLevelName.InterMediate,
  },
  {
    label: "php",
    category: TechCategory.DevelopmentLanguage,
    level: MasterLevelName.ElementaryPlus,
  },
  {
    label: "node.js",
    category: TechCategory.DevelopmentLanguage,
    level: MasterLevelName.ElementaryPlus,
  },
];

const tech: TechProfileItem[] = [
  ...frontEnd,
  ...miniProgram,
  ...graphic,
  ...ui,
  ...database,
  ...backEnd,
  ...langs,
];

export default tech;
