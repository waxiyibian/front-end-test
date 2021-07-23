import { Gender, Profile } from "@/model/profile.model";
import tech from "./data/technical-profile";
const avatar = require("@/assets/img/avatar.jpg");

const profile: Profile = {
  basic: {
    name: "郑伟斌/Weibin.Zheng",
    gender: Gender.Male,
    avatar,
    phone: "17324009620",
    email: "1220966771@qq.com",
    address: "广东省广州市黄埔区",
  },
  technical: tech,
  workingExpr: [
    {
      startTime: "2020-06",
      companyName: "广州佰聆数据有限公司",
      jobTitle: "前端开发工程师",
      jobDuties: `
            负责聆析数据分析工具多维图表模块的开发迭代和探索分析模块、数据配置模块的维护升级。
            参与聆析数据分析工具的需求评审、设计评审、开发方案设计。
            负责聆析数据分析工具与国网福建、云南电网、杭州电网的合作定制版本的功能开发和维护。
            主导南方电网数研院、陕西电网等多个大数据看板项目的前端开发工作。
            `,
    },
    {
      startTime: "2019-03",
      endTime: "2019-09",
      companyName: "iiMedia Research co.,ltd.",
      jobTitle: "前端开发工程师",
      jobDuties: `
            负责艾媒数据中心项目的前端开发工作。
            高度还原UI设计稿，实现用户交互细节、多层级数据展示、图表操作等功能。
            在敏捷开发团队中和UI、后端开发、产品经理、测试、技术总监保持良好沟通，为UI设计、用户交互和后台接口设计提供适当的建议。
            优化现有代码，通过清理不必要的网络请求、页面元素操作、事件触发和内存占用来提高页面性能。
            `,
    },
  ],
  education: [
    {
      startTime: "2016-09",
      endTime: "2020-06",
      schoolName: "广州航海学院",
      major: "计算机科学与技术",
      degree: "学士学位",
    },
  ],
};
export default profile;
