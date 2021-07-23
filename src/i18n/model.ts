import { Gender, MasterLevelName, TechCategory } from "@/model/profile.model";

export interface TextMessage {
  text: {
    from: string;
    to: string;
    now: string;
    resume: string;
    QNA: string;
    basicProfile: string;
    technicalProfile: string;
    workingExperience: string;
    educationHistory: string;
    name: string;
    gender: string;
    avatar: string;
    telephone: string;
    email: string;
    address: string;
    category: string;
    labels: string;
    masterLevel: string;
    majorAt: string;
    degree: string;
    thisIsAFooter: string;
  };

  gender: Record<Gender, string>;
  masterLevel: Record<MasterLevelName, string>;
  techCategory: Record<TechCategory, string>;
}
