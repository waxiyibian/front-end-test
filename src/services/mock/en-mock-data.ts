import { Gender, Profile } from "@/model/profile.model";
import { QNAItem } from "@/model/QNA.module";
import tech from "./data/technical-profile";
const avatar = require("@/assets/img/avatar.jpg");
export const enProfile: Profile = {
  basic: {
    name: "Weibin.Zheng/郑伟斌",
    gender: Gender.Male,
    avatar,
    phone: "17324009620",
    email: "1220966771@qq.com",
    address:
      "Guangzhou City in Guangdong Province of People's Republic of China",
  },
  technical: tech,
  workingExpr: [
    {
      startTime: "2020-06",
      companyName: "Brilliant Solution co.,ltd.",
      jobTitle: "Front End Engineer",
      jobDuties: `
            In charge of the development of the chart module and take part in the maintaining and iteration of other function modules during each developing lifecycle of Data Explorer, A self-service analysis tool for more efficient and more beautiful display of data analysis activities.
            Take part in the review of documentation, user interface and reaction design and technical proposal.
            Finish the customization versions of Data Explorer for subsidiary corporations in FuJian Province, YuNan Province and Zhejiang Province of SGCC.
            Set up and develop the front-end part of several projects of big data analysis for three subsidiary corporations of SGCC.
            `,
    },
    {
      startTime: "2019-03",
      endTime: "2019-09",
      jobTitle: "Front End Engineer",
      companyName: "iiMedia Research co.,ltd.",
      jobDuties: `
            In charge of the front end developing of iiMedia Data Center project.
            Translate the design of user interface and reaction into front-end pages.
            Keep Communication of the agile development team members includes UI designer, back-end programmers, product manager, test engineer and CTO, offer proper suggestions.
            optimise the existing code, improve the performance of existing pages by clear up the unnecessary network requests, DOM operations, event emitting and memory uses.
            `,
    },
  ],
  education: [
    {
      startTime: "2016-09",
      endTime: "2020-06",
      schoolName: "Guangzhou Maritime University",
      major: "Computer Science And Technology",
      degree: "bachelor",
    },
  ],
};

export const enQNA: QNAItem[] = [
  {
    question: "Introduce yourSelf",
    answer: "Hello, I am Zheng Weibin, A front end engineer with one year's working experience, aim to be a outstanding person at computer technology domain, determine to achieve my goal step by step.",
      //"你好，我是有一年工作经验的前端开发工程师，立志成为一个出色的计算机技术领域的人才，平凡但不普通，志向远大、有清晰规划但又脚踏实地的青年人。",
  },
  {
    question: "Advantage / Disadvantage",
    answer: "I am good at study new things in my interesting aspect and mean while responsible and capable, but still have a long way to go due to my minor age.",
      //"我的不足是资历尚浅，技术的深度和广度还有很大提升空间。我的优势是学习能力比较强，工作能力也强，有责任心和求知欲。",
  },
  {
    question: "Career Planning",
    answer:"I am planing to spend a few years on front end technology study with related basic knowledge prepared and learn things at back end or big data or network security so that I can turn from a front end engineer to a full stack or architect or expert on computer domain.",
      //"我计划在接下来的几年中在打好基础的前提上深耕前端，同时也学习一些后端开发、大数据和网络安全方面的技术和知识。未来十年的职业路线依次为前端开发、全栈开发、架构师、领域专家。",
  },
  {
    question: "recent goal",
    answer: "Learn more and earn more, for happier and more reassured and also for the preparation of future."
      //"学更多的知识，既是为了让自己开心也为未来做准备。多挣一点钱，解决物质层面的后顾之忧。",
  },
];
