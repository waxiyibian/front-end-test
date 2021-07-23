import { ProjectExprItem } from "./profile.model";

export interface CredentialItem {
  name: string;
  desc?: string;
}
export interface ExternalInfo {
  projects?: ProjectExprItem[];
  credential?: CredentialItem[];
}
