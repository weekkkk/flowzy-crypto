import { $auth } from "./point";

export class AuthService {
  static async logout() {
    const res = await $auth(`/logout`);
    return res;
  }
}
