import { MasterLevelName } from "@/model/profile.model";

export interface TableDataRow {
  id?: string | number;
  category: string;
  labels: string[];
  level: number;
  levelName: MasterLevelName;
  rowSpan?: number;
}
