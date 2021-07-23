import { Gender, MasterLevelName, TechCategory } from "@/model/profile.model";

export interface TextMessage {
  from: string;
  to: string;
  now: string;
  gender: Record<Gender, string>;
  masterLevel: Record<MasterLevelName, string>;
  techCategory: Record<TechCategory, string>;
}
