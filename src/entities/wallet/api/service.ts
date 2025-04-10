import type { WalletGetInfoReqDto, WalletGetInfoResDto } from "./interfaces";
import { $wallet } from "./point";

export class WalletService {
  static async getInfo(req: WalletGetInfoReqDto) {
    const res = await $wallet<WalletGetInfoResDto>(`/get-info?userId=${req.userId}`, {
      method: "GET",
    });
    return res;
  }
}
