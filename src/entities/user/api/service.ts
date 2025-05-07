import type { UserGetStatReqDto, UserGetStatResDto } from "./interfaces";
import { $user } from "./point";

export class UserService {
  static async getStat(req: UserGetStatReqDto) {
    const res = await $user<UserGetStatResDto>(`/get-stat?userId=${req.userId}`, {
      method: "GET",
    });
    return res;
  }
}
