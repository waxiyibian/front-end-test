export enum Gender {
  Unknown = "Unknown",
  Male = "Male",
  Female = "Female",
}
export interface BasicProfile {
  name: string;
  gender: Gender;
  /**
   * url
   */
  avatar: string;
  phone: string;
  email: string;
  address: string;
}

export const MasterLevel: Record<MasterLevelName, number> = {
  KnowOf: 0.5,
  Beginner: 1,
  Elementary: 2,
  ElementaryPlus: 2.5,
  InterMediate: 3,
  InterMediatePlus: 3.5,
  Advanced: 4,
  Expert: 5,
};

export enum MasterLevelName {
  KnowOf = "KnowOf",
  Beginner = "Beginner",
  Elementary = "Elementary",
  ElementaryPlus = "ElementaryPlus",
  InterMediate = "InterMediate",
  InterMediatePlus = "InterMediatePlus",
  Advanced = "Advanced",
  Expert = "Expert",
}

export enum TechCategory {
  FrontEndFrameWork = "FrontEndFrameWork",
  MiniProgramFrameWork = "MiniProgramFrameWork",
  GraphicFrameWork = "GraphicFrameWork",
  UIFrameWork = "UIFrameWork",
  DataBase = "DataBase",
  BackEndFrameWork = "BackEndFrameWork",
  DevelopmentLanguage = "DevelopmentLanguage",
}

export interface TechProfileItem {
  /**
   * name
   */
  label: string;
  /**
   * classification
   */
  category: TechCategory;
  level: MasterLevelName;
  /**
   * reserve for future
   */
  info?: string;
}

export interface ProjectExprItem {
  companyName: string;
  /**
   * position
   */
  jobTitle?: string;
  /**
   * sections split by line break '\n'.
   */
  jobDuties: string;
}

export interface WorkingExprItem extends ProjectExprItem {
  /**
   * 2020-06-08 09:00:00
   */
  startTime: string;
  endTime?: string;
}

export interface EducationHistoryItem {
  /**
   * 2020-06-08 09:00:00
   */
  startTime: string;
  endTime?: string;
  schoolName: string;
  major: string;
  degree: string;
}

export interface Profile {
  basic: BasicProfile;
  technical: TechProfileItem[];
  workingExpr: WorkingExprItem[];
  education: EducationHistoryItem[];
}
