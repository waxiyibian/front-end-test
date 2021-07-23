import { Gender, Profile } from "@/model/profile.model";
import tech from "./data/technical-profile";
const avatar = require("@/assets/img/avatar.jpg");
const profile: Profile = {
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
export default profile;
