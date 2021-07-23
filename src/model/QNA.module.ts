import { Locale } from "./local.model";

export interface QNAItem {
  question: string;
  answer: string;
}

export type QNAResponse = Locale<QNAItem[]>