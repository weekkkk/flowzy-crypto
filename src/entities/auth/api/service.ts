import { $auth } from "./point";

export class AuthService {
  static async logout() {
    await $auth(`/logout`);
  }
}
