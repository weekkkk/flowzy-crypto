import type { GetGeneralStatResDto, GetRecentStatResDto } from "./interfaces";

import { $stat } from "./point";

export class StatService {
  static async getGeneralStat() {
    const res = await $stat<GetGeneralStatResDto>("/get-general-stat");
    return res;
  }

  static async getRecentStat() {
    const res = await $stat<GetRecentStatResDto>("/get-recent-stat");
    return res;
  }
}

export * from "./interfaces";
