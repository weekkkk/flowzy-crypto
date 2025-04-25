import type { ReferalGetLinkResDto, ReferalGetStatResDto } from "./interfaces";
import { $referral } from "./point";

export class ReferralService {
  static async getLink() {
    const res = $referral<ReferalGetLinkResDto>("/get-link");
    return res;
  }

  static async getStat() {
    const res = $referral<ReferalGetStatResDto>("/get-stat");
    return res;
  }
}
