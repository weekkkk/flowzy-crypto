import type { StatGetGeneralResDto, StatGetRecentResDto } from "./interfaces";

import { $stat } from "./point";

export class StatService {
  static async getGeneral() {
    const res = await $stat<StatGetGeneralResDto>("/get-general-stat");
    return res;
  }

  static async getRecent() {
    const res = await $stat<StatGetRecentResDto>("/get-recent-stat");
    return res;
  }
}
